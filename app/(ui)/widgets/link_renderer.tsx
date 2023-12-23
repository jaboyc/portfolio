import { Button } from '@nextui-org/button';
import { Link as NextLink } from '@nextui-org/link';
import {
  Link,
  LinkTemplate,
  Renderable as RenderableData,
} from '@prisma/client';
import Renderable from '@/app/(ui)/widgets/renderable';

export default function LinkRenderer({
  link,
}: {
  link: Link & { linkTemplate: LinkTemplate & { renderable: RenderableData } };
}) {
  const linkTemplate = link.linkTemplate;

  return (
    <Button
      as={NextLink}
      href={link.url}
      style={{
        background: linkTemplate.color,
        color: linkTemplate.foregroundColor,
        fontSize: 18,
      }}
      target="_blank"
      showAnchorIcon
      startContent={
        <Renderable
          renderable={linkTemplate.renderable}
          width={21}
          height={21}
          color={linkTemplate.foregroundColor}
        />
      }
    >
      <p style={{ color: linkTemplate.foregroundColor }}>
        {link.linkTemplate.name}
      </p>
    </Button>
  );
}
