/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21.54 23.2193C20.9229 23.2432 20.3119 23.0877 19.78 22.7713C19.2481 22.455 18.8177 21.9911 18.54 21.4349C18.2324 20.7028 18.218 19.879 18.5 19.1365C18.8543 18.213 19.5547 17.467 20.45 17.0598C21.2359 16.6446 22.1517 16.5556 23.0018 16.8118C23.8519 17.068 24.569 17.649 25 18.4308C25.1668 18.7957 25.2598 19.1905 25.2735 19.5921C25.2872 19.9936 25.2214 20.3939 25.08 20.7696C24.9023 21.2348 24.6337 21.6592 24.2902 22.0177C23.9466 22.3761 23.535 22.6613 23.08 22.8563C22.5971 23.0834 22.0727 23.207 21.54 23.2193ZM22.08 18.2695C21.7355 18.2672 21.3945 18.3394 21.08 18.4812C20.5842 18.7164 20.1974 19.1353 20 19.6506C19.9254 19.824 19.8869 20.011 19.8869 20.2C19.8869 20.389 19.9254 20.576 20 20.7494C20.2452 21.1568 20.6388 21.4514 21.0967 21.5701C21.5545 21.6888 22.0402 21.6222 22.45 21.3845C22.9609 21.1629 23.3637 20.7459 23.57 20.2252C23.6443 20.05 23.6826 19.8613 23.6826 19.6708C23.6826 19.4802 23.6443 19.2916 23.57 19.1163C23.4275 18.8467 23.2116 18.6237 22.9476 18.4737C22.6836 18.3237 22.3826 18.2528 22.08 18.2695Z" />\n' +
    '<path d="M16.19 34.1268C14.3837 34.1583 12.5891 33.8299 10.9091 33.1604C9.22903 32.4909 7.69669 31.4935 6.4 30.2255C5.02734 28.9334 3.92949 27.3735 3.17312 25.6405C2.41675 23.9076 2.01763 22.0378 2 20.1446C2 15.7089 4 11.233 7.68 7.54338C9.39408 5.80457 11.4364 4.42967 13.6864 3.49988C15.9364 2.57009 18.3484 2.10426 20.78 2.12991H20.9C24.23 2.12991 27.75 3.63197 28.14 6.8982C28.35 8.68253 27.55 10.3963 26.85 11.9387C26.3 13.1181 25.74 14.348 26.13 14.7714C26.52 15.1948 27.13 14.8924 28.22 14.5698C29.292 14.1374 30.4617 14.0118 31.6 14.2069C32.0034 14.3227 32.3783 14.5224 32.7004 14.7933C33.0225 15.0642 33.2847 15.4002 33.47 15.7795C34.41 17.6243 33.94 20.4873 33.24 22.3725C32.3387 24.8617 30.889 27.1125 29 28.9553C25.5015 32.2011 20.9438 34.0411 16.19 34.1268ZM20.78 4.17634C18.6066 4.15856 16.4518 4.58132 14.4436 5.41949C12.4354 6.25766 10.6149 7.49416 9.09 9.05552C5.79 12.3117 4 16.2735 4 20.1446C4.01724 21.7739 4.363 23.3826 5.01626 24.873C5.66952 26.3634 6.61662 27.7043 7.8 28.8142C13.18 34.1067 22.42 32.3929 27.67 27.4734C29.3155 25.8425 30.5795 23.8623 31.37 21.6769C32.07 19.7615 32.21 17.7251 31.69 16.717C31.6331 16.5864 31.5492 16.4694 31.4441 16.3738C31.3389 16.2782 31.2148 16.2062 31.08 16.1626C30.2996 16.0924 29.514 16.2135 28.79 16.5154C27.48 16.9086 25.79 17.4126 24.67 16.1626C23.35 14.7513 24.21 12.8863 25.04 11.1221C25.7417 9.93071 26.1242 8.5759 26.15 7.19055C25.91 5.17436 23.34 4.21667 20.89 4.16626L20.78 4.17634Z" />\n' +
    '<path d="M23.87 26.8484C23.7565 26.474 23.561 26.1301 23.2979 25.8422C23.0348 25.5543 22.7108 25.3297 22.35 25.185L22 25.0842L21.54 26.6266H21.7C21.8389 26.678 21.9648 26.7598 22.0685 26.8661C22.1723 26.9725 22.2513 27.1007 22.3 27.2416C22.47 27.8464 21.89 28.5622 21.04 28.8041C20.19 29.046 19.33 28.7335 19.16 28.1388L17.62 28.5722C17.8199 29.1618 18.2057 29.6691 18.7185 30.0168C19.2314 30.3645 19.843 30.5334 20.46 30.4977C20.7979 30.4934 21.1339 30.446 21.46 30.3566C22.2402 30.2118 22.9318 29.7615 23.3834 29.104C23.8351 28.4466 24.01 27.6356 23.87 26.8484Z" />\n' +
    '<path d="M15.07 25.7798C14.9071 25.2898 14.6105 24.8559 14.2144 24.5279C13.8182 24.1998 13.3385 23.9909 12.83 23.9249L12.56 25.5177C12.7765 25.5252 12.9862 25.5959 13.1637 25.7211C13.3412 25.8464 13.4789 26.0209 13.56 26.2234C13.73 26.8182 13.15 27.5339 12.3 27.7758C11.8741 27.9121 11.4143 27.8942 11 27.7254C10.8611 27.6741 10.7352 27.5923 10.6315 27.4859C10.5277 27.3796 10.4487 27.2514 10.4 27.1105C10.4 27.1105 10.4 27.0198 10.4 26.9794L8.82 27.1407C8.82575 27.2802 8.84586 27.4188 8.88 27.5541C8.99029 27.9254 9.18123 28.2674 9.43896 28.5551C9.69668 28.8428 10.0147 29.0691 10.37 29.2174C10.7856 29.3888 11.231 29.4745 11.68 29.4694C12.0182 29.4687 12.3546 29.4212 12.68 29.3283C13.0686 29.2546 13.4389 29.1041 13.7696 28.8856C14.1003 28.6671 14.3848 28.3848 14.607 28.0551C14.8291 27.7253 14.9843 27.3545 15.0638 26.964C15.1432 26.5736 15.1454 26.1711 15.07 25.7798Z" />\n' +
    '<path d="M10.78 19.3078C10.6665 18.9335 10.471 18.5896 10.2079 18.3017C9.94481 18.0137 9.62085 17.7891 9.26 17.6445C9.09849 17.5756 8.93115 17.5217 8.76 17.4832L8.39 19.0558C8.47599 19.0735 8.55981 19.1005 8.64 19.1365C8.77788 19.1868 8.90311 19.267 9.00679 19.3716C9.11048 19.4761 9.1901 19.6023 9.24 19.7413C9.41 20.3462 8.83 21.0619 7.98 21.3039C7.13 21.5458 6.27 21.2434 6.1 20.6385C6.07013 20.5092 6.07013 20.3747 6.1 20.2454L4.54 19.9026C4.44515 20.2866 4.44515 20.6881 4.54 21.072C4.74079 21.665 5.12967 22.1749 5.64659 22.5229C6.1635 22.8709 6.77969 23.0377 7.4 22.9975C7.73791 22.9932 8.07392 22.9458 8.4 22.8563C8.78768 22.7814 9.15688 22.6302 9.48646 22.4111C9.81603 22.1921 10.0995 21.9097 10.3206 21.5801C10.5417 21.2504 10.6961 20.88 10.7749 20.4901C10.8537 20.1002 10.8555 19.6984 10.78 19.3078Z" />\n' +
    '<path d="M13.45 11.4749C13.3365 11.1006 13.141 10.7567 12.8779 10.4688C12.6148 10.1808 12.2908 9.95624 11.93 9.81159C11.8653 9.78546 11.7983 9.76522 11.73 9.75111L11.21 11.2733C11.2432 11.2689 11.2768 11.2689 11.31 11.2733C11.4479 11.3236 11.5731 11.4039 11.6768 11.5084C11.7805 11.613 11.8601 11.7392 11.91 11.8782C12.08 12.483 11.5 13.1988 10.65 13.4407C10.2289 13.5615 9.78051 13.5438 9.37 13.3903C9.23109 13.339 9.10522 13.2572 9.00146 13.1508C8.89771 13.0445 8.81865 12.9163 8.77 12.7754C8.74974 12.6688 8.74974 12.5594 8.77 12.4528L7.19 12.2613C7.14494 12.5779 7.16537 12.9006 7.25 13.2089C7.35539 13.5878 7.54534 13.9374 7.80533 14.2309C8.06531 14.5244 8.38844 14.7541 8.75 14.9025C9.16495 15.0771 9.61036 15.1662 10.06 15.1646C10.3979 15.1603 10.7339 15.1129 11.06 15.0234C11.4486 14.9497 11.8189 14.7992 12.1496 14.5807C12.4803 14.3622 12.7648 14.08 12.987 13.7502C13.2091 13.4204 13.3643 13.0496 13.4438 12.6592C13.5232 12.2687 13.5254 11.8662 13.45 11.4749Z" />\n' +
    '<path d="M21 6.81755C20.8885 6.44216 20.6937 6.09729 20.4304 5.80908C20.167 5.52088 19.842 5.29693 19.48 5.1542L19.18 5.05339L18.7 6.59577H18.85C18.9889 6.64714 19.1148 6.72894 19.2185 6.83528C19.3223 6.94162 19.4013 7.06984 19.45 7.21071C19.62 7.81557 19.04 8.52123 18.19 8.76317C17.34 9.00512 16.48 8.70269 16.31 8.10791C16.2651 7.9117 16.2862 7.706 16.37 7.52322L14.89 6.93852C14.6662 7.45666 14.6239 8.03613 14.77 8.58172C14.9713 9.17031 15.3575 9.67671 15.87 10.0242C16.3825 10.3716 16.9933 10.5412 17.61 10.5072C17.9488 10.5047 18.2854 10.4538 18.61 10.356C18.9976 10.2822 19.3669 10.132 19.6968 9.91419C20.0268 9.69634 20.3109 9.41504 20.5329 9.08638C20.7549 8.75773 20.9104 8.38817 20.9905 7.99886C21.0707 7.60954 21.0739 7.20812 21 6.81755Z" />\n',
  solid:
    '<path d="M32.2243 15.0334C30.1247 14.4671 27.2952 16.8537 25.8855 15.3368C24.1758 13.4963 28.155 9.7444 27.7451 6.31615C27.4152 3.50478 24.2358 2.19012 21.0864 2.16989C18.6122 2.13402 16.1561 2.60064 13.8634 3.54213C11.5707 4.48362 9.48812 5.88083 7.7389 7.65105C1.10016 14.3154 -0.329573 23.8316 6.36916 30.3847C12.578 36.4524 22.976 34.6624 29.0349 28.9689C30.9082 27.1076 32.3493 24.8486 33.2541 22.3551C34.3339 19.4224 34.4338 15.6402 32.2243 15.0334ZM9.39858 10.6647C9.94016 10.4496 10.5434 10.4572 11.0795 10.6858C11.6156 10.9145 12.0422 11.346 12.268 11.8883C12.358 12.4696 12.2188 13.0633 11.8803 13.5418C11.5419 14.0203 11.0313 14.3453 10.4584 14.4469C9.91703 14.6646 9.31273 14.6584 8.7759 14.4294C8.23906 14.2005 7.81274 13.7673 7.58892 13.2232C7.50161 12.6423 7.64187 12.0499 7.97986 11.5721C8.31784 11.0942 8.82686 10.7687 9.39858 10.6647ZM5.0694 21.0303C4.97967 20.4476 5.12024 19.8525 5.46074 19.3738C5.80123 18.895 6.3143 18.571 6.88906 18.4718C7.42922 18.2571 8.03102 18.265 8.56552 18.4937C9.10001 18.7225 9.52467 19.1538 9.74852 19.6954C9.82741 20.2716 9.68319 20.8562 9.34597 21.3274C9.00875 21.7985 8.50461 22.1196 7.93886 22.2236C7.40077 22.4379 6.8016 22.4334 6.26675 22.211C5.73191 21.9885 5.30285 21.5655 5.0694 21.0303ZM12.0681 29.4543C11.5267 29.6721 10.9224 29.6658 10.3856 29.4369C9.84876 29.208 9.42244 28.7747 9.19862 28.2307C9.11105 27.6513 9.24995 27.0601 9.58589 26.5825C9.92183 26.1049 10.4284 25.7784 10.9983 25.6721C11.5399 25.4571 12.1431 25.4647 12.6792 25.6933C13.2153 25.9219 13.6419 26.3534 13.8677 26.8958C13.9117 27.188 13.8981 27.4862 13.8279 27.7731C13.7576 28.0601 13.632 28.3301 13.4583 28.5679C13.2846 28.8056 13.0662 29.0063 12.8156 29.1584C12.565 29.3105 12.2872 29.4111 11.9981 29.4543H12.0681ZM14.9975 8.32861C14.9102 7.74773 15.0505 7.15532 15.3885 6.67747C15.7264 6.19961 16.2355 5.87404 16.8072 5.77006C17.349 5.55766 17.9512 5.56657 18.4866 5.79489C19.022 6.02322 19.4487 6.45308 19.6766 6.99371C19.7664 7.57645 19.6258 8.1715 19.2853 8.65026C18.9448 9.12901 18.4317 9.45302 17.857 9.55226C17.317 9.76963 16.7142 9.76308 16.179 9.53405C15.6437 9.30502 15.2193 8.87193 14.9975 8.32861ZM20.8164 30.769C20.2751 30.9867 19.6708 30.9805 19.1339 30.7516C18.5971 30.5226 18.1708 30.0894 17.947 29.5453C17.8596 28.9645 17.9999 28.372 18.3379 27.8942C18.6759 27.4163 19.1849 27.0908 19.7566 26.9868C20.2984 26.7744 20.9006 26.7833 21.436 27.0116C21.9714 27.2399 22.3982 27.6698 22.6261 28.2104C22.7152 28.7977 22.5706 29.3967 22.2239 29.8763C21.8772 30.3558 21.3567 30.6768 20.7764 30.769H20.8164ZM25.8155 20.191C25.5067 20.9867 24.8993 21.6265 24.1258 21.9708C23.6846 22.1676 23.2082 22.2709 22.7261 22.2742C22.2013 22.2917 21.6825 22.1585 21.2295 21.89C20.7765 21.6215 20.408 21.2288 20.1665 20.7573C20.0172 20.4434 19.9339 20.1016 19.9218 19.7534C19.9098 19.4053 19.9693 19.0584 20.0966 18.7347C20.4053 17.939 21.0127 17.2991 21.7862 16.9549C22.4781 16.592 23.2824 16.5157 24.0289 16.7422C24.7754 16.9687 25.4054 17.4802 25.7855 18.1684C25.9222 18.4894 25.9927 18.8352 25.9927 19.1847C25.9927 19.5342 25.9222 19.8801 25.7855 20.2011L25.8155 20.191Z" />\n',
};

export const colorPaletteIconName = 'color-palette';
export const colorPaletteIcon: IconShapeTuple = [colorPaletteIconName, renderIcon(icon)];
