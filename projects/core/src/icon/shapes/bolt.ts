/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5079 34.0001H10.4935C10.7758 33.9969 11.0436 33.8733 11.2299 33.6601L27.7799 15.6601C28.0355 15.368 28.0993 14.9534 27.9435 14.5974C27.7876 14.2413 27.4405 14.0083 27.0534 14.0001H21.6993L30.7158 3.69015C30.9971 3.39455 31.0709 2.95661 30.9021 2.58442C30.7333 2.21223 30.356 1.98082 29.9495 2.00015H16.584C16.2563 2.01069 15.9548 2.18274 15.7779 2.46015L5.1493 19.4601C4.95197 19.7692 4.93904 20.162 5.11561 20.4834C5.29217 20.8048 5.62984 21.0032 5.99521 21.0001H12.5137L6.63213 32.5601C6.48232 32.8672 6.49908 33.2299 6.67655 33.5218C6.85403 33.8136 7.16761 33.994 7.5079 34.0001ZM10.0655 32H9.15991L15.0315 20.44C15.1813 20.1329 15.1646 19.7702 14.9871 19.4784C14.8096 19.1866 14.4961 19.0061 14.1558 19H7.75669L17.1314 4H27.77L18.7535 14.31C18.4722 14.6056 18.3984 15.0435 18.5672 15.4157C18.736 15.7879 19.1133 16.0193 19.5198 16H24.7645L10.0655 32Z" fill="black"/>\n',
  solid:
    '  <path d="M25.955 0.290007C25.8746 0.112701 25.6956 -0.00105151 25.4987 7.32889e-06H11.3744C11.202 0.000290527 11.0416 0.0869273 10.9485 0.230007L0.089153 17.23C-0.0174401 17.3809 -0.0293565 17.578 0.0582949 17.7404C0.145946 17.9027 0.318401 18.003 0.504872 18H8.28186L1.41743 31.25C1.33732 31.4102 1.34615 31.5997 1.44083 31.7519C1.53551 31.9042 1.70277 31.9978 1.88384 32H4.92569C5.06797 32.001 5.2041 31.9429 5.30085 31.84L23.1159 12.85C23.2606 12.7046 23.3014 12.4871 23.2189 12.3003C23.1364 12.1135 22.9473 11.9947 22.7408 12H15.9068L25.8739 0.820007C26.0052 0.674877 26.037 0.466894 25.955 0.290007Z" fill="black"/>\n',
};

export const boltIconName = 'bolt';
export const boltIcon: IconShapeTuple = [boltIconName, renderIcon(icon)];
