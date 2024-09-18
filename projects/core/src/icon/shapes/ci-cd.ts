/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24.0885 19.5377C23.5322 19.5393 22.9775 19.4786 22.4346 19.3567C22.751 20.0425 22.993 20.7604 23.1563 21.4981C23.457 21.4981 23.7677 21.4981 24.0885 21.4981C25.1106 21.4965 26.1259 21.3302 27.0955 21.0055L26.1633 19.1858C25.491 19.3979 24.7929 19.5163 24.0885 19.5377Z" /><path d="M18.9064 17.5873L18.5456 17.2053C17.763 16.4379 17.1594 15.5063 16.7782 14.4773C16.3969 13.4483 16.2474 12.3475 16.3404 11.2537C16.4428 9.78865 16.9804 8.38797 17.884 7.23233L17.8038 8.66996C17.8028 8.92164 17.8959 9.16454 18.0648 9.35068C18.2337 9.53682 18.4661 9.65266 18.716 9.6753H18.8062C19.0571 9.67632 19.2993 9.58291 19.4848 9.41353C19.6704 9.24414 19.7859 9.0111 19.8085 8.76044L20.1493 4.64861C20.1613 4.50299 20.1415 4.3565 20.0913 4.21934C20.0411 4.08217 19.9617 3.95763 19.8586 3.85439C19.7489 3.76524 19.6216 3.70035 19.4852 3.66397C19.3487 3.62759 19.2061 3.62053 19.0668 3.64327L14.9672 3.99514C14.7014 4.0178 14.4554 4.14545 14.2834 4.35002C14.1114 4.55458 14.0275 4.8193 14.0501 5.08593C14.0727 5.35256 14.2 5.59927 14.4039 5.77178C14.6079 5.94429 14.8718 6.02848 15.1376 6.00581L16.4306 5.89523C15.2131 7.42334 14.4955 9.29117 14.3758 11.2436C14.2723 12.5817 14.4577 13.9264 14.9196 15.186C15.3815 16.4456 16.1088 17.5905 17.0521 18.5424L17.3628 18.9144C18.6436 20.242 19.3806 22.0038 19.4276 23.8506C19.481 24.6871 19.3929 25.5267 19.167 26.3338L20.9712 27.2486C21.3593 26.1154 21.5128 24.9147 21.4223 23.7199C21.3607 21.4357 20.4655 19.2535 18.9064 17.5873Z" /><path d="M32.9792 17.6275L31.7663 17.718C32.8731 16.2814 33.5556 14.562 33.7364 12.7556C33.9172 10.9491 33.5891 9.12805 32.7892 7.4994C31.9893 5.87075 30.7498 4.4999 29.2117 3.54274C27.6736 2.58558 25.8986 2.08052 24.0885 2.08499C23.066 2.08322 22.0502 2.24963 21.0815 2.57761L21.9936 4.38722C23.1379 4.06217 24.3418 4.00784 25.5105 4.22849C26.6793 4.44914 27.7811 4.93876 28.7293 5.65884C29.6775 6.37892 30.4461 7.30982 30.9749 8.37833C31.5036 9.44684 31.778 10.6238 31.7764 11.8167C31.7761 13.5405 31.193 15.2133 30.1225 16.5619L30.2228 15.0137C30.2313 14.8816 30.2139 14.7492 30.1714 14.624C30.1289 14.4987 30.0623 14.3831 29.9752 14.2836C29.8882 14.1842 29.7825 14.103 29.6642 14.0445C29.5459 13.9861 29.4172 13.9516 29.2856 13.943C29.1539 13.9344 29.0219 13.9519 28.897 13.9945C28.7722 14.0371 28.6569 14.1039 28.5577 14.1912C28.4586 14.2785 28.3776 14.3845 28.3193 14.5032C28.261 14.6219 28.2266 14.7509 28.2181 14.883L27.9374 18.9847C27.9295 19.1302 27.9531 19.2757 28.0068 19.4111C28.0604 19.5465 28.1428 19.6686 28.2482 19.7689C28.3382 19.8606 28.4461 19.9329 28.565 19.9813C28.6839 20.0297 28.8114 20.0532 28.9398 20.0504H29.04L33.1295 19.6282C33.2614 19.6156 33.3895 19.577 33.5064 19.5144C33.6233 19.4519 33.7267 19.3668 33.8105 19.2639C33.8944 19.1611 33.9572 19.0426 33.9951 18.9153C34.0331 18.788 34.0455 18.6544 34.0316 18.5223C34.0038 18.2663 33.8791 18.0309 33.6833 17.8644C33.4875 17.6979 33.2355 17.6131 32.9792 17.6275Z" /><path d="M4.58304 20.171H4.66323L8.76277 19.8192C8.8944 19.808 9.02254 19.7708 9.13986 19.71C9.25719 19.6491 9.36141 19.5656 9.44658 19.4643C9.53174 19.363 9.59618 19.2459 9.63622 19.1196C9.67625 18.9933 9.6911 18.8604 9.67991 18.7284C9.66872 18.5964 9.63172 18.4678 9.57101 18.3502C9.5103 18.2325 9.42708 18.128 9.32609 18.0425C9.2251 17.9571 9.10833 17.8925 8.98244 17.8523C8.85655 17.8122 8.72401 17.7973 8.59238 17.8085L7.19913 17.9291C8.51146 16.9581 10.0989 16.4332 11.7297 16.4312C12.2791 16.4345 12.8266 16.4951 13.3635 16.6121C13.0487 15.9267 12.81 15.2086 12.6518 14.4708C12.3511 14.4708 12.0404 14.4708 11.7297 14.4708C9.59114 14.4676 7.5117 15.1746 5.81591 16.4815L5.93619 15.1645C5.94715 15.0323 5.93196 14.8994 5.89148 14.7732C5.851 14.647 5.78604 14.5301 5.70033 14.4291C5.61462 14.3282 5.50986 14.2453 5.39208 14.1852C5.2743 14.125 5.14582 14.0888 5.01404 14.0787C4.74962 14.0564 4.48717 14.1402 4.28424 14.3117C4.08132 14.4832 3.95447 14.7284 3.93152 14.9935L3.5807 19.0953C3.56961 19.234 3.58731 19.3734 3.6327 19.5048C3.67808 19.6362 3.75015 19.7568 3.84435 19.8588C3.93856 19.9608 4.05285 20.0422 4.17999 20.0977C4.30714 20.1531 4.44438 20.1815 4.58304 20.1811V20.171Z" /><path d="M18.9665 28.0026L14.867 28.2741C14.6012 28.2914 14.3531 28.414 14.1773 28.6147C14.0016 28.8155 13.9125 29.0781 13.9298 29.3448C13.9471 29.6114 14.0693 29.8602 14.2695 30.0365C14.4696 30.2128 14.7315 30.3021 14.9973 30.2848L16.5409 30.1742C15.4057 31.0893 14.0359 31.664 12.5892 31.8321C11.1425 32.0003 9.67787 31.755 8.36414 31.1245C7.05041 30.4941 5.94104 29.5041 5.16388 28.2687C4.38673 27.0334 3.97343 25.6029 3.97161 24.1421C3.97884 23.4619 4.07659 22.7857 4.26229 22.1315L2.50821 21.1965C2.19769 22.1543 2.03873 23.1551 2.03711 24.1622C2.04887 25.9829 2.56859 27.764 3.53742 29.3037C4.50626 30.8434 5.88552 32.0804 7.51905 32.8745C9.15258 33.6686 10.9751 33.9881 12.7804 33.797C14.5857 33.6058 16.3015 32.9115 17.7337 31.7928L17.6134 32.9791C17.5995 33.1104 17.6116 33.2433 17.6489 33.37C17.6862 33.4967 17.7481 33.6148 17.8309 33.7175C17.9138 33.8202 18.016 33.9055 18.1317 33.9685C18.2475 34.0316 18.3745 34.0711 18.5055 34.0849H18.6157C18.8651 34.0862 19.1059 33.9942 19.2913 33.8269C19.4766 33.6596 19.5931 33.429 19.6181 33.1801L20.039 29.0985C20.0539 28.953 20.037 28.8061 19.9894 28.6678C19.9419 28.5296 19.8649 28.4035 19.7637 28.2982C19.6625 28.1929 19.5397 28.111 19.4038 28.0582C19.2678 28.0055 19.122 27.9831 18.9766 27.9926L18.9665 28.0026Z" />\n',
};

export const ciCdIconName = 'ci-cd';
export const ciCdIcon: IconShapeTuple = [ciCdIconName, renderIcon(icon)];
