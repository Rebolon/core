/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18.9375 8C15.6275 8 12.9375 10.69 12.9375 14C12.9375 17.31 15.6275 20 18.9375 20C22.2475 20 24.9375 17.31 24.9375 14C24.9375 10.69 22.2475 8 18.9375 8ZM18.9375 18C16.7275 18 14.9375 16.21 14.9375 14C14.9375 11.79 16.7275 10 18.9375 10C21.1475 10 22.9375 11.79 22.9375 14C22.9375 16.21 21.1475 18 18.9375 18ZM18.9375 2C12.3175 2 6.9375 7.38 6.9375 14C6.9375 22.32 17.7675 33.25 18.2275 33.71C18.4275 33.91 18.6775 34 18.9375 34C19.1975 34 19.4475 33.9 19.6475 33.71C20.1075 33.25 30.9375 22.32 30.9375 14C30.9375 7.38 25.5575 2 18.9375 2ZM18.9375 31.55C16.5475 28.99 8.9375 20.35 8.9375 14C8.9375 8.49 13.4275 4 18.9375 4C24.4475 4 28.9375 8.49 28.9375 14C28.9375 20.35 21.3275 29 18.9375 31.55Z" />\n',

  outlineBadged:
    '<path d="M30.9375 11C33.6989 11 35.9375 8.76142 35.9375 6C35.9375 3.23858 33.6989 1 30.9375 1C28.1761 1 25.9375 3.23858 25.9375 6C25.9375 8.76142 28.1761 11 30.9375 11Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M24.4583 3.34568C22.805 2.48603 20.9273 2 18.9375 2C12.3175 2 6.9375 7.38 6.9375 14C6.9375 22.32 17.7675 33.25 18.2275 33.71C18.4275 33.91 18.6775 34 18.9375 34C19.1975 34 19.4475 33.9 19.6475 33.71C20.1075 33.25 30.9375 22.32 30.9375 14C30.9375 13.6632 30.9236 13.3297 30.8963 12.9999C30.1843 12.9958 29.4976 12.8854 28.8511 12.6838C28.9081 13.1146 28.9375 13.554 28.9375 14C28.9375 20.35 21.3275 29 18.9375 31.55C16.5475 28.99 8.9375 20.35 8.9375 14C8.9375 8.49 13.4275 4 18.9375 4C20.7689 4 22.4877 4.49605 23.9663 5.36072C24.0303 4.65342 24.1996 3.97648 24.4583 3.34568ZM12.9375 14C12.9375 10.69 15.6275 8 18.9375 8C22.2475 8 24.9375 10.69 24.9375 14C24.9375 17.31 22.2475 20 18.9375 20C15.6275 20 12.9375 17.31 12.9375 14ZM14.9375 14C14.9375 16.21 16.7275 18 18.9375 18C21.1475 18 22.9375 16.21 22.9375 14C22.9375 11.79 21.1475 10 18.9375 10C16.7275 10 14.9375 11.79 14.9375 14Z" />\n',

  solid:
    '<path d="M18.9375 10.1C16.7875 10.1 15.0375 11.85 15.0375 14C15.0375 16.15 16.7875 17.9 18.9375 17.9C21.0875 17.9 22.8375 16.15 22.8375 14C22.8375 11.85 21.0875 10.1 18.9375 10.1ZM18.9375 2C12.3175 2 6.9375 7.38 6.9375 14C6.9375 22.32 17.7675 33.25 18.2275 33.71C18.4275 33.91 18.6775 34 18.9375 34C19.1975 34 19.4475 33.9 19.6475 33.71C20.1075 33.25 30.9375 22.32 30.9375 14C30.9375 7.38 25.5575 2 18.9375 2ZM18.9375 20.1C15.5775 20.1 12.8375 17.36 12.8375 14C12.8375 10.64 15.5775 7.9 18.9375 7.9C22.2975 7.9 25.0375 10.64 25.0375 14C25.0375 17.36 22.2975 20.1 18.9375 20.1Z" />\n',

  solidBadged:
    '<path d="M30.9375 11C33.6989 11 35.9375 8.76142 35.9375 6C35.9375 3.23858 33.6989 1 30.9375 1C28.1761 1 25.9375 3.23858 25.9375 6C25.9375 8.76142 28.1761 11 30.9375 11Z" /><path d="M15.0375 14C15.0375 11.85 16.7875 10.1 18.9375 10.1C21.0875 10.1 22.8375 11.85 22.8375 14C22.8375 16.15 21.0875 17.9 18.9375 17.9C16.7875 17.9 15.0375 16.15 15.0375 14Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M24.4583 3.34568C24.1226 4.16424 23.9375 5.06051 23.9375 6C23.9375 9.85224 27.0493 12.9777 30.8963 12.9999C30.9236 13.3297 30.9375 13.6632 30.9375 14C30.9375 22.32 20.1075 33.25 19.6475 33.71C19.4475 33.9 19.1975 34 18.9375 34C18.6775 34 18.4275 33.91 18.2275 33.71C17.7675 33.25 6.9375 22.32 6.9375 14C6.9375 7.38 12.3175 2 18.9375 2C20.9273 2 22.805 2.48603 24.4583 3.34568ZM12.8375 14C12.8375 17.36 15.5775 20.1 18.9375 20.1C22.2975 20.1 25.0375 17.36 25.0375 14C25.0375 10.64 22.2975 7.9 18.9375 7.9C15.5775 7.9 12.8375 10.64 12.8375 14Z" />\n',
};

export const mapMarkerIconName = 'map-marker';
export const mapMarkerIcon: IconShapeTuple = [mapMarkerIconName, renderIcon(icon)];
