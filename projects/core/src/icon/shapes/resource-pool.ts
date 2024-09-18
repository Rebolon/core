/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 13.7565 32.3143 9.68687 29.3137 6.68629C26.3131 3.68571 22.2435 2 18 2ZM4 18C4.09068 10.5292 10.0318 4.44602 17.4984 4.17888C24.965 3.91174 31.3256 9.55476 31.95 17H17.49L8.3 28.07C5.55902 25.4363 4.00681 21.8012 4 18ZM9.84 29.35C12.2128 31.0711 15.0687 31.9985 18 32C25.3385 31.9925 31.4258 26.3197 31.95 19H18.43L9.84 29.35Z" />\n',

  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.724 3.05892C21.9139 2.36545 19.9758 2 18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 16.9989 33.9062 16.0074 33.7234 15.0373C33.7035 15.0373 33.6836 15.0371 33.6636 15.0367H31.6454C31.7912 15.6745 31.8938 16.33 31.95 17H17.49L8.3 28.07C5.55902 25.4363 4.00681 21.8012 4 18C4.09068 10.5292 10.0318 4.44602 17.4984 4.17888C19.281 4.1151 21.0005 4.38819 22.594 4.94224L23.724 3.05892ZM18 32C15.0687 31.9985 12.2128 31.0711 9.84 29.35L18.43 19H31.95C31.4258 26.3197 25.3385 31.9925 18 32Z" />\n',

  outlineBadged:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M31.8357 16.943C31.7465 15.7198 31.4953 14.5138 31.0886 13.3567C31.7498 13.2482 32.3933 13.0505 33.0013 12.7689C35.437 19.8131 32.6859 27.6059 26.3676 31.5597C20.0494 35.5135 11.838 34.5806 6.56767 29.3103C1.29736 24.0399 0.364476 15.8285 4.31823 9.51029C8.27199 3.19205 16.0649 0.440946 23.109 2.87663C22.8308 3.48515 22.6365 4.12858 22.5312 4.78934C16.3598 2.67432 9.54677 5.11999 6.12941 10.6771C2.71205 16.2342 3.60352 23.4178 8.27555 27.971L17.4307 16.943H31.8357ZM9.8097 29.2461C12.1735 30.9606 15.0186 31.8846 17.9387 31.886C25.2493 31.8786 31.3136 26.2273 31.8357 18.9354H18.3671L9.8097 29.2461Z" />\n' +
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n',

  solid:
    '<path d="M21.363 2.31932C28.3888 3.83023 33.5468 9.83254 33.9785 17H17.5039L7.00462 29.6C1.77673 24.6729 0.474388 16.8696 3.8193 10.5143C7.16421 4.15899 14.3371 0.808411 21.363 2.31932Z" />\n' +
    '<path d="M24.7965 32.449C19.5112 34.9249 13.2962 34.3314 8.57602 30.9L18.4448 19H33.9785C33.5999 24.82 30.0818 29.9731 24.7965 32.449Z" />\n',

  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" fill="#A36500"/>\n' +
    '<path d="M23.7433 3.02706L19.5363 10.0387C18.8705 11.0423 18.8205 12.3342 19.4207 13.3893C20.0234 14.4489 21.1579 15.0604 22.3397 15.0367H33.6638C33.6887 15.0372 33.7136 15.0374 33.7385 15.0373C33.8577 15.6797 33.9385 16.3349 33.9785 17H17.5039L7.00462 29.6C1.77673 24.6729 0.474388 16.8696 3.8193 10.5143C7.16421 4.15899 14.3371 0.808411 21.363 2.31932C22.1834 2.49575 22.9784 2.73343 23.7433 3.02706Z" />\n' +
    '<path d="M8.57602 30.9C13.2962 34.3314 19.5112 34.9249 24.7965 32.449C30.0818 29.9731 33.5999 24.82 33.9785 19H18.4448L8.57602 30.9Z" />\n',

  solidBadged:
    '<path d="M33.2119 12.8435C33.6797 14.1958 33.9632 15.6048 34.0547 17.0326H17.5405L7.01601 29.66C1.57444 24.4646 0.477862 16.1899 4.37868 9.75916C8.27951 3.32837 16.1299 0.468827 23.2593 2.88183C21.9473 5.73289 22.5491 9.0983 24.7681 11.3193C26.9871 13.5404 30.3551 14.1483 33.2119 12.8435Z" />\n' +
    '<path d="M24.8506 32.5153C19.5526 34.9966 13.3227 34.4018 8.59117 30.9629L18.4836 19.0369H34.0547C33.6752 24.8696 30.1486 30.0339 24.8506 32.5153Z" />\n' +
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n',
};

export const resourcePoolIconName = 'resource-pool';
export const resourcePoolIcon: IconShapeTuple = [resourcePoolIconName, renderIcon(icon)];
