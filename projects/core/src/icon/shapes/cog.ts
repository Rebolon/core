/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M30 13.8L32.8 14.7C33.5 14.9 34 15.6 34 16.3V19.7C34 20.4 33.5 21 32.9 21.2L30 22.1L29.4 23.6L30.8 26.2C31.1 26.8 31 27.6 30.5 28.1L28.1 30.5C27.6 31 26.8 31.1 26.2 30.8L23.6 29.4L22.1 30L21.2 32.9C21 33.5 20.4 34 19.7 34H16.3C15.6 34 15 33.5 14.8 32.9L13.9 30L12.4 29.4L9.8 30.8C9.2 31.1 8.4 31 7.9 30.5L5.5 28.1C5 27.6 4.9 26.8 5.2 26.2L6.6 23.6L6 22.1L3.2 21.2C2.5 21 2 20.4 2 19.7V16.3C2 15.6 2.5 15 3.1 14.8L5.9 13.9C6 13.65 6.1 13.375 6.2 13.1C6.29999 12.825 6.40001 12.55 6.5 12.3L5.2 9.8C4.9 9.2 5 8.4 5.5 7.9L7.9 5.5C8.4 5 9.2 4.9 9.8 5.2L12.4 6.6C12.9 6.3 13.4 6.1 14 6L14.9 3.2C15 2.5 15.6 2 16.3 2H19.7C20.4 2 21 2.5 21.2 3.1L22.1 5.9L23.6 6.5L26.2 5.1C26.8 4.8 27.6 4.9 28.1 5.4L30.5 7.8C31 8.3 31.1 9.1 30.8 9.7L29.4 12.3L30 13.8ZM28.4 20.5L32 19.4V16.6L28.4 15.5L28.3 15C28.1 14.3 27.8 13.6 27.4 12.9L27.1 12.4L28.9 9.1L26.9 7.1L23.6 8.9L23.1 8.6C22.4 8.2 21.7 7.9 21 7.7L20.5 7.5L19.4 4H16.6L15.5 7.5L15 7.7C14.2 7.9 13.5 8.2 12.8 8.6L12.3 8.9L9.1 7.1L7.1 9.1L8.8 12.4L8.5 12.9C8.1 13.6 7.8 14.3 7.6 15.1L7.4 15.6L4 16.6V19.4L7.6 20.5L7.7 21C7.9 21.7 8.2 22.4 8.6 23.1L8.9 23.6L7.1 26.9L9.1 28.9L12.4 27.1L12.9 27.4L15 28.3L15.5 28.4L16.6 32H19.4L20.5 28.4L21 28.3C21.7 28.1 22.4 27.8 23.1 27.4L23.6 27.1L26.9 28.9L28.9 26.9L27.1 23.6L27.4 23.1L28.3 21L28.4 20.5ZM18.1 11C14.2 11 11.1 14.1 11.1 18C11.1 21.9 14.2 25 18.1 25C22 25 25.1 21.9 25.1 18C25.1 14.1 22 11 18.1 11ZM13.1 18C13.1 20.8 15.3 23 18.1 23C20.9 23 23.1 20.8 23.1 18C23.1 15.2 20.9 13 18.1 13C15.3 13 13.1 15.2 13.1 18Z" />\n',
  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" />\n' +
    '<path d="M22.0719 5.81252L21.2 3.1C21 2.5 20.4 2 19.7 2H16.3C15.6 2 15 2.5 14.9 3.2L14 6C13.4 6.1 12.9 6.3 12.4 6.6L9.8 5.2C9.2 4.9 8.4 5 7.9 5.5L5.5 7.9C5 8.4 4.9 9.2 5.2 9.8L6.5 12.3C6.40001 12.55 6.29999 12.825 6.2 13.1C6.1 13.375 6 13.65 5.9 13.9L3.1 14.8C2.5 15 2 15.6 2 16.3V19.7C2 20.4 2.5 21 3.2 21.2L6 22.1L6.6 23.6L5.2 26.2C4.9 26.8 5 27.6 5.5 28.1L7.9 30.5C8.4 31 9.2 31.1 9.8 30.8L12.4 29.4L13.9 30L14.8 32.9C15 33.5 15.6 34 16.3 34H19.7C20.4 34 21 33.5 21.2 32.9L22.1 30L23.6 29.4L26.2 30.8C26.8 31.1 27.6 31 28.1 30.5L30.5 28.1C31 27.6 31.1 26.8 30.8 26.2L29.4 23.6L30 22.1L32.9 21.2C33.5 21 34 20.4 34 19.7V16.3C34 15.8277 33.7724 15.3554 33.4093 15.0367H28.3073L28.4 15.5L32 16.6V19.4L28.4 20.5L28.3 21L27.4 23.1L27.1 23.6L28.9 26.9L26.9 28.9L23.6 27.1L23.1 27.4C22.4 27.8 21.7 28.1 21 28.3L20.5 28.4L19.4 32H16.6L15.5 28.4L15 28.3L12.9 27.4L12.4 27.1L9.1 28.9L7.1 26.9L8.9 23.6L8.6 23.1C8.2 22.4 7.9 21.7 7.7 21L7.6 20.5L4 19.4V16.6L7.4 15.6L7.6 15.1C7.8 14.3 8.1 13.6 8.5 12.9L8.8 12.4L7.1 9.1L9.1 7.1L12.3 8.9L12.8 8.6C13.5 8.2 14.2 7.9 15 7.7L15.5 7.5L16.6 4H19.4L20.5 7.5L20.9511 7.68045L22.0719 5.81252Z" />\n' +
    '<path d="M19.0887 11.0676C18.7661 11.023 18.436 11 18.1 11C14.2 11 11.1 14.1 11.1 18C11.1 21.9 14.2 25 18.1 25C22 25 25.1 21.9 25.1 18C25.1 16.9373 24.8698 15.934 24.456 15.0367H22.3395C22.2761 15.038 22.2128 15.0374 22.1498 15.035C22.7493 15.8598 23.1 16.8821 23.1 18C23.1 20.8 20.9 23 18.1 23C15.3 23 13.1 20.8 13.1 18C13.1 15.2 15.3 13 18.1 13C18.5119 13 18.9108 13.0476 19.2917 13.1377C18.9907 12.4805 18.9255 11.7519 19.0887 11.0676Z" />\n',
  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M23.0048 6.26192L22.1 5.9L21.2 3.1C21 2.5 20.4 2 19.7 2H16.3C15.6 2 15 2.5 14.9 3.2L14 6C13.4 6.1 12.9 6.3 12.4 6.6L9.8 5.2C9.2 4.9 8.4 5 7.9 5.5L5.5 7.9C5 8.4 4.9 9.2 5.2 9.8L6.5 12.3C6.40001 12.55 6.29999 12.825 6.2 13.1C6.1 13.375 6 13.65 5.9 13.9L3.1 14.8C2.5 15 2 15.6 2 16.3V19.7C2 20.4 2.5 21 3.2 21.2L6 22.1L6.6 23.6L5.2 26.2C4.9 26.8 5 27.6 5.5 28.1L7.9 30.5C8.4 31 9.2 31.1 9.8 30.8L12.4 29.4L13.9 30L14.8 32.9C15 33.5 15.6 34 16.3 34H19.7C20.4 34 21 33.5 21.2 32.9L22.1 30L23.6 29.4L26.2 30.8C26.8 31.1 27.6 31 28.1 30.5L30.5 28.1C31 27.6 31.1 26.8 30.8 26.2L29.4 23.6L30 22.1L32.9 21.2C33.5 21 34 20.4 34 19.7V16.3C34 15.6 33.5 14.9 32.8 14.7L30 13.8L29.6771 12.9927C28.7657 12.9513 27.8998 12.7357 27.1118 12.3783L27.1 12.4L27.4 12.9C27.8 13.6 28.1 14.3 28.3 15L28.4 15.5L32 16.6V19.4L28.4 20.5L28.3 21L27.4 23.1L27.1 23.6L28.9 26.9L26.9 28.9L23.6 27.1L23.1 27.4C22.4 27.8 21.7 28.1 21 28.3L20.5 28.4L19.4 32H16.6L15.5 28.4L15 28.3L12.9 27.4L12.4 27.1L9.1 28.9L7.1 26.9L8.9 23.6L8.6 23.1C8.2 22.4 7.9 21.7 7.7 21L7.6 20.5L4 19.4V16.6L7.4 15.6L7.6 15.1C7.8 14.3 8.1 13.6 8.5 12.9L8.8 12.4L7.1 9.1L9.1 7.1L12.3 8.9L12.8 8.6C13.5 8.2 14.2 7.9 15 7.7L15.5 7.5L16.6 4H19.4L20.5 7.5L21 7.7C21.7 7.9 22.4 8.2 23.1 8.6L23.6 8.9L23.6217 8.88816C23.2564 8.08262 23.0392 7.19563 23.0048 6.26192Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1 18C11.1 14.1 14.2 11 18.1 11C22 11 25.1 14.1 25.1 18C25.1 21.9 22 25 18.1 25C14.2 25 11.1 21.9 11.1 18ZM18.1 23C15.3 23 13.1 20.8 13.1 18C13.1 15.2 15.3 13 18.1 13C20.9 13 23.1 15.2 23.1 18C23.1 20.8 20.9 23 18.1 23Z" />\n',
  solid:
    '<path d="M33.29 15.5442L30 14.5439C30 14.5439 30 14.5239 30 14.5139C29.76 13.6937 29.41 12.8534 28.94 12.0431L28.9 11.9831L30.55 8.95217C30.76 8.56205 30.69 8.0819 30.38 7.7618L28.24 5.62113C28.05 5.43107 27.79 5.33104 27.53 5.33104C27.37 5.33104 27.2 5.37105 27.05 5.45108L24.02 7.10159L23.98 7.07158C23.16 6.60144 22.35 6.25133 21.54 6.02126L21.49 6.00125L20.45 2.70022C20.32 2.28009 19.93 2 19.5 2H16.5C16.06 2 15.68 2.28009 15.55 2.70022L14.51 6.00125H14.48C13.6 6.24133 12.79 6.57143 11.94 7.06158L11.88 7.09159L8.96001 5.45108C8.81001 5.36105 8.64001 5.32104 8.47001 5.32104C8.21001 5.32104 7.96001 5.42107 7.76001 5.61113L5.62001 7.7518C5.31001 8.06189 5.24001 8.53204 5.44001 8.92216L7.01001 11.9631L6.98001 12.0231C6.48001 12.8934 6.15001 13.7037 5.92001 14.5839V14.6039L2.73001 15.5342C2.30001 15.6643 2.01001 16.0544 2.01001 16.4945V19.4955C2.01001 19.9356 2.30001 20.3257 2.72001 20.4558L6.01001 21.4561C6.01001 21.4561 6.01001 21.4761 6.01001 21.4861C6.25001 22.3063 6.60001 23.1466 7.07001 23.9569L7.11001 24.0169L5.46001 27.0478C5.25001 27.438 5.32001 27.9181 5.63001 28.2382L7.77001 30.3789C7.96001 30.5689 8.22001 30.669 8.48001 30.669C8.64001 30.669 8.81001 30.6289 8.96001 30.5489L11.99 28.8984L12.03 28.9284C12.03 28.9284 12.11 28.9684 12.15 28.9884L14.4 29.9487C14.4 29.9487 14.5 29.9887 14.55 29.9987L15.55 33.2898C15.68 33.7099 16.07 34 16.51 34H19.51C19.95 34 20.34 33.7099 20.47 33.2898L21.47 29.9987C21.47 29.9987 21.49 29.9987 21.5 29.9987C22.32 29.7587 23.16 29.4086 23.97 28.9384L24.03 28.8984L27.06 30.5489C27.21 30.6289 27.38 30.669 27.54 30.669C27.8 30.669 28.06 30.5689 28.25 30.3789L30.39 28.2382C30.7 27.9281 30.77 27.438 30.56 27.0478L28.91 24.0169L28.94 23.9769C28.94 23.9769 28.98 23.8968 29 23.8568L29.96 21.6061C29.96 21.6061 30 21.5061 30.01 21.4561L33.3 20.4558C33.72 20.3257 34.01 19.9356 34.01 19.4955V16.4945C34.01 16.0544 33.72 15.6643 33.3 15.5342L33.29 15.5442ZM18 24.0069C14.69 24.0069 12 21.316 12 18.005C12 14.694 14.69 12.0031 18 12.0031C21.31 12.0031 24 14.694 24 18.005C24 21.316 21.31 24.0069 18 24.0069Z" />\n',
  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" />\n' +
    '<path d="M21.8844 6.1263C21.7696 6.08887 21.6548 6.05386 21.54 6.02126L21.49 6.00125L20.45 2.70022C20.32 2.28009 19.93 2 19.5 2H16.5C16.06 2 15.68 2.28009 15.55 2.70022L14.51 6.00125H14.48C13.6 6.24133 12.79 6.57143 11.94 7.06158L11.88 7.09159L8.96001 5.45108C8.81001 5.36105 8.64001 5.32104 8.47001 5.32104C8.21001 5.32104 7.96001 5.42107 7.76001 5.61113L5.62001 7.7518C5.31001 8.0619 5.24001 8.53204 5.44001 8.92216L7.01001 11.9631L6.98001 12.0231C6.48001 12.8934 6.15001 13.7037 5.92001 14.5839V14.6039L2.73001 15.5342C2.30001 15.6643 2.01001 16.0544 2.01001 16.4945V19.4955C2.01001 19.9356 2.30001 20.3257 2.72001 20.4558L6.01001 21.4561V21.4861C6.25001 22.3063 6.60001 23.1466 7.07001 23.9569L7.11001 24.0169L5.46001 27.0478C5.25001 27.438 5.32001 27.9181 5.63001 28.2382L7.77001 30.3789C7.96001 30.5689 8.22001 30.669 8.48001 30.669C8.64001 30.669 8.81001 30.629 8.96001 30.5489L11.99 28.8984L12.03 28.9284L12.15 28.9884L14.4 29.9487C14.4 29.9487 14.5 29.9887 14.55 29.9988L15.55 33.2898C15.68 33.7099 16.07 34 16.51 34H19.51C19.95 34 20.34 33.7099 20.47 33.2898L21.47 29.9988H21.5C22.32 29.7587 23.16 29.4086 23.97 28.9384L24.03 28.8984L27.06 30.5489C27.21 30.629 27.38 30.669 27.54 30.669C27.8 30.669 28.06 30.5689 28.25 30.3789L30.39 28.2382C30.7 27.9281 30.77 27.438 30.56 27.0478L28.91 24.0169L28.94 23.9769L29 23.8568L29.96 21.6061C29.96 21.6061 30 21.5061 30.01 21.4561L33.3 20.4558C33.72 20.3257 34.01 19.9356 34.01 19.4955V16.4945C34.01 16.0544 33.72 15.6643 33.3 15.5342L33.29 15.5442L31.6341 15.0408H23.2166C23.7151 15.9156 24 16.9274 24 18.005C24 21.316 21.31 24.0069 18 24.0069C14.69 24.0069 12 21.316 12 18.005C12 14.694 14.69 12.0031 18 12.0031C18.3454 12.0031 18.6841 12.0324 19.0136 12.0887C18.9518 11.3784 19.1286 10.6558 19.5362 10.0413L21.8844 6.1263Z" />\n',
  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.0232 6.57565C23.2999 9.98475 26.0178 12.7034 29.4258 12.9802C29.6609 13.4912 29.8515 14.0064 30 14.5139V14.5439L33.29 15.5442L33.3 15.5342C33.72 15.6643 34.01 16.0544 34.01 16.4945V19.4955C34.01 19.9356 33.72 20.3257 33.3 20.4558L30.01 21.4561C30 21.5061 29.96 21.6061 29.96 21.6061L29 23.8568L28.94 23.9769L28.91 24.0169L30.56 27.0478C30.77 27.4379 30.7 27.9281 30.39 28.2382L28.25 30.3789C28.06 30.5689 27.8 30.669 27.54 30.669C27.38 30.669 27.21 30.6289 27.06 30.5489L24.03 28.8984L23.97 28.9384C23.16 29.4086 22.32 29.7587 21.5 29.9987H21.47L20.47 33.2898C20.34 33.7099 19.95 34 19.51 34H16.51C16.07 34 15.68 33.7099 15.55 33.2898L14.55 29.9987C14.5 29.9887 14.4 29.9487 14.4 29.9487L12.15 28.9884L12.03 28.9284L11.99 28.8984L8.96001 30.5489C8.81001 30.6289 8.64001 30.669 8.48001 30.669C8.22001 30.669 7.96001 30.5689 7.77001 30.3789L5.63001 28.2382C5.32001 27.9181 5.25001 27.4379 5.46001 27.0478L7.11001 24.0169L7.07001 23.9569C6.60001 23.1466 6.25001 22.3063 6.01001 21.4861V21.4561L2.72001 20.4558C2.30001 20.3257 2.01001 19.9356 2.01001 19.4955V16.4945C2.01001 16.0544 2.30001 15.6643 2.73001 15.5342L5.92001 14.6039V14.5839C6.15001 13.7037 6.48001 12.8934 6.98001 12.0231L7.01001 11.9631L5.44001 8.92216C5.24001 8.53204 5.31001 8.06189 5.62001 7.7518L7.76001 5.61113C7.96001 5.42107 8.21001 5.32104 8.47001 5.32104C8.64001 5.32104 8.81001 5.36105 8.96001 5.45108L11.88 7.09159L11.94 7.06158C12.79 6.57143 13.6 6.24132 14.48 6.00125H14.51L15.55 2.70022C15.68 2.28009 16.06 2 16.5 2H19.5C19.93 2 20.32 2.28009 20.45 2.70022L21.49 6.00125L21.54 6.02126C22.0337 6.16147 22.5273 6.34627 23.0232 6.57565ZM12 18.005C12 21.316 14.69 24.0069 18 24.0069C21.31 24.0069 24 21.316 24 18.005C24 14.694 21.31 12.0031 18 12.0031C14.69 12.0031 12 14.694 12 18.005Z" />\n',
};

export const cogIconName = 'cog';
export const cogIcon: IconShapeTuple = [cogIconName, renderIcon(icon)];
