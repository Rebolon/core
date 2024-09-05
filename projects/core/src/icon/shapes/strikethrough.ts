/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M29.39 24.28C29.04 25.03 28.49 25.67 27.79 26.13C27.09 26.56 26.28 26.79 25.46 26.79C24.64 26.79 23.83 26.56 23.13 26.13C22.43 25.68 21.87 25.03 21.52 24.28C21.4 24.03 21.33 23.76 21.25 23.5H19V27.34C19 27.46 19.02 27.57 19.07 27.68C19.12 27.79 19.19 27.89 19.27 27.97C19.36 28.05 19.46 28.11 19.57 28.16C19.68 28.2 19.8 28.22 19.92 28.21H20.12C20.35 28.21 20.57 28.12 20.73 27.96C20.89 27.8 20.99 27.58 20.99 27.35V25.72C21.47 26.57 22.17 27.28 23.02 27.78C23.89 28.27 24.87 28.52 25.87 28.5C26.98 28.51 28.08 28.21 29.02 27.62C29.96 27.03 30.71 26.2 31.19 25.21C31.46 24.67 31.65 24.09 31.77 23.5H29.65C29.57 23.76 29.5 24.03 29.38 24.28H29.39ZM14.12 23.97C14 24.39 13.79 24.79 13.51 25.13C13.23 25.47 12.89 25.76 12.5 25.97C11.68 26.44 10.75 26.69 9.81 26.69C8.97 26.73 8.14 26.48 7.45 25.99C7.15 25.78 6.91 25.49 6.74 25.16C6.58 24.83 6.5 24.46 6.51 24.09C6.51 23.89 6.55 23.69 6.6 23.5H4.67C4.63 23.72 4.6 23.95 4.6 24.18C4.58 24.76 4.69 25.34 4.92 25.87C5.15 26.4 5.5 26.87 5.95 27.24C6.92 28.04 8.16 28.46 9.42 28.41C10.35 28.41 11.27 28.2 12.11 27.78C12.93 27.41 13.63 26.8 14.11 26.04V27.21C14.11 27.44 14.2 27.66 14.36 27.82C14.52 27.98 14.74 28.07 14.97 28.07H15.11C15.34 28.07 15.56 27.98 15.72 27.82C15.88 27.66 15.97 27.44 15.97 27.21V23.5H14.11V23.97H14.12ZM33.71 19.79C33.52 19.6 33.27 19.5 33 19.5H31.73C31.6 18.99 31.42 18.49 31.18 18.02C30.69 17.02 29.92 16.17 28.96 15.57C28.02 14.99 26.92 14.68 25.81 14.69C24.81 14.67 23.83 14.93 22.96 15.42C22.11 15.92 21.41 16.62 20.93 17.47V9.36C20.93 9.13 20.83 8.92 20.67 8.75C20.51 8.59 20.29 8.5 20.05 8.5H19.92C19.69 8.5 19.47 8.59 19.3 8.75C19.14 8.91 19.04 9.13 19.04 9.36V19.5H15.96C15.9 18.24 15.45 17.02 14.61 16.06C14.09 15.54 13.46 15.14 12.77 14.88C12.08 14.62 11.34 14.52 10.61 14.57C9.26 14.6 7.93 14.9 6.7 15.45C6.59 15.5 6.49 15.56 6.41 15.65C6.33 15.74 6.27 15.84 6.22 15.95C6.18 16.06 6.16 16.18 6.17 16.3C6.17 16.42 6.21 16.53 6.26 16.64C6.3 16.74 6.37 16.83 6.45 16.91C6.53 16.99 6.62 17.05 6.73 17.09C6.83 17.13 6.94 17.15 7.05 17.15C7.16 17.15 7.27 17.12 7.37 17.08C7.79 16.88 8.22 16.71 8.66 16.56C9.25 16.35 9.87 16.23 10.49 16.22C11 16.17 11.52 16.24 12 16.43C12.48 16.62 12.9 16.93 13.24 17.33C13.71 17.97 13.99 18.73 14.07 19.51H3C2.73 19.51 2.48 19.62 2.29 19.8C2.1 19.98 2 20.24 2 20.51C2 20.78 2.11 21.03 2.29 21.22C2.48 21.41 2.73 21.51 3 21.51H33C33.27 21.51 33.52 21.4 33.71 21.22C33.9 21.03 34 20.78 34 20.51C34 20.24 33.89 19.99 33.71 19.8V19.79ZM21.25 19.5C21.32 19.3 21.4 19.1 21.49 18.9C21.84 18.15 22.4 17.52 23.1 17.07C23.8 16.63 24.61 16.4 25.43 16.4C26.25 16.4 27.07 16.63 27.76 17.07C28.45 17.52 29 18.16 29.36 18.9C29.45 19.1 29.53 19.3 29.6 19.5H21.25Z" fill="black"/>\n',
};

export const strikethroughIconName = 'strikethrough';
export const strikethroughIcon: IconShapeTuple = [strikethroughIconName, renderIcon(icon)];
