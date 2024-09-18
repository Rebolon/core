/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.87 8.1202H5.8L7.78 10.1527C8.16772 10.5511 8.16772 11.1945 7.78 11.5928C7.38996 11.9888 6.76004 11.9888 6.37 11.5928L2 7.09884L6.37 2.66614C6.76004 2.27014 7.38996 2.27014 7.78 2.66614C7.96931 2.85792 8.0758 3.11898 8.0758 3.39131C8.0758 3.66364 7.96931 3.9247 7.78 4.11647L5.87 6.07748H16.87V8.1202ZM29.61 25.1565C29.22 24.7605 28.59 24.7605 28.2 25.1565C28.0107 25.3483 27.9042 25.6093 27.9042 25.8817C27.9042 26.154 28.0107 26.415 28.2 26.6068L30.1 28.5474H19V30.5901H30.2L28.2 32.6328C27.8123 33.0312 27.8123 33.6746 28.2 34.073C28.3863 34.2616 28.6377 34.368 28.9 34.3691C29.1658 34.3707 29.4213 34.2641 29.61 34.073L34 29.6198L29.61 25.1565ZM10.97 28.5474H9V30.5902H10.97V28.5474ZM17 28.5474H13V30.5902H17V28.5474ZM25.01 6.07755H26.98V8.12027H25.01V6.07755ZM23 6.07755H19V8.12027H23V6.07755ZM27 22.4193V14.2484C27 13.1203 26.1046 12.2057 25 12.2057H11C9.89543 12.2057 9 13.1203 9 14.2484V22.4193C9 23.5475 9.89543 24.462 11 24.462H25C26.1046 24.462 27 23.5475 27 22.4193ZM25 14.2484H11V22.4193H25V14.2484Z" fill="black"/>\n',
};

export const nvmeIconName = 'nvme';
export const nvmeIcon: IconShapeTuple = [nvmeIconName, renderIcon(icon)];
