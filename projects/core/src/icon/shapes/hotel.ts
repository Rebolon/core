/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M10.9375 7.11001L12.9375 5.06001L10.1775 4.64001L8.9375 2.01001L7.7075 4.64001L4.9475 5.06001L6.9475 7.11001L6.4775 10L8.9375 8.63001L11.4075 10L10.9375 7.11001ZM12.9375 26H16.9375V24H12.9375V26ZM12.9375 22H16.9375V20H12.9375V22ZM26.4675 10L28.9275 8.63001L31.3975 10L30.9275 7.11001L32.9275 5.06001L30.1675 4.64001L28.9275 2.01001L27.6975 4.64001L24.9375 5.06001L26.9375 7.11001L26.4675 10ZM2.9375 19V34H4.9375V20H6.9375V18H3.9375C3.3875 18 2.9375 18.45 2.9375 19ZM16.4675 10L18.9275 8.63001L21.3975 10L20.9275 7.11001L22.9275 5.06001L20.1675 4.64001L18.9275 2.01001L17.6975 4.64001L14.9375 5.06001L16.9375 7.11001L16.4675 10ZM27.9375 12H9.9375C9.3875 12 8.9375 12.45 8.9375 13V34H10.9375V14H26.9375V34H28.9375V13C28.9375 12.45 28.4875 12 27.9375 12ZM33.9375 18H30.9375V20H32.9375V34H34.9375V19C34.9375 18.45 34.4875 18 33.9375 18ZM12.9375 18H16.9375V16H12.9375V18ZM20.9375 18H24.9375V16H20.9375V18ZM20.9375 22H24.9375V20H20.9375V22ZM20.9375 26H24.9375V24H20.9375V26Z" fill="black"/>\n',
  solid:
    '  <path d="M26.4675 10L28.9275 8.63001L31.3975 10L30.9275 7.11001L32.9275 5.06001L30.1675 4.64001L28.9275 2.01001L27.6975 4.64001L24.9375 5.06001L26.9375 7.11001L26.4675 10ZM2.9375 19V34H4.9375V20H6.9375V18H3.9375C3.3875 18 2.9375 18.45 2.9375 19ZM16.4675 10L18.9275 8.63001L21.3975 10L20.9275 7.11001L22.9275 5.06001L20.1675 4.64001L18.9275 2.01001L17.6975 4.64001L14.9375 5.06001L16.9375 7.11001L16.4675 10ZM27.9375 12H9.9375C9.3875 12 8.9375 12.45 8.9375 13V34H28.9375V13C28.9375 12.45 28.4875 12 27.9375 12ZM17.0375 26.1H12.8375V23.9H17.0375V26.1ZM17.0375 22.1H12.8375V19.9H17.0375V22.1ZM17.0375 18.1H12.8375V15.9H17.0375V18.1ZM25.0375 26.1H20.8375V23.9H25.0375V26.1ZM25.0375 22.1H20.8375V19.9H25.0375V22.1ZM25.0375 18.1H20.8375V15.9H25.0375V18.1ZM33.9375 18H30.9375V20H32.9375V34H34.9375V19C34.9375 18.45 34.4875 18 33.9375 18ZM10.9375 7.11001L12.9375 5.06001L10.1775 4.64001L8.9375 2.01001L7.7075 4.64001L4.9475 5.06001L6.9475 7.11001L6.4775 10L8.9375 8.63001L11.4075 10L10.9375 7.11001Z" fill="black"/>\n',
};

export const hotelIconName = 'hotel';
export const hotelIcon: IconShapeTuple = [hotelIconName, renderIcon(icon)];
