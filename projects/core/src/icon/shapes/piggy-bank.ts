/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M19.72 10.47a11.65 11.65 0 0 0-6.31.52.8.8 0 1 0 .59 1.49 10.1 10.1 0 0 1 5.44-.48.8.8 0 1 0 .28-1.57Z"/><circle cx="25.38" cy="16.71" r="1.36"/><path d="M35.51 18.63a1 1 0 0 0-.84-.44 3.42 3.42 0 0 1-2.09-1.12 17.4 17.4 0 0 1-2.63-3.78l2.88-4.5A1.89 1.89 0 0 0 33 7a1.77 1.77 0 0 0-1.33-1 10.1 10.1 0 0 0-5.39.75 12.7 12.7 0 0 0-2.72 1.63 17 17 0 0 0-5.16-1.39C11.31 6.3 4.83 10.9 4 17a2.56 2.56 0 0 1-1.38-1.53 1.8 1.8 0 0 1 .14-1.4 1.2 1.2 0 0 1 .43-.43 1.08 1.08 0 0 0-1.12-1.85A3.3 3.3 0 0 0 .91 13a4 4 0 0 0-.33 3.08A4.76 4.76 0 0 0 3 18.95l.92.46a17.6 17.6 0 0 0 1.82 7l.17.38a23 23 0 0 0 3.29 5.09 1 1 0 0 0 .75.34h4.52a1 1 0 0 0 .92-1.38l-.39-.9 1.18.13a20.3 20.3 0 0 0 4 0c.37.6.77 1.2 1.21 1.79a1 1 0 0 0 .8.41h4.34a1 1 0 0 0 .92-1.39c-.17-.4-.34-.83-.47-1.2-.18-.53-.32-1-.43-1.45A13.2 13.2 0 0 0 29.56 26a12.5 12.5 0 0 0 3 0 1 1 0 0 0 .78-.62l2.26-5.81a1 1 0 0 0-.09-.94m-3.78 5.44a11.4 11.4 0 0 1-2.35-.11 8.2 8.2 0 0 1-2.53-.87 1 1 0 0 0-.93 1.77 12 12 0 0 0 1.29.58 8 8 0 0 1-1.8 1.16l-1.06.48s.49 2.19.82 3.16h-2.38c-.24-.34-1.45-2.36-1.45-2.36l-.67.09a18.5 18.5 0 0 1-4.25.12c-.66-.06-1.76-.2-2.62-.35l-1.55-.27s.63 2.43.75 2.74h-2.58A20.6 20.6 0 0 1 7.76 26l-.18-.39A14.6 14.6 0 0 1 6 17.48c.54-5.19 6.12-9.11 12.19-8.54a15.5 15.5 0 0 1 5.08 1.48l.62.29.5-.47A10.3 10.3 0 0 1 27 8.54a8.25 8.25 0 0 1 4-.65l-3.38 5.29.25.5a21.2 21.2 0 0 0 3.31 4.84 6.5 6.5 0 0 0 2.14 1.39Z"/>',
  solid:
    '<path d="M35 18.87a5.8 5.8 0 0 1-2-1.26 21.6 21.6 0 0 1-3.29-4.84l3.39-5.29a.9.9 0 0 0-.54-1.38 9.67 9.67 0 0 0-5.13.72 12 12 0 0 0-3.13 2 17.4 17.4 0 0 0-5.7-1.67C11.8 6.52 5.27 10.9 4.54 17l-.14-.07a2.76 2.76 0 0 1-1.5-1.64 2 2 0 0 1 .15-1.55 1.3 1.3 0 0 1 .47-.48 1.08 1.08 0 1 0-1.12-1.85 3.45 3.45 0 0 0-1.23 1.25 4.16 4.16 0 0 0-.33 3.24 5 5 0 0 0 2.57 3l1 .54a18.6 18.6 0 0 0 2 7.3 23 23 0 0 0 3 4.79 1 1 0 0 0 .8.38h3.61a.52.52 0 0 0 .4-.75l-.22-.78a11 11 0 0 1-.33-1.18c.91.16 2.08.31 2.87.38a20 20 0 0 0 3.12 0c.39.7.79 1.33 1.15 1.85a.93.93 0 0 0 .77.41h3.11a.65.65 0 0 0 .61-.85c-.23-.74-.53-1.75-.71-2.37a16 16 0 0 0 3.75-1.76c.16-.11.32-.26.48-.39a14 14 0 0 1-2.42-1 .8.8 0 0 1 .74-1.42 11.6 11.6 0 0 0 3.18 1.1 13.3 13.3 0 0 0 2.68.12 1 1 0 0 0 .9-.66l1.73-4.44a1 1 0 0 0-.63-1.3m-21.21-7.28a.9.9 0 0 1-.3.05.85.85 0 0 1-.3-1.64 12.4 12.4 0 0 1 6.69-.55.85.85 0 1 1-.3 1.67 10.75 10.75 0 0 0-5.79.47m12.52 6.12a1.44 1.44 0 1 1 1.44-1.44 1.44 1.44 0 0 1-1.43 1.45Z"/>',
};

export const piggyBankIconName = 'piggy-bank';
export const piggyBankIcon: IconShapeTuple = [piggyBankIconName, renderIcon(icon)];
