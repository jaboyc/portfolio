import Renderable from '@/app/(ui)/renderable';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover';
import { Button } from '@nextui-org/button';
import { Renderable as RenderableData, Skill } from '@prisma/client';

export default function SkillIcon({
  skill,
}: {
  skill: Skill & { renderable: RenderableData };
}) {
  return (
    <Popover showArrow>
      <PopoverTrigger>
        <Button isIconOnly style={{ background: skill.color }}>
          <Renderable
            renderable={skill.renderable}
            width={21}
            height={21}
            color={skill.foregroundColor}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2 max-w-[350px]">
          <div className="text-small font-bold">{skill.name}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
