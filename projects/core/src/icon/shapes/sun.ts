/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M8.81 10.22C9.01 10.42 9.26 10.51 9.52 10.51C9.78 10.51 10.03 10.41 10.23 10.22C10.62 9.83 10.62 9.2 10.23 8.81L8.11 6.69C7.72 6.3 7.09 6.3 6.7 6.69C6.31 7.08 6.31 7.71 6.7 8.1L8.82 10.22H8.81ZM7 18C7 17.45 6.55 17 6 17H3C2.45 17 2 17.45 2 18C2 18.55 2.45 19 3 19H6C6.55 19 7 18.55 7 18ZM18 7C18.55 7 19 6.55 19 6V3C19 2.45 18.55 2 18 2C17.45 2 17 2.45 17 3V6C17 6.55 17.45 7 18 7ZM26.49 10.51C26.75 10.51 27 10.41 27.2 10.22L29.32 8.1C29.71 7.71 29.71 7.08 29.32 6.69C28.93 6.3 28.3 6.3 27.91 6.69L25.79 8.81C25.4 9.2 25.4 9.83 25.79 10.22C25.99 10.42 26.24 10.51 26.5 10.51H26.49ZM8.81 25.78L6.69 27.9C6.3 28.29 6.3 28.92 6.69 29.31C6.89 29.51 7.14 29.6 7.4 29.6C7.66 29.6 7.91 29.5 8.11 29.31L10.23 27.19C10.62 26.8 10.62 26.17 10.23 25.78C9.84 25.39 9.21 25.39 8.82 25.78H8.81ZM33 17H30C29.45 17 29 17.45 29 18C29 18.55 29.45 19 30 19H33C33.55 19 34 18.55 34 18C34 17.45 33.55 17 33 17ZM18 9C13.04 9 9 13.04 9 18C9 22.96 13.04 27 18 27C22.96 27 27 22.96 27 18C27 13.04 22.96 9 18 9ZM18 25C14.14 25 11 21.86 11 18C11 14.14 14.14 11 18 11C21.86 11 25 14.14 25 18C25 21.86 21.86 25 18 25ZM27.19 25.78C26.8 25.39 26.17 25.39 25.78 25.78C25.39 26.17 25.39 26.8 25.78 27.19L27.9 29.31C28.1 29.51 28.35 29.6 28.61 29.6C28.87 29.6 29.12 29.5 29.32 29.31C29.71 28.92 29.71 28.29 29.32 27.9L27.2 25.78H27.19ZM18 29C17.45 29 17 29.45 17 30V33C17 33.55 17.45 34 18 34C18.55 34 19 33.55 19 33V30C19 29.45 18.55 29 18 29Z"/>',
  solid:
    '<path d="M8.81 25.78L6.69 27.9C6.3 28.29 6.3 28.92 6.69 29.31C6.89 29.51 7.14 29.6 7.4 29.6C7.66 29.6 7.91 29.5 8.11 29.31L10.23 27.19C10.62 26.8 10.62 26.17 10.23 25.78C9.84 25.39 9.21 25.39 8.82 25.78H8.81ZM7 18C7 17.45 6.55 17 6 17H3C2.45 17 2 17.45 2 18C2 18.55 2.45 19 3 19H6C6.55 19 7 18.55 7 18ZM8.81 10.22C9.01 10.42 9.26 10.51 9.52 10.51C9.78 10.51 10.03 10.41 10.23 10.22C10.62 9.83 10.62 9.2 10.23 8.81L8.11 6.69C7.72 6.3 7.09 6.3 6.7 6.69C6.31 7.08 6.31 7.71 6.7 8.1L8.82 10.22H8.81ZM26.49 10.51C26.75 10.51 27 10.41 27.2 10.22L29.32 8.1C29.71 7.71 29.71 7.08 29.32 6.69C28.93 6.3 28.3 6.3 27.91 6.69L25.79 8.81C25.4 9.2 25.4 9.83 25.79 10.22C25.99 10.42 26.24 10.51 26.5 10.51H26.49ZM18 7C18.55 7 19 6.55 19 6V3C19 2.45 18.55 2 18 2C17.45 2 17 2.45 17 3V6C17 6.55 17.45 7 18 7ZM18 29C17.45 29 17 29.45 17 30V33C17 33.55 17.45 34 18 34C18.55 34 19 33.55 19 33V30C19 29.45 18.55 29 18 29ZM33 17H30C29.45 17 29 17.45 29 18C29 18.55 29.45 19 30 19H33C33.55 19 34 18.55 34 18C34 17.45 33.55 17 33 17ZM27.19 25.78C26.8 25.39 26.17 25.39 25.78 25.78C25.39 26.17 25.39 26.8 25.78 27.19L27.9 29.31C28.1 29.51 28.35 29.6 28.61 29.6C28.87 29.6 29.12 29.5 29.32 29.31C29.71 28.92 29.71 28.29 29.32 27.9L27.2 25.78H27.19ZM18 9C13.04 9 9 13.04 9 18C9 22.96 13.04 27 18 27C22.96 27 27 22.96 27 18C27 13.04 22.96 9 18 9Z"/>',
};

export const sunIconName = 'sun';
export const sunIcon: IconShapeTuple = [sunIconName, renderIcon(icon)];
