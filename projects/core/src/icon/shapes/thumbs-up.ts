/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M18.3301 4.85911C18.1701 3.22962 16.8101 2 15.1501 2H15.0201C13.3601 2 12.0001 3.33958 12.0001 4.98907V13.9963H5.00007C4.15007 13.9963 3.30007 14.3761 2.72007 15.0159C2.19007 15.5958 1.94007 16.3255 2.01007 17.1053L2.98007 25.8126C3.01007 26.1125 3.09007 26.3924 3.20007 26.6623L5.56007 32.1806C6.03007 33.2802 7.12007 34 8.32007 34H19.3301C19.9801 34 20.6101 33.7901 21.1301 33.4002L24.0001 31.2509V29.0016C23.7801 29.0016 23.5701 29.0715 23.4001 29.2015L19.9301 31.8007C19.7601 31.9306 19.5501 32.0006 19.3301 32.0006H8.32007C7.92007 32.0006 7.56007 31.7607 7.40007 31.3908L5.04007 25.8725C5.00007 25.7826 4.98007 25.6926 4.97007 25.5926L4.01007 16.9053C3.99007 16.7054 4.06007 16.5255 4.21007 16.3655C4.41007 16.1456 4.73007 15.9956 5.02007 15.9956H13.0201C13.5701 15.9956 14.0201 15.5458 14.0201 14.9959V4.98907C14.0201 4.42924 14.4701 3.99938 15.0401 3.99938H15.1701C15.7801 3.99938 16.3101 4.45923 16.3601 5.04905C17.1001 12.8166 23.2301 16.6854 23.4901 16.8454C23.6501 16.9453 23.8301 16.9953 24.0201 16.9953V14.766C22.6201 13.7063 18.8801 10.3674 18.3501 4.85911H18.3301ZM27.0001 13.9463C26.4501 13.9463 26.0001 14.3961 26.0001 14.946V30.941C26.0001 31.4908 26.4501 31.9406 27.0001 31.9406H34.0001V13.9463H27.0001ZM32.0001 29.9413H28.0001V15.9456H32.0001V29.9413Z" fill="black"/>\n',
  solid:
    '<path d="M19.63,12.12C17.51,9.28,14.88,2,14.88,2S12,2.83,12,5.25V15H2.23a29.46,29.46,0,0,0,1.44,9.74C5.61,30.27,7.8,32,7.8,32h6.86C16.9,32,21,30.06,24,28.31V15.51A10.84,10.84,0,0,1,19.63,12.12Z"/><path d="M27,13a1,1,0,0,0-1,1V30a1,1,0,0,0,1,1h7V13Z"/>',
};

export const thumbsUpIconName = 'thumbs-up';
export const thumbsUpIcon: IconShapeTuple = [thumbsUpIconName, renderIcon(icon)];
