/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29.9289 28H7.93713C7.38733 28 6.9375 27.55 6.9375 27V5.09C6.9375 3.38 8.32698 2 10.0264 2H27.8397C29.5491 2 30.9286 3.39 30.9286 5.09V27C30.9286 27.55 30.4787 28 29.9289 28ZM8.93676 26H28.9293V5.09C28.9293 4.49 28.4395 4 27.8397 4H10.0264C9.42657 4 8.93676 4.49 8.93676 5.09V26Z"/><path d="M25.9304 16H11.9356C11.3858 16 10.936 15.55 10.936 15V7C10.936 6.45 11.3858 6 11.9356 6H25.9304C26.4802 6 26.9301 6.45 26.9301 7V15C26.9301 15.55 26.4802 16 25.9304 16ZM12.9353 14H24.9308V8H12.9353V14Z"/><path d="M13.9349 24C12.2855 24 10.936 22.65 10.936 21C10.936 19.35 12.2855 18 13.9349 18C15.5843 18 16.9338 19.35 16.9338 21C16.9338 22.65 15.5843 24 13.9349 24ZM13.9349 20C13.3851 20 12.9353 20.45 12.9353 21C12.9353 21.55 13.3851 22 13.9349 22C14.4847 22 14.9345 21.55 14.9345 21C14.9345 20.45 14.4847 20 13.9349 20Z"/><path d="M23.9312 24C22.2818 24 20.9323 22.65 20.9323 21C20.9323 19.35 22.2818 18 23.9312 18C25.5806 18 26.9301 19.35 26.9301 21C26.9301 22.65 25.5806 24 23.9312 24ZM23.9312 20C23.3814 20 22.9315 20.45 22.9315 21C22.9315 21.55 23.3814 22 23.9312 22C24.481 22 24.9308 21.55 24.9308 21C24.9308 20.45 24.481 20 23.9312 20Z"/><path d="M10.6061 30L7.67722 32.2C7.23739 32.53 7.14742 33.16 7.4773 33.6C7.67722 33.86 7.97711 34 8.277 34C8.48692 34 8.69685 33.93 8.87678 33.8L13.9449 30H10.6061Z"/><path d="M30.5287 32.2L27.5998 30H24.271L29.3392 33.8C29.5191 33.93 29.729 34 29.9389 34C30.2388 34 30.5387 33.86 30.7386 33.6C31.0685 33.16 30.9786 32.53 30.5387 32.2H30.5287Z"/>',
  solid:
    '<path d="M10.6061 30L7.67722 32.2C7.23739 32.53 7.14742 33.16 7.4773 33.6C7.67722 33.86 7.97711 34 8.277 34C8.48692 34 8.69685 33.93 8.87678 33.8L13.9449 30H10.6061Z"/><path d="M30.5287 32.2L27.5998 30H24.271L29.3392 33.8C29.5191 33.93 29.729 34 29.9389 34C30.2388 34 30.5387 33.86 30.7386 33.6C31.0685 33.16 30.9786 32.53 30.5387 32.2H30.5287Z"/><path d="M24.9308 8H12.9353V14H24.9308V8Z"/><path d="M13.9349 22C14.487 22 14.9345 21.5523 14.9345 21C14.9345 20.4477 14.487 20 13.9349 20C13.3828 20 12.9353 20.4477 12.9353 21C12.9353 21.5523 13.3828 22 13.9349 22Z"/><path d="M27.8397 2H10.0264C8.31699 2 6.9375 3.39 6.9375 5.09V27C6.9375 27.55 7.38733 28 7.93713 28H29.9289C30.4787 28 30.9286 27.55 30.9286 27V5.09C30.9286 3.38 29.5391 2 27.8397 2ZM13.9349 24C12.2855 24 10.936 22.65 10.936 21C10.936 19.35 12.2855 18 13.9349 18C15.5843 18 16.9338 19.35 16.9338 21C16.9338 22.65 15.5843 24 13.9349 24ZM23.9312 24C22.2818 24 20.9323 22.65 20.9323 21C20.9323 19.35 22.2818 18 23.9312 18C25.5806 18 26.9301 19.35 26.9301 21C26.9301 22.65 25.5806 24 23.9312 24ZM26.9301 15C26.9301 15.55 26.4802 16 25.9304 16H11.9356C11.3858 16 10.936 15.55 10.936 15V7C10.936 6.45 11.3858 6 11.9356 6H25.9304C26.4802 6 26.9301 6.45 26.9301 7V15Z"/><path d="M23.9312 22C24.4833 22 24.9308 21.5523 24.9308 21C24.9308 20.4477 24.4833 20 23.9312 20C23.3791 20 22.9315 20.4477 22.9315 21C22.9315 21.5523 23.3791 22 23.9312 22Z"/>',
};

export const trainIconName = 'train';
export const trainIcon: IconShapeTuple = [trainIconName, renderIcon(icon)];
