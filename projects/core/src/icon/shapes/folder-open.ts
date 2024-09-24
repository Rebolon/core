/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.26 13c.58-.01 1.12.26 1.45.74.29.42.37.95.21 1.44l-4.19 15.1a1 1 0 0 1-1 .72H4.41c-.75.02-1.38-.56-1.41-1.31V7c0-1.1.9-2 2-2h6.49a2 2 0 0 1 1.62.82L15.42 9h13.97c1.1 0 2 .9 2 2H14.91a1 1 0 0 1-.81-.41L11.49 7H5v18l2.92-10.34v-.14c.4-.89 1.27-1.48 2.25-1.52zM5.9 29h23.04l3.94-14.05H10.16c-.15.03-.29.12-.38.24z"/>',
  outlineAlerted:
    '<path d="m27.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.678.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637 1.19 1.19 0 0 0-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.097-.609c-.452 0-.87.232-1.098.61"/><path d="M20.106 11H14.91a1 1 0 0 1-.81-.41L11.49 7H5v18l2.92-10.34v-.14c.4-.89 1.27-1.48 2.25-1.52h10.063q.08.2.188.39a3.26 3.26 0 0 0 2.097 1.56H10.16c-.15.03-.29.12-.38.24L5.9 29h23.04l3.916-13.963h1.808q.15.004.298-.008-.018.076-.042.151l-4.19 15.1a1 1 0 0 1-1 .72H4.41c-.75.02-1.38-.56-1.41-1.31V7c0-1.1.9-2 2-2h6.49a2 2 0 0 1 1.62.82L15.42 9h5.74l-.624 1.039a3.2 3.2 0 0 0-.43.961"/>',
  outlineBadged:
    '<path d="M31 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M26.101 11H14.91a1 1 0 0 1-.81-.41L11.49 7H5v18l2.92-10.34v-.14c.4-.89 1.27-1.48 2.25-1.52h23.09c.58-.01 1.12.26 1.45.74.29.42.37.95.21 1.44l-4.19 15.1a1 1 0 0 1-1 .72H4.41c-.75.02-1.38-.56-1.41-1.31V7c0-1.1.9-2 2-2h6.49a2 2 0 0 1 1.62.82L15.42 9h9.254c.356.75.841 1.426 1.427 2m2.839 18H5.9l3.88-13.81c.09-.12.23-.21.38-.24h22.72z" clip-rule="evenodd"/>',
  solid:
    '<path d="M34.706 13.74a1.74 1.74 0 0 0-1.468-.74h-22.98c-.988.041-1.87.63-2.277 1.52a1 1 0 0 0 0 .14L5.025 25V7h6.57l2.642 3.59c.19.258.496.41.82.41h16.288c0-1.105-.907-2-2.025-2H15.573l-2.338-3.18a2.03 2.03 0 0 0-1.64-.82h-6.57C3.906 5 3 5.895 3 7v22.69A1.38 1.38 0 0 0 4.427 31h25.237c.465.018.883-.279 1.013-.72l4.241-15.1a1.62 1.62 0 0 0-.212-1.44"/>',
  solidAlerted:
    '<path d="m27.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.678.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637 1.19 1.19 0 0 0-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.097-.609c-.452 0-.87.232-1.098.61"/><path d="M20.233 13q.08.2.188.39a3.28 3.28 0 0 0 2.919 1.647h11.324q.149.004.296-.008-.017.076-.042.151l-4.241 15.1c-.13.441-.548.738-1.013.72H4.427A1.38 1.38 0 0 1 3 29.69V7c0-1.105.906-2 2.025-2h6.57a2.03 2.03 0 0 1 1.64.82L15.573 9h5.586l-.623 1.039c-.199.3-.342.624-.43.961h-5.05c-.323 0-.628-.152-.82-.41L11.596 7h-6.57v18L7.98 14.66a1 1 0 0 1 0-.14A2.62 2.62 0 0 1 10.258 13z"/>',
  solidBadged:
    '<path d="M31 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10m-6.326-2c.356.75.841 1.426 1.427 2H15.057c-.324 0-.63-.152-.82-.41L11.595 7h-6.57v18L7.98 14.66a1 1 0 0 1 0-.14A2.62 2.62 0 0 1 10.258 13h22.98a1.74 1.74 0 0 1 1.468.74c.294.421.373.954.212 1.44l-4.241 15.1c-.13.441-.548.738-1.013.72H4.427A1.38 1.38 0 0 1 3 29.69V7c0-1.105.906-2 2.025-2h6.57a2.03 2.03 0 0 1 1.64.82L15.573 9z"/>',
};

export const folderOpenIconName = 'folder-open';
export const folderOpenIcon: IconShapeTuple = [folderOpenIconName, renderIcon(icon)];
