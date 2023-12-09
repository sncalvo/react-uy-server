/*
  Warnings:

  - You are about to drop the `_EventToPresenter` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventToPresenter" DROP CONSTRAINT "_EventToPresenter_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToPresenter" DROP CONSTRAINT "_EventToPresenter_B_fkey";

-- DropTable
DROP TABLE "_EventToPresenter";

-- CreateTable
CREATE TABLE "PresenterOnEvents" (
    "id" BIGSERIAL NOT NULL,
    "eventId" BIGINT NOT NULL,
    "presenterId" BIGINT NOT NULL,

    CONSTRAINT "PresenterOnEvents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PresenterOnEvents" ADD CONSTRAINT "PresenterOnEvents_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PresenterOnEvents" ADD CONSTRAINT "PresenterOnEvents_presenterId_fkey" FOREIGN KEY ("presenterId") REFERENCES "Presenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
