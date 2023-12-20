-- CreateTable
CREATE TABLE "Renderable" (
    "id" SERIAL NOT NULL,
    "src" TEXT,
    "alt" TEXT,
    "pack" TEXT,
    "iconPack" TEXT,
    "icon" TEXT,

    CONSTRAINT "Renderable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resume" (
    "id" SERIAL NOT NULL,
    "linkedInUrl" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "renderableId" INTEGER NOT NULL,

    CONSTRAINT "Resume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "resumeId" INTEGER,
    "category" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "renderableId" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "foregroundColor" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "slug" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "renderableId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "foregroundColor" TEXT NOT NULL,
    "resumeId" INTEGER NOT NULL,
    "keywords" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "WorkHistory" (
    "id" SERIAL NOT NULL,
    "renderableId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3),
    "lineItems" TEXT[],
    "resumeId" INTEGER NOT NULL,

    CONSTRAINT "WorkHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogPost" (
    "slug" TEXT NOT NULL,
    "renderableId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resumeId" INTEGER NOT NULL,
    "keywords" TEXT[],

    CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "_SkillToWorkHistory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ProjectToSkill" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SkillToWorkHistory_AB_unique" ON "_SkillToWorkHistory"("A", "B");

-- CreateIndex
CREATE INDEX "_SkillToWorkHistory_B_index" ON "_SkillToWorkHistory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToSkill_AB_unique" ON "_ProjectToSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToSkill_B_index" ON "_ProjectToSkill"("B");

-- AddForeignKey
ALTER TABLE "Resume" ADD CONSTRAINT "Resume_renderableId_fkey" FOREIGN KEY ("renderableId") REFERENCES "Renderable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_renderableId_fkey" FOREIGN KEY ("renderableId") REFERENCES "Renderable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_renderableId_fkey" FOREIGN KEY ("renderableId") REFERENCES "Renderable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkHistory" ADD CONSTRAINT "WorkHistory_renderableId_fkey" FOREIGN KEY ("renderableId") REFERENCES "Renderable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkHistory" ADD CONSTRAINT "WorkHistory_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogPost" ADD CONSTRAINT "BlogPost_renderableId_fkey" FOREIGN KEY ("renderableId") REFERENCES "Renderable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogPost" ADD CONSTRAINT "BlogPost_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToWorkHistory" ADD CONSTRAINT "_SkillToWorkHistory_A_fkey" FOREIGN KEY ("A") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToWorkHistory" ADD CONSTRAINT "_SkillToWorkHistory_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkHistory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToSkill" ADD CONSTRAINT "_ProjectToSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToSkill" ADD CONSTRAINT "_ProjectToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
