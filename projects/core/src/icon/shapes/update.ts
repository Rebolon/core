/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M19.5 28.1h-2.9c-.5 0-.9-.3-1-.8l-.5-1.8-.4-.2-1.6.9c-.4.2-.9.2-1.2-.2l-2.1-2.1c-.3-.3-.4-.8-.2-1.2l.9-1.6-.2-.4-1.8-.5c-.4-.1-.8-.5-.8-1v-2.9c0-.5.3-.9.8-1l1.8-.5.2-.4-.9-1.6c-.2-.4-.2-.9.2-1.2l2.1-2.1c.3-.3.8-.4 1.2-.2l1.6.9.4-.2.5-1.8c.1-.4.5-.8 1-.8h2.9c.5 0 .9.3 1 .8L21 10l.4.2 1.6-.9c.4-.2.9-.2 1.2.2l2.1 2.1c.3.3.4.8.2 1.2l-.9 1.6.2.4 1.8.5c.4.1.8.5.8 1v2.9c0 .5-.3.9-.8 1l-1.8.5-.2.4.9 1.6c.2.4.2.9-.2 1.2L24.2 26c-.3.3-.8.4-1.2.2l-1.6-.9-.4.2-.5 1.8c-.2.5-.6.8-1 .8m-2.2-2h1.4l.5-2.1.5-.2c.4-.1.7-.3 1.1-.4l.5-.3 1.9 1.1 1-1-1.1-1.9.3-.5c.2-.3.3-.7.4-1.1l.2-.5 2.1-.5v-1.4l-2.1-.5-.2-.5c-.1-.4-.3-.7-.4-1.1l-.3-.5 1.1-1.9-1-1-1.9 1.1-.5-.3c-.3-.2-.7-.3-1.1-.4l-.5-.2-.5-2.1h-1.4l-.5 2.1-.5.2c-.4.1-.7.3-1.1.4l-.5.3-1.9-1.1-1 1 1.1 1.9-.3.5c-.2.3-.3.7-.4 1.1l-.2.5-2.1.5v1.4l2.1.5.2.5c.1.4.3.7.4 1.1l.3.5-1.1 1.9 1 1 1.9-1.1.5.3c.3.2.7.3 1.1.4l.5.2zm9.8-6.6"/><path d="M18 22.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3m0-6.6c-1.3 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3 2.3-1 2.3-2.3-1-2.3-2.3-2.3"/><path d="M18 2c-.6 0-1 .4-1 1s.4 1 1 1c7.7 0 14 6.3 14 14s-6.3 14-14 14S4 25.7 4 18c0-2.8.8-5.5 2.4-7.8v1.2c0 .6.4 1 1 1s1-.4 1-1v-5h-5c-.6 0-1 .4-1 1s.4 1 1 1h1.8C3.1 11.1 2 14.5 2 18c0 8.8 7.2 16 16 16s16-7.2 16-16S26.8 2 18 2"/>',
};

export const updateIconName = 'update';
export const updateIcon: IconShapeTuple = [updateIconName, renderIcon(icon)];
