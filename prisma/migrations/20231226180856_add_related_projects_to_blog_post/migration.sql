-- CreateTable
CREATE TABLE "_BlogPostToProject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BlogPostToProject_AB_unique" ON "_BlogPostToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_BlogPostToProject_B_index" ON "_BlogPostToProject"("B");

-- AddForeignKey
ALTER TABLE "_BlogPostToProject" ADD CONSTRAINT "_BlogPostToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "BlogPost"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogPostToProject" ADD CONSTRAINT "_BlogPostToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project"("slug") ON DELETE CASCADE ON UPDATE CASCADE;
