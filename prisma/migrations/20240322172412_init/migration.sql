-- CreateTable
CREATE TABLE "novel" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "novel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chapter" (
    "id" SERIAL NOT NULL,
    "novelId" INTEGER NOT NULL,
    "chapterNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chapter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "novel_title_key" ON "novel"("title");

-- CreateIndex
CREATE UNIQUE INDEX "chapter_novelId_chapterNumber_key" ON "chapter"("novelId", "chapterNumber");

-- AddForeignKey
ALTER TABLE "chapter" ADD CONSTRAINT "chapter_novelId_fkey" FOREIGN KEY ("novelId") REFERENCES "novel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
