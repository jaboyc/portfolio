import Renderable from '@/app/ui/renderable';
import { Renderable as RenderableData, Skill } from '@prisma/client';

export default function SkillIcon({
  skill,
}: {
  skill: Skill & { renderable: RenderableData };
}) {
  return (
    <div
      className={`flex flex-row justify-center w-[37px] h-[37px] p-2 rounded-full`}
      style={{ background: skill.color }}
    >
      <Renderable
        renderable={skill.renderable}
        width={21}
        height={21}
        color={skill.foregroundColor}
      />
    </div>
  );
}
