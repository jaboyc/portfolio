-- CreateTable
CREATE TABLE "WorkHistory" (
    "id" SERIAL NOT NULL,
    "renderableId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endtime" TIMESTAMP(3),
    "lineItems" TEXT[],

    CONSTRAINT "WorkHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SkillToWorkHistory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SkillToWorkHistory_AB_unique" ON "_SkillToWorkHistory"("A", "B");

-- CreateIndex
CREATE INDEX "_SkillToWorkHistory_B_index" ON "_SkillToWorkHistory"("B");

-- AddForeignKey
ALTER TABLE "WorkHistory" ADD CONSTRAINT "WorkHistory_renderableId_fkey" FOREIGN KEY ("renderableId") REFERENCES "Renderable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToWorkHistory" ADD CONSTRAINT "_SkillToWorkHistory_A_fkey" FOREIGN KEY ("A") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToWorkHistory" ADD CONSTRAINT "_SkillToWorkHistory_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkHistory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
