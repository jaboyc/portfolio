import Renderable from '@/app/ui/renderable';
import { Renderable as RenderableData, Skill } from '@prisma/client';

export default function SkillIcon({
  skill,
}: {
  skill: Skill & { renderable: RenderableData };
}) {
  return (
    <div>
      {/* Empty `div` for Tippy */}
      <div
        className={`flex flex-row justify-center items-center w-[37px] h-[37px] p-2 rounded-full transition hover:brightness-105`}
        style={{ background: skill.color }}
        data-description={skill.name}
      >
        <Renderable
          renderable={skill.renderable}
          width={21}
          height={21}
          color={skill.foregroundColor}
        />
      </div>
    </div>
  );
}
