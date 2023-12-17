import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export abstract class RenderableData {
  isImage(): this is ImageRenderableData {
    return 'src' in this;
  }

  isIcon(): this is IconRenderableData {
    return 'icon' in this;
  }
}

export class ImageRenderableData extends RenderableData {
  constructor(
    public src: string,
    public alt: string,
  ) {
    super();
  }
}

export class IconRenderableData extends RenderableData {
  constructor(public icon: IconDefinition) {
    super();
  }
}
