-- AlterTable
ALTER TABLE "Update" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- CreateTable
CREATE TABLE "UpdatePoint" (
    "id" TEXT NOT NULL,
    "createdAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "updateId" TEXT NOT NULL,

    CONSTRAINT "UpdatePoint_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UpdatePoint_id_updateId_idx" ON "UpdatePoint"("id", "updateId");

-- CreateIndex
CREATE INDEX "Product_id_belongsToId_idx" ON "Product"("id", "belongsToId");

-- CreateIndex
CREATE INDEX "Update_id_productId_idx" ON "Update"("id", "productId");

-- AddForeignKey
ALTER TABLE "UpdatePoint" ADD CONSTRAINT "UpdatePoint_updateId_fkey" FOREIGN KEY ("updateId") REFERENCES "Update"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
