/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M10.5 9C9.67 9 9 9.67 9 10.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S11.33 9 10.5 9m20.54 9.82L17.26 5.11c-.35-.35-1.08-1.07-2.17-1.08L5.03 4c-.26 0-.52.1-.71.29s-.29.44-.29.7L4 14.97c0 .88.37 1.79.96 2.37l13.79 13.71c.61.61 1.43.95 2.29.95h.02c.86 0 1.67-.33 2.27-.93l7.73-7.69c1.26-1.25 1.25-3.3-.02-4.56m-1.4 3.15-7.73 7.69c-.23.23-.53.35-.86.35s-.65-.13-.89-.37L6.38 15.93c-.22-.22-.37-.62-.37-.96L6.03 6l9.05.03c.19 0 .4.14.76.5l13.78 13.71c.49.49.5 1.27.02 1.74z"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.609"/><path d="M20.537 8.37 17.26 5.11c-.35-.35-1.08-1.07-2.17-1.08L5.03 4c-.26 0-.52.1-.71.29s-.29.44-.29.7L4 14.97c0 .88.37 1.79.96 2.37l13.79 13.71c.61.61 1.43.95 2.29.95h.02c.86 0 1.67-.33 2.27-.93l7.73-7.69c1.26-1.25 1.25-3.3-.02-4.56l-3.803-3.783H24.39l5.23 5.203c.49.49.5 1.27.02 1.74v-.01l-7.73 7.69c-.23.23-.53.35-.86.35s-.65-.13-.89-.37L6.38 15.93c-.22-.22-.37-.62-.37-.96L6.03 6l9.05.03c.19 0 .4.14.76.5l3.63 3.612.066-.103z"/><path d="M9 10.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5S9 11.33 9 10.5"/>',

  outlineBadged:
    '<path d="M10.5 9C9.67 9 9 9.67 9 10.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S11.33 9 10.5 9m20.54 9.82L17.26 5.11c-.35-.35-1.08-1.07-2.17-1.08L5.03 4c-.26 0-.52.1-.71.29s-.29.44-.29.7L4 14.97c0 .88.37 1.79.96 2.37l13.79 13.71c.61.61 1.43.95 2.29.95h.02c.86 0 1.67-.33 2.27-.93l7.73-7.69c1.26-1.25 1.25-3.3-.02-4.56m-1.4 3.15-7.73 7.69c-.23.23-.53.35-.86.35s-.65-.13-.89-.37L6.38 15.93c-.22-.22-.37-.62-.37-.96L6.03 6l9.05.03c.19 0 .4.14.76.5l13.78 13.71c.49.49.5 1.27.02 1.74zM30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>',

  solid:
    '<path d="M31.04 18.82 17.26 5.11c-.35-.35-1.08-1.07-2.17-1.08L5.03 4c-.26 0-.52.1-.71.29s-.29.44-.29.7L4 14.97c0 .88.37 1.79.96 2.37l13.79 13.71c.61.61 1.43.95 2.29.95h.02c.86 0 1.67-.33 2.27-.93l7.73-7.69c1.26-1.25 1.25-3.3-.02-4.56M10.5 12.2c-.94 0-1.7-.76-1.7-1.7s.76-1.7 1.7-1.7 1.7.76 1.7 1.7-.76 1.7-1.7 1.7"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.609"/><path fill-rule="evenodd" d="m20.537 8.37-1 1.669a3.2 3.2 0 0 0-.117 3.35 3.28 3.28 0 0 0 2.92 1.648h4.898l3.803 3.783c1.27 1.26 1.28 3.31.02 4.56l-7.73 7.69c-.6.6-1.41.93-2.27.93h-.02c-.86 0-1.68-.34-2.29-.95L4.96 17.34c-.59-.58-.96-1.49-.96-2.37l.03-9.98c0-.26.1-.51.29-.7S4.77 4 5.03 4l10.06.03c1.09.01 1.82.73 2.17 1.08zM8.8 10.5c0 .94.76 1.7 1.7 1.7s1.7-.76 1.7-1.7-.76-1.7-1.7-1.7-1.7.76-1.7 1.7" clip-rule="evenodd"/>',

  solidBadged:
    '<path d="M31.04 18.82 17.26 5.11c-.35-.35-1.08-1.07-2.17-1.08L5.03 4c-.26 0-.52.1-.71.29s-.29.44-.29.7L4 14.97c0 .88.37 1.79.96 2.37l13.79 13.71c.61.61 1.43.95 2.29.95h.02c.86 0 1.67-.33 2.27-.93l7.73-7.69c1.26-1.25 1.25-3.3-.02-4.56M10.5 12.2c-.94 0-1.7-.76-1.7-1.7s.76-1.7 1.7-1.7 1.7.76 1.7 1.7-.76 1.7-1.7 1.7M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>',
};

export const tagIconName = 'tag';
export const tagIcon: IconShapeTuple = [tagIconName, renderIcon(icon)];
