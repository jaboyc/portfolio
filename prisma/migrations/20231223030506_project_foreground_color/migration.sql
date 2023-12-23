/*
  Warnings:

  - Added the required column `foregroundColor` to the `LinkTemplate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LinkTemplate" ADD COLUMN     "foregroundColor" TEXT NOT NULL;
