import { RenderableData } from '../ui-types';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Renderable({
  renderableData,
  width,
  height,
  color,
}: {
  renderableData: RenderableData;
  width: number;
  height: number;
  color: string;
}) {
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
