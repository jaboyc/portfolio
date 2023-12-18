/*
  Warnings:

  - You are about to drop the column `cateogyr` on the `Skill` table. All the data in the column will be lost.
  - Added the required column `category` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "cateogyr",
ADD COLUMN     "category" TEXT NOT NULL;
