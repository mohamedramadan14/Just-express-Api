/*
  Warnings:

  - A unique constraint covering the columns `[belongsToId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productId]` on the table `Update` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[updateId]` on the table `UpdatePoint` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_belongsToId_key" ON "Product"("belongsToId");

-- CreateIndex
CREATE UNIQUE INDEX "Update_productId_key" ON "Update"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "UpdatePoint_updateId_key" ON "UpdatePoint"("updateId");
