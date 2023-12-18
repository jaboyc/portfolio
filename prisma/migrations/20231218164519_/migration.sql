-- AlterTable
ALTER TABLE "Resume" ADD COLUMN     "renderableId" INTEGER;

-- AddForeignKey
ALTER TABLE "Resume" ADD CONSTRAINT "Resume_renderableId_fkey" FOREIGN KEY ("renderableId") REFERENCES "Renderable"("id") ON DELETE SET NULL ON UPDATE CASCADE;
