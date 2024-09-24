/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21.6 29a1 1 0 0 0-1-1h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1m.94-5h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2M22 32h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m10.7 0h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2m1-4h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2"/><path d="M33.74 26a28 28 0 0 0-2.82-10.12 20.24 20.24 0 0 0-6.32-7.17L27 3.42a1 1 0 0 0-.07-1 1 1 0 0 0-.8-.42H9.8a1 1 0 0 0-.91 1.42l2.45 5.31a20.3 20.3 0 0 0-6.28 7.15c-2.15 4-2.82 8.89-3 12.28a3.6 3.6 0 0 0 1 2.71 3.8 3.8 0 0 0 2.74 1.07H12V30H5.72a1.68 1.68 0 0 1-1.21-.52 1.62 1.62 0 0 1-.45-1.23c.14-2.61.69-7.58 2.76-11.45a18 18 0 0 1 6.26-6.8h1a31 31 0 0 0-1.87 2.92 23 23 0 0 0-1.47 3.34l1.37.92a24 24 0 0 1 1.49-3.47A29 29 0 0 1 16.05 10h1a21.5 21.5 0 0 1 1.41 5 22.5 22.5 0 0 1 .32 3.86l1.58-1.11a24 24 0 0 0-.32-3A25 25 0 0 0 18.76 10h.78l.91-2h-7.24l-1.85-4h13.21l-2.5 5.47a10 10 0 0 1 1.23.78 18.6 18.6 0 0 1 5.86 6.57A26.6 26.6 0 0 1 31.73 26Z"/>',
  solid:
    '<path d="M24.89 26h7.86c-.66-8.71-4.41-14.12-9.22-17.32l2.19-4.78a1 1 0 0 0-.91-1.4H11.1a1 1 0 0 0-.91 1.4l1.2 2.6h10.12l-.9 2h-1.85A25 25 0 0 1 20 13.19a25 25 0 0 1 .32 3l-1.58 1.11a22.5 22.5 0 0 0-.32-3.86A21.7 21.7 0 0 0 17 8.5h-1a28 28 0 0 0-2.48 3.7 24 24 0 0 0-1.49 3.46l-1.37-.91a23 23 0 0 1 1.47-3.34 31 31 0 0 1 1.92-2.91H12.3l.08.17c-5.3 3.53-9.33 9.73-9.33 20.08a1.65 1.65 0 0 0 1.56 1.75h8a2.67 2.67 0 0 1 1.6-4.5 2.67 2.67 0 0 1-.37-1.34 2.7 2.7 0 0 1 2.7-2.7h6a2.7 2.7 0 0 1 2.7 2.7 2.63 2.63 0 0 1-.35 1.34"/><path d="M21.6 28.5a1 1 0 0 0-1-1h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1m.94-5h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m-.54 8h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m10.7 0h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2m1-4h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2"/>',
};

export const coinBagIconName = 'coin-bag';
export const coinBagIcon: IconShapeTuple = [coinBagIconName, renderIcon(icon)];
