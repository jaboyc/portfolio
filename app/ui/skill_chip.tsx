import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function SkillChip({
  id,
  skillName,
  backgroundColor,
  textColor,
  imageSrc,
  alt,
  icon,
}: {
  id: string;
  skillName: string;
  backgroundColor: string;
  textColor: string;
  imageSrc?: string;
  alt?: string;
  icon?: IconDefinition;
}) {
  return (
    <div>
      {/* Empty `div` for Tippy */}
      <div
        id={id}
        className={`flex shrink-0 gap-2 items-center h-10 p-2 rounded-full hover:brightness-[104%] cursor-default ${
          backgroundColor == 'white' ? 'border-2 border-black' : ''
        }`}
        style={{ backgroundColor }}
      >
        {imageSrc && alt && (
          <Image
            width={21 * 4}
            height={21 * 4}
            src={imageSrc}
            alt={alt}
            style={{ height: 21, width: 21, objectFit: 'contain' }}
          />
        )}
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            height={16}
            style={{ color: textColor }}
          />
        )}
        <p className={`button-text`} style={{ color: textColor }}>
          {skillName}
        </p>
      </div>
    </div>
  );
}
