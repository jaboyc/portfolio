/*
  Warnings:

  - You are about to drop the column `color` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `foregroundColor` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "color",
DROP COLUMN "foregroundColor";
