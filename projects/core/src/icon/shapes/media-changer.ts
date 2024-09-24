/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M22 22h-2v2h2zm0-4h-2v2h2zm2 6h2v-2h-2zm0-4h2v-2h-2zm-6-10h-8v2h8zm2.2 4.62c.07.08.17.15.27.2s.21.07.33.07.22-.02.33-.07c.1-.05.19-.11.27-.2.07-.08.13-.18.17-.29.03-.11.05-.22.03-.33v-2.4h5.63c.21 0 .42-.08.57-.23s.23-.35.23-.57-.08-.42-.23-.57a.8.8 0 0 0-.57-.23h-7.22v4c-.01.11 0 .23.03.33.03.11.09.21.17.29zM31.41 4.59C31.03 4.21 30.53 4 30 4H6c-.53 0-1.04.21-1.41.59C4.21 4.97 4 5.47 4 6v24c0 .53.21 1.04.59 1.41.38.38.88.59 1.41.59h2v1c0 .27.11.52.29.71s.44.29.71.29.52-.11.71-.29.29-.44.29-.71v-1h16v1c0 .27.11.52.29.71s.44.29.71.29.52-.11.71-.29.29-.44.29-.71v-1h2c.53 0 1.04-.21 1.41-.59.38-.38.59-.88.59-1.41V6c0-.53-.21-1.04-.59-1.41M30 30H6V6h24zM18 14h-8v2h8zm0 12h-8v2h8zm0-4h-8v2h8zm0-4h-8v2h8z"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.609"/><path d="M23.16 4H6c-.53 0-1.04.21-1.41.59C4.21 4.97 4 5.47 4 6v24c0 .53.21 1.04.59 1.41.38.38.88.59 1.41.59h2v1c0 .27.11.52.29.71s.44.29.71.29.52-.11.71-.29.29-.44.29-.71v-1h16v1c0 .27.11.52.29.71s.44.29.71.29.52-.11.71-.29.29-.44.29-.71v-1h2c.53 0 1.04-.21 1.41-.59.38-.38.59-.88.59-1.41V15.036h-2V30H6V6h15.96z"/><path d="M20 22h2v2h-2zm0-4h2v2h-2zm6 6h-2v-2h2zm0-4h-2v-2h2zM10 10h8v2h-8zm0 4h8v2h-8zm0 12h8v2h-8zm0-4h8v2h-8zm0-4h8v2h-8z"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M32 12.71a7 7 0 0 1-2 .29v17H6V6h17c0-.695.101-1.366.29-2H6c-.53 0-1.04.21-1.41.59C4.21 4.97 4 5.47 4 6v24c0 .53.21 1.04.59 1.41.38.38.88.59 1.41.59h2v1c0 .27.11.52.29.71s.44.29.71.29.52-.11.71-.29.29-.44.29-.71v-1h16v1c0 .27.11.52.29.71s.44.29.71.29.52-.11.71-.29.29-.44.29-.71v-1h2c.53 0 1.04-.21 1.41-.59.38-.38.59-.88.59-1.41z"/><path d="M24.255 10H20.01v4c-.01.11 0 .23.03.33.03.11.09.21.17.29h-.01c.07.08.17.15.27.2s.21.07.33.07.22-.02.33-.07c.1-.05.19-.11.27-.2.07-.08.13-.18.17-.29.03-.11.05-.22.03-.33v-2.4h4.2a7 7 0 0 1-1.545-1.6M20 22h2v2h-2zm0-4h2v2h-2zm6 6h-2v-2h2zm0-4h-2v-2h2zM10 10h8v2h-8zm0 4h8v2h-8zm0 12h8v2h-8zm0-4h8v2h-8zm0-4h8v2h-8z"/>',

  solid:
    '<path d="M31.41 4.653c-.38-.38-.88-.59-1.41-.59H6c-.53 0-1.04.21-1.41.59-.38.38-.59.88-.59 1.41v24c0 .53.21 1.04.59 1.41.38.38.88.59 1.41.59h2v1c0 .27.11.52.29.71s.44.29.71.29.52-.11.71-.29.29-.44.29-.71v-1h16v1c0 .27.11.52.29.71s.44.29.71.29.52-.11.71-.29.29-.44.29-.71v-1h2c.53 0 1.04-.21 1.41-.59.38-.38.59-.88.59-1.41v-24c0-.53-.21-1.04-.59-1.41M18.1 28.163H9.9v-2.2h8.2zm0-4H9.9v-2.2h8.2zm0-4H9.9v-2.2h8.2zm0-4H9.9v-2.2h8.2zm0-4H9.9v-2.2h8.2zm4 12h-2.2v-2.2h2.2zm0-4h-2.2v-2.2h2.2zm4 4h-2.2v-2.2h2.2zm0-4h-2.2v-2.2h2.2zm2-5h-8.2v-5.2h8.2z"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.609"/><path fill-rule="evenodd" d="M23.122 4.063H6c-.53 0-1.04.21-1.41.59-.38.38-.59.88-.59 1.41v24c0 .53.21 1.04.59 1.41.38.38.88.59 1.41.59h2v1c0 .27.11.52.29.71s.44.29.71.29.52-.11.71-.29.29-.44.29-.71v-1h16v1c0 .27.11.52.29.71s.44.29.71.29.52-.11.71-.29.29-.44.29-.71v-1h2c.53 0 1.04-.21 1.41-.59.38-.38.59-.88.59-1.41V15.036h-3.9v.127h-8.2V14.03a3.194 3.194 0 0 1-.364-3.993zM9.9 28.163h8.2v-2.2H9.9zm0-4h8.2v-2.2H9.9zm0-4h8.2v-2.2H9.9zm0-4h8.2v-2.2H9.9zm0-4h8.2v-2.2H9.9zm10 12h2.2v-2.2h-2.2zm0-4h2.2v-2.2h-2.2zm4 4h2.2v-2.2h-2.2zm0-4h2.2v-2.2h-2.2z" clip-rule="evenodd"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M32 12.71a7 7 0 0 1-2 .29c-.659 0-1.296-.09-1.9-.26v2.422h-8.2v-5.2h4.329A6.97 6.97 0 0 1 23 6c0-.672.095-1.322.272-1.937H6c-.53 0-1.04.21-1.41.59-.38.38-.59.88-.59 1.41v24c0 .53.21 1.04.59 1.41.38.38.88.59 1.41.59h2v1c0 .27.11.52.29.71s.44.29.71.29.52-.11.71-.29.29-.44.29-.71v-1h16v1c0 .27.11.52.29.71s.44.29.71.29.52-.11.71-.29.29-.44.29-.71v-1h2c.53 0 1.04-.21 1.41-.59.38-.38.59-.88.59-1.41zM9.9 28.163h8.2v-2.2H9.9zm0-4h8.2v-2.2H9.9zm0-4h8.2v-2.2H9.9zm0-4h8.2v-2.2H9.9zm0-4h8.2v-2.2H9.9zm10 12h2.2v-2.2h-2.2zm0-4h2.2v-2.2h-2.2zm4 4h2.2v-2.2h-2.2zm0-4h2.2v-2.2h-2.2z" clip-rule="evenodd"/>',
};

export const mediaChangerIconName = 'media-changer';
export const mediaChangerIcon: IconShapeTuple = [mediaChangerIconName, renderIcon(icon)];
