/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M23.5333 10.0063H30.3711L27.9119 12.4678C27.522 12.858 27.522 13.4884 27.9119 13.8787C28.1118 14.0788 28.3618 14.1689 28.6217 14.1689C28.8816 14.1689 29.1315 14.0688 29.3315 13.8787L34 8.99562L29.3215 4.29268C28.9316 3.90244 28.3018 3.90244 27.9119 4.29268C27.522 4.68293 27.522 5.31332 27.9119 5.70356L30.2012 7.995H22.4636L18.2049 14.379L19.4046 16.1801L23.5233 9.98624L23.5333 10.0063ZM10.4674 26.0163H2.99969C2.44986 26.0163 2 26.4665 2 27.0169C2 27.5672 2.44986 28.0175 2.99969 28.0175H11.537L15.7957 21.6235L14.5961 19.8224L10.4674 26.0263V26.0163ZM27.9119 22.1338C27.522 22.5241 27.522 23.1545 27.9119 23.5447L30.3711 26.0063H23.5333L18.2049 18.0013L17.0053 16.1901L11.547 7.995H2.99969C2.44986 7.995 2 8.44528 2 8.99562C2 9.54597 2.44986 9.99625 2.99969 9.99625H10.4574L15.7857 18.0013L16.9853 19.8024L22.4436 28.0075H30.1812L27.8919 30.2989C27.502 30.6892 27.502 31.3196 27.8919 31.7098C28.0918 31.9099 28.3418 32 28.6017 32C28.8616 32 29.1115 31.8999 29.3115 31.7098L33.98 26.9969L29.3115 22.1138C28.9216 21.7236 28.2918 21.7236 27.9019 22.1138L27.9119 22.1338Z" />\n',
};

export const shuffleIconName = 'shuffle';
export const shuffleIcon: IconShapeTuple = [shuffleIconName, renderIcon(icon)];
