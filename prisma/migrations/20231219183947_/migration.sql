/*
  Warnings:

  - The primary key for the `BlogPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `BlogPost` table. All the data in the column will be lost.
  - Added the required column `slug` to the `BlogPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BlogPost" DROP CONSTRAINT "BlogPost_pkey",
DROP COLUMN "id",
ADD COLUMN     "slug" TEXT NOT NULL,
ADD CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("slug");
