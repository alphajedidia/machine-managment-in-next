/*
  Warnings:

  - Changed the type of `etat` on the `Engin` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `description` to the `Type_engin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Engin" DROP COLUMN "etat",
ADD COLUMN     "etat" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Type_engin" ADD COLUMN     "description" TEXT NOT NULL;
