-- CreateTable
CREATE TABLE "Entrepot" (
    "id_entrepot" TEXT NOT NULL,
    "nom_entrepot" VARCHAR(255) NOT NULL,
    "localisation" VARCHAR(255) NOT NULL,
    "capacite" INTEGER NOT NULL,

    CONSTRAINT "Entrepot_pkey" PRIMARY KEY ("id_entrepot")
);

-- CreateTable
CREATE TABLE "Engin" (
    "matricule" TEXT NOT NULL,
    "id_type" TEXT NOT NULL,
    "id_entrepot" TEXT NOT NULL,
    "etat" VARCHAR(255) NOT NULL,

    CONSTRAINT "Engin_pkey" PRIMARY KEY ("matricule")
);

-- CreateTable
CREATE TABLE "Avoir" (
    "id" INTEGER NOT NULL,
    "matricule" TEXT NOT NULL,
    "id_location" TEXT NOT NULL,

    CONSTRAINT "Avoir_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id_location" TEXT NOT NULL,
    "id_clients" TEXT NOT NULL,
    "datedebut" TIMESTAMP(3) NOT NULL,
    "datefin" TIMESTAMP(3) NOT NULL,
    "statutPaiement" VARCHAR(255) NOT NULL,
    "destination" VARCHAR(255) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id_location")
);

-- CreateTable
CREATE TABLE "Client" (
    "id_client" TEXT NOT NULL,
    "nomclient" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "numerocartebancaire" TEXT NOT NULL,
    "codesecurite" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id_client")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_telephone_key" ON "Client"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Client_numerocartebancaire_key" ON "Client"("numerocartebancaire");

-- CreateIndex
CREATE UNIQUE INDEX "Client_codesecurite_key" ON "Client"("codesecurite");

-- AddForeignKey
ALTER TABLE "Engin" ADD CONSTRAINT "Engin_id_entrepot_fkey" FOREIGN KEY ("id_entrepot") REFERENCES "Entrepot"("id_entrepot") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avoir" ADD CONSTRAINT "Avoir_id_location_fkey" FOREIGN KEY ("id_location") REFERENCES "Location"("id_location") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avoir" ADD CONSTRAINT "Avoir_matricule_fkey" FOREIGN KEY ("matricule") REFERENCES "Engin"("matricule") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_id_clients_fkey" FOREIGN KEY ("id_clients") REFERENCES "Client"("id_client") ON DELETE RESTRICT ON UPDATE CASCADE;
