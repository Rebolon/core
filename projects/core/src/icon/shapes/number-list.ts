/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6.20325 16.2065C6.41073 16.1861 6.61821 16.2576 6.76641 16.4006C6.92449 16.5435 7.01341 16.7376 7.02329 16.9521C7.02329 17.3401 6.81581 17.7078 6.16373 18.2491L4.18772 19.8525V20.8737H8.27805V19.7401H5.96613L6.95413 18.9537C7.94213 18.2389 8.21877 17.6567 8.21877 16.9112C8.19901 16.4006 7.98165 15.9104 7.60621 15.5733C7.23077 15.2363 6.73677 15.0627 6.24277 15.1138C5.40296 15.1138 4.62244 15.5223 4.12844 16.2167L4.87932 16.9623C5.1856 16.5129 5.66972 16.2372 6.20325 16.2065ZM7.18137 26.2354C7.75441 26.0822 8.16937 25.5511 8.16937 24.9384C8.16937 24.0499 7.39873 23.3963 6.19337 23.3963C5.3832 23.386 4.61256 23.7639 4.11856 24.4175L4.80028 25.1528C5.11644 24.7545 5.59068 24.5197 6.08469 24.4992C6.61821 24.4992 6.99365 24.7648 6.99365 25.1733C6.99365 25.5818 6.63797 25.8065 6.00565 25.8065H5.4326V26.8277H6.06493C6.79605 26.8277 7.12209 27.0422 7.12209 27.4711C7.12209 27.9001 6.77629 28.1656 6.13409 28.1656C5.5808 28.1656 5.06704 27.9205 4.6916 27.5018L4 28.2983C4.55328 28.9315 5.35356 29.2788 6.18349 29.2481C7.45801 29.2481 8.28793 28.5435 8.28793 27.5732C8.28793 26.9094 7.81369 26.3375 7.18137 26.2354ZM6.09457 8.63893V12.8772H7.27029V7.25H6.33169L4.70148 8.38361L5.16584 9.24147L6.09457 8.63893ZM31.9802 9.84402C31.9802 9.28232 31.5356 8.82275 30.9922 8.82275H10.2639V10.8653H30.9922C31.5356 10.8653 31.9802 10.4057 31.9802 9.84402ZM31.012 16.9929H10.2837V19.0354H31.012C31.5554 19.0354 32 18.5759 32 18.0142C32 17.4525 31.5554 16.9929 31.012 16.9929ZM31.012 25.1631H10.2837V27.2056H31.012C31.5554 27.2056 32 26.746 32 26.1843C32 25.6226 31.5554 25.1631 31.012 25.1631Z" />\n',
};

export const numberListIconName = 'number-list';
export const numberListIcon: IconShapeTuple = [numberListIconName, renderIcon(icon)];
