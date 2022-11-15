/*
  Warnings:

  - A unique constraint covering the columns `[belongsToId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_belongsToId_key" ON "Product"("belongsToId");
