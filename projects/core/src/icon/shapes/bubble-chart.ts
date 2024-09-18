/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 5H32C33.105 5 34 5.895 34 7V29C34 30.105 33.105 31 32 31H4C2.895 31 2 30.105 2 29V7C2 5.895 2.895 5 4 5ZM4 7V29H32V7H4ZM29 18C29 19.657 27.657 21 26 21C24.343 21 23 19.657 23 18C23 16.343 24.343 15 26 15C27.657 15 29 16.343 29 18ZM24.6 18C24.6 17.227 25.227 16.6 26 16.6C26.773 16.6 27.4 17.227 27.4 18C27.4 18.773 26.773 19.4 26 19.4C25.227 19.4 24.6 18.773 24.6 18ZM15 14C15 16.209 13.209 18 11 18C8.791 18 7 16.209 7 14C7 11.791 8.791 10 11 10C13.209 10 15 11.791 15 14ZM8.6 14C8.6 12.675 9.675 11.6 11 11.6C12.325 11.6 13.4 12.675 13.4 14C13.4 15.325 12.325 16.4 11 16.4C9.675 16.4 8.6 15.325 8.6 14ZM21 23C21 24.657 19.657 26 18 26C16.343 26 15 24.657 15 23C15 21.343 16.343 20 18 20C19.657 20 21 21.343 21 23ZM16.6 23C16.6 22.227 17.227 21.6 18 21.6C18.773 21.6 19.4 22.227 19.4 23C19.4 23.773 18.773 24.4 18 24.4C17.227 24.4 16.6 23.773 16.6 23Z" />',

  outlineAlerted:
    '<path d="M26.904 1.60324L21.2223 11.0729C20.9527 11.4554 20.9283 11.9519 21.159 12.3575C21.3897 12.7631 21.8364 13.009 22.3149 12.9937H33.6883C34.1667 13.009 34.6135 12.7631 34.8442 12.3575C35.0749 11.9519 35.0504 11.4554 34.7809 11.0729L29.0992 1.60324C28.8712 1.22616 28.4533 0.994385 28.0016 0.994385C27.5498 0.994385 27.132 1.22616 26.904 1.60324Z" />\n' +
    '<path d="M22.5336 5H4C2.895 5 2 5.895 2 7V29C2 30.105 2.895 31 4 31H32C33.105 31 34 30.105 34 29V14.9833C33.8886 14.9925 33.7764 14.996 33.6637 14.9937H32V29H4V7H21.3336L22.5336 5Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M26 21C27.657 21 29 19.657 29 18C29 16.343 27.657 15 26 15C24.343 15 23 16.343 23 18C23 19.657 24.343 21 26 21ZM26 16.6C25.227 16.6 24.6 17.227 24.6 18C24.6 18.773 25.227 19.4 26 19.4C26.773 19.4 27.4 18.773 27.4 18C27.4 17.227 26.773 16.6 26 16.6Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M11 18C13.209 18 15 16.209 15 14C15 11.791 13.209 10 11 10C8.791 10 7 11.791 7 14C7 16.209 8.791 18 11 18ZM11 11.6C9.675 11.6 8.6 12.675 8.6 14C8.6 15.325 9.675 16.4 11 16.4C12.325 16.4 13.4 15.325 13.4 14C13.4 12.675 12.325 11.6 11 11.6Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 26C19.657 26 21 24.657 21 23C21 21.343 19.657 20 18 20C16.343 20 15 21.343 15 23C15 24.657 16.343 26 18 26ZM18 21.6C17.227 21.6 16.6 22.227 16.6 23C16.6 23.773 17.227 24.4 18 24.4C18.773 24.4 19.4 23.773 19.4 23C19.4 22.227 18.773 21.6 18 21.6Z" />',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M32 29V13.22C32.706 13.026 33.38 12.73 34 12.34V29C34 30.104 33.104 31 32 31H4C2.895 31 2 30.104 2 29V7C2 5.895 2.895 5 4 5H22.57C22.524 5.331 22.501 5.665 22.5 6C22.501 6.334 22.524 6.668 22.57 7H4V29H32Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M26 21C27.657 21 29 19.657 29 18C29 16.343 27.657 15 26 15C24.343 15 23 16.343 23 18C23 19.657 24.343 21 26 21ZM26 16.6C25.227 16.6 24.6 17.227 24.6 18C24.6 18.773 25.227 19.4 26 19.4C26.773 19.4 27.4 18.773 27.4 18C27.4 17.227 26.773 16.6 26 16.6Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M11 18C13.209 18 15 16.209 15 14C15 11.791 13.209 10 11 10C8.791 10 7 11.791 7 14C7 16.209 8.791 18 11 18ZM11 11.6C9.675 11.6 8.6 12.675 8.6 14C8.6 15.325 9.675 16.4 11 16.4C12.325 16.4 13.4 15.325 13.4 14C13.4 12.675 12.325 11.6 11 11.6Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 26C19.657 26 21 24.657 21 23C21 21.343 19.657 20 18 20C16.343 20 15 21.343 15 23C15 24.657 16.343 26 18 26ZM18 21.6C17.227 21.6 16.6 22.227 16.6 23C16.6 23.773 17.227 24.4 18 24.4C18.773 24.4 19.4 23.773 19.4 23C19.4 22.227 18.773 21.6 18 21.6Z" />',

  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M32 31C33.105 31 34 30.105 34 29V7C34 5.896 33.105 5 32 5H4C2.896 5 2 5.896 2 7V29C2 30.105 2.896 31 4 31H32ZM7 14C7 11.791 8.791 10 11 10C13.209 10 15 11.791 15 14C15 16.209 13.209 18 11 18C8.791 18 7 16.209 7 14ZM26 15C24.343 15 23 16.343 23 18C23 19.657 24.343 21 26 21C27.657 21 29 19.657 29 18C29 16.343 27.657 15 26 15ZM15 23C15 21.343 16.343 20 18 20C19.657 20 21 21.343 21 23C21 24.657 19.657 26 18 26C16.343 26 15 24.657 15 23Z" />',

  solidAlerted:
    '<path d="M26.904 1.61105L21.2223 11.0807C20.9527 11.4632 20.9283 11.9597 21.159 12.3653C21.3897 12.7709 21.8364 13.0168 22.3149 13.0015H33.6883C34.1667 13.0168 34.6135 12.7709 34.8442 12.3653C35.0749 11.9597 35.0504 11.4632 34.7809 11.0807L29.0992 1.61105C28.8712 1.23397 28.4533 1.0022 28.0016 1.0022C27.5498 1.0022 27.132 1.23397 26.904 1.61105Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5383 5H4C2.896 5 2 5.896 2 7V29C2 30.105 2.896 31 4 31H32C33.105 31 34 30.105 34 29V14.9911C33.8886 15.0003 33.7764 15.0038 33.6637 15.0015H26.0966C27.7089 15.0525 29 16.3753 29 18C29 19.657 27.657 21 26 21C24.343 21 23 19.657 23 18C23 16.3753 24.2911 15.0525 25.9034 15.0015H22.3395C21.1577 15.0252 20.0233 14.4137 19.4205 13.3542C18.8204 12.2991 18.8703 11.0071 19.5361 10.0036L22.5383 5ZM11 10C8.791 10 7 11.791 7 14C7 16.209 8.791 18 11 18C13.209 18 15 16.209 15 14C15 11.791 13.209 10 11 10ZM18 20C16.343 20 15 21.343 15 23C15 24.657 16.343 26 18 26C19.657 26 21 24.657 21 23C21 21.343 19.657 20 18 20Z" />',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M34 12.34V29C34 30.105 33.105 31 32 31H4C2.896 31 2 30.105 2 29V7C2 5.896 2.896 5 4 5H22.57C21.969 9.233 25.05 13.1 29.31 13.46L30.32 13.48C31.626 13.429 32.895 13.036 34 12.34ZM11 10C8.791 10 7 11.791 7 14C7 16.209 8.791 18 11 18C13.209 18 15 16.209 15 14C15 11.791 13.209 10 11 10ZM23 18C23 16.343 24.343 15 26 15C27.657 15 29 16.343 29 18C29 19.657 27.657 21 26 21C24.343 21 23 19.657 23 18ZM18 20C16.343 20 15 21.343 15 23C15 24.657 16.343 26 18 26C19.657 26 21 24.657 21 23C21 21.343 19.657 20 18 20Z" />',
};

export const bubbleChartIconName = 'bubble-chart';
export const bubbleChartIcon: IconShapeTuple = [bubbleChartIconName, renderIcon(icon)];
