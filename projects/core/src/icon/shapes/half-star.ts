/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M33.95 16.1241C33.83 15.7643 33.52 15.5144 33.15 15.4544L23.31 13.9549L18.91 4.56829C18.74 4.21842 18.39 3.9885 18 3.9885C17.61 3.9885 17.26 4.20842 17.09 4.56829L12.68 13.9549L2.84996 15.4544C2.47996 15.5144 2.16996 15.7743 2.04996 16.1241C1.92996 16.474 2.01996 16.8739 2.27996 17.1438L9.42996 24.4711L7.73996 34.8274C7.67996 35.2073 7.83996 35.5871 8.14996 35.8071C8.45996 36.027 8.87996 36.047 9.20996 35.867L18 31.0088L26.79 35.867C26.94 35.947 27.11 35.987 27.27 35.987C27.47 35.987 27.67 35.927 27.85 35.8071C28.16 35.5871 28.32 35.2073 28.26 34.8274L26.57 24.4711L33.72 17.1438C33.98 16.8739 34.07 16.484 33.95 16.1241ZM18 28.8496C17.83 28.8496 17.67 28.8895 17.52 28.9695L10.05 33.098L11.49 24.2812C11.54 23.9713 11.44 23.6514 11.22 23.4215L5.07996 17.1338L13.52 15.8442C13.85 15.7943 14.13 15.5843 14.27 15.2844L18 7.3373V28.8496Z" fill="black"/>\n',
  solid:
    '<path d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.23.23,0,0,1,.08.24L7.35,31.21a2.22,2.22,0,0,0,3.38,2.45l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.2,2.2,0,0,0,2.55,0,2.2,2.2,0,0,0,.83-2.4l-2.45-8.64a.22.22,0,0,1,.08-.24ZM24.9,23.11l2.45,8.64A.22.22,0,0,1,27,32l-7.46-5a2.21,2.21,0,0,0-1.24-.38h0V4.44h0a.2.2,0,0,1,.21.15L21.62,13a2.22,2.22,0,0,0,2,1.46l9,.34a.22.22,0,0,1,.13.4l-7.06,5.55A2.21,2.21,0,0,0,24.9,23.11Z"/>',
};

export const halfStarIconName = 'half-star';
export const halfStarIcon: IconShapeTuple = [halfStarIconName, renderIcon(icon)];
