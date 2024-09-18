/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 11C19.3845 11 20.7379 11.4105 21.889 12.1797C23.0401 12.9489 23.9374 14.0421 24.4672 15.3212C24.997 16.6003 25.1356 18.0078 24.8655 19.3656C24.5954 20.7235 23.9287 21.9708 22.9498 22.9498C21.9708 23.9287 20.7235 24.5954 19.3656 24.8655C18.0078 25.1356 16.6003 24.997 15.3212 24.4672C14.0421 23.9374 12.9489 23.0401 12.1797 21.889C11.4105 20.7379 11 19.3845 11 18C11 16.1435 11.7375 14.363 13.0503 13.0503C14.363 11.7375 16.1435 11 18 11Z" />\n' +
    '<path d="M18 34C14.8355 34 11.7421 33.0616 9.11088 31.3035C6.4797 29.5454 4.42894 27.0466 3.21793 24.1229C2.00693 21.1993 1.69008 17.9823 2.30744 14.8786C2.92481 11.7749 4.44866 8.92394 6.6863 6.6863C8.92394 4.44866 11.7749 2.92481 14.8786 2.30744C17.9823 1.69008 21.1993 2.00693 24.1229 3.21793C27.0466 4.42894 29.5454 6.4797 31.3035 9.11088C33.0616 11.7421 34 14.8355 34 18C34 22.2435 32.3143 26.3131 29.3137 29.3137C26.3131 32.3143 22.2435 34 18 34ZM18 4.00001C15.2311 4.00001 12.5243 4.82109 10.222 6.35943C7.91974 7.89777 6.12532 10.0843 5.06569 12.6424C4.00607 15.2006 3.72882 18.0155 4.26901 20.7313C4.80921 23.447 6.14258 25.9416 8.10051 27.8995C10.0584 29.8574 12.553 31.1908 15.2687 31.731C17.9845 32.2712 20.7994 31.9939 23.3576 30.9343C25.9157 29.8747 28.1022 28.0803 29.6406 25.778C31.1789 23.4757 32 20.7689 32 18C32 14.287 30.525 10.726 27.8995 8.10051C25.274 5.475 21.713 4.00001 18 4.00001Z" />\n',
};

export const dotCircleIconName = 'dot-circle';
export const dotCircleIcon: IconShapeTuple = [dotCircleIconName, renderIcon(icon)];
