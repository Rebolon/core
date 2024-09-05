/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M2.56 31.8816C2.9 32.0515 3.31 32.0115 3.61 31.7817L15 23.0774V30.9922C15 31.372 15.22 31.7217 15.56 31.8916C15.9 32.0615 16.31 32.0215 16.61 31.7917L33.61 18.8002C33.86 18.6104 34 18.3206 34 18.0108C34 17.701 33.85 17.4012 33.61 17.2213L16.61 4.20987C16.43 4.06996 16.22 4.00001 16 4.00001C15.85 4.00001 15.7 4.02999 15.56 4.09994C15.22 4.26983 15 4.6196 15 4.99935V12.9141L3.61 4.20987C3.3 3.97003 2.9 3.93006 2.56 4.09994C2.22 4.26983 2 4.6196 2 4.99935V30.9822C2 31.362 2.22 31.7117 2.56 31.8816ZM4 7.01802L15.39 15.7223C15.69 15.9521 16.1 15.9921 16.44 15.8222C16.78 15.6523 17 15.3026 17 14.9228V7.01802L31.35 17.9908L17 28.9635V21.0488C17 20.669 16.78 20.3192 16.44 20.1494C16.1 19.9795 15.69 20.0194 15.39 20.2493L4 28.9635V7.01802Z" fill="black"/>\n',
  solid:
    '  <path d="M2.56 31.8816C2.9 32.0515 3.31 32.0115 3.61 31.7817L15 23.0774V30.9922C15 31.372 15.22 31.7217 15.56 31.8916C15.9 32.0615 16.31 32.0215 16.61 31.7917L33.61 18.8002C33.86 18.6104 34 18.3206 34 18.0108C34 17.701 33.85 17.4012 33.61 17.2213L16.61 4.20987C16.43 4.06996 16.22 4.00001 16 4.00001C15.85 4.00001 15.7 4.02999 15.56 4.09994C15.22 4.26983 15 4.6196 15 4.99935V12.9141L3.61 4.20987C3.3 3.97003 2.9 3.93006 2.56 4.09994C2.22 4.26983 2 4.6196 2 4.99935V30.9822C2 31.362 2.22 31.7117 2.56 31.8816Z" fill="black"/>\n',
};

export const fastForwardIconName = 'fast-forward';
export const fastForwardIcon: IconShapeTuple = [fastForwardIconName, renderIcon(icon)];
