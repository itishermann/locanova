-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isOnboarded" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "UserLegalInformations" ALTER COLUMN "birthDate" DROP NOT NULL,
ALTER COLUMN "birthPlace" DROP NOT NULL;
