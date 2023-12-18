/*
  Warnings:

  - Made the column `renderableId` on table `Resume` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Resume" DROP CONSTRAINT "Resume_renderableId_fkey";

-- AlterTable
ALTER TABLE "Resume" ALTER COLUMN "renderableId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Resume" ADD CONSTRAINT "Resume_renderableId_fkey" FOREIGN KEY ("renderableId") REFERENCES "Renderable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
