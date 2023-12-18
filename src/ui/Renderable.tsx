import { RenderableData } from '../ui-types';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Renderable } from '@prisma/client';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

export default function Renderable({
  renderableData,
  renderable,
  width,
  height,
  color,
  className,
}: {
  renderableData?: RenderableData;
  renderable?: Renderable;
  width: number;
  height: number;
  color: string;
  className?: string;
}) {
  if (renderable) {
    if (renderable.src && renderable.alt) {
      return (
        <Image
          src={renderable.src}
          alt={renderable.alt}
          width={width * 4}
          height={height * 4}
          style={{ objectFit: 'contain', width: width, height: height }}
          className={className}
        />
      );
    }
    if (renderable.icon && renderable.iconPack) {
      return (
        <FontAwesomeIcon
          icon={[
            renderable.iconPack as IconPrefix,
            renderable.icon as IconName,
          ]}
          width={width}
          height={height}
          style={{ color }}
          className={className}
        />
      );
    }
  }

  if (renderableData) {
    if (renderableData.isImage()) {
      return (
        <Image
          src={renderableData.src}
          alt={renderableData.alt}
          width={width * 4}
          height={height * 4}
          style={{ objectFit: 'contain', width: width, height: height }}
        />
      );
    } else if (renderableData.isIcon()) {
      return (
        <FontAwesomeIcon
          icon={renderableData.icon}
          width={width}
          height={height}
          style={{ color }}
        />
      );
    }
  }
}
