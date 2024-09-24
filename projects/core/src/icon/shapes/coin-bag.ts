/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21 28h-5.997c-.55 0-1 .45-1 1s.45 1 1 1H21c.55 0 1-.45 1-1s-.45-1-1-1m-1.01-4c-.549 0-.999.45-.999 1s.45 1 1 1h5.997c.55 0 1-.45 1-1s-.45-1-1-1zm-2.998-14c.67 1.6 1.15 3.28 1.41 5 .22 1.28.32 2.57.32 3.86l1.579-1.11c-.04-1.01-.15-2.01-.32-3-.27-1.62-.7-3.21-1.28-4.75h.78l.91-2h-7.237l-1.849-4h13.213L22.02 9.47q.645.345 1.23.78a18.6 18.6 0 0 1 5.856 6.57A26.7 26.7 0 0 1 31.675 26h2.009c-.29-3.52-1.25-6.95-2.819-10.12a20.3 20.3 0 0 0-6.317-7.17l2.4-5.29c.16-.32.13-.7-.07-1a.98.98 0 0 0-.8-.42H9.746c-.34 0-.66.17-.84.46s-.21.65-.07.96l2.45 5.31a20.3 20.3 0 0 0-6.278 7.15C2.86 19.88 2.19 24.77 2 28.16c-.06 1 .3 1.99 1 2.71.73.71 1.719 1.1 2.738 1.07h6.197V30H5.668c-.46 0-.89-.19-1.21-.52s-.479-.77-.45-1.23c.14-2.61.69-7.58 2.76-11.45a18 18 0 0 1 6.256-6.8h1c-.68.94-1.3 1.91-1.87 2.92a23 23 0 0 0-1.469 3.34l1.37.92c.4-1.19.9-2.35 1.489-3.47.72-1.3 1.54-2.54 2.449-3.71zm16.002 18h-6.996c-.55 0-1 .45-1 1s.45 1 1 1h6.996c.55 0 1-.45 1-1s-.45-1-1-1m-14.003 4h-3.048c-.55 0-1 .45-1 1s.45 1 1 1h3.048c.55 0 1-.45 1-1s-.45-1-1-1m11.994 0H23.04c-.55 0-1 .45-1 1s.45 1 1 1h7.946c.55 0 1-.45 1-1s-.45-1-1-1"/>',
  solid:
    '<path d="M21.94 29c0-.55-.45-1-1-1h-5.997c-.55 0-1 .45-1 1s.45 1 1 1h5.997c.55 0 1-.45 1-1m-2.01-5h5.998c.55 0 1 .45 1 1s-.45 1-1 1H19.93c-.55 0-1-.45-1-1s.45-1 1-1"/><path d="M21 30c.55 0 1-.45 1-1s-.45-1-1-1h-5.997c-.55 0-1 .45-1 1s.45 1 1 1zm-1.01-4h5.998c.55 0 1-.45 1-1s-.45-1-1-1H19.99c-.55 0-1 .45-1 1s.45 1 1 1m-.999 6h-3.048c-.55 0-1 .45-1 1s.45 1 1 1h3.048c.55 0 1-.45 1-1s-.45-1-1-1m11.994 0H23.04c-.55 0-1 .45-1 1s.45 1 1 1h7.946c.55 0 1-.45 1-1s-.45-1-1-1m2.009-4h-6.996c-.55 0-1 .45-1 1s.45 1 1 1h6.996c.55 0 1-.45 1-1s-.45-1-1-1"/><path d="M33.684 26c-.3-3.51-1.25-6.94-2.819-10.09a20.2 20.2 0 0 0-6.317-7.18l2.4-5.3c.16-.32.13-.7-.07-1a.96.96 0 0 0-.8-.43H9.746c-.34 0-.66.17-.84.46s-.21.65-.07.96L10.946 8H20.4l-.91 2h-.78c.58 1.54 1.01 3.13 1.28 4.75.17.99.28 1.99.32 3l-1.58 1.11c0-1.29-.1-2.58-.32-3.86-.27-1.72-.74-3.4-1.409-5h-1a29 29 0 0 0-2.448 3.71c-.59 1.12-1.09 2.28-1.49 3.47l-1.369-.92c.4-1.15.89-2.27 1.47-3.34.57-1.01 1.19-1.98 1.869-2.92H9.706a20.4 20.4 0 0 0-4.688 5.91C2.86 19.92 2.19 24.81 2 28.21a3.6 3.6 0 0 0 1 2.72c.61.59 1.399.94 2.228 1.03l.03.04h7.876c.06-.17.12-.34.21-.5a3.01 3.01 0 0 1-1.35-2.5c0-1.65 1.35-3 3-3h2.168a3.008 3.008 0 0 1 2.829-4h5.997a3.008 3.008 0 0 1 2.828 4z"/>',
};

export const coinBagIconName = 'coin-bag';
export const coinBagIcon: IconShapeTuple = [coinBagIconName, renderIcon(icon)];
