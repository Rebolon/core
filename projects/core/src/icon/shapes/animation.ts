/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M10.0728 31.7124C9.27443 32.0069 8.40728 32.0691 7.57414 31.8918C6.741 31.7145 5.9768 31.3051 5.37209 30.712C4.95537 30.3055 4.62509 29.8209 4.40067 29.2866C4.17624 28.7523 4.06219 28.1791 4.06521 27.6007C4.06969 27.1942 4.13105 26.7902 4.24756 26.4002C3.80837 25.5891 3.46829 24.7294 3.23448 23.8391C2.30344 25.1072 1.87544 26.6684 2.03145 28.2271C2.18747 29.7858 2.91669 31.234 4.0811 32.2976C5.24552 33.3612 6.76435 33.9664 8.35017 33.9986C9.936 34.0309 11.4788 33.488 12.6866 32.4727C11.7883 32.3207 10.9111 32.0655 10.0728 31.7124Z" /><path d="M18.4308 27.6807C16.9671 28.4864 15.2774 28.7992 13.6176 28.5717C11.9578 28.3443 10.4182 27.589 9.23197 26.4202C8.04697 25.254 7.28005 23.7376 7.04781 22.1016C6.81557 20.4656 7.13072 18.7994 7.94534 17.3564C7.72348 16.4209 7.5979 15.4657 7.5705 14.5052C5.84661 16.3214 4.90594 18.7287 4.94753 21.2176C4.98913 23.7065 6.00974 26.0818 7.79338 27.8408C9.58185 29.5965 11.9893 30.6002 14.5109 30.6412C17.0324 30.6822 19.472 29.7575 21.3181 28.0609C20.3453 28.0292 19.3781 27.9019 18.4308 27.6807Z" /><path d="M21.7234 26.2101C18.8879 26.206 16.1415 25.2312 13.9521 23.452C11.7627 21.6727 10.2656 19.1989 9.71582 16.452C9.16607 13.7051 9.59765 10.8549 10.9371 8.38699C12.2765 5.91903 14.4409 3.98592 17.0616 2.91692C19.6823 1.84792 22.5973 1.70915 25.31 2.52423C28.0227 3.33932 30.3654 5.05785 31.939 7.38713C33.5126 9.7164 34.2198 12.5123 33.9402 15.2987C33.6606 18.0851 32.4115 20.6896 30.4055 22.6686C29.2649 23.7932 27.911 24.6848 26.4213 25.2925C24.9316 25.9001 23.3352 26.2119 21.7234 26.2101ZM21.7234 3.99082C20.3775 3.98951 19.0445 4.25015 17.8007 4.75785C16.5568 5.26555 15.4265 6.01035 14.4744 6.94967C13.5222 7.889 12.7669 9.00443 12.2515 10.2322C11.7362 11.46 11.4709 12.776 11.4709 14.1051C11.4711 15.4354 11.74 16.7524 12.2618 17.9789C12.7837 19.2054 13.5481 20.3168 14.5102 21.248C16.4328 23.1461 19.0402 24.2124 21.7588 24.2124C24.4775 24.2124 27.0848 23.1461 29.0075 21.248C30.4393 19.8306 31.413 18.0254 31.8051 16.0611C32.1972 14.0968 31.9901 12.0618 31.2101 10.2138C30.4301 8.36576 29.1122 6.78794 27.4234 5.68014C25.7346 4.57234 23.7508 3.98441 21.7234 3.99082Z" />\n',
  solid:
    '<path d="M3.26163 23.7837C2.31844 25.0518 1.87952 26.6188 2.02848 28.1864C2.17743 29.7541 2.90385 31.2127 4.06937 32.2845C5.23488 33.3563 6.75807 33.9665 8.34879 33.9987C9.93952 34.0309 11.4866 33.4829 12.6955 32.4592C10.4418 32.0754 8.3497 31.0507 6.67451 29.5102C4.99932 27.9697 3.81346 25.9799 3.26163 23.7837Z" /><path d="M7.48816 14.5379C5.83093 16.352 4.9353 18.7234 4.98386 21.1685C5.03242 23.6136 6.02153 25.9483 7.74951 27.6966C9.47748 29.445 11.8142 30.4752 14.2833 30.5774C16.7524 30.6796 19.1679 29.846 21.0373 28.2465C17.4498 28.069 14.062 26.5589 11.5503 24.0177C9.03866 21.4765 7.58805 18.0912 7.48816 14.5379Z" /><path d="M21.7451 2C24.1676 2.00001 26.5358 2.71053 28.5504 4.04181C30.5651 5.37309 32.1358 7.26539 33.0643 9.47968C33.9927 11.694 34.2371 14.1309 33.7667 16.4826C33.2963 18.8343 32.1322 20.9953 30.4213 22.6926C28.7105 24.3898 26.5297 25.5472 24.1545 26.0186C21.7793 26.4899 19.3162 26.254 17.0763 25.3407C14.8365 24.4274 12.9205 22.8776 11.5703 20.8872C10.22 18.8968 9.49619 16.555 9.4902 14.1576C9.48621 12.5625 9.80025 10.9822 10.4143 9.50739C11.0284 8.03253 11.9305 6.69204 13.0688 5.56271C14.2072 4.43337 15.5595 3.53737 17.0483 2.92602C18.5372 2.31468 20.1332 2 21.7451 2Z" />\n',
};

export const animationIconName = 'animation';
export const animationIcon: IconShapeTuple = [animationIconName, renderIcon(icon)];
