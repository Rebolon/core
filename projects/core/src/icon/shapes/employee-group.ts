/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24.779 13.09q-.362 1.14-1.067 2.07c.419-.04.837-.08 1.296-.08 3.549 0 5.951 1.42 6.829 2.04.1.07.15.16.15.25V20h1.016a3 3 0 0 1 .957.17c0-.03.02-.06.02-.09v-2.72c0-.74-.379-1.44-.997-1.88-1.276-.9-4.007-2.4-7.975-2.4h-.24zM13.135 11c0 2.76 2.233 5 4.985 5 2.751 0 4.984-2.24 4.984-5s-2.233-5-4.984-5-4.985 2.24-4.985 5m4.985-3c1.645 0 2.99 1.35 2.99 3s-1.345 3-2.99 3a3.004 3.004 0 0 1-2.991-3c0-1.65 1.346-3 2.99-3m6.978-4c1.645 0 2.99 1.35 2.99 3s-1.345 3-2.99 3h-.08a6.3 6.3 0 0 1 0 2h.08c2.751 0 4.984-2.24 4.984-5s-2.243-5-4.984-5c-1.854 0-3.45 1.03-4.307 2.53.618.26 1.197.6 1.705 1.02A2.97 2.97 0 0 1 25.098 4m-3.03 15.75c.06-.71.358-1.36.827-1.84a14.4 14.4 0 0 0-4.865-.82c-3.968 0-6.7 1.5-7.975 2.4a2.3 2.3 0 0 0-.997 1.88v2.72c0 .55.449 1 .997 1s.997-.45.997-1v-2.72c0-.09.06-.18.15-.25.867-.61 3.279-2.04 6.828-2.04 1.585 0 2.93.29 4.027.66zM33.002 22H28.02v2h3.987v8H18.05v-8h5.981v1c0 .55.449 1 .997 1s.997-.45.997-1v-5c0-.55-.449-1-.997-1s-.997.45-.997 1v2h-6.978c-.548 0-.997.45-.997 1v10c0 .55.449 1 .997 1h15.95c.548 0 .997-.45.997-1V23c0-.55-.449-1-.997-1m-10.966 7h5.982v-1.4h-5.982zm-9.51-13.82a6.9 6.9 0 0 1-1.067-2.08c-.169 0-.319-.02-.488-.02-3.968 0-6.7 1.5-7.965 2.4C2.379 15.92 2 16.62 2 17.36v2.72c0 .55.449 1 .997 1s.997-.45.997-1v-2.72c0-.09.06-.18.15-.25.867-.61 3.279-2.04 6.828-2.04.548 0 1.067.04 1.565.1zM11.052 12c.06 0 .11-.01.16-.02-.05-.32-.08-.65-.08-.98s.03-.68.08-1.02c-.06 0-.11.02-.17.02a3.004 3.004 0 0 1-2.99-3c0-1.65 1.345-3 2.99-3 1.146 0 2.123.65 2.632 1.6a7.2 7.2 0 0 1 1.694-1.04C14.511 3.04 12.906 2 11.042 2 8.29 2 6.057 4.24 6.057 7s2.233 5 4.985 5z"/>',
  solid:
    '<path d="M25.09 11c0 .34-.03.67-.08.99h.08c2.751 0 4.983-2.24 4.983-5S27.832 2 25.092 2c-1.854 0-3.449 1.03-4.306 2.53A6.99 6.99 0 0 1 25.091 11m-11.958 0c0 2.76 2.232 5 4.983 5s4.982-2.24 4.982-5-2.232-5-4.982-5-4.983 2.24-4.983 5m8.9 18h5.979v-1.4h-5.98zm2.73-15.91a7 7 0 0 1-1.665 2.79c1.236.4 2.243.89 3.04 1.35.289.12.538.28.777.48.07.05.16.1.22.14.767.54 1.305 1.3 1.594 2.15h4.255a3 3 0 0 1 .957.17c0-.03.02-.06.02-.09v-2.72c0-.74-.379-1.44-.996-1.88-1.276-.9-4.007-2.4-7.973-2.4h-.24zM22.032 20c0-.82.328-1.55.856-2.09a14.4 14.4 0 0 0-4.863-.82c-3.966 0-6.697 1.5-7.973 2.4a2.3 2.3 0 0 0-.996 1.88v2.72a1 1 0 0 0 .996 1h4.007v-2.08c0-1.65 1.345-3 2.99-3h4.982zm10.961 2H28.01v2h3.987v8H18.045v-8h5.98v1c0 .55.448 1 .996 1s.996-.45.996-1v-5c0-.55-.448-1-.996-1s-.997.45-.997 1v2h-6.976a1 1 0 0 0-.996 1v10a1 1 0 0 0 .996 1h15.945c.548 0 .997-.45.997-1V23c0-.55-.449-1-.997-1M11.05 12c.06 0 .11-.01.16-.02-.05-.32-.08-.65-.08-.98a7.02 7.02 0 0 1 4.235-6.44C14.507 3.04 12.902 2 11.039 2c-2.75 0-4.983 2.24-4.983 5s2.232 5 4.983 5zm.408 1.1c-.169 0-.328-.02-.498-.02-3.966 0-6.697 1.5-7.962 2.4-.628.44-1.007 1.14-1.007 1.88v2.72c0 .55.448 1 .997 1h4.086c.09-1.28.757-2.48 1.833-3.24.847-.6 2.262-1.42 4.166-2.01a7 7 0 0 1-1.615-2.73"/>',
};

export const employeeGroupIconName = 'employee-group';
export const employeeGroupIcon: IconShapeTuple = [employeeGroupIconName, renderIcon(icon)];
