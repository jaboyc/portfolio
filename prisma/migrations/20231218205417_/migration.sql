/*
  Warnings:

  - You are about to drop the column `endtime` on the `WorkHistory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WorkHistory" DROP COLUMN "endtime",
ADD COLUMN     "endTime" TIMESTAMP(3);
