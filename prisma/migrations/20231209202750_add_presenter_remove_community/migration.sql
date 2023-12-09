/*
  Warnings:

  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `communityId` on the `Event` table. All the data in the column will be lost.
  - The `id` column on the `Event` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Community` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_communityId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP CONSTRAINT "Event_pkey",
DROP COLUMN "communityId",
DROP COLUMN "id",
ADD COLUMN     "id" BIGSERIAL NOT NULL,
ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Community";

-- CreateTable
CREATE TABLE "Presenter" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Presenter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventToPresenter" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EventToPresenter_AB_unique" ON "_EventToPresenter"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToPresenter_B_index" ON "_EventToPresenter"("B");

-- AddForeignKey
ALTER TABLE "_EventToPresenter" ADD CONSTRAINT "_EventToPresenter_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToPresenter" ADD CONSTRAINT "_EventToPresenter_B_fkey" FOREIGN KEY ("B") REFERENCES "Presenter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
