/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18.086 13c-2.77 0-5.029 2.24-5.029 5s2.26 5 5.029 5 5.029-2.24 5.029-5-2.26-5-5.029-5m0 8c-1.66 0-3.02-1.35-3.02-3s1.35-3 3.02-3 3.02 1.35 3.02 3-1.35 3-3.02 3m1.82-14.14c.74-.44 1.47-.82 2.179-1.15.3.18.65.29 1.03.29.9 0 1.65-.59 1.91-1.39 1.039-.29 1.999-.44 2.849-.44 1.33 0 2.389.35 3.079 1.04 1.57 1.56 1.36 5-.66 9.14.46.61.9 1.21 1.31 1.82 2.789-5.18 3.269-9.9.78-12.37-1.73-1.71-4.52-2.01-7.779-1.14a2.01 2.01 0 0 0-3.5 1.32c-.989.47-1.998 1.02-3.018 1.66C12.177 1.95 6.579 1.03 3.8 3.79c-1.56 1.57-1.94 4.03-1.32 6.93-.3.35-.48.79-.48 1.28 0 .93.64 1.71 1.51 1.93.55 1.32 1.28 2.69 2.16 4.08-3.72 5.87-4.64 11.43-1.87 14.2 1.1 1.09 2.639 1.61 4.468 1.61 2.8 0 6.259-1.22 9.838-3.46 1.01.63 2.01 1.19 3 1.65A2 2 0 0 0 23.114 34c.6 0 1.13-.26 1.49-.67 1.169.32 2.279.49 3.299.49 1.829 0 3.369-.52 4.468-1.61 3.86-3.84.61-13.09-7.398-21.05a41 41 0 0 0-5.068-4.3M30.953 30.8c-1.14 1.13-3.27 1.33-5.929.59-.26-.8-1.01-1.38-1.9-1.38-.38 0-.72.11-1.02.29-.709-.33-1.429-.71-2.178-1.15a41.6 41.6 0 0 0 5.058-4.29c1.65-1.65 3.1-3.34 4.32-5.04 2.938 4.95 3.448 9.2 1.659 10.99zm-7.398-7.36c-7.688 7.65-15.686 9.98-18.326 7.36-1.79-1.78-1.27-6.04 1.66-10.98 1.23 1.69 2.66 3.39 4.319 5.03a44 44 0 0 0 3.179 2.87c.6-.34 1.21-.71 1.82-1.11-1.19-.93-2.39-1.98-3.58-3.17C9.148 19.98 6.78 16.46 5.45 13.4c.35-.36.57-.85.57-1.4 0-.98-.71-1.8-1.65-1.96-.41-2.15-.12-3.85.86-4.83.69-.69 1.75-1.04 3.08-1.04 2.119 0 4.908.89 7.967 2.68a40 40 0 0 0-5.068 4.3 43 43 0 0 0-3.05 3.38c.33.6.7 1.21 1.11 1.82.98-1.26 2.09-2.53 3.36-3.79A40 40 0 0 1 18.087 8c1.79 1.22 3.629 2.74 5.459 4.56s3.349 3.66 4.578 5.44c-1.23 1.78-2.749 3.61-4.578 5.43z"/>',
  solid:
    '<path d="M18.086 13c-2.77 0-5.029 2.24-5.029 5s2.26 5 5.029 5 5.029-2.24 5.029-5-2.26-5-5.029-5m1.82-6.14c.74-.44 1.47-.82 2.179-1.15.3.18.65.29 1.03.29.9 0 1.65-.59 1.91-1.39 1.039-.29 1.999-.44 2.849-.44 1.33 0 2.389.35 3.079 1.04 1.57 1.56 1.36 5-.66 9.14.46.61.9 1.21 1.31 1.82 2.789-5.18 3.269-9.9.78-12.37-1.73-1.71-4.52-2.01-7.779-1.14a2.01 2.01 0 0 0-3.5 1.32c-.989.47-1.998 1.02-3.018 1.66C12.177 1.95 6.579 1.03 3.8 3.79c-1.56 1.57-1.94 4.03-1.32 6.93-.3.35-.48.79-.48 1.28 0 .93.64 1.71 1.51 1.93.55 1.32 1.28 2.69 2.16 4.08-3.72 5.87-4.64 11.43-1.87 14.2 1.1 1.09 2.639 1.61 4.468 1.61 2.8 0 6.259-1.22 9.838-3.46 1.01.63 2.01 1.19 3 1.65A2 2 0 0 0 23.114 34c.6 0 1.13-.26 1.49-.67 1.169.32 2.279.49 3.299.49 1.829 0 3.369-.52 4.468-1.61 3.86-3.84.61-13.09-7.398-21.05a41 41 0 0 0-5.068-4.3M30.953 30.8c-1.14 1.13-3.27 1.33-5.929.59-.26-.8-1.01-1.38-1.9-1.38-.38 0-.72.11-1.02.29-.709-.33-1.429-.71-2.178-1.15a41.6 41.6 0 0 0 5.058-4.29c1.65-1.65 3.1-3.34 4.32-5.04 2.938 4.95 3.448 9.2 1.659 10.99zm-7.398-7.36c-7.688 7.65-15.686 9.98-18.326 7.36-1.79-1.78-1.27-6.04 1.66-10.98 1.23 1.69 2.66 3.39 4.319 5.03a44 44 0 0 0 3.179 2.87c.6-.34 1.21-.71 1.82-1.11-1.19-.93-2.39-1.98-3.58-3.17C9.148 19.98 6.78 16.46 5.45 13.4c.35-.36.57-.85.57-1.4 0-.98-.71-1.8-1.65-1.96-.41-2.15-.12-3.85.86-4.83.69-.69 1.75-1.04 3.08-1.04 2.119 0 4.908.89 7.967 2.68a40 40 0 0 0-5.068 4.3 43 43 0 0 0-3.05 3.38c.33.6.7 1.21 1.11 1.82.98-1.26 2.09-2.53 3.36-3.79A40 40 0 0 1 18.087 8c1.79 1.22 3.629 2.74 5.459 4.56s3.349 3.66 4.578 5.44c-1.23 1.78-2.749 3.61-4.578 5.43z"/>',
};

export const atomIconName = 'atom';
export const atomIcon: IconShapeTuple = [atomIconName, renderIcon(icon)];
