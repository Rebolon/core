/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M23.11 9.8811L18 15.126L12.89 9.8811C12.6381 9.62226 12.5407 9.24598 12.6345 8.89398C12.7282 8.54198 12.9988 8.26775 13.3445 8.17459C13.6901 8.08143 14.0581 8.18349 14.31 8.44232L17 11.177V3.35049C17 2.78693 17.4477 2.33008 18 2.33008C18.5523 2.33008 19 2.78693 19 3.35049V11.177L21.69 8.44232C21.9419 8.18349 22.3099 8.08143 22.6555 8.17459C23.0012 8.26775 23.2718 8.54198 23.3655 8.89398C23.4593 9.24598 23.3619 9.62226 23.11 9.8811Z" />\n' +
    '<path d="M13.54 19.3403H5.85L8.55 22.0852C8.80366 22.3422 8.90368 22.7178 8.81238 23.0704C8.72108 23.4231 8.45233 23.6993 8.10738 23.7949C7.76242 23.8906 7.39366 23.7912 7.14 23.5342L2 18.3199L7.15 13.1056C7.40366 12.8486 7.77242 12.7492 8.11738 12.8448C8.46234 12.9405 8.73108 13.2166 8.82238 13.5693C8.91368 13.922 8.81366 14.2975 8.56 14.5546L5.85 17.2995H13.54C14.0923 17.2995 14.54 17.7563 14.54 18.3199C14.54 18.8834 14.0923 19.3403 13.54 19.3403Z" />\n' +
    '<path d="M27.435 13.1107C27.8244 12.7105 28.4579 12.7083 28.85 13.1056L34 18.3198L28.85 23.5341C28.4579 23.9314 27.8244 23.9292 27.435 23.529C27.0456 23.1289 27.0479 22.4825 27.44 22.0852L30.15 19.3403H22.46C21.9077 19.3403 21.46 18.8834 21.46 18.3198C21.46 17.7563 21.9077 17.2994 22.46 17.2994H30.15L27.44 14.5545C27.0479 14.1572 27.0456 13.5108 27.435 13.1107Z" />\n' +
    '<path d="M18 21.5138L12.89 26.7587C12.5006 27.1588 12.5029 27.8053 12.895 28.2026C13.2871 28.5999 13.9206 28.5976 14.31 28.1975L17 25.4628V33.3097C17 33.8733 17.4477 34.3301 18 34.3301C18.5523 34.3301 19 33.8733 19 33.3097V25.4628L21.69 28.2281C22.0794 28.6282 22.7129 28.6305 23.105 28.2332C23.4971 27.8359 23.4994 27.1894 23.11 26.7893L18 21.5138Z" />\n',

  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" />\n' +
    '<path d="M27.9161 15.0368H30.7574L34 18.3198L28.85 23.5341C28.4579 23.9314 27.8244 23.9292 27.435 23.529C27.0456 23.1289 27.0479 22.4825 27.44 22.0852L30.15 19.3403H22.46C21.9077 19.3403 21.46 18.8834 21.46 18.3198C21.46 17.7563 21.9077 17.2994 22.46 17.2994H30.15L27.9161 15.0368Z" />\n' +
    '<path d="M19.0828 11.0928C18.9067 11.8587 19.0158 12.6779 19.4206 13.3895C19.4538 13.4479 19.4887 13.505 19.5251 13.5607L18 15.126L12.89 9.8811C12.6381 9.62226 12.5407 9.24598 12.6345 8.89398C12.7282 8.54198 12.9988 8.26775 13.3445 8.17459C13.6901 8.08143 14.0581 8.18349 14.31 8.44232L17 11.177V3.35049C17 2.78693 17.4477 2.33008 18 2.33008C18.5523 2.33008 19 2.78693 19 3.35049V11.177L19.0828 11.0928Z" />\n' +
    '<path d="M5.85 19.3403H13.54C14.0923 19.3403 14.54 18.8834 14.54 18.3199C14.54 17.7563 14.0923 17.2995 13.54 17.2995H5.85L8.56 14.5546C8.81366 14.2975 8.91368 13.922 8.82238 13.5693C8.73108 13.2166 8.46234 12.9405 8.11738 12.8448C7.77242 12.7492 7.40366 12.8486 7.15 13.1056L2 18.3199L7.14 23.5342C7.39366 23.7912 7.76242 23.8906 8.10738 23.7949C8.45233 23.6993 8.72108 23.4231 8.81238 23.0704C8.90368 22.7178 8.80366 22.3422 8.55 22.0852L5.85 19.3403Z" />\n' +
    '<path d="M12.89 26.7587L18 21.5138L23.11 26.7893C23.4994 27.1894 23.4971 27.8359 23.105 28.2332C22.7129 28.6305 22.0794 28.6282 21.69 28.2281L19 25.4628V33.3097C19 33.8733 18.5523 34.3301 18 34.3301C17.4477 34.3301 17 33.8733 17 33.3097V25.4628L14.31 28.1975C13.9206 28.5976 13.2871 28.5999 12.895 28.2026C12.5029 27.8053 12.5006 27.1588 12.89 26.7587Z" />\n',

  outlineBadged:
    '<path d="M23.11 9.8811L18 15.126L12.89 9.8811C12.6381 9.62226 12.5407 9.24598 12.6345 8.89398C12.7282 8.54198 12.9988 8.26775 13.3445 8.17459C13.6901 8.08143 14.0581 8.18349 14.31 8.44232L17 11.177V3.35049C17 2.78693 17.4477 2.33008 18 2.33008C18.5523 2.33008 19 2.78693 19 3.35049V11.177L21.69 8.44232C21.9419 8.18349 22.3099 8.08143 22.6555 8.17459C23.0012 8.26775 23.2718 8.54198 23.3655 8.89398C23.4593 9.24598 23.3619 9.62226 23.11 9.8811Z" />\n' +
    '<path d="M13.54 19.3403H5.85L8.55 22.0852C8.80366 22.3422 8.90368 22.7178 8.81238 23.0704C8.72108 23.4231 8.45233 23.6993 8.10738 23.7949C7.76242 23.8906 7.39366 23.7912 7.14 23.5342L2 18.3199L7.15 13.1056C7.40366 12.8486 7.77242 12.7492 8.11738 12.8448C8.46234 12.9405 8.73108 13.2166 8.82238 13.5693C8.91368 13.922 8.81366 14.2975 8.56 14.5546L5.85 17.2995H13.54C14.0923 17.2995 14.54 17.7563 14.54 18.3199C14.54 18.8834 14.0923 19.3403 13.54 19.3403Z" />\n' +
    '<path d="M27.435 13.1107C27.8244 12.7105 28.4579 12.7083 28.85 13.1056L34 18.3198L28.85 23.5341C28.4579 23.9314 27.8244 23.9292 27.435 23.529C27.0456 23.1289 27.0479 22.4825 27.44 22.0852L30.15 19.3403H22.46C21.9077 19.3403 21.46 18.8834 21.46 18.3198C21.46 17.7563 21.9077 17.2994 22.46 17.2994H30.15L27.44 14.5545C27.0479 14.1572 27.0456 13.5108 27.435 13.1107Z" />\n' +
    '<path d="M18 21.5138L12.89 26.7587C12.5006 27.1588 12.5029 27.8053 12.895 28.2026C13.2871 28.5999 13.9206 28.5976 14.31 28.1975L17 25.4628V33.3097C17 33.8733 17.4477 34.3301 18 34.3301C18.5523 34.3301 19 33.8733 19 33.3097V25.4628L21.69 28.2281C22.0794 28.6282 22.7129 28.6305 23.105 28.2332C23.4971 27.8359 23.4994 27.1894 23.11 26.7893L18 21.5138Z" />\n' +
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n',

  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 1.66992C9.16344 1.66992 2 8.83337 2 17.6699C2 26.5065 9.16344 33.6699 18 33.6699C26.8366 33.6699 34 26.5065 34 17.6699C34 13.4265 32.3143 9.3568 29.3137 6.35621C26.3131 3.35563 22.2435 1.66992 18 1.66992ZM13.86 9.91992C14.1723 9.60842 14.6777 9.60842 14.99 9.91992L17.2 12.1099V5.92992C17.2 5.48809 17.5582 5.12992 18 5.12992C18.4418 5.12992 18.8 5.48809 18.8 5.92992V12.1099L21 9.91992C21.2036 9.71807 21.4995 9.64019 21.7761 9.71562C22.0528 9.79105 22.2681 10.0083 22.3411 10.2856C22.4141 10.5629 22.3336 10.8581 22.13 11.0599L18 15.1499L13.86 11.0499C13.5485 10.7377 13.5485 10.2322 13.86 9.91992ZM9.19 21.7399C9.50226 22.0514 10.0077 22.0514 10.32 21.7399C10.6288 21.4249 10.6243 20.9194 10.31 20.6099L8.11 18.4599H14.38C14.8218 18.4599 15.18 18.1017 15.18 17.6599C15.18 17.2181 14.8218 16.8599 14.38 16.8599H8.11L10.31 14.7199C10.5302 14.5236 10.6245 14.2219 10.5553 13.9351C10.4861 13.6483 10.2646 13.4228 9.97904 13.3485C9.69348 13.2743 9.39022 13.3632 9.19 13.5799L5 17.6699L9.19 21.7399ZM22.14 25.4099C21.8277 25.7214 21.3223 25.7214 21.01 25.4099L18.8 23.2299V29.3999C18.8 29.8418 18.4418 30.1999 18 30.1999C17.5582 30.1999 17.2 29.8418 17.2 29.3999V23.2299L15 25.4199C14.6852 25.732 14.177 25.7297 13.865 25.4149C13.553 25.1001 13.5552 24.592 13.87 24.2799L18 20.1799L22.14 24.2799C22.4515 24.5922 22.4515 25.0977 22.14 25.4099ZM26.021 21.9813C26.3065 22.0556 26.6098 21.9667 26.81 21.7499L31 17.6699L26.82 13.5799C26.6198 13.3632 26.3165 13.2743 26.031 13.3485C25.7454 13.4228 25.5239 13.6483 25.4547 13.9351C25.3855 14.2219 25.4798 14.5236 25.7 14.7199L27.9 16.8599H21.63C21.1882 16.8599 20.83 17.2181 20.83 17.6599C20.83 18.1017 21.1882 18.4599 21.63 18.4599H27.89L25.69 20.6099C25.4698 20.8063 25.3755 21.1079 25.4447 21.3947C25.5139 21.6816 25.7354 21.907 26.021 21.9813Z" />\n',

  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M23.8845 2.79132C22.0287 2.05734 20.0343 1.66992 18 1.66992C9.16344 1.66992 2 8.83337 2 17.6699C2 26.5065 9.16344 33.6699 18 33.6699C26.8366 33.6699 34 26.5065 34 17.6699C34 16.7819 33.9262 15.9014 33.7819 15.0368C33.7426 15.0374 33.7031 15.0374 33.6637 15.0366H28.3087L31 17.6699L26.81 21.7499C26.6098 21.9667 26.3065 22.0556 26.021 21.9813C25.7354 21.907 25.5139 21.6816 25.4447 21.3947C25.3755 21.1079 25.4698 20.8063 25.69 20.6099L27.89 18.4599H21.63C21.1882 18.4599 20.83 18.1017 20.83 17.6599C20.83 17.2181 21.1882 16.8599 21.63 16.8599H27.9L26.0255 15.0366H22.3395C21.2417 15.0586 20.1847 14.5325 19.5569 13.6081L18 15.1499L13.86 11.0499C13.5485 10.7377 13.5485 10.2322 13.86 9.91992C14.1723 9.60842 14.6777 9.60842 14.99 9.91992L17.2 12.1099V5.92992C17.2 5.48809 17.5582 5.12992 18 5.12992C18.4418 5.12992 18.8 5.48809 18.8 5.92992V12.1099L19.0031 11.9077C18.9828 11.2557 19.1625 10.6018 19.5362 10.0386L23.8845 2.79132ZM10.32 21.7399C10.0077 22.0514 9.50226 22.0514 9.19 21.7399L5 17.6699L9.19 13.5799C9.39022 13.3632 9.69348 13.2743 9.97904 13.3485C10.2646 13.4228 10.4861 13.6483 10.5553 13.9351C10.6245 14.2219 10.5302 14.5236 10.31 14.7199L8.11 16.8599H14.38C14.8218 16.8599 15.18 17.2181 15.18 17.6599C15.18 18.1017 14.8218 18.4599 14.38 18.4599H8.11L10.31 20.6099C10.6243 20.9194 10.6288 21.4249 10.32 21.7399ZM21.01 25.4099C21.3223 25.7214 21.8277 25.7214 22.14 25.4099C22.4515 25.0977 22.4515 24.5922 22.14 24.2799L18 20.1799L13.87 24.2799C13.5552 24.592 13.553 25.1001 13.865 25.4149C14.177 25.7297 14.6852 25.732 15 25.4199L17.2 23.2299V29.3999C17.2 29.8418 17.5582 30.1999 18 30.1999C18.4418 30.1999 18.8 29.8418 18.8 29.3999V23.2299L21.01 25.4099Z" />\n',

  solidBadged:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M33.2199 12.7599C30.3237 14.1423 26.8687 13.5261 24.629 11.2276C22.3894 8.92916 21.8629 5.45931 23.3199 2.59993C16.311 0.125981 8.5213 2.80456 4.51608 9.06586C0.510866 15.3272 1.34495 23.5222 6.52952 28.8481C11.7141 34.1741 19.8837 35.2283 26.2505 31.393C32.6173 27.5577 35.5044 19.8429 33.2199 12.7699V12.7599ZM13.8599 9.91993C14.1722 9.60842 14.6776 9.60842 14.9899 9.91993L17.1999 12.1099V5.92993C17.1999 5.4881 17.5581 5.12993 17.9999 5.12993C18.4417 5.12993 18.7999 5.4881 18.7999 5.92993V12.1099L20.9999 9.91993C21.2035 9.71807 21.4994 9.64019 21.776 9.71562C22.0527 9.79105 22.2681 10.0083 22.341 10.2856C22.414 10.5629 22.3335 10.8581 22.1299 11.0599L17.9999 15.1499L13.8599 11.0499C13.5484 10.7377 13.5484 10.2322 13.8599 9.91993ZM9.18991 21.7399C9.50217 22.0514 10.0076 22.0514 10.3199 21.7399C10.6287 21.4249 10.6242 20.9194 10.3099 20.6099L8.10991 18.4599H14.3799C14.8217 18.4599 15.1799 18.1018 15.1799 17.6599C15.1799 17.2181 14.8217 16.8599 14.3799 16.8599H8.10991L10.3099 14.7199C10.5301 14.5236 10.6244 14.2219 10.5552 13.9351C10.486 13.6483 10.2645 13.4228 9.97895 13.3486C9.69339 13.2743 9.39013 13.3632 9.18991 13.5799L4.99991 17.6699L9.18991 21.7399ZM22.1399 25.4099C21.8276 25.7214 21.3222 25.7214 21.0099 25.4099L18.7999 23.2299V29.3999C18.7999 29.8418 18.4417 30.1999 17.9999 30.1999C17.5581 30.1999 17.1999 29.8418 17.1999 29.3999V23.2299L14.9999 25.4199C14.6851 25.732 14.1769 25.7297 13.8649 25.4149C13.5529 25.1001 13.5551 24.592 13.8699 24.2799L17.9999 20.1799L22.1399 24.2799C22.4514 24.5922 22.4514 25.0977 22.1399 25.4099ZM26.0209 21.9813C26.3064 22.0556 26.6097 21.9667 26.8099 21.7499L30.9999 17.6699L26.8199 13.5799C26.6197 13.3632 26.3164 13.2743 26.0309 13.3486C25.7453 13.4228 25.5238 13.6483 25.4546 13.9351C25.3854 14.2219 25.4797 14.5236 25.6999 14.7199L27.8999 16.8599H21.6299C21.1881 16.8599 20.8299 17.2181 20.8299 17.6599C20.8299 18.1018 21.1881 18.4599 21.6299 18.4599H27.8899L25.6899 20.6099C25.4697 20.8063 25.3754 21.1079 25.4446 21.3948C25.5138 21.6816 25.7353 21.907 26.0209 21.9813Z" />\n' +
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n',
};

export const routerIconName = 'router';
export const routerIcon: IconShapeTuple = [routerIconName, renderIcon(icon)];
