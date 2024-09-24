/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5535 20.1463C17.6874 20.2112 17.8342 20.2454 17.983 20.2462C18.1285 20.2439 18.2717 20.2098 18.4026 20.1463L33.3867 13.0579C33.7371 12.8931 33.9607 12.5405 33.9607 12.1531C33.9607 11.7657 33.7371 11.4131 33.3867 11.2483L18.4026 4.15997C18.1336 4.03359 17.8224 4.03359 17.5535 4.15997L2.56936 11.2483C2.21903 11.4131 1.99538 11.7657 1.99538 12.1531C1.99538 12.5405 2.21903 12.8931 2.56936 13.0579L17.5535 20.1463ZM17.983 18.1567L5.33642 12.1581L17.983 6.17944L30.6296 12.1581L17.983 18.1567Z"/><path d="M17.983 26.1549C17.8342 26.154 17.6874 26.1198 17.5535 26.0549L2.56935 18.9965C2.23946 18.8489 2.01491 18.5346 1.98215 18.1744C1.94939 17.8143 2.11352 17.4645 2.41136 17.2597C2.70919 17.0549 3.09431 17.0271 3.41845 17.1869L17.983 24.0553L32.5376 17.1669C32.8642 17.0134 33.2478 17.0458 33.544 17.252C33.8401 17.4583 34.0039 17.807 33.9735 18.1668C33.9431 18.5266 33.7233 18.8429 33.3967 18.9965L18.4126 26.0849C18.2763 26.1395 18.1296 26.1634 17.983 26.1549Z"/><path d="M17.5535 31.9635C17.6875 32.0284 17.8342 32.0626 17.9831 32.0634C18.1296 32.072 18.2763 32.0481 18.4126 31.9935L33.3867 24.9151C33.7166 24.7675 33.9412 24.4532 33.9739 24.093C34.0067 23.7329 33.8426 23.3831 33.5447 23.1783C33.2469 22.9735 32.8618 22.9457 32.5376 23.1055L17.9831 29.9939L3.41848 23.0655C2.92146 22.8432 2.33806 23.0601 2.10665 23.5533C1.87523 24.0465 2.08102 24.6343 2.56938 24.8751L17.5535 31.9635Z"/>',
  solid:
    '<path d="M17.983 20.2462C17.8342 20.2454 17.6874 20.2112 17.5535 20.1463L2.56936 13.0579C2.21903 12.8931 1.99538 12.5405 1.99538 12.1531C1.99538 11.7657 2.21903 11.4131 2.56936 11.2483L17.5535 4.15997C17.8224 4.03359 18.1336 4.03359 18.4026 4.15997L33.3867 11.2483C33.7371 11.4131 33.9607 11.7657 33.9607 12.1531C33.9607 12.5405 33.7371 12.8931 33.3867 13.0579L18.4026 20.1463C18.2717 20.2098 18.1285 20.2439 17.983 20.2462Z"/><path d="M17.983 26.1549C17.8342 26.154 17.6874 26.1198 17.5535 26.0549L2.56935 18.9965C2.23946 18.8489 2.01491 18.5346 1.98215 18.1744C1.94939 17.8143 2.11352 17.4645 2.41136 17.2597C2.70919 17.0549 3.09431 17.0271 3.41845 17.1869L17.983 24.0553L32.5376 17.1669C32.8642 17.0134 33.2478 17.0458 33.544 17.252C33.8401 17.4583 34.0039 17.807 33.9735 18.1668C33.9431 18.5266 33.7233 18.8429 33.3967 18.9965L18.4126 26.0849C18.2763 26.1395 18.1296 26.1634 17.983 26.1549Z"/><path d="M17.5535 31.9635C17.6875 32.0284 17.8342 32.0626 17.9831 32.0634C18.1296 32.072 18.2763 32.0481 18.4126 31.9935L33.3867 24.9151C33.7166 24.7675 33.9412 24.4532 33.9739 24.093C34.0067 23.7329 33.8426 23.3831 33.5447 23.1783C33.2469 22.9735 32.8618 22.9457 32.5376 23.1055L17.9831 29.9939L3.41848 23.0655C2.92146 22.8432 2.33806 23.0601 2.10665 23.5533C1.87523 24.0465 2.08101 24.6343 2.56938 24.8751L17.5535 31.9635Z"/>',
};

export const layersIconName = 'layers';
export const layersIcon: IconShapeTuple = [layersIconName, renderIcon(icon)];
