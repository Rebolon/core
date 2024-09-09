/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M8.00497 15.0058C8.26519 15.0058 8.5154 14.9058 8.71557 14.7157L14.7206 8.71316C15.111 8.32299 15.111 7.69272 14.7206 7.30256C14.3303 6.91239 13.6998 6.91239 13.3095 7.30256L7.30438 13.3051C6.91405 13.6953 6.91405 14.3255 7.30438 14.7157C7.50455 14.9158 7.75476 15.0058 8.01498 15.0058H8.00497ZM14.3003 11.2943L11.2978 14.2955C10.9074 14.6857 10.9074 15.316 11.2978 15.7061C11.4979 15.9062 11.7481 15.9963 12.0084 15.9963C12.2686 15.9963 12.5188 15.8962 12.719 15.7061L15.7215 12.7049C16.1118 12.3147 16.1118 11.6844 15.7215 11.2943C15.3312 10.9041 14.7006 10.9041 14.3103 11.2943H14.3003ZM18.5739 4.69145C19.1344 5.25169 19.3746 6.05203 19.2244 6.83236L17.5731 15.0659L19.6948 14.6457L21.1761 7.23253C21.4663 5.79192 21.016 4.32129 19.9851 3.29085C18.9642 2.25041 17.483 1.80022 16.0518 2.09034L8.67554 3.56097L8.25518 5.68187L16.4421 4.04117C17.2228 3.8811 18.0234 4.13121 18.5839 4.69145H18.5739ZM24.7191 21.7087C25.1094 21.3185 25.1094 20.6882 24.7191 20.2981C24.3288 19.9079 23.6982 19.9079 23.3079 20.2981L20.3054 23.2994C19.915 23.6895 19.915 24.3198 20.3054 24.71C20.5055 24.91 20.7557 25.0001 21.016 25.0001C21.2762 25.0001 21.5264 24.9 21.7266 24.71L24.7291 21.7087H24.7191ZM32.7359 16.0163C31.695 14.9758 30.2137 14.5356 28.7925 14.8258L6.82397 19.2176C6.04331 19.3777 5.24264 19.1276 4.68216 18.5673C4.12169 18.0071 3.88149 17.2068 4.03161 16.4264L6.24348 5.46178C6.35357 4.92155 6.00328 4.39132 5.46282 4.28127C4.91236 4.16122 4.39192 4.52138 4.28182 5.06161L2.08997 16.0463C1.79973 17.4869 2.25011 18.9575 3.28098 19.988C4.32186 21.0284 5.7931 21.4686 7.22431 21.1785L16.7323 19.2776L14.8307 28.7817C14.5405 30.2223 14.9909 31.6929 16.0217 32.7234C16.8524 33.5537 17.9634 34.0039 19.1043 34.0039C19.3946 34.0039 19.6748 33.9739 19.9651 33.9239L27.3013 32.4532L27.7216 30.3323L19.5647 31.963C18.7841 32.1131 17.9834 31.873 17.4229 31.3128C16.8625 30.7525 16.6223 29.9522 16.7724 29.1719L18.8341 18.8475L29.1628 16.7866C29.9435 16.6265 30.7442 16.8666 31.3047 17.4369C31.8651 17.9971 32.1053 18.7974 31.9552 19.5778L29.7634 30.5524C29.6533 31.0927 30.0036 31.6229 30.544 31.7329C30.6141 31.7429 30.6741 31.753 30.7442 31.753C31.2146 31.753 31.6249 31.4228 31.725 30.9526L33.9169 19.9779C34.2071 18.5373 33.7567 17.0667 32.7259 16.0363L32.7359 16.0163ZM27.3013 21.2885L21.2962 27.2911C20.9059 27.6812 20.9059 28.3115 21.2962 28.7017C21.4964 28.9017 21.7466 28.9918 22.0068 28.9918C22.267 28.9918 22.5172 28.8917 22.7174 28.7017L28.7225 22.6991C29.1128 22.3089 29.1128 21.6787 28.7225 21.2885C28.3321 20.8983 27.7016 20.8983 27.3113 21.2885H27.3013Z" fill="black"/>\n',
  solid:
    '  <path d="M32.7459 16.0198C31.705 14.9798 30.2338 14.5398 28.8025 14.8298L19.2945 16.7298L7.54458 19.0698C7.3344 19.1098 7.12422 19.1298 6.91405 19.1298C6.07334 19.1298 5.25264 18.7998 4.64213 18.1898C3.88149 17.4298 3.55121 16.3398 3.76138 15.2898L5.82313 4.12976L5.07249 4.27976C4.67215 4.35976 4.36189 4.66976 4.29183 5.05976L2.08997 16.0398C1.79973 17.4798 2.25011 18.9498 3.28098 19.9798C4.11168 20.8098 5.22262 21.2598 6.36358 21.2598C6.65383 21.2598 6.93406 21.2298 7.22431 21.1798L16.7323 19.2798L14.8307 28.7798C14.5405 30.2198 14.9909 31.6898 16.0217 32.7198C16.8524 33.5498 17.9634 33.9998 19.1043 33.9998C19.3946 33.9998 19.6748 33.9698 19.9651 33.9198L30.9444 31.7298C31.3447 31.6498 31.655 31.3398 31.725 30.9498L33.9169 19.9798C34.2071 18.5398 33.7567 17.0698 32.7259 16.0398L32.7459 16.0198ZM20.3054 23.2898L23.3079 20.2898C23.6982 19.8998 24.3288 19.8998 24.7191 20.2898C25.1094 20.6798 25.1094 21.3098 24.7191 21.6998L21.7166 24.6998C21.5164 24.8998 21.2662 24.9898 21.006 24.9898C20.7457 24.9898 20.4955 24.8898 20.2954 24.6998C19.905 24.3098 19.905 23.6798 20.2954 23.2898H20.3054ZM28.7225 22.6998L22.7174 28.6998C22.5172 28.8998 22.267 28.9898 22.0068 28.9898C21.7466 28.9898 21.4964 28.8898 21.2962 28.6998C20.9059 28.3098 20.9059 27.6798 21.2962 27.2898L27.3013 21.2898C27.6916 20.8998 28.3221 20.8998 28.7125 21.2898C29.1028 21.6798 29.1028 22.3098 28.7125 22.6998H28.7225ZM13.2994 7.28976C13.6898 6.89976 14.3203 6.89976 14.7106 7.28976C15.101 7.67976 15.101 8.30976 14.7106 8.69976L8.70556 14.6998L6.39361 16.9998C6.6238 17.0998 6.87401 17.1398 7.13423 17.0898L8.59547 16.7998L14.3003 11.2698C14.3503 11.2198 14.4104 11.1998 14.4704 11.1598C14.5205 11.1298 14.5705 11.0798 14.6306 11.0598C14.7006 11.0298 14.7707 11.0298 14.8407 11.0198C14.8908 11.0198 14.9508 10.9898 15.0009 10.9898C15.0709 10.9898 15.151 11.0198 15.2211 11.0298C15.2711 11.0398 15.3312 11.0398 15.3812 11.0598C15.4513 11.0898 15.5013 11.1398 15.5614 11.1798C15.6114 11.2098 15.6614 11.2298 15.7015 11.2798C15.7515 11.3298 15.7715 11.3898 15.8116 11.4498C15.8416 11.4998 15.8916 11.5498 15.9116 11.6098C15.9317 11.6698 15.9417 11.7398 15.9517 11.8098C15.9617 11.8698 15.9817 11.9298 15.9817 11.9898C15.9817 12.0598 15.9617 12.1198 15.9417 12.1798C15.9317 12.2398 15.9317 12.2998 15.9016 12.3598C15.8716 12.4198 15.8216 12.4698 15.7915 12.5298C15.7615 12.5798 15.7315 12.6398 15.6915 12.6798L12.6889 15.6798C12.5989 15.7698 12.4988 15.8298 12.3887 15.8798L12.1985 16.0698L19.6848 14.5698L21.1561 7.19976C21.4463 5.75976 20.9959 4.28976 19.9651 3.24976C18.9342 2.20976 17.483 1.79976 16.0518 2.08976L7.93491 3.70976L5.90319 14.6998L7.30438 13.2998L13.3095 7.29976L13.2994 7.28976Z" fill="black"/>\n',
};

export const helixIconName = 'helix';
export const helixIcon: IconShapeTuple = [helixIconName, renderIcon(icon)];
