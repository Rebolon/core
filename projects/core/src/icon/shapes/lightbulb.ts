/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24.011 27.9994H12.0032C11.4529 27.9994 11.0026 28.4494 11.0026 28.9994C11.0026 29.5494 11.4529 29.9994 12.0032 29.9994H24.011C24.5613 29.9994 25.0116 29.5494 25.0116 28.9994C25.0116 28.4494 24.5613 27.9994 24.011 27.9994ZM22.0097 31.9994H14.0045C13.4542 31.9994 13.0039 32.4494 13.0039 32.9994C13.0039 33.5494 13.4542 33.9994 14.0045 33.9994H22.0097C22.5601 33.9994 23.0103 33.5494 23.0103 32.9994C23.0103 32.4494 22.5601 31.9994 22.0097 31.9994ZM19.5081 9.22939C19.1579 8.87939 18.5875 8.87939 18.2373 9.22939L15.1052 12.3594C14.755 12.7094 14.755 13.2794 15.1052 13.6294C15.2854 13.8094 15.5155 13.8894 15.7457 13.8894C15.9758 13.8894 16.2059 13.7994 16.3861 13.6294L19.5181 10.4994C19.8683 10.1494 19.8683 9.57939 19.5181 9.22939H19.5081ZM19.4881 14.2094C19.1378 13.8594 18.5675 13.8594 18.2172 14.2094L15.3654 17.0594C15.0152 17.4094 15.0152 17.9794 15.3654 18.3294L17.1065 20.0694V25.9994H18.9077V19.6994C18.9077 19.4594 18.8176 19.2294 18.6475 19.0594L17.2866 17.6994L19.4981 15.4894C19.8483 15.1394 19.8483 14.5694 19.4981 14.2194L19.4881 14.2094ZM28.9542 11.8994C28.4539 6.76939 24.3812 2.62939 19.2579 2.06939C16.1259 1.71939 12.9939 2.71939 10.6624 4.79939C8.34087 6.88939 7 9.86939 7 12.9994C7 15.7794 8.04067 18.4394 9.9419 20.4794C11.2728 21.9094 12.0032 23.8694 12.0032 25.9994H14.0045C14.0045 23.3594 13.0839 20.9094 11.4129 19.1094C9.86185 17.4394 9.00129 15.2694 9.00129 12.9994C9.00129 10.4394 10.092 7.99939 12.0032 6.28939C13.9345 4.55939 16.4261 3.76939 19.0378 4.04939C23.2205 4.50939 26.5526 7.88939 26.9629 12.0894C27.2131 14.6494 26.4025 17.1094 24.6914 19.0094C22.9603 20.9294 21.9997 23.4094 21.9997 25.9894H24.001C24.001 23.8994 24.7715 21.8994 26.1724 20.3394C28.2637 18.0194 29.2544 15.0194 28.9442 11.8894L28.9542 11.8994Z" />\n',
  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M23.4777 3.4534C22.2059 2.72026 20.7745 2.23613 19.25 2.06939C16.12 1.71939 12.99 2.71939 10.66 4.79939C8.34 6.88939 7 9.86939 7 12.9994C7 15.7794 8.04 18.4394 9.94 20.4794C11.27 21.9094 12 23.8694 12 25.9994H14C14 23.3594 13.08 20.9094 11.41 19.1094C9.86 17.4394 9 15.2694 9 12.9994C9 10.4394 10.09 7.99939 12 6.28939C13.93 4.55939 16.42 3.76939 19.03 4.04939C20.4925 4.21033 21.8509 4.7287 23.0166 5.51458C23.0661 4.79186 23.2253 4.0993 23.4777 3.4534Z" />\n' +
    '<path d="M26.9691 12.3116C27.5951 12.6128 28.2729 12.8236 28.9855 12.9271C29.0064 15.6776 28.0178 18.2771 26.16 20.3394C24.76 21.8994 23.99 23.8994 23.99 25.9894H21.99C21.99 23.4094 22.95 20.9294 24.68 19.0094C26.3405 17.1644 27.1523 14.7915 26.9691 12.3116Z" />\n' +
    '<path d="M12 27.9994H24C24.55 27.9994 25 28.4494 25 28.9994C25 29.5494 24.55 29.9994 24 29.9994H12C11.45 29.9994 11 29.5494 11 28.9994C11 28.4494 11.45 27.9994 12 27.9994Z" />\n' +
    '<path d="M14 31.9994H22C22.55 31.9994 23 32.4494 23 32.9994C23 33.5494 22.55 33.9994 22 33.9994H14C13.45 33.9994 13 33.5494 13 32.9994C13 32.4494 13.45 31.9994 14 31.9994Z" />\n' +
    '<path d="M18.23 9.22939C18.58 8.87939 19.15 8.87939 19.5 9.22939H19.51C19.86 9.57939 19.86 10.1494 19.51 10.4994L16.38 13.6294C16.2 13.7994 15.97 13.8894 15.74 13.8894C15.51 13.8894 15.28 13.8094 15.1 13.6294C14.75 13.2794 14.75 12.7094 15.1 12.3594L18.23 9.22939Z" />\n' +
    '<path d="M18.21 14.2094C18.56 13.8594 19.13 13.8594 19.48 14.2094L19.49 14.2194C19.84 14.5694 19.84 15.1394 19.49 15.4894L17.28 17.6994L18.64 19.0594C18.81 19.2294 18.9 19.4594 18.9 19.6994V25.9994H17.1V20.0694L15.36 18.3294C15.01 17.9794 15.01 17.4094 15.36 17.0594L18.21 14.2094Z" />\n',
  solid:
    '<path d="M28.95 11.9001C28.44 6.77012 24.37 2.63012 19.25 2.07012C16.12 1.72012 12.99 2.72012 10.66 4.80012C8.34 6.89012 7 9.87012 7 13.0001C7 15.7801 8.04 18.4401 9.94 20.4801C11.27 21.9101 12 23.8701 12 26.0001H17.1V20.0701L15.36 18.3301C15.01 17.9801 15.01 17.4101 15.36 17.0601L18.21 14.2101C18.56 13.8601 19.13 13.8601 19.48 14.2101C19.83 14.5601 19.83 15.1301 19.48 15.4801L17.27 17.6901L18.63 19.0501C18.8 19.2201 18.89 19.4501 18.89 19.6901V25.9901H23.99C23.99 23.9001 24.76 21.9001 26.16 20.3401C28.25 18.0201 29.24 15.0201 28.93 11.8901L28.95 11.9001ZM19.51 10.5101L16.38 13.6401C16.2 13.8201 15.97 13.9001 15.74 13.9001C15.51 13.9001 15.28 13.8101 15.1 13.6401C14.75 13.2901 14.75 12.7201 15.1 12.3701L18.23 9.24012C18.58 8.89012 19.15 8.89012 19.5 9.24012C19.85 9.59012 19.85 10.1601 19.5 10.5101H19.51ZM22.01 32.0101H14C13.45 32.0101 13 32.4601 13 33.0101C13 33.5601 13.45 34.0101 14 34.0101H22C22.55 34.0101 23 33.5601 23 33.0101C23 32.4601 22.55 32.0101 22 32.0101H22.01ZM24.01 28.0101H12C11.45 28.0101 11 28.4601 11 29.0101C11 29.5601 11.45 30.0101 12 30.0101H24C24.55 30.0101 25 29.5601 25 29.0101C25 28.4601 24.55 28.0101 24 28.0101H24.01Z" />\n',
  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.4775 3.45417C23.1693 4.24323 23.0001 5.10192 23.0001 6.00012C23.0001 9.52134 25.6001 12.4353 28.985 12.927C29.0061 15.6779 28.0175 18.2777 26.1595 20.3401C24.7595 21.9001 23.9895 23.9001 23.9895 25.9901H18.8895V19.6901C18.8895 19.4501 18.7995 19.2201 18.6295 19.0501L17.2695 17.6901L19.4795 15.4801C19.8295 15.1301 19.8295 14.5601 19.4795 14.2101C19.1295 13.8601 18.5595 13.8601 18.2095 14.2101L15.3595 17.0601C15.0095 17.4101 15.0095 17.9801 15.3595 18.3301L17.0995 20.0701V26.0001H11.9995C11.9995 23.8701 11.2695 21.9101 9.93951 20.4801C8.03951 18.4401 6.99951 15.7801 6.99951 13.0001C6.99951 9.87012 8.33951 6.89012 10.6595 4.80012C12.9895 2.72012 16.1195 1.72012 19.2495 2.07012C20.774 2.23686 22.2054 2.72101 23.4775 3.45417ZM16.3795 13.6401L19.5095 10.5101H19.4995C19.8495 10.1601 19.8495 9.59012 19.4995 9.24012C19.1495 8.89012 18.5795 8.89012 18.2295 9.24012L15.0995 12.3701C14.7495 12.7201 14.7495 13.2901 15.0995 13.6401C15.2795 13.8101 15.5095 13.9001 15.7395 13.9001C15.9695 13.9001 16.1995 13.8201 16.3795 13.6401Z" />\n' +
    '<path d="M13.9995 32.0101H21.9995C22.5495 32.0101 22.9995 32.4601 22.9995 33.0101C22.9995 33.5601 22.5495 34.0101 21.9995 34.0101H13.9995C13.4495 34.0101 12.9995 33.5601 12.9995 33.0101C12.9995 32.4601 13.4495 32.0101 13.9995 32.0101Z" />\n' +
    '<path d="M11.9995 28.0101H23.9995C24.5495 28.0101 24.9995 28.4601 24.9995 29.0101C24.9995 29.5601 24.5495 30.0101 23.9995 30.0101H11.9995C11.4495 30.0101 10.9995 29.5601 10.9995 29.0101C10.9995 28.4601 11.4495 28.0101 11.9995 28.0101Z" />\n',
};

export const lightbulbIconName = 'lightbulb';
export const lightbulbIcon: IconShapeTuple = [lightbulbIconName, renderIcon(icon)];
