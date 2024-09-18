/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9643 9.49019C12.7742 8.89019 12.214 8.50019 11.5937 8.50019H11.4737C10.8434 8.49019 10.2832 8.88019 10.0831 9.48019L2.14005 26.9302C2.05002 27.1102 2 27.3102 2 27.5202C2 28.0602 2.44017 28.5002 2.98038 28.5002C3.46057 28.5002 3.89074 28.2002 4.0408 27.7402L6.08159 23.1602H16.8658L18.9066 27.6802C19.0667 28.1502 19.5068 28.4802 20.007 28.5002C20.5872 28.5002 21.0674 28.0202 21.0674 27.4402C21.0574 27.2502 21.0074 27.0602 20.9274 26.8802L12.9643 9.49019ZM6.97194 21.1802L11.4737 11.1102L15.9854 21.1702H6.98194L6.97194 21.1802ZM32.6119 15.3402C31.3614 14.2302 29.7308 13.6702 28.0602 13.7802C26.4695 13.7802 24.8989 14.1102 23.4584 14.7602C23.1182 14.9202 22.8981 15.2602 22.8881 15.6402C22.9282 16.1302 23.3183 16.5202 23.8085 16.5502C23.9385 16.5502 24.0686 16.5202 24.1886 16.4702C25.3291 15.9402 26.5796 15.6702 27.8301 15.6702C30.4711 15.6702 32.0217 16.9802 32.0217 19.5302V20.0202C30.6111 19.6102 29.1506 19.4102 27.69 19.4202C24.1186 19.4202 21.6777 21.0102 21.6777 23.9902V24.0402C21.6777 26.9402 24.3187 28.4502 26.9397 28.4502C28.9305 28.5102 30.8212 27.6002 32.0217 26.0102V27.2702C32.0217 27.8102 32.4619 28.2502 33.0021 28.2502C33.2722 28.2502 33.5323 28.1402 33.7124 27.9402C33.9024 27.7402 33.9925 27.4802 33.9825 27.2102V19.4902C34.1025 17.9702 33.6023 16.4702 32.6019 15.3302L32.6119 15.3402ZM32.0617 22.9202C32.0617 25.1702 29.9309 26.7502 27.3499 26.7502C25.4491 26.7502 23.8085 25.7102 23.8085 23.9302V23.8702C23.8085 22.1002 25.2791 20.9202 27.9201 20.9202C29.3206 20.9202 30.7112 21.1302 32.0517 21.5202V22.9202H32.0617Z" fill="black"/>\n',
};

export const textIconName = 'text';
export const textIcon: IconShapeTuple = [textIconName, renderIcon(icon)];
