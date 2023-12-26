import { Card, CardBody } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import { Project, Renderable as RenderableData, Skill } from '@prisma/client';
import Renderable from './renderable';
import SkillIcon from './skill_icon';
import { Button } from '@nextui-org/react';

export default function ProjectCard({
  project,
}: {
  project: Project & {
    renderable: RenderableData;
    skills: Array<Skill & { renderable: RenderableData }>;
  };
}) {
  const projectUrl = `/project/${project.slug}`;
  return (
    <Card key={projectUrl} className="flex-grow basis-[550px] max-w-[750px]">
      <CardBody>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href={projectUrl} className="min-w-[200px]">
            <Renderable
              renderable={project.renderable}
              width={200}
              height={200}
              fit="cover"
              className="rounded-lg"
            />
          </Link>
          <div className="flex flex-col flex-grow basis-[380px] gap-2">
            <Link href={projectUrl}>
              <h6>{project.name}</h6>
            </Link>
            <p className="text-small text-white">{project.shortDescription}</p>
            <div className="flex-grow" />
            <div className="flex flex-row gap-2">
              {project.skills.map((skill) => {
                return <SkillIcon key={skill.id} skill={skill} />;
              })}
              <div className="flex-grow" />
              <Button as={Link} href={projectUrl}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
