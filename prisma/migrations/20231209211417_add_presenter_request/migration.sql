-- CreateTable
CREATE TABLE "PresenterRequest" (
    "id" BIGSERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "presentationDescription" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,

    CONSTRAINT "PresenterRequest_pkey" PRIMARY KEY ("id")
);
