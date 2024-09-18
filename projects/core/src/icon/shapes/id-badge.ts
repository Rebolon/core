/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M22 4C22 2.89543 21.1046 2 20 2H16C14.8954 2 14 2.89543 14 4V11H22V4ZM24 6H28C29.1046 6 30 6.89543 30 8V32C30 33.1046 29.1046 34 28 34H8C6.89543 34 6 33.1046 6 32V8C6 6.89543 6.89543 6 8 6H12V8H8V32H28V8H24V6ZM26 27.7V30H24.4V27.88C22.7417 26.1316 20.4075 25.187 18 25.29C15.594 25.1844 13.2601 26.1253 11.6 27.87V30H10V27.73C9.99791 27.4636 10.09 27.2051 10.26 27C12.2191 24.8001 15.056 23.5869 18 23.69C20.9391 23.5793 23.7753 24.7812 25.74 26.97C25.9108 27.1746 26.003 27.4335 26 27.7ZM16 9H20V4H16V9ZM18 22C20.3362 22 22.23 20.1062 22.23 17.77C22.23 15.4338 20.3362 13.54 18 13.54C15.6638 13.54 13.77 15.4338 13.77 17.77C13.77 20.1062 15.6638 22 18 22ZM20.63 17.77C20.63 16.3175 19.4525 15.14 18 15.14C16.5475 15.14 15.37 16.3175 15.37 17.77C15.37 19.2225 16.5475 20.4 18 20.4C19.4525 20.4 20.63 19.2225 20.63 17.77Z" />\n',

  outlineAlerted:
    '<path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z" />\n' +
    '<path d="M28 15.0364H30V32C30 33.1046 29.1046 34 28 34H8C6.89543 34 6 33.1046 6 32V8C6 6.89543 6.89543 6 8 6H12V8H8V32H28V15.0364Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8285 13.9545C20.1533 14.3152 20.5519 14.5942 20.9907 14.7785C21.7564 15.5441 22.23 16.6017 22.23 17.77C22.23 20.1062 20.3362 22 18 22C15.6638 22 13.77 20.1062 13.77 17.77C13.77 15.4338 15.6638 13.54 18 13.54C18.6549 13.54 19.2751 13.6888 19.8285 13.9545ZM18 15.14C19.4525 15.14 20.63 16.3175 20.63 17.77C20.63 19.2225 19.4525 20.4 18 20.4C16.5475 20.4 15.37 19.2225 15.37 17.77C15.37 16.3175 16.5475 15.14 18 15.14Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M22 5.93208L19.5362 10.0385C19.3375 10.338 19.1936 10.6631 19.1055 11H14V4C14 2.89543 14.8954 2 16 2H20C21.1046 2 22 2.89543 22 4V5.93208ZM20 9H16V4H20V9Z" />\n' +
    '<path d="M26 30V27.7C26.003 27.4335 25.9108 27.1746 25.74 26.97C23.7753 24.7812 20.9391 23.5793 18 23.69C15.056 23.5869 12.2191 24.8001 10.26 27C10.09 27.2051 9.99791 27.4636 10 27.73V30H11.6V27.87C13.2601 26.1253 15.594 25.1844 18 25.29C20.4075 25.187 22.7417 26.1316 24.4 27.88V30H26Z" />\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M28 12.7101C28.6337 12.8987 29.305 13 30 13V32C30 33.1046 29.1046 34 28 34H8C6.89543 34 6 33.1046 6 32V8C6 6.89543 6.89543 6 8 6H12V8H8V32H28V12.7101Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C21.1046 2 22 2.89543 22 4V11H14V4C14 2.89543 14.8954 2 16 2H20ZM20 9H16V4H20V9Z" />\n' +
    '<path d="M26 30V27.7C26.003 27.4335 25.9108 27.1746 25.74 26.97C23.7753 24.7812 20.9391 23.5793 18 23.69C15.056 23.5869 12.2191 24.8001 10.26 27C10.09 27.2051 9.99791 27.4636 10 27.73V30H11.6V27.87C13.2601 26.1253 15.594 25.1844 18 25.29C20.4075 25.187 22.7417 26.1316 24.4 27.88V30H26Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M22.23 17.77C22.23 20.1062 20.3362 22 18 22C15.6638 22 13.77 20.1062 13.77 17.77C13.77 15.4338 15.6638 13.54 18 13.54C20.3362 13.54 22.23 15.4338 22.23 17.77ZM18 15.14C19.4525 15.14 20.63 16.3175 20.63 17.77C20.63 19.2225 19.4525 20.4 18 20.4C16.5475 20.4 15.37 19.2225 15.37 17.77C15.37 16.3175 16.5475 15.14 18 15.14Z" />\n',

  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M21 4C21 2.89543 20.1046 2 19 2H17C15.8954 2 15 2.89543 15 4V10H21V4ZM23 6H28C29.1046 6 30 6.89543 30 8V32C30 33.1046 29.1046 34 28 34H8C6.89543 34 6 33.1046 6 32V8C6 6.89543 6.89543 6 8 6H13V8H8V32H28V8H23V6ZM10 27.73C9.99791 27.4636 10.09 27.2051 10.26 27C12.2191 24.8001 15.056 23.5869 18 23.69C20.9391 23.5793 23.7753 24.7812 25.74 26.97C25.9108 27.1746 26.003 27.4335 26 27.7V30H10V27.73ZM22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18C14 15.7909 15.7909 14 18 14C20.2091 14 22 15.7909 22 18Z" />\n',

  solidAlerted:
    '<path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z" />\n' +
    '<path d="M28 15.0364H30V32C30 33.1046 29.1046 34 28 34H8C6.89543 34 6 33.1046 6 32V8C6 6.89543 6.89543 6 8 6H13V8H8V32H28V15.0364Z" />\n' +
    '<path d="M21 7.59877L19.5593 10H15V4C15 2.89543 15.8954 2 17 2H19C20.1046 2 21 2.89543 21 4V7.59877Z" />\n' +
    '<path d="M10.26 27C10.09 27.2051 9.99791 27.4636 10 27.73V30H26V27.7C26.003 27.4335 25.9108 27.1746 25.74 26.97C23.7753 24.7812 20.9391 23.5793 18 23.69C15.056 23.5869 12.2191 24.8001 10.26 27Z" />\n' +
    '<path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" />\n',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M28 12.7101C28.6337 12.8987 29.305 13 30 13V32C30 33.1046 29.1046 34 28 34H8C6.89543 34 6 33.1046 6 32V8C6 6.89543 6.89543 6 8 6H13V8H8V32H28V12.7101Z" />\n' +
    '<path d="M19 2C20.1046 2 21 2.89543 21 4V10H15V4C15 2.89543 15.8954 2 17 2H19Z" />\n' +
    '<path d="M10.26 27C10.09 27.2051 9.99791 27.4636 10 27.73V30H26V27.7C26.003 27.4335 25.9108 27.1746 25.74 26.97C23.7753 24.7812 20.9391 23.5793 18 23.69C15.056 23.5869 12.2191 24.8001 10.26 27Z" />\n' +
    '<path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" />\n',
};

export const idBadgeIconName = 'id-badge';
export const idBadgeIcon: IconShapeTuple = [idBadgeIconName, renderIcon(icon)];
