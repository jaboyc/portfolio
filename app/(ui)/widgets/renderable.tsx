import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Renderable } from '@prisma/client';
import Image from 'next/image';

export default function Renderable({
  renderable,
  width,
  height,
  color,
  fit,
  className,
}: {
  renderable: Renderable;
  width: number;
  height?: number;
  color?: string;
  fit?: 'fill' | 'contain' | 'cover';
  className?: string;
}) {
  if (renderable.src && renderable.alt) {
    return (
      <Image
        src={renderable.src}
        alt={renderable.alt}
        width={width * 4}
        height={(height ?? width) * 4}
        style={{
          objectFit: fit ?? 'contain',
          width: width,
          height: height ?? 'auto',
          minWidth: 0,
        }}
        className={className}
      />
    );
  }
  if (renderable.icon && renderable.iconPack) {
    return (
      <FontAwesomeIcon
        icon={[renderable.iconPack as IconPrefix, renderable.icon as IconName]}
        width={width}
        height={height}
        style={{ color: color ?? 'white', width, height }}
        className={className}
      />
    );
  }
}
