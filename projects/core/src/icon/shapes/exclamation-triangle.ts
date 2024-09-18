/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M17.9943 20.8C18.544 20.8 18.9938 20.35 18.9938 19.8V14C18.9938 13.45 18.544 13 17.9943 13C17.4445 13 16.9947 13.45 16.9947 14V19.8C16.9947 20.35 17.4445 20.8 17.9943 20.8ZM18.8439 22.95C18.7239 22.84 18.594 22.75 18.4541 22.69C18.1642 22.57 17.8243 22.57 17.5345 22.69C17.3945 22.75 17.2646 22.84 17.1446 22.95C16.9247 23.18 16.7948 23.48 16.7948 23.8C16.7948 24.12 16.9247 24.42 17.1446 24.65C17.2646 24.76 17.3945 24.85 17.5345 24.91C17.6844 24.97 17.8343 25 17.9943 25C18.1542 25 18.3041 24.97 18.4541 24.91C18.594 24.85 18.7239 24.76 18.8439 24.65C19.0638 24.42 19.1937 24.12 19.1937 23.8C19.1937 23.64 19.1637 23.49 19.1038 23.34C19.0438 23.2 18.9538 23.06 18.8439 22.95ZM30.5986 25.43L20.6631 7.57C20.1133 6.59 19.1238 6 17.9943 6C16.8648 6 15.8752 6.59 15.3254 7.57L5.38988 25.43C4.85012 26.39 4.87011 27.53 5.41987 28.48C5.96962 29.43 6.95918 30 8.05869 30H27.9298C29.0293 30 30.0089 29.43 30.5686 28.48C31.1284 27.53 31.1384 26.39 30.5986 25.43ZM28.8494 27.47C28.7595 27.63 28.4796 28 27.9398 28H8.05869C7.50894 28 7.23906 27.63 7.1491 27.47C7.05914 27.31 6.86922 26.89 7.1491 26.41L17.0647 8.55C17.3346 8.06 17.8043 8 17.9843 8C18.1642 8 18.634 8.05 18.9039 8.55L28.8394 26.41C29.1093 26.89 28.9194 27.31 28.8294 27.47H28.8494Z" />\n',
  solid:
    '<path d="M30.5986 25.43L20.6631 7.57C20.1133 6.59 19.1238 6 17.9943 6C16.8648 6 15.8752 6.59 15.3254 7.57L5.38988 25.43C4.85012 26.39 4.87011 27.53 5.41987 28.48C5.96962 29.43 6.95918 30 8.05869 30H27.9298C29.0293 30 30.0089 29.43 30.5686 28.48C31.1284 27.53 31.1384 26.39 30.5986 25.43ZM16.7948 13.5C16.7948 12.84 17.3346 12.3 17.9943 12.3C18.654 12.3 19.1937 12.84 19.1937 13.5V19.3C19.1937 19.96 18.654 20.5 17.9943 20.5C17.3346 20.5 16.7948 19.96 16.7948 19.3V13.5ZM18.9738 25C18.8339 25.13 18.684 25.23 18.524 25.3C18.3441 25.37 18.1742 25.41 17.9943 25.41C17.8143 25.41 17.6344 25.38 17.4545 25.3C17.3046 25.23 17.1546 25.13 16.9947 24.99C16.7348 24.72 16.5849 24.37 16.5849 24C16.5849 23.63 16.7248 23.29 16.9947 23C17.1346 22.87 17.2846 22.77 17.4445 22.7C17.6144 22.63 17.7943 22.59 17.9843 22.59C18.1742 22.59 18.3541 22.63 18.524 22.7C18.674 22.77 18.8239 22.87 18.9738 23C19.0938 23.12 19.2037 23.28 19.2737 23.46C19.3437 23.64 19.3836 23.81 19.3836 23.99C19.3836 24.35 19.2437 24.7 18.9638 24.99L18.9738 25Z" />\n',
};

export const exclamationTriangleIconName = 'exclamation-triangle';
export const exclamationTriangleIcon: IconShapeTuple = [exclamationTriangleIconName, renderIcon(icon)];
