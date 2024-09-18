/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32.66 27.9478C31.69 27.0976 30.84 26.1273 30.13 25.067C29.36 23.5965 28.9 21.986 28.77 20.3255V15.174C28.78 9.80236 24.79 5.27099 19.34 4.59079V3.32041C19.34 2.59018 18.74 2.01001 18 2.01001C17.26 2.01001 16.66 2.60019 16.66 3.32041V4.61079C11.27 5.34101 7.18 9.85238 7.19 15.174V20.3255C7.06 21.976 6.6 23.5865 5.83 25.067C5.14 26.1373 4.3 27.1076 3.34 27.9478C3.12 28.1379 3 28.408 3 28.6881V30.0285C3 30.5686 3.45 31.0088 4.01 31.0088H32C32.27 31.0088 32.52 30.9087 32.71 30.7187C32.9 30.5386 33 30.2785 33 30.0185V28.6781C33 28.398 32.87 28.1279 32.66 27.9378V27.9478ZM5.1 29.0382C6.04 28.1579 6.86 27.1576 7.56 26.0873C8.53 24.3067 9.1 22.3461 9.22 20.3255V15.174C9.11 12.033 10.76 9.08214 13.53 7.48166C16.4 5.82116 19.84 5.9412 22.5 7.48166C25.16 9.02213 26.92 12.033 26.81 15.174V20.3255C26.93 22.3361 27.5 24.3067 28.47 26.0873C29.17 27.1676 29.99 28.1579 30.93 29.0382H5.09H5.1Z" />\n' +
    '<path d="M15.41 32.0091C15.71 33.1794 16.79 34.0297 18.05 34.0097C19.27 33.9797 20.3 33.1494 20.59 32.0091H15.41Z" />\n',
  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M23.0067 5.6942C21.9072 5.13448 20.6902 4.75305 19.39 4.59079V3.32041C19.39 2.59018 18.79 2.01001 18.05 2.01001C17.31 2.01001 16.71 2.60019 16.71 3.32041V4.61079C11.32 5.34101 7.23005 9.85238 7.24005 15.174V20.3255C7.11005 21.976 6.65005 23.5865 5.88005 25.067C5.19005 26.1373 4.35005 27.1076 3.39005 27.9478C3.17005 28.1379 3.05005 28.408 3.05005 28.6881V30.0285C3.05005 30.5686 3.50005 31.0088 4.06005 31.0088H32.05C32.32 31.0088 32.57 30.9087 32.76 30.7187C32.95 30.5386 33.05 30.2785 33.05 30.0185V28.6781C33.05 28.398 32.92 28.1279 32.71 27.9378V27.9478C31.74 27.0976 30.89 26.1273 30.18 25.067C29.41 23.5965 28.95 21.986 28.82 20.3255V15.174C28.8215 14.3801 28.7356 13.6046 28.5706 12.8572C27.761 12.6892 27.0027 12.3813 26.3219 11.9599C26.7053 12.976 26.8988 14.0669 26.86 15.174V20.3255C26.98 22.3361 27.55 24.3067 28.52 26.0873C29.22 27.1676 30.04 28.1579 30.98 29.0382H5.15005C6.09005 28.1579 6.91005 27.1576 7.61005 26.0873C8.58005 24.3067 9.15005 22.3461 9.27005 20.3255V15.174C9.16005 12.033 10.81 9.08214 13.58 7.48166C16.45 5.82116 19.89 5.9412 22.55 7.48166C22.8003 7.62656 23.0425 7.78448 23.276 7.95429C23.0963 7.33438 23.0001 6.67904 23.0001 6.0012C23.0001 5.89834 23.0023 5.79599 23.0067 5.6942Z" />\n' +
    '<path d="M18.1 34.0097C16.84 34.0297 15.76 33.1794 15.46 32.0091H20.64C20.35 33.1494 19.32 33.9797 18.1 34.0097Z" />\n',
  solid:
    '<path d="M15.54 32C15.83 33.16 16.87 34 18.1 34C19.33 34 20.36 33.16 20.66 32H15.54Z" />\n' +
    '<path d="M32.66 27.86L33 28.16V30.99H3V28.16L3.34 27.86C4.3 26.99 5.13 26 5.83 24.92C6.6 23.42 7.06 21.77 7.19 20.09V15.44C7.18 10.01 11.19 5.4 16.58 4.66V3.34C16.58 2.6 17.18 2 17.92 2C18.66 2 19.26 2.6 19.26 3.34V4.64C24.7 5.33 28.78 9.96 28.76 15.44V20.09C28.89 21.78 29.35 23.42 30.12 24.92C30.83 26.01 31.68 27 32.65 27.86H32.66Z" />\n',
  solidBadged:
    '<path d="M32.7078 27.425L33.0501 27.7203V30.4965H3.05005V27.7203L3.39233 27.425C4.3489 26.5762 5.18517 25.6061 5.87891 24.5406C6.64983 23.0664 7.11188 21.4565 7.23797 19.8053V14.9421C7.22491 9.62934 11.2207 5.12101 16.6004 4.37891V3.08927C16.6004 2.36343 17.2021 1.77502 17.9443 1.77502C18.6866 1.77502 19.2883 2.36343 19.2883 3.08927V4.32969C20.4502 4.47569 21.5795 4.80832 22.6306 5.31414V5.93435C22.6241 9.44413 25.1451 12.4733 28.6608 13.1799C28.7639 13.762 28.8178 14.3514 28.8219 14.9421V19.8053C28.9479 21.4565 29.41 23.0664 30.1809 24.5406C30.8868 25.6087 31.7367 26.579 32.7078 27.425Z" />\n' +
    '<path d="M20.6977 31.5302C20.5067 32.7972 19.4097 33.7453 18.1004 33.7747C16.7528 33.7938 15.5991 32.834 15.4024 31.5302H20.6977Z" />\n' +
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n',
};

export const bellIconName = 'bell';
export const bellIcon: IconShapeTuple = [bellIconName, renderIcon(icon)];
