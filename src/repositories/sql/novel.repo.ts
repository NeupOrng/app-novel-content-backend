import { Injectable } from "@nestjs/common";
import PrismaService from "../prisma.service";
import { Prisma, Novel, Chapter } from "@prisma/client";


@Injectable()
export default class NovelRepository {
    constructor(private prisma: PrismaService) {}

    async getNovelList(): Promise<Novel[]> {
        return this.prisma.novel.findMany();
    }

    async getNovelById(id: number): Promise<Novel> {
        return this.prisma.novel.findFirst({ where: {
            id
        }})
    }

    async getChapterById(id: number): Promise<Chapter> {
        return this.prisma.chapter.findFirst({ where: {
            id
        }})
    }

    async insertNewNovel(data: Prisma.NovelCreateInput): Promise<Novel> {
        const result = this.prisma.novel.create({data});
        return result;
    }

    async getChapterList(novelId: number): Promise<Chapter[]> {
        return this.prisma.chapter.findMany({
            where: {
                novelId
            }
        });
    }

    async insertNewChapter(id: string, title: string, novelId: number): Promise<Chapter> {

        const result = this.prisma.chapter.create({
            data: {
                chapterId: id, 
                title: title, 
                content:id,
                novel: {
                    connect: { id: novelId }
                }
            }
        });
        return result;
    }
}