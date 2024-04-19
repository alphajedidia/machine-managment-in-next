/*
  Warnings:

  - You are about to drop the column `Total` on the `Location` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "Total",
ADD COLUMN     "total" INTEGER NOT NULL DEFAULT 0;
