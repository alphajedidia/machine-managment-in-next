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
CREATE TABLE "Type_engin" (
    "id_type" TEXT NOT NULL,
    "id_categorie" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "nom_engin" TEXT NOT NULL,
    "prix_journalier" INTEGER NOT NULL,

    CONSTRAINT "Type_engin_pkey" PRIMARY KEY ("id_type")
);

-- CreateTable
CREATE TABLE "Categorie" (
    "id_categorie" TEXT NOT NULL,
    "nom_categorie" VARCHAR(255) NOT NULL,
    "detail" TEXT NOT NULL,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id_categorie")
);

-- CreateTable
CREATE TABLE "Avoir" (
    "id" SERIAL NOT NULL,
    "matricule" TEXT NOT NULL,
    "id_location" TEXT NOT NULL,

    CONSTRAINT "Avoir_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id_location" TEXT NOT NULL,
    "id_client" TEXT NOT NULL,
    "date_debut" TIMESTAMP(3) NOT NULL,
    "date_fin" TIMESTAMP(3) NOT NULL,
    "statut_paiement" VARCHAR(255) NOT NULL,
    "destination" VARCHAR(255) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id_location")
);

-- CreateTable
CREATE TABLE "Client" (
    "id_client" TEXT NOT NULL,
    "nom_client" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "numero_carte_bancaire" TEXT NOT NULL,
    "code_securite" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id_client")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_telephone_key" ON "Client"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Client_numero_carte_bancaire_key" ON "Client"("numero_carte_bancaire");

-- CreateIndex
CREATE UNIQUE INDEX "Client_code_securite_key" ON "Client"("code_securite");

-- AddForeignKey
ALTER TABLE "Engin" ADD CONSTRAINT "Engin_id_type_fkey" FOREIGN KEY ("id_type") REFERENCES "Type_engin"("id_type") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Engin" ADD CONSTRAINT "Engin_id_entrepot_fkey" FOREIGN KEY ("id_entrepot") REFERENCES "Entrepot"("id_entrepot") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Type_engin" ADD CONSTRAINT "Type_engin_id_categorie_fkey" FOREIGN KEY ("id_categorie") REFERENCES "Categorie"("id_categorie") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avoir" ADD CONSTRAINT "Avoir_id_location_fkey" FOREIGN KEY ("id_location") REFERENCES "Location"("id_location") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avoir" ADD CONSTRAINT "Avoir_matricule_fkey" FOREIGN KEY ("matricule") REFERENCES "Engin"("matricule") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("id_client") ON DELETE RESTRICT ON UPDATE CASCADE;
