-- DropForeignKey
ALTER TABLE "RefLinks" DROP CONSTRAINT "RefLinks_id_fkey";

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_refId_fkey" FOREIGN KEY ("refId") REFERENCES "RefLinks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
