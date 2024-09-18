/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M22.1251 2.5H33.0388C33.5918 2.5 34.04 2.94878 34.04 3.50238V14.4283C34.04 14.9819 33.5918 15.4307 33.0388 15.4307C32.4858 15.4307 32.0375 14.9819 32.0375 14.4283V5.96824L23.2666 14.9295C23.0162 15.1856 22.6483 15.2884 22.3016 15.1994C21.955 15.1103 21.6821 14.8428 21.5858 14.4977C21.4895 14.1526 21.5844 13.7822 21.8348 13.5262L30.6658 4.50476H22.1251C21.5722 4.50476 21.1239 4.05598 21.1239 3.50238C21.1239 2.94878 21.5722 2.5 22.1251 2.5Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5519 11.2507L2.54067 16.433C2.22965 16.6128 2.03862 16.9456 2.04005 17.3051V28.3313C2.03862 28.6908 2.22965 29.0236 2.54067 29.2034L11.5519 34.3656C11.8617 34.5447 12.2434 34.5447 12.5532 34.3656L21.5644 29.2034C21.8755 29.0236 22.0665 28.6908 22.0651 28.3313V17.3051C22.0665 16.9456 21.8755 16.6128 21.5644 16.433L12.5532 11.2507C12.2434 11.0717 11.8617 11.0717 11.5519 11.2507ZM11.0113 31.6492L4.0025 27.6396V18.9791L11.0113 22.9886V31.6492ZM4.81351 17.4054L12.0125 21.5452L19.2315 17.4355L12.0125 13.3057L4.81351 17.4054ZM20.0225 27.6497L13.0138 31.6592V22.9886L20.0225 18.9791V27.6497Z" />',
  solid:
    '<path d="M22.1 2.5H33C33.5523 2.5 34 2.9554 34 3.51716V14.6043C34 15.166 33.5523 15.6214 33 15.6214C32.4477 15.6214 32 15.166 32 14.6043V6.01939L23.24 15.1128C22.9899 15.3727 22.6226 15.4771 22.2763 15.3867C21.93 15.2963 21.6575 15.0249 21.5613 14.6747C21.4651 14.3244 21.5599 13.9486 21.81 13.6888L30.63 4.53433H22.1C21.5477 4.53433 21.1 4.07893 21.1 3.51716C21.1 2.9554 21.5477 2.5 22.1 2.5Z" />\n' +
    '<path d="M12.46 11.3798C12.1506 11.1981 11.7694 11.1981 11.46 11.3798L2.78001 16.4656L12 21.826L21.19 16.4758L12.46 11.3798Z" />\n' +
    '<path d="M2.50001 29.5566C2.18937 29.3742 1.99858 29.0365 2.00001 28.6717V18.0423L11 23.3112V34.5L2.50001 29.5566Z" />\n' +
    '<path d="M21.5 29.5566L13 34.5V23.2909L22 18.0525V28.6717C22.0014 29.0365 21.8106 29.3742 21.5 29.5566Z" />\n',
};

export const deployIconName = 'deploy';
export const deployIcon: IconShapeTuple = [deployIconName, renderIcon(icon)];
