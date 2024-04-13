/*
  Warnings:

  - You are about to drop the column `numerocartebancaire` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `datedebut` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `datefin` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `statutPaiement` on the `Location` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[numero_carte_bancaire]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `numero_carte_bancaire` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_debut` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_fin` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statut_paiement` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Client_numerocartebancaire_key";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "numerocartebancaire",
ADD COLUMN     "numero_carte_bancaire" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "datedebut",
DROP COLUMN "datefin",
DROP COLUMN "statutPaiement",
ADD COLUMN     "date_debut" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "date_fin" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "statut_paiement" VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE "type_engin" (
    "id_type" TEXT NOT NULL,
    "id_categorie" TEXT NOT NULL,
    "nom_engin" TEXT NOT NULL,
    "prix_journalier" INTEGER NOT NULL,

    CONSTRAINT "type_engin_pkey" PRIMARY KEY ("id_type")
);

-- CreateTable
CREATE TABLE "Categorie" (
    "id_categorie" TEXT NOT NULL,
    "nom_categorie" TEXT NOT NULL,
    "detail" TEXT NOT NULL,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id_categorie")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_numero_carte_bancaire_key" ON "Client"("numero_carte_bancaire");

-- AddForeignKey
ALTER TABLE "type_engin" ADD CONSTRAINT "type_engin_id_categorie_fkey" FOREIGN KEY ("id_categorie") REFERENCES "Categorie"("id_categorie") ON DELETE RESTRICT ON UPDATE CASCADE;
