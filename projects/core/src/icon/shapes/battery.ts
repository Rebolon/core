/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M26.12 4H24v-.42C24 2.71 23.29 2 22.42 2h-8.84C12.71 2 12 2.71 12 3.58V4H9.88c-.5 0-.98.2-1.33.55S8 5.38 8 5.88v26.24c0 .5.2.98.55 1.33s.83.55 1.33.55h16.24c1.04 0 1.88-.84 1.88-1.88V5.88C28 4.84 27.16 4 26.12 4M26 32H10V6h4V4h8v2h4zm-8.75-20.56a.995.995 0 0 1 1.34.33l4.63 8.02-6.38-1.06 3.53 7.08c.23.49.02 1.07-.46 1.31s-1.07.05-1.33-.42l-5.29-10.59 6.07 1-2.5-4.34a.997.997 0 0 1 .39-1.33" clip-rule="evenodd"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path d="M23.834 2.876A1.58 1.58 0 0 0 22.42 2h-8.84C12.71 2 12 2.71 12 3.58V4H9.88c-.5 0-.98.2-1.33.55S8 5.38 8 5.88v26.24c0 .5.2.98.55 1.33s.83.55 1.33.55h16.24c1.04 0 1.88-.84 1.88-1.88V15.037h-2V32H10V6h4V4h8v1.932z"/><path d="m19.13 12.706-.54-.936a.995.995 0 0 0-1.34-.33c-.47.27-.64.86-.39 1.33l2.5 4.34-6.07-1 5.29 10.59c.26.47.85.66 1.33.42s.69-.82.46-1.31l-3.53-7.08 6.38 1.06-3.331-5.77a3.2 3.2 0 0 1-.758-1.314"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M23.782 2.781A1.58 1.58 0 0 0 22.42 2h-8.84C12.71 2 12 2.71 12 3.58V4H9.88c-.5 0-.98.2-1.33.55S8 5.38 8 5.88v26.24c0 .5.2.98.55 1.33s.83.55 1.33.55h16.24c1.04 0 1.88-.84 1.88-1.88V12.71a7 7 0 0 1-2-.965V32H10V6h4V4h8v2h1c0-1.16.282-2.255.782-3.219"/><path d="M18.59 11.77a.995.995 0 0 0-1.34-.33c-.47.27-.64.86-.39 1.33l2.5 4.34-6.07-1 5.29 10.59c.26.47.85.66 1.33.42s.69-.82.46-1.31l-3.53-7.08 6.38 1.06z"/>',

  solid:
    '<path fill-rule="evenodd" d="M26.12 4H24V3c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1v1H9.88c-.5 0-.98.2-1.33.55S8 5.38 8 5.88v26.24c0 .5.2.98.55 1.33s.83.55 1.33.55h16.24c1.04 0 1.88-.84 1.88-1.88V5.88C28 4.84 27.16 4 26.12 4m-2.93 15.99-5.99-1 3.36 6.74c.27.59.03 1.28-.56 1.58-.17.08-.35.13-.53.13-.44 0-.85-.24-1.06-.64l-5.29-10.59-.18-.35.39.06 5.65.93-2.29-3.98a1.202 1.202 0 0 1 1.06-1.76c.41 0 .79.21 1.02.56l4.63 8.02.21.37z" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path d="M23.949 2.684A1 1 0 0 0 23 2H13c-.55 0-1 .45-1 1v1H9.88c-.5 0-.98.2-1.33.55S8 5.38 8 5.88v26.24c0 .5.2.98.55 1.33s.83.55 1.33.55h16.24c1.04 0 1.88-.84 1.88-1.88V15.037h-5.66a3.3 3.3 0 0 1-1.976-.606L23.4 19.69l.21.37-6.41-1.07 3.36 6.74c.27.59.03 1.28-.56 1.58-.17.08-.35.13-.53.13-.44 0-.85-.24-1.06-.64l-5.29-10.59-.18-.35.39.06 5.65.93-2.29-3.98a1.202 1.202 0 0 1 1.06-1.76c.41 0 .79.21 1.02.56l.244.423a3.2 3.2 0 0 1 .522-2.054z"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M23.9 2.565A7.003 7.003 0 0 0 28 12.71v19.41c0 1.04-.84 1.88-1.88 1.88H9.88c-.5 0-.98-.2-1.33-.55S8 32.62 8 32.12V5.88c0-.5.2-.98.55-1.33S9.38 4 9.88 4H12V3c0-.55.45-1 1-1h10c.394 0 .737.231.9.565M17.2 18.99l6.41 1.07-.21-.37-4.63-8.02a1.22 1.22 0 0 0-1.02-.56 1.202 1.202 0 0 0-1.06 1.76l2.29 3.98-5.65-.93-.39-.06.18.35 5.29 10.59c.21.4.62.64 1.06.64.18 0 .36-.05.53-.13.59-.3.83-.99.56-1.58z" clip-rule="evenodd"/>',
};

export const batteryIconName = 'battery';
export const batteryIcon: IconShapeTuple = [batteryIconName, renderIcon(icon)];
