import { Skill } from '@/src/resume';
import Renderable from '@/src/ui/Renderable';

export default function SkillChip({ skill }: { skill: Skill }) {
  return (
    <div>
      {/* Empty `div` for Tippy */}
      <div
        data-description={skill.description}
        className={`flex shrink-0 gap-2 items-center h-10 p-2 rounded-full hover:brightness-[104%] cursor-default ${
          skill.color == 'white' ? 'border-2 border-black' : ''
        }`}
        style={{ background: skill.color }}
      >
        <Renderable
          renderableData={skill.renderableData}
          width={21}
          height={21}
          color={skill.foregroundColor}
        />
        <p className={`button-text`} style={{ color: skill.foregroundColor }}>
          {skill.name}
        </p>
      </div>
    </div>
  );
}
