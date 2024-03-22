import { Injectable } from "@nestjs/common";
import PrismaService from "./prisma.service";
import { PrismaClient, Novel } from "@prisma/client";


@Injectable()
export default class NovelRepository {
    constructor(private prisma: PrismaService) {}

    async getNovelList(): Promise<Novel[]> {
        return this.prisma.novel.findMany();
    }
}