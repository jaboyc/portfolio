-- CreateTable
CREATE TABLE "LinkTemplate" (
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "renderableId" INTEGER NOT NULL,

    CONSTRAINT "LinkTemplate_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "linkTemplateName" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LinkToProject" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LinkToProject_AB_unique" ON "_LinkToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_LinkToProject_B_index" ON "_LinkToProject"("B");

-- AddForeignKey
ALTER TABLE "LinkTemplate" ADD CONSTRAINT "LinkTemplate_renderableId_fkey" FOREIGN KEY ("renderableId") REFERENCES "Renderable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_linkTemplateName_fkey" FOREIGN KEY ("linkTemplateName") REFERENCES "LinkTemplate"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkToProject" ADD CONSTRAINT "_LinkToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Link"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkToProject" ADD CONSTRAINT "_LinkToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("slug") ON DELETE CASCADE ON UPDATE CASCADE;
