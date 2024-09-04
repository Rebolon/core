/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M18.0001 2.00013C16.5633 2.00411 15.1337 2.20257 13.7501 2.59013L14.5201 4.45012C20.6686 2.82214 27.1448 5.5215 30.3168 11.0345C33.4888 16.5475 32.5679 23.5029 28.0704 28.0004C23.5729 32.4979 16.6175 33.4189 11.1045 30.2468C5.59149 27.0748 2.89212 20.5987 4.52011 14.4501L2.66011 13.6701C0.79872 20.2918 3.37769 27.3621 9.0653 31.2303C14.7529 35.0984 22.2763 34.8985 27.7505 30.734C33.2248 26.5694 35.4248 19.3721 33.2145 12.8586C31.0043 6.34506 24.8784 1.97305 18.0001 2.00013Z" fill="black"/>\n' +
    '  <path d="M12.8121 27.4894C8.60792 25.1837 6.42499 20.3842 7.45011 15.7001L9.00011 16.3201C8.22647 20.3022 10.1406 24.3232 13.7191 26.2336C17.2977 28.1439 21.7037 27.4968 24.5819 24.6382C27.4601 21.7796 28.1372 17.378 26.2512 13.7865C24.3653 10.195 20.3574 8.25361 16.3701 9.00012L15.7501 7.44012C20.439 6.43765 25.228 8.64374 27.5134 12.859C29.7987 17.0742 29.0342 22.2912 25.6355 25.6735C22.2368 29.0558 17.0162 29.7951 12.8121 27.4894Z" fill="black"/>\n' +
    '  <path d="M14.0001 18.4101C14.2034 20.4756 15.9249 22.0594 18.0001 22.0901C20.0926 21.9974 21.773 20.3317 21.8841 18.2401C21.9953 16.1486 20.5009 14.3142 18.4301 14.0001L17.7601 12.3101H18.0001C20.3068 12.2858 22.3999 13.6566 23.2996 15.7808C24.1992 17.9049 23.7273 20.3621 22.1048 22.0019C20.4823 23.6417 18.0303 24.1396 15.8967 23.2625C13.7631 22.3854 12.3702 20.3069 12.3701 18.0001V17.7301L14.0001 18.4101Z" fill="black"/>\n' +
    '  <path d="M8.55011 13.4901C8.41823 13.4882 8.29243 13.4343 8.20011 13.3401L2.65011 7.77012C2.51005 7.62727 2.46862 7.41469 2.54479 7.2297C2.62097 7.04471 2.80007 6.92294 3.00011 6.92013H6.94011V2.92013C6.94292 2.72009 7.0647 2.54098 7.24969 2.46481C7.43467 2.38864 7.64726 2.43007 7.79011 2.57013L13.3801 8.16012C13.4743 8.25244 13.5282 8.37824 13.5301 8.51013V12.0001L19.0001 17.4401C19.2538 17.6956 19.3519 18.0669 19.2575 18.4143C19.1631 18.7617 18.8905 19.0324 18.5425 19.1243C18.1944 19.2163 17.8238 19.1156 17.5701 18.8601L12.2001 13.4901H8.55011Z" fill="black"/>\n',
  solid:
    '  <path d="M18 2.00001C16.5632 2.00399 15.1335 2.20246 13.75 2.59001L15.35 6.48001C20.5259 5.27045 25.8758 7.64314 28.4537 12.2915C31.0316 16.9399 30.2111 22.7346 26.4441 26.4846C22.6771 30.2346 16.8788 31.0288 12.2421 28.4299C7.60547 25.831 5.257 20.4704 6.48997 15.3L2.60997 13.68C0.754254 20.2978 3.33229 27.3613 9.01454 31.2279C14.6968 35.0945 22.2136 34.9002 27.6885 30.7451C33.1633 26.5901 35.3729 19.4027 33.1777 12.8897C30.9825 6.37666 24.873 1.99323 18 2.00001Z" fill="black"/>\n' +
    '  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.54997 13.49C8.41808 13.4881 8.29228 13.4342 8.19997 13.34L2.64997 7.77001C2.50991 7.62716 2.46848 7.41457 2.54465 7.22958C2.62082 7.04459 2.79993 6.92282 2.99997 6.92001H6.93997V2.92001C6.94278 2.71997 7.06455 2.54086 7.24954 2.46469C7.43453 2.38852 7.64712 2.42995 7.78997 2.57001L13.38 8.16001C13.4742 8.25232 13.5281 8.37812 13.53 8.51001V12L16 14.46C15.4098 14.7928 14.9115 15.267 14.55 15.84L12.2 13.49H8.54997ZM16 14.46L19 17.46C19.3746 17.8476 19.3746 18.4624 19 18.85C18.6099 19.2377 17.98 19.2377 17.59 18.85L14.59 15.85C14.1618 16.4866 13.9258 17.233 13.91 18C13.91 20.2589 15.7411 22.09 18 22.09C20.2588 22.09 22.09 20.2589 22.09 18C22.09 15.7412 20.2588 13.91 18 13.91C17.2965 13.9143 16.6067 14.104 16 14.46Z" fill="black"/>\n' +
    '  <path d="M13.1281 26.9255C9.18436 24.7941 7.10136 20.3319 7.99997 15.94L12.12 17.65V18C12.1255 21.2461 14.7605 23.8737 18.0066 23.87C21.2528 23.8663 23.8818 21.2328 23.88 17.9867C23.8781 14.7405 21.2461 12.11 18 12.11H17.69L16 8.00001C20.3985 7.13448 24.8449 9.25102 26.9466 13.2107C29.0483 17.1703 28.3095 22.0391 25.1277 25.1969C21.9459 28.3548 17.0718 29.057 13.1281 26.9255Z" fill="black"/>\n',
};

export const bullseyeIconName = 'bullseye';
export const bullseyeIcon: IconShapeTuple = [bullseyeIconName, renderIcon(icon)];
