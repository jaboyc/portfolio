import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function SkillIcon({
  backgroundColor,
  imageSrc,
  alt,
  icon,
  iconColor,
}: {
  backgroundColor: string;
  imageSrc?: string;
  alt?: string;
  icon?: IconDefinition;
  iconColor?: string;
}) {
  return (
    <div
      className={`flex flex-row justify-center w-[37px] h-[37px] p-2 rounded-full`}
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
        <FontAwesomeIcon icon={icon} style={{ color: iconColor ?? 'black' }} />
      )}
    </div>
  );
}
