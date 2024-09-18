/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M8.05054 24.8065C8.95294 25.051 9.86826 25.2459 10.7923 25.3903L11.9987 23.9952C10.6483 23.8338 9.31422 23.559 8.01066 23.1739L8.05054 24.8065Z" />\n' +
    '<path d="M6.05652 27.7155V10.6673C8.94784 12.0822 14.3716 12.5275 18.0206 12.5275C21.6697 12.5275 27.0934 12.0822 29.9847 10.6673V15.7234C29.0775 16.5347 24.9997 17.8309 18.0206 17.8309C14.6564 17.9137 11.2978 17.5104 8.05054 16.6337V18.2861C11.3135 19.075 14.6623 19.4605 18.0206 19.4338C21.4703 19.4338 27.1233 18.9886 29.9847 17.544V20.7399H31.9788V8.39159C31.9788 8.39159 31.9788 8.39159 31.9788 8.32233C31.9788 5.00769 23.2051 4.11719 18.0206 4.11719C12.8362 4.11719 4.0625 5.00769 4.0625 8.32233V27.7155C4.0625 29.6944 7.22302 30.8223 10.8721 31.3962L8.4294 28.8533C7.05353 28.4576 6.18613 28.0222 6.05652 27.7155ZM18.0206 6.09608C25.1492 6.09608 29.5161 7.52088 29.9847 8.32233C29.5261 9.12378 25.1592 10.5486 18.0206 10.5486C10.882 10.5486 6.36559 9.07431 6.05652 8.39159C6.36559 7.58025 10.7524 6.09608 18.0206 6.09608Z" />\n' +
    '<path d="M32.0685 22.2438H15.4882L10.0944 28.4872L15.5181 34.1172H32.0685C32.5973 34.1172 33.1045 33.9087 33.4785 33.5376C33.8524 33.1665 34.0625 32.6631 34.0625 32.1383V24.1535C34.0444 23.6407 33.8264 23.155 33.4544 22.7987C33.0823 22.4425 32.5855 22.2435 32.0685 22.2438ZM32.0685 32.1383H16.3656L12.7863 28.4081L16.4055 24.2227H32.0685V32.1383Z" />\n' +
    '<path d="M16.1363 27.1911C15.9391 27.1911 15.7463 27.2491 15.5824 27.3578C15.4184 27.4665 15.2906 27.6211 15.2152 27.8019C15.1397 27.9827 15.12 28.1816 15.1584 28.3735C15.1969 28.5655 15.2919 28.7418 15.4313 28.8802C15.5707 29.0185 15.7484 29.1128 15.9418 29.1509C16.1352 29.1891 16.3356 29.1695 16.5178 29.0946C16.7 29.0198 16.8557 28.8929 16.9653 28.7302C17.0748 28.5675 17.1333 28.3762 17.1333 28.1805C17.1333 27.9181 17.0282 27.6664 16.8413 27.4809C16.6543 27.2953 16.4007 27.1911 16.1363 27.1911Z" />\n',

  outlineAlerted:
    '<path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z" fill="#A36500"/>\n' +
    '<path d="M22.9433 4.3598C21.202 4.18687 19.4709 4.11719 18.0206 4.11719C12.8362 4.11719 4.0625 5.00769 4.0625 8.32233V27.7155C4.0625 29.6944 7.22302 30.8223 10.8721 31.3962L8.4294 28.8533C7.05353 28.4576 6.18613 28.0222 6.05652 27.7155V10.6673C8.94784 12.0822 14.3716 12.5275 18.0206 12.5275C18.3599 12.5275 18.7145 12.5236 19.0809 12.5155C18.9305 11.854 18.9947 11.1595 19.2668 10.5338C18.8614 10.5435 18.4459 10.5486 18.0206 10.5486C10.882 10.5486 6.36559 9.07431 6.05652 8.39159C6.36559 7.58025 10.7524 6.09608 18.0206 6.09608C19.3903 6.09608 20.658 6.14868 21.8156 6.23934L22.9433 4.3598Z" />\n' +
    '<path d="M29.9847 15.0364H31.9788V20.7399H29.9847V17.544C27.1233 18.9886 21.4703 19.4338 18.0206 19.4338C14.6623 19.4605 11.3135 19.075 8.05054 18.2861V16.6337C11.2978 17.5104 14.6564 17.9137 18.0206 17.8309C24.9997 17.8309 29.0775 16.5347 29.9847 15.7234V15.0364Z" />\n' +
    '<path d="M10.7923 25.3903C9.86826 25.2459 8.95294 25.051 8.05054 24.8065L8.01066 23.1739C9.31422 23.559 10.6483 23.8338 11.9987 23.9952L10.7923 25.3903Z" />\n' +
    '<path d="M15.5824 27.3578C15.7463 27.2491 15.9391 27.1911 16.1363 27.1911C16.4007 27.1911 16.6543 27.2953 16.8413 27.4809C17.0282 27.6664 17.1333 27.9181 17.1333 28.1805C17.1333 28.3762 17.0748 28.5675 16.9653 28.7302C16.8557 28.8929 16.7 29.0198 16.5178 29.0946C16.3356 29.1695 16.1352 29.1891 15.9418 29.1509C15.7484 29.1128 15.5707 29.0185 15.4313 28.8802C15.2919 28.7418 15.1969 28.5655 15.1584 28.3735C15.12 28.1816 15.1397 27.9827 15.2152 27.8019C15.2906 27.6211 15.4184 27.4665 15.5824 27.3578Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M32.0685 22.2438H15.4882L10.0944 28.4872L15.5181 34.1172H32.0685C32.5973 34.1172 33.1045 33.9087 33.4785 33.5376C33.8524 33.1665 34.0625 32.6631 34.0625 32.1383V24.1535C34.0444 23.6407 33.8264 23.155 33.4544 22.7987C33.0823 22.4425 32.5855 22.2435 32.0685 22.2438ZM32.0685 32.1383H16.3656L12.7863 28.4081L16.4055 24.2227H32.0685V32.1383Z" />\n',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M31.9788 12.7164C31.3513 12.901 30.6872 13 30 13C29.9949 13 29.9898 13 29.9847 13V15.7234C29.0775 16.5347 24.9997 17.8309 18.0206 17.8309C14.6564 17.9137 11.2978 17.5104 8.05054 16.6337V18.2861C11.3135 19.075 14.6623 19.4605 18.0206 19.4338C21.4703 19.4338 27.1233 18.9886 29.9847 17.544V20.7399H31.9788V12.7164Z" />\n' +
    '<path d="M26.1291 11.8333C25.4388 11.3742 24.8346 10.796 24.346 10.1278C22.5947 10.3807 20.471 10.5486 18.0206 10.5486C10.882 10.5486 6.36559 9.07431 6.05652 8.39159C6.36559 7.58025 10.7524 6.09608 18.0206 6.09608C19.8773 6.09608 21.5467 6.19274 23.0086 6.34986C23.0029 6.23396 23 6.11732 23 6C23 5.44405 23.0648 4.90324 23.1873 4.3847C21.3642 4.19353 19.5386 4.11719 18.0206 4.11719C12.8362 4.11719 4.0625 5.00769 4.0625 8.32233V27.7155C4.0625 29.6944 7.22302 30.8223 10.8721 31.3962L8.4294 28.8533C7.05353 28.4576 6.18613 28.0222 6.05652 27.7155V10.6673C8.94784 12.0822 14.3716 12.5275 18.0206 12.5275C20.3709 12.5275 23.4573 12.3428 26.1291 11.8333Z" />\n' +
    '<path d="M10.7923 25.3903C9.86826 25.2459 8.95294 25.051 8.05054 24.8065L8.01066 23.1739C9.31422 23.559 10.6483 23.8338 11.9987 23.9952L10.7923 25.3903Z" />\n' +
    '<path d="M15.5824 27.3578C15.7463 27.2491 15.9391 27.1911 16.1363 27.1911C16.4007 27.1911 16.6543 27.2953 16.8413 27.4809C17.0282 27.6664 17.1333 27.9181 17.1333 28.1805C17.1333 28.3762 17.0748 28.5675 16.9653 28.7302C16.8557 28.8929 16.7 29.0198 16.5178 29.0946C16.3356 29.1695 16.1352 29.1891 15.9418 29.1509C15.7484 29.1128 15.5707 29.0185 15.4313 28.8802C15.2919 28.7418 15.1969 28.5655 15.1584 28.3735C15.12 28.1816 15.1397 27.9827 15.2152 27.8019C15.2906 27.6211 15.4184 27.4665 15.5824 27.3578Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M32.0685 22.2438H15.4882L10.0944 28.4872L15.5181 34.1172H32.0685C32.5973 34.1172 33.1045 33.9087 33.4785 33.5376C33.8524 33.1665 34.0625 32.6631 34.0625 32.1383V24.1535C34.0444 23.6407 33.8264 23.155 33.4544 22.7987C33.0823 22.4425 32.5855 22.2435 32.0685 22.2438ZM32.0685 32.1383H16.3656L12.7863 28.4081L16.4055 24.2227H32.0685V32.1383Z" />\n',

  solid:
    '<path d="M15.6967 26.024C15.5057 26.024 15.3189 26.0802 15.1601 26.1855C15.0013 26.2907 14.8775 26.4404 14.8044 26.6155C14.7313 26.7906 14.7121 26.9832 14.7494 27.1691C14.7867 27.3549 14.8787 27.5257 15.0137 27.6597C15.1488 27.7937 15.3209 27.8849 15.5083 27.9219C15.6956 27.9589 15.8898 27.9399 16.0663 27.8674C16.2428 27.7948 16.3937 27.672 16.4998 27.5145C16.6059 27.3569 16.6626 27.1717 16.6626 26.9821C16.6626 26.728 16.5608 26.4843 16.3797 26.3046C16.1986 26.1249 15.9529 26.024 15.6967 26.024Z" />\n' +
    '<path d="M31.1314 20.275H31.0444V16.749C29.2093 19.5564 20.9414 19.9109 17.5222 19.9109C14.2734 19.9534 11.0311 19.6124 7.86349 18.8953V17.2856C11.0257 18.0393 14.2702 18.3998 17.5222 18.3587C22.3516 18.3587 30.2717 17.573 31.0444 14.6985V10.4251C28.9099 13.6446 20.9124 13.7404 17.5222 13.7404C14.2729 13.7825 11.0302 13.4383 7.86349 12.7151V10.6934C11.0249 11.4536 14.2694 11.8205 17.5222 11.7857C22.3516 11.7857 30.349 10.9904 31.0444 8.06806V7.65605C30.8609 4.52287 22.5061 3.67969 17.5222 3.67969C12.5383 3.67969 4.20283 4.52287 4 7.65605V26.5318C4 28.6014 7.51578 29.6937 11.3696 30.2111L14.1127 33.0856L14.6825 33.6797H31.1024C31.8709 33.6797 32.6079 33.3768 33.1513 32.8378C33.6947 32.2987 34 31.5676 34 30.8052V23.0824C33.9825 22.3367 33.6734 21.6269 33.1382 21.1031C32.6029 20.5792 31.8833 20.2823 31.1314 20.275ZM7.86349 25.1425V23.5328C8.96071 23.8318 10.0773 24.0559 11.2054 24.2035L10.0077 25.5832C9.27366 25.4683 8.54926 25.3245 7.86349 25.1425ZM32.0972 30.8148C32.0972 31.0689 31.9955 31.3126 31.8143 31.4923C31.6332 31.672 31.3875 31.7729 31.1314 31.7729H15.5132L11.1475 27.2025L15.5132 22.1913H31.1314C31.3875 22.1913 31.6332 22.2923 31.8143 22.472C31.9955 22.6517 32.0972 22.8954 32.0972 23.1495V30.8148Z" />\n',

  solidAlerted:
    '<path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z" fill="#A36500"/>\n' +
    '<path d="M15.1601 26.1855C15.3189 26.0802 15.5057 26.024 15.6967 26.024C15.9529 26.024 16.1986 26.1249 16.3797 26.3046C16.5608 26.4843 16.6626 26.728 16.6626 26.9821C16.6626 27.1717 16.6059 27.3569 16.4998 27.5145C16.3937 27.672 16.2428 27.7948 16.0663 27.8674C15.8898 27.9399 15.6956 27.9589 15.5083 27.9219C15.3209 27.8849 15.1488 27.7937 15.0137 27.6597C14.8787 27.5257 14.7867 27.3549 14.7494 27.1691C14.7121 26.9832 14.7313 26.7906 14.8044 26.6155C14.8775 26.4404 15.0013 26.2907 15.1601 26.1855Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.6337 13.7163C20.2687 14.5733 21.2853 15.0576 22.3395 15.0364H30.9166C29.6375 17.6352 22.1567 18.3587 17.5222 18.3587C14.2702 18.3998 11.0257 18.0393 7.86349 17.2856V18.8953C11.0311 19.6124 14.2734 19.9534 17.5222 19.9109C20.9414 19.9109 29.2093 19.5564 31.0444 16.749V20.275H31.1314C31.8833 20.2823 32.6029 20.5792 33.1382 21.1031C33.6734 21.6269 33.9825 22.3367 34 23.0824V30.8052C34 31.5676 33.6947 32.2987 33.1513 32.8378C32.6079 33.3768 31.8709 33.6797 31.1024 33.6797H14.6825L14.1127 33.0856L11.3696 30.2111C7.51578 29.6937 4 28.6014 4 26.5318V7.65605C4.20283 4.52287 12.5383 3.67969 17.5222 3.67969C19.1701 3.67969 21.1864 3.77186 23.1541 4.00851L19.5362 10.0385C19.1903 10.5598 19.0106 11.1589 19.0019 11.7622C18.4854 11.7783 17.989 11.7857 17.5222 11.7857C14.2694 11.8205 11.0249 11.4536 7.86349 10.6934V12.7151C11.0302 13.4383 14.2729 13.7825 17.5222 13.7404C18.1069 13.7404 18.8286 13.7375 19.6337 13.7163ZM7.86349 23.5328V25.1425C8.54926 25.3245 9.27366 25.4683 10.0077 25.5832L11.2054 24.2035C10.0773 24.0559 8.96071 23.8318 7.86349 23.5328ZM31.8143 31.4923C31.9955 31.3126 32.0972 31.0689 32.0972 30.8148V23.1495C32.0972 22.8954 31.9955 22.6517 31.8143 22.472C31.6332 22.2923 31.3875 22.1913 31.1314 22.1913H15.5132L11.1475 27.2025L15.5132 31.7729H31.1314C31.3875 31.7729 31.6332 31.672 31.8143 31.4923Z" />\n',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n' +
    '<path d="M15.1601 26.1855C15.3189 26.0802 15.5057 26.024 15.6967 26.024C15.9529 26.024 16.1986 26.1249 16.3797 26.3046C16.5608 26.4843 16.6626 26.728 16.6626 26.9821C16.6626 27.1717 16.6059 27.3569 16.4998 27.5145C16.3937 27.672 16.2428 27.7948 16.0663 27.8674C15.8898 27.9399 15.6956 27.9589 15.5083 27.9219C15.3209 27.8849 15.1488 27.7937 15.0137 27.6597C14.8787 27.5257 14.7867 27.3549 14.7494 27.1691C14.7121 26.9832 14.7313 26.7906 14.8044 26.6155C14.8775 26.4404 15.0013 26.2907 15.1601 26.1855Z" />\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M31.0444 12.9226C30.7037 12.9736 30.3549 13 30 13C29.1884 13 28.409 12.8619 27.6841 12.6078C24.3971 13.6947 19.8622 13.7404 17.5222 13.7404C14.2729 13.7825 11.0302 13.4383 7.86349 12.7151V10.6934C11.0249 11.4536 14.2694 11.8205 17.5222 11.7857C19.7635 11.7857 22.6872 11.6144 25.2467 11.1387C23.865 9.86002 23 8.03102 23 6C23 5.31387 23.0987 4.65079 23.2827 4.0242C21.2745 3.77593 19.206 3.67969 17.5222 3.67969C12.5383 3.67969 4.20283 4.52287 4 7.65605V26.5318C4 28.6014 7.51578 29.6937 11.3696 30.2111L14.1127 33.0856L14.6825 33.6797H31.1024C31.8709 33.6797 32.6079 33.3768 33.1513 32.8378C33.6947 32.2987 34 31.5676 34 30.8052V23.0824C33.9825 22.3367 33.6734 21.6269 33.1382 21.1031C32.6029 20.5792 31.8833 20.2823 31.1314 20.275H31.0444V16.749C29.2093 19.5564 20.9414 19.9109 17.5222 19.9109C14.2734 19.9534 11.0311 19.6124 7.86349 18.8953V17.2856C11.0257 18.0393 14.2702 18.3998 17.5222 18.3587C22.3516 18.3587 30.2717 17.573 31.0444 14.6985V12.9226ZM7.86349 23.5328V25.1425C8.54926 25.3245 9.27366 25.4683 10.0077 25.5832L11.2054 24.2035C10.0773 24.0559 8.96071 23.8318 7.86349 23.5328ZM31.8143 31.4923C31.9955 31.3126 32.0972 31.0689 32.0972 30.8148V23.1495C32.0972 22.8954 31.9955 22.6517 31.8143 22.472C31.6332 22.2923 31.3875 22.1913 31.1314 22.1913H15.5132L11.1475 27.2025L15.5132 31.7729H31.1314C31.3875 31.7729 31.6332 31.672 31.8143 31.4923Z" />\n',
};

export const controlLunIconName = 'control-lun';
export const controlLunIcon: IconShapeTuple = [controlLunIconName, renderIcon(icon)];
