import { Skill } from '@/src/resume';
import Renderable from '@/src/ui/Renderable';

export default function SkillIcon({ skill }: { skill: Skill }) {
  return (
    <div
      className={`flex flex-row justify-center w-[37px] h-[37px] p-2 rounded-full`}
      style={{ background: skill.color }}
    >
      <Renderable
        renderableData={skill.renderableData}
        width={21}
        height={21}
        color={skill.foregroundColor}
      />
    </div>
  );
}
