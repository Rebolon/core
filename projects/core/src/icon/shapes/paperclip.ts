/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.9299 9.83684C33.6499 7.44771 32.4599 5.32848 30.5699 3.86901C26.5799 0.780138 20.6499 1.59984 17.3599 5.70834L3.5999 22.8321C2.3799 24.3616 1.8199 26.2409 2.0499 28.1402C2.2599 29.9295 3.1499 31.509 4.5599 32.5986C5.7799 33.5382 7.2299 33.998 8.6999 33.998C10.8199 33.998 12.9499 33.0484 14.3999 31.2391L26.6299 16.0146C27.4299 15.015 27.7999 13.7754 27.6499 12.5359C27.5099 11.3563 26.9199 10.3167 25.9899 9.59693C24.0399 8.08748 21.1399 8.47734 19.5299 10.4766L12.7699 18.8935C12.4199 19.3234 12.4899 19.9532 12.9199 20.303C13.3499 20.6529 13.9799 20.5829 14.3299 20.1531L21.0899 11.7361C22.0199 10.5866 23.6699 10.3367 24.7699 11.1863C25.2699 11.5762 25.5899 12.136 25.6599 12.7858C25.7399 13.4955 25.5299 14.1953 25.0699 14.775L12.8399 29.9995C11.0699 32.2087 7.8999 32.6685 5.7899 31.0291C4.8099 30.2694 4.1899 29.1698 4.0499 27.9203C3.8899 26.5708 4.2899 25.2112 5.1799 24.1116L18.9199 6.95789C21.5399 3.69908 26.2199 3.01932 29.3499 5.44844C30.7999 6.57803 31.7299 8.21743 31.9499 10.0668C32.1899 12.066 31.5899 14.0753 30.2799 15.7047L19.2499 29.4397C18.8999 29.8696 18.9699 30.4993 19.3999 30.8492C19.8299 31.1991 20.4599 31.1291 20.8099 30.6992L31.8399 16.9642C33.4899 14.915 34.2299 12.3859 33.9299 9.83684Z" fill="black"/>\n',
};

export const paperclipIconName = 'paperclip';
export const paperclipIcon: IconShapeTuple = [paperclipIconName, renderIcon(icon)];
