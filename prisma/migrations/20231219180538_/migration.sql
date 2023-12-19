/*
  Warnings:

  - You are about to drop the column `description` on the `BlogPost` table. All the data in the column will be lost.
  - Added the required column `body` to the `BlogPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BlogPost" DROP COLUMN "description",
ADD COLUMN     "body" TEXT NOT NULL;
