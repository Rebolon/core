/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 2C9.16344 2 2 9.16344 2 18C2 26.8366 9.16344 34 18 34C26.8366 34 34 26.8366 34 18C34 13.7565 32.3143 9.68687 29.3137 6.68629C26.3131 3.68571 22.2435 2 18 2ZM26.54 18C26.5358 16.6554 26.3917 15.3148 26.11 14H29.71C29.5246 13.4516 29.3007 12.9169 29.04 12.4H25.69C25.0603 10.2961 24.0835 8.31209 22.8 6.53C21.98 6.1852 21.125 5.93038 20.25 5.77C22.0083 7.65924 23.3356 9.90768 24.14 12.36H18.75V5.6H17.25V12.37H11.86C12.6661 9.91324 13.9968 7.6612 15.76 5.77C14.8888 5.9277 14.0372 6.17916 13.22 6.52C11.9315 8.29462 10.948 10.2718 10.31 12.37H6.94C6.67457 12.8963 6.44732 13.4411 6.26 14H9.89C9.60829 15.3148 9.46418 16.6554 9.46 18C9.46276 19.4708 9.63048 20.9366 9.96 22.37H6.42C6.62688 22.9305 6.8742 23.4753 7.16 24H10.39C11.0022 25.9158 11.9098 27.7242 13.08 29.36C13.918 29.7194 14.7934 29.9844 15.69 30.15C14.0579 28.3698 12.8028 26.2778 12 24H17.26V30.34H18.76V24H24C23.1945 26.2788 21.9359 28.3708 20.3 30.15C21.2008 29.9787 22.0796 29.707 22.92 29.34C24.0883 27.7104 24.9959 25.9088 25.61 24H28.81C29.0945 23.485 29.3418 22.9503 29.55 22.4H26C26.3452 20.9584 26.5264 19.4823 26.54 18ZM17.25 22.37H11.51C10.806 19.6178 10.7751 16.7366 11.42 13.97H17.25V22.37ZM18.75 22.37H24.49C24.8369 20.9395 25.0081 19.472 25 18C25.0081 16.6552 24.8673 15.3137 24.58 14H18.75V22.37ZM4 18C4 25.732 10.268 32 18 32C21.713 32 25.274 30.525 27.8995 27.8995C30.525 25.274 32 21.713 32 18C32 10.268 25.732 4 18 4C10.268 4 4 10.268 4 18Z" />\n',

  outlineBadged:
    '<path d="M31.0986 13.3467C31.7559 13.2405 32.3959 13.0461 33.0013 12.7689C35.437 19.8131 32.6859 27.6059 26.3676 31.5597C20.0494 35.5135 11.838 34.5806 6.56767 29.3103C1.29736 24.0399 0.364476 15.8285 4.31823 9.51029C8.27199 3.19205 16.0649 0.440946 23.109 2.87663C22.8317 3.482 22.6374 4.12202 22.5312 4.77938C16.3671 2.61429 9.52509 5.00162 6.04592 10.5315C2.56674 16.0613 3.37597 23.2625 7.99569 27.8822C12.6154 32.502 19.8167 33.3112 25.3465 29.832C30.8763 26.3528 33.2636 19.5108 31.0986 13.3467Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0555 12.3207C23.2541 9.87774 21.9319 7.63783 20.1802 5.75577C20.9417 5.92425 21.6855 6.16441 22.4018 6.47303C22.528 8.70164 23.6467 10.7563 25.4501 12.0717C25.4619 12.1147 25.4813 12.1562 25.5005 12.1973C25.5303 12.261 25.5597 12.3239 25.5597 12.3905H25.9184C26.9614 13.0395 28.1491 13.4194 29.3752 13.4963C29.4449 13.6557 29.5047 13.815 29.5645 13.9844H25.9781C26.2588 15.2942 26.4023 16.6297 26.4065 17.9692C26.4037 19.4344 26.2367 20.8947 25.9084 22.3226H29.4449C29.2375 22.8708 28.9911 23.4035 28.7077 23.9165H25.5199C24.9081 25.8181 24.004 27.6128 22.8401 29.2363C22.0029 29.6018 21.1274 29.8725 20.23 30.0432C21.8597 28.2708 23.1136 26.1867 23.916 23.9165H18.6959V30.2325H17.2016V23.9165H11.9616C12.7613 26.1857 14.0117 28.2697 15.6375 30.0432C14.7443 29.8782 13.8722 29.6142 13.0375 29.2562C11.8717 27.6266 10.9676 25.8251 10.3577 23.9165H7.13993C6.85521 23.3938 6.60883 22.8511 6.40274 22.2927H9.9293C9.60103 20.8648 9.43395 19.4045 9.4312 17.9393C9.43536 16.5998 9.57892 15.2643 9.85956 13.9545H6.24335C6.42995 13.3977 6.65634 12.855 6.92076 12.3307H10.278C10.9135 10.2404 11.8933 8.2708 13.1769 6.50292C13.991 6.16338 14.8394 5.91287 15.7073 5.75577C13.9508 7.63978 12.6251 9.88328 11.8221 12.3307H17.1916V5.58641H18.6859V12.3207H24.0555ZM11.4734 22.2826H17.1916V13.9145H11.3838C10.7413 16.6706 10.7721 19.5409 11.4734 22.2826ZM24.9122 17.9392C24.9072 19.4072 24.7232 20.8692 24.3643 22.2926H18.6859V13.9544H24.4938C24.78 15.2632 24.9203 16.5996 24.9122 17.9392Z" />\n' +
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n',

  solid:
    '<path d="M18.85 13.45V22.93H25.33C25.7531 21.32 25.9781 19.6645 26 18C25.9967 16.4687 25.8223 14.9426 25.48 13.45H18.85Z" />\n' +
    '<path d="M10.67 22.93C10.2638 21.318 10.0556 19.6624 10.05 18C10.0565 16.4683 10.2343 14.9422 10.58 13.45H17.15V22.93H10.67Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 18C2 9.16344 9.16344 2 18 2C22.2435 2 26.3131 3.68571 29.3137 6.68629C32.3143 9.68687 34 13.7565 34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18ZM26.6 24.71H30.22C30.5518 24.1381 30.8426 23.5432 31.09 22.93H27.09C27.4637 21.3131 27.6549 19.6595 27.66 18C27.6597 16.4537 27.4954 14.9117 27.17 13.4H31.23C31.0197 12.7795 30.7657 12.1747 30.47 11.59H26.7C25.983 9.22717 24.878 7.0001 23.43 5C22.5048 4.63121 21.5426 4.363 20.56 4.2C22.5445 6.33309 24.0423 8.87153 24.95 11.64H18.86V4H17.17V11.61H11.08C11.9893 8.83709 13.4907 6.29505 15.48 4.16C14.4958 4.33567 13.5336 4.61731 12.61 5C11.1536 7.01465 10.0449 9.25904 9.33 11.64H5.52C5.22427 12.2246 4.9703 12.8295 4.76 13.45H8.85C8.53143 14.9457 8.37055 16.4707 8.37 18C8.38065 19.6498 8.57519 21.2933 8.95 22.9H4.95C5.18317 23.5223 5.46054 24.1272 5.78 24.71H9.46C10.1397 26.8702 11.1518 28.9114 12.46 30.76C13.4036 31.1681 14.3897 31.47 15.4 31.66C13.5514 29.6496 12.1294 27.2853 11.22 24.71H17.17V31.84H18.86V24.69H24.78C23.8694 27.2618 22.4475 29.6225 20.6 31.63C21.6316 31.4379 22.6381 31.1292 23.6 30.71C24.9036 28.8768 25.9155 26.8528 26.6 24.71Z" />\n',

  solidBadged:
    '<path d="M33.12 12.81C32.5154 13.0874 31.8764 13.2825 31.22 13.39H31C30.314 13.4961 29.6159 13.4961 28.93 13.39H27.13C27.4695 14.9035 27.6472 16.4489 27.66 18C27.6548 19.6595 27.4636 21.3131 27.09 22.93H31.09C30.8568 23.5523 30.5794 24.1572 30.26 24.74H26.6C25.9155 26.8828 24.9035 28.9068 23.6 30.74C22.638 31.1592 21.6316 31.4679 20.6 31.66C22.4474 29.6525 23.8693 27.2918 24.78 24.72H18.86V31.87H17.17V24.71H11.22C12.1294 27.2853 13.5513 29.6496 15.4 31.66C14.3896 31.47 13.4035 31.1681 12.46 30.76C11.1518 28.9114 10.1396 26.8703 9.45995 24.71H5.77995C5.46049 24.1272 5.18312 23.5223 4.94995 22.9H8.94995C8.57514 21.2933 8.38061 19.6498 8.36995 18C8.3705 16.4707 8.53138 14.9457 8.84995 13.45H4.75995C4.97025 12.8295 5.22422 12.2246 5.51995 11.64H9.32995C10.0448 9.25904 11.1535 7.01465 12.61 5C13.5335 4.61732 14.4958 4.33568 15.48 4.16C13.4906 6.29505 11.9893 8.8371 11.08 11.61H17.17V4H18.86V11.64H24.95V11.51C23.6066 10.2662 22.7667 8.57226 22.59 6.75C21.9921 5.84824 21.3233 4.99554 20.59 4.2C21.2897 4.33483 21.9783 4.52202 22.65 4.76C22.7577 4.11773 22.9494 3.49238 23.22 2.9C16.149 0.455036 8.32638 3.21663 4.35755 9.55895C0.388724 15.9013 1.32516 24.144 6.61556 29.4344C11.906 34.7248 20.1487 35.6612 26.491 31.6924C32.8333 27.7236 35.5949 19.901 33.15 12.83L33.12 12.81Z" />\n' +
    '<path d="M18.85 22.94H25.33C25.7538 21.3268 25.9788 19.6678 26 18C25.9967 16.4687 25.8223 14.9426 25.48 13.45H18.85V22.94Z" />\n' +
    '<path d="M10.67 22.93C10.2638 21.318 10.0556 19.6624 10.05 18C10.0565 16.4683 10.2343 14.9422 10.58 13.45H17.15V22.93H10.67Z" />\n' +
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n',
};

export const worldIconName = 'world';
export const worldIcon: IconShapeTuple = [worldIconName, renderIcon(icon)];
