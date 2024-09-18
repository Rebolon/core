/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29.9374 34H7.93739C7.38739 34 6.93739 33.55 6.93739 33V6.00001C6.93739 5.45001 7.38739 5.00001 7.93739 5.00001H29.9374C30.4874 5.00001 30.9374 5.45001 30.9374 6.00001V33C30.9374 33.55 30.4874 34 29.9374 34ZM8.93739 32H28.9374V7.00001H8.93739V32Z" />\n' +
    '<path d="M7.93739 7.00001C7.44739 7.00001 7.02739 6.64001 6.94739 6.15001C6.86739 5.60001 7.23739 5.09001 7.78739 5.01001L27.7874 2.01001C28.3474 1.93001 28.8474 2.30001 28.9274 2.85001C29.0074 3.40001 28.6374 3.91001 28.0874 3.99001L8.08739 6.99001C8.03739 6.99001 7.98739 7.00001 7.93739 7.00001Z" />\n' +
    '<path d="M18.9374 27.9C14.5774 27.9 11.0374 24.36 11.0374 20C11.0374 15.64 14.5774 12.1 18.9374 12.1C23.2974 12.1 26.8374 15.64 26.8374 20C26.8374 24.36 23.2974 27.9 18.9374 27.9ZM18.9374 13.9C15.5774 13.9 12.8374 16.64 12.8374 20C12.8374 23.36 15.5774 26.1 18.9374 26.1C22.2974 26.1 25.0374 23.36 25.0374 20C25.0374 16.64 22.2974 13.9 18.9374 13.9Z" />\n' +
    '<path d="M18.9374 27.9C18.6874 27.9 18.4574 27.8 18.2874 27.62C18.1574 27.48 15.0374 24.18 15.0374 20C15.0374 15.82 18.1574 12.52 18.2874 12.38C18.6274 12.03 19.2474 12.03 19.5874 12.38C19.7174 12.52 22.8374 15.82 22.8374 20C22.8374 24.18 19.7174 27.48 19.5874 27.62C19.4174 27.8 19.1774 27.9 18.9374 27.9ZM18.9374 14.42C18.1274 15.52 16.8374 17.63 16.8374 20C16.8374 22.37 18.1274 24.48 18.9374 25.58C19.7474 24.48 21.0374 22.37 21.0374 20C21.0374 17.63 19.7474 15.52 18.9374 14.42Z" />\n' +
    '<path d="M25.9374 17.1H11.9374V18.9H25.9374V17.1Z" />\n' +
    '<path d="M25.9374 21.1H11.9374V22.9H25.9374V21.1Z" />\n',
  solid:
    '<path d="M7.93739 7.00001C7.44739 7.00001 7.02739 6.64001 6.94739 6.15001C6.86739 5.60001 7.23739 5.09001 7.78739 5.01001L27.7874 2.01001C28.3474 1.93001 28.8474 2.30001 28.9274 2.85001C29.0074 3.40001 28.6374 3.91001 28.0874 3.99001L8.08739 6.99001C8.03739 6.99001 7.98739 7.00001 7.93739 7.00001Z" />\n' +
    '<path d="M18.9374 25.58C19.3974 24.96 19.9974 24.02 20.4374 22.9H17.4374C17.8774 24.02 18.4774 24.96 18.9374 25.58Z" />\n' +
    '<path d="M13.5774 22.9C14.2874 24.2 15.4574 25.21 16.8574 25.73C16.3774 24.96 15.8774 24 15.5174 22.9H13.5774Z" />\n' +
    '<path d="M24.2974 17.1C23.5874 15.8 22.4174 14.79 21.0174 14.27C21.4974 15.04 21.9974 16 22.3574 17.1H24.2974Z" />\n' +
    '<path d="M18.9374 14.42C18.4774 15.04 17.8774 15.98 17.4374 17.1H20.4374C19.9974 15.98 19.3974 15.04 18.9374 14.42Z" />\n' +
    '<path d="M16.8574 14.27C15.4474 14.78 14.2774 15.79 13.5774 17.1H15.5174C15.8774 16 16.3774 15.04 16.8574 14.27Z" />\n' +
    '<path d="M15.0374 20C15.0374 19.62 15.0674 19.26 15.1174 18.9H12.9474C12.8774 19.26 12.8474 19.62 12.8474 20C12.8474 20.38 12.8874 20.74 12.9474 21.1H15.1174C15.0674 20.74 15.0374 20.38 15.0374 20Z" />\n' +
    '<path d="M29.9374 5.00001H7.93739C7.38739 5.00001 6.93739 5.45001 6.93739 6.00001V33C6.93739 33.55 7.38739 34 7.93739 34H29.9374C30.4874 34 30.9374 33.55 30.9374 33V6.00001C30.9374 5.45001 30.4874 5.00001 29.9374 5.00001ZM18.9374 27.9C14.5774 27.9 11.0374 24.36 11.0374 20C11.0374 15.64 14.5774 12.1 18.9374 12.1C23.2974 12.1 26.8374 15.64 26.8374 20C26.8374 24.36 23.2974 27.9 18.9374 27.9Z" />\n' +
    '<path d="M22.8374 20C22.8374 20.38 22.8074 20.74 22.7574 21.1H24.9274C24.9974 20.74 25.0274 20.38 25.0274 20C25.0274 19.62 24.9874 19.26 24.9274 18.9H22.7574C22.8074 19.26 22.8374 19.62 22.8374 20Z" />\n' +
    '<path d="M20.9374 18.9H16.9374C16.8774 19.26 16.8374 19.62 16.8374 20C16.8374 20.38 16.8774 20.74 16.9374 21.1H20.9374C20.9974 20.74 21.0374 20.38 21.0374 20C21.0374 19.62 20.9974 19.26 20.9374 18.9Z" />\n' +
    '<path d="M21.0174 25.73C22.4274 25.22 23.5974 24.21 24.2974 22.9H22.3574C21.9974 24 21.4974 24.96 21.0174 25.73Z" />\n',
};

export const passportIconName = 'passport';
export const passportIcon: IconShapeTuple = [passportIconName, renderIcon(icon)];
