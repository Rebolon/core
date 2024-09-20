/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<circle cx="23.56" cy="17.74" r="1.95"/><circle cx="22.42" cy="25.88" r="1.58"/><circle cx="12.86" cy="17.74" r="1.95"/><circle cx="13.99" cy="25.88" r="1.58"/><path d="M30.83 20H29a19.3 19.3 0 0 0-1.18-5.73l1.46-.79a1 1 0 0 0-.95-1.76l-3 1.64A17.65 17.65 0 0 1 27 20.72c0 6.28-3.2 10.51-8.2 10.9V15h-1.6v16.62C12.22 31.21 9 27 9 20.72a17.7 17.7 0 0 1 1.73-7.34L7.7 11.72a1 1 0 0 0-.95 1.76l1.5.8A19.4 19.4 0 0 0 7.07 20h-1.9a1 1 0 0 0 0 2H7.1a14.6 14.6 0 0 0 1.66 6.17l-1.89 1.32A1 1 0 1 0 8 31.12l1.84-1.29A10.38 10.38 0 0 0 18 33.66a10.38 10.38 0 0 0 8.14-3.81L28 31.12a1 1 0 1 0 1.15-1.64l-1.86-1.3A14.6 14.6 0 0 0 28.94 22h1.89a1 1 0 0 0 0-2"/><path d="M11.51 5.36a1.67 1.67 0 0 0 1.07-.51A3.2 3.2 0 0 1 13.76 6a16.4 16.4 0 0 0-2.65 2.89 2 2 0 0 0 1.61 3.19h10.6A2 2 0 0 0 25.1 11a2 2 0 0 0-.17-2.1A16.3 16.3 0 0 0 22.25 6a3.2 3.2 0 0 1 1.17-1.11A1.68 1.68 0 1 0 23 3.27 4.77 4.77 0 0 0 21 5a5.8 5.8 0 0 0-2.93-1 5.83 5.83 0 0 0-3 1A4.77 4.77 0 0 0 13 3.27a1.68 1.68 0 1 0-1.49 2.09m6.49.71c1.45 0 3.53 1.57 5.31 4h-10.6c1.78-2.44 3.85-4 5.29-4"/>',

  solid:
    '<path d="M30.83 20H29a19.3 19.3 0 0 0-1.18-5.73l1.46-.79a1 1 0 0 0-.95-1.76l-3 1.28H10.78L7.7 11.72a1 1 0 0 0-.95 1.76l1.5.8A19.4 19.4 0 0 0 7.07 20h-1.9a1 1 0 0 0 0 2H7.1a14.6 14.6 0 0 0 1.66 6.17l-1.89 1.32A1 1 0 1 0 8 31.12l1.84-1.29A10.3 10.3 0 0 0 17 33.6V15h2v18.6a10.3 10.3 0 0 0 7.16-3.75L28 31.12a1 1 0 1 0 1.15-1.64l-1.86-1.3A14.6 14.6 0 0 0 28.94 22h1.89a1 1 0 0 0 0-2m-19.92-2.26a1.95 1.95 0 1 1 1.95 1.95 1.95 1.95 0 0 1-1.95-1.95M14 27.46a1.58 1.58 0 1 1 1.58-1.58A1.58 1.58 0 0 1 14 27.46m8.43 0A1.58 1.58 0 1 1 24 25.88a1.58 1.58 0 0 1-1.58 1.58Zm1.13-7.77a1.95 1.95 0 1 1 1.95-1.95 1.95 1.95 0 0 1-1.95 1.95M11.23 5.26a1.7 1.7 0 0 0 .54-.32 6 6 0 0 1 .89.58 7.4 7.4 0 0 1 .95.94 18.5 18.5 0 0 0-2.82 3.24c-.4.57.09 1.28.86 1.28h12.79c.77 0 1.26-.71.86-1.28a18.4 18.4 0 0 0-2.88-3.28 7.3 7.3 0 0 1 .91-.9 6 6 0 0 1 .89-.58 1.69 1.69 0 1 0-.56-1.51 7.5 7.5 0 0 0-1.32.83 9 9 0 0 0-1.19 1.18A5.85 5.85 0 0 0 18 4.3a5.9 5.9 0 0 0-3.17 1.19 9 9 0 0 0-1.22-1.21 7.5 7.5 0 0 0-1.32-.83 1.68 1.68 0 1 0-1.11 1.83Z"/>',
};

export const bugIconName = 'bug';
export const bugIcon: IconShapeTuple = [bugIconName, renderIcon(icon)];
