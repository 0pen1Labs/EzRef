-- DropForeignKey
ALTER TABLE "Form" DROP CONSTRAINT "Form_refId_fkey";

-- AddForeignKey
ALTER TABLE "RefLinks" ADD CONSTRAINT "RefLinks_id_fkey" FOREIGN KEY ("id") REFERENCES "Form"("refId") ON DELETE RESTRICT ON UPDATE CASCADE;
