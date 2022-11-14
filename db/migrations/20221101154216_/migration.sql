/*
  Warnings:

  - You are about to drop the column `picture` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `profiles` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "users_username_key";

-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "picture" TEXT,
ADD COLUMN     "username" TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "picture",
DROP COLUMN "username";

-- CreateIndex
CREATE UNIQUE INDEX "profiles_username_key" ON "profiles"("username");
