/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M22 4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v7h8zm2 2h4a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4v2H8v24h20V8h-4zm2 21.7V30h-1.6v-2.12a8.33 8.33 0 0 0-6.4-2.59 8.33 8.33 0 0 0-6.4 2.58V30H10v-2.27a1.13 1.13 0 0 1 .26-.73A9.9 9.9 0 0 1 18 23.69a9.9 9.9 0 0 1 7.74 3.28c.17.205.263.463.26.73M16 9h4V4h-4zm2 13a4.23 4.23 0 1 0 0-8.46A4.23 4.23 0 0 0 18 22m2.63-4.23a2.63 2.63 0 1 0-5.26 0 2.63 2.63 0 0 0 5.26 0" clip-rule="evenodd"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.609"/><path d="M28 15.036h2V32a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4v2H8v24h20z"/><path fill-rule="evenodd" d="M19.829 13.955c.324.36.723.64 1.162.823a4.23 4.23 0 1 1-1.162-.824M18 15.14a2.63 2.63 0 1 1 0 5.26 2.63 2.63 0 0 1 0-5.26m4-9.208-2.464 4.107a3.2 3.2 0 0 0-.43.961H14V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zM20 9h-4V4h4z" clip-rule="evenodd"/><path d="M26 30v-2.3a1.12 1.12 0 0 0-.26-.73A9.9 9.9 0 0 0 18 23.69 9.9 9.9 0 0 0 10.26 27a1.13 1.13 0 0 0-.26.73V30h1.6v-2.13a8.33 8.33 0 0 1 6.4-2.58 8.33 8.33 0 0 1 6.4 2.59V30z"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10m-2 1.71c.634.189 1.305.29 2 .29v19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4v2H8v24h20z"/><path fill-rule="evenodd" d="M20 2a2 2 0 0 1 2 2v7h-8V4a2 2 0 0 1 2-2zm0 7h-4V4h4z" clip-rule="evenodd"/><path d="M26 30v-2.3a1.12 1.12 0 0 0-.26-.73A9.9 9.9 0 0 0 18 23.69 9.9 9.9 0 0 0 10.26 27a1.13 1.13 0 0 0-.26.73V30h1.6v-2.13a8.33 8.33 0 0 1 6.4-2.58 8.33 8.33 0 0 1 6.4 2.59V30z"/><path fill-rule="evenodd" d="M22.23 17.77a4.23 4.23 0 1 1-8.46 0 4.23 4.23 0 0 1 8.46 0M18 15.14a2.63 2.63 0 1 1 0 5.26 2.63 2.63 0 0 1 0-5.26" clip-rule="evenodd"/>',

  solid:
    '<path fill-rule="evenodd" d="M21 4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6h6zm2 2h5a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5v2H8v24h20V8h-5zM10 27.73a1.13 1.13 0 0 1 .26-.73A9.9 9.9 0 0 1 18 23.69a9.9 9.9 0 0 1 7.74 3.28c.17.205.263.463.26.73V30H10zM22 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.609"/><path d="M28 15.036h2V32a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5v2H8v24h20z"/><path d="M21 7.599 19.56 10H15V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zM10.26 27a1.13 1.13 0 0 0-.26.73V30h16v-2.3a1.12 1.12 0 0 0-.26-.73A9.9 9.9 0 0 0 18 23.69 9.9 9.9 0 0 0 10.26 27M18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10m-2 1.71c.634.189 1.305.29 2 .29v19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5v2H8v24h20z"/><path d="M19 2a2 2 0 0 1 2 2v6h-6V4a2 2 0 0 1 2-2zm-8.74 25a1.13 1.13 0 0 0-.26.73V30h16v-2.3a1.12 1.12 0 0 0-.26-.73A9.9 9.9 0 0 0 18 23.69 9.9 9.9 0 0 0 10.26 27M18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>',
};

export const idBadgeIconName = 'id-badge';
export const idBadgeIcon: IconShapeTuple = [idBadgeIconName, renderIcon(icon)];
