-- AlterTable
CREATE SEQUENCE skill_id_seq;
ALTER TABLE "Skill" ALTER COLUMN "id" SET DEFAULT nextval('skill_id_seq');
ALTER SEQUENCE skill_id_seq OWNED BY "Skill"."id";
