import Renderable from '@/app/ui/renderable';
import { Button } from '@nextui-org/button';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import { Renderable as RenderableData, Skill } from '@prisma/client';

export default function SkillChip({
  skill,
}: {
  skill: Skill & { renderable: RenderableData };
}) {
  return (
    <Popover showArrow>
      <PopoverTrigger>
        <Button
          className={`${skill.color == 'white' ? 'border-2 border-black' : ''}`}
          radius="full"
          style={{ background: skill.color }}
          startContent={
            <Renderable
              renderable={skill.renderable}
              width={21}
              height={21}
              color={skill.foregroundColor}
            />
          }
        >
          <p style={{ color: skill.foregroundColor }}>{skill.name}</p>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2 max-w-[350px]">
          <div className="text-small font-bold">{skill.name}</div>
          <div className="text-tiny">{skill.description}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
