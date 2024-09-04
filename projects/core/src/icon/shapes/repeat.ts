/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M25.2724 20.3C24.9025 20.6903 24.9025 21.3206 25.2724 21.7109L28.3813 25.0029H8.99821C7.3488 25.0029 5.99929 23.6521 5.99929 22.0011V15.0267L4.01 12.9354C4.01 12.9354 4 12.9854 4 13.0054V22.0111C4 24.7728 6.2392 27.0142 8.99821 27.0142H28.3813L25.2724 30.3063C24.9025 30.6965 24.9025 31.3269 25.2724 31.7171C25.4523 31.9173 25.7022 32.0073 25.9422 32.0073C26.1821 32.0073 26.422 31.9073 26.6119 31.7171L32 26.0036L26.6119 20.29C26.2421 19.8998 25.6423 19.8998 25.2724 20.29V20.3ZM27.0018 9.00295H7.60871L10.7176 5.71089C11.0875 5.32064 11.0875 4.69025 10.7176 4.30001C10.3477 3.90976 9.74795 3.90976 9.37808 4.30001L4 10.0036L9.38808 15.7171C9.56801 15.9173 9.81792 16.0073 10.0578 16.0073C10.2978 16.0073 10.5377 15.9073 10.7276 15.7171C11.0975 15.3269 11.0975 14.6965 10.7276 14.3063L7.61871 11.0142H27.0018C28.6512 11.0142 30.0007 12.365 30.0007 14.0161V20.9904L31.99 23.0918C31.99 23.0918 32 23.0417 32 23.0217V14.0161C32 11.2544 29.7608 9.01295 27.0018 9.01295V9.00295Z" fill="black"/>\n',
};

export const repeatIconName = 'repeat';
export const repeatIcon: IconShapeTuple = [repeatIconName, renderIcon(icon)];
