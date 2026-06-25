/*
  Warnings:

  - You are about to drop the column `image` on the `Artwork` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Artwork` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Artwork` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Artwork` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `category` on the `Artwork` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ArtworkCategory" AS ENUM ('SPIRITUAL', 'NATURE', 'PORTRAIT', 'ABSTRACT', 'LANDSCAPE', 'SKETCH', 'HERITAGE', 'MODERN', 'OTHER');

-- AlterTable
ALTER TABLE "Artwork" DROP COLUMN "image",
ADD COLUMN     "frameAvailable" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "height" DOUBLE PRECISION,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "isApproved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "medium" TEXT,
ADD COLUMN     "price" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "width" DOUBLE PRECISION,
DROP COLUMN "category",
ADD COLUMN     "category" "ArtworkCategory" NOT NULL;
