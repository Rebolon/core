/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14 14c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6m0-10c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4m10.83 17.08a3.841 3.841 0 0 0 .07 7.68 3.85 3.85 0 0 0 3.81-3.87 3.863 3.863 0 0 0-3.88-3.81m1.61 5.42c-.43.43-1.01.66-1.61.66a2.24 2.24 0 0 1-2.2-2.26c0-1.23 1-2.22 2.23-2.22s2.23.98 2.25 2.21c0 .6-.24 1.19-.67 1.61m-10.22-8.8 1.36-1.3s.04-.03.06-.05c-1.11-.22-2.33-.36-3.65-.36-5.39 0-9.09 2.21-10.81 3.53-.76.58-1.19 1.45-1.19 2.39v5.07c0 .55.45 1 1 1s1-.45 1-1v-5.07a1 1 0 0 1 .4-.8c1.53-1.17 4.8-3.12 9.6-3.12.66 0 1.28.04 1.88.11.1-.14.22-.28.35-.41zm17.07 5.23-1.56-.46c-.07-.21-.16-.42-.26-.63l.72-1.33c.23-.44.15-.99-.21-1.34l-1.34-1.32c-.35-.35-.9-.44-1.34-.2l-1.34.71c-.22-.1-.44-.2-.67-.28l-.47-1.48c-.16-.46-.6-.76-1.08-.76h-1.92c-.5 0-.93.33-1.08.8l-.44 1.43c-.23.08-.46.18-.68.28l-1.32-.7c-.44-.23-.98-.16-1.33.19l-1.37 1.31c-.36.35-.45.9-.21 1.35l.7 1.28c-.11.21-.2.43-.28.65l-1.41.46c-.48.14-.81.59-.81 1.09v1.87c.02.49.35.9.82 1.04l1.47.44c.08.21.17.43.28.64l-.72 1.35c-.24.44-.16.99.2 1.35l1.34 1.32c.35.35.9.43 1.34.2l1.37-.72c.21.09.42.18.63.26l.44 1.47c.15.48.59.8 1.09.8h1.9c.49 0 .92-.33 1.07-.8l.44-1.47c.21-.07.42-.16.62-.25l1.38.73c.44.23.98.15 1.33-.2l1.34-1.32c.36-.35.45-.9.21-1.35L31.41 28c.09-.2.18-.4.25-.6l1.5-.44c.48-.13.82-.57.83-1.07v-1.86c.02-.48-.26-.92-.7-1.1m-2.9 3.18-.12.42c-.11.38-.26.74-.45 1.09l-.21.38 1 1.79-.86.84-1.82-1-.37.2c-.36.19-.73.35-1.12.46l-.42.12-.59 2H24.2l-.59-1.95-.42-.12c-.39-.11-.77-.26-1.13-.45l-.37-.2-1.81 1-.86-.85 1-1.82-.22-.38c-.2-.36-.37-.74-.49-1.13l-.13-.41-1.95-.58v-1.21l1.94-.58.12-.41c.12-.4.28-.78.49-1.14l.22-.39-1-1.73.87-.84 1.77.94.38-.21c.37-.21.76-.37 1.17-.49l.41-.12.59-1.91h1.23l.58 1.9.41.12c.4.12.79.28 1.16.48l.38.21 1.8-.95.86.85-1 1.77.21.38c.2.36.36.74.47 1.13l.12.42 1.93.57.05 1.22z"/>',
  solid:
    '<path d="M14.002 13.996a6.005 6.005 0 0 0 6.001-5.998 6.004 6.004 0 0 0-6-5.998A6.004 6.004 0 0 0 8 7.998a6.004 6.004 0 0 0 6.001 5.998m19.854 9.657-2-.6c-.14-.49-.34-.95-.58-1.4l1-1.839c.08-.14.05-.32-.07-.44l-1.48-1.439a.36.36 0 0 0-.44-.07l-1.851.99c-.45-.26-.93-.47-1.43-.62l-.61-1.98a.38.38 0 0 0-.36-.25h-2.001c-.16 0-.3.11-.35.26l-.61 1.98q-.75.225-1.44.6l-1.82-.99a.366.366 0 0 0-.44.07l-1.471 1.43c-.12.11-.15.29-.07.44l1 1.799c-.26.45-.46.93-.61 1.43l-2 .6c-.15.05-.26.19-.26.35v1.979c0 .16.11.3.26.35l2 .6c.15.49.35.959.61 1.399l-1 1.88c-.08.14-.05.32.07.44l1.41 1.489c.11.12.29.15.44.07l1.87-.99c.44.24.91.43 1.39.57l.61 1.98a.38.38 0 0 0 .351.259h2c.16 0 .3-.11.35-.26l.61-1.98q.72-.21 1.38-.57l1.891.99c.15.08.32.05.44-.07l1.45-1.439c.12-.11.15-.29.07-.44l-1-1.86c.24-.44.44-.899.58-1.379l2-.6c.15-.05.261-.19.261-.35v-2.029a.38.38 0 0 0-.15-.36m-8.822 4.679c-1.35.01-2.57-.79-3.09-2.02a3.29 3.29 0 0 1 .7-3.609c.95-.95 2.38-1.24 3.62-.73s2.06 1.72 2.06 3.05c0 1.81-1.47 3.289-3.29 3.299zm-9.352-6.618.83-.25-.4-.73c-.5-.93-.31-2.09.44-2.809l1.46-1.42s.04-.03.06-.05c-1.22-.27-2.57-.45-4.06-.45-5.391 0-9.092 2.21-10.812 3.53-.76.58-1.19 1.45-1.19 2.389v5.068c0 .55.45 1 1 1h12.192a2.36 2.36 0 0 1-1.19-2.04v-1.999c0-1.03.68-1.93 1.68-2.24z"/>',
};

export const administratorIconName = 'administrator';
export const administratorIcon: IconShapeTuple = [administratorIconName, renderIcon(icon)];
