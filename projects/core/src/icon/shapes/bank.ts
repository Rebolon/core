/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M3.49823 14.5297L17.9817 6.2234L32.4652 14.5297C32.9395 14.7774 33.5251 14.6078 33.793 14.1451C34.0609 13.6825 33.9158 13.0913 33.4641 12.8046L17.9817 3.91998L2.49937 12.8046C2.17426 12.9744 1.96856 13.3084 1.96359 13.6747C1.95863 14.0409 2.15519 14.3804 2.47558 14.5589C2.79597 14.7374 3.18859 14.7262 3.49823 14.5297Z"/><path d="M3.99768 26.9342C3.99768 27.4849 4.44489 27.9314 4.99654 27.9314H30.9669C31.5186 27.9314 31.9658 27.4849 31.9658 26.9342C31.9658 26.3835 31.5186 25.9371 30.9669 25.9371H27.9704V18.5881H25.9726V25.9371H18.9806V18.5881H16.9829V25.9371H9.99085V18.5881H7.99313V25.9371H4.99654C4.44489 25.9371 3.99768 26.3835 3.99768 26.9342Z"/><path d="M30.9869 14.9684H5.01648V16.9627H30.9869V14.9684Z"/><path d="M32.9647 29.9257H2.99886C2.44721 29.9257 2 30.3721 2 30.9228C2 31.4735 2.44721 31.92 2.99886 31.92H32.9647C33.5164 31.92 33.9636 31.4735 33.9636 30.9228C33.9636 30.3721 33.5164 29.9257 32.9647 29.9257Z"/><path d="M25.3334 12.5553H22.127L18.2215 10.3217L14.3259 12.5553H11.1196L17.8319 8.70631C18.0792 8.56381 18.3838 8.56381 18.631 8.70631L25.3334 12.5553Z"/>',

  outlineAlerted:
    '<path d="M26.9122 1.60953L21.2305 11.0792C20.9609 11.4617 20.9364 11.9582 21.1672 12.3638C21.3979 12.7694 21.8446 13.0153 22.3231 13H33.6964C34.1749 13.0153 34.6217 12.7694 34.8524 12.3638C35.0831 11.9582 35.0586 11.4617 34.7891 11.0792L29.1074 1.60953C28.8794 1.23245 28.4615 1.00067 28.0098 1.00067C27.558 1.00067 27.1402 1.23245 26.9122 1.60953Z"/><path d="M21.8208 14.9684C21.9943 14.9928 22.1704 15.0035 22.3477 15H30.9869V16.9627H5.01648V14.9684H21.8208Z"/><path d="M19.8885 9.42843L19.5443 10.0021C19.368 10.2678 19.2348 10.5537 19.1455 10.8502L18.2215 10.3217L14.3259 12.5553H11.1196L17.8319 8.70631C18.0792 8.56381 18.3838 8.56381 18.631 8.70631L19.8885 9.42843Z"/><path d="M21.8586 6.14477L20.831 7.85748L17.9817 6.2234L3.49823 14.5297C3.18859 14.7262 2.79597 14.7374 2.47558 14.5589C2.15519 14.3804 1.95863 14.0409 1.96359 13.6747C1.96856 13.3084 2.17426 12.9744 2.49937 12.8046L17.9817 3.91998L21.8586 6.14477Z"/><path d="M4.99654 27.9314C4.44489 27.9314 3.99768 27.4849 3.99768 26.9342C3.99768 26.3835 4.44489 25.9371 4.99654 25.9371H7.99313V18.5881H9.99085V25.9371H16.9829V18.5881H18.9806V25.9371H25.9726V18.5881H27.9704V25.9371H30.9669C31.5186 25.9371 31.9658 26.3835 31.9658 26.9342C31.9658 27.4849 31.5186 27.9314 30.9669 27.9314H4.99654Z"/><path d="M2.99886 29.9257H32.9647C33.5164 29.9257 33.9636 30.3721 33.9636 30.9228C33.9636 31.4735 33.5164 31.92 32.9647 31.92H2.99886C2.44721 31.92 2 31.4735 2 30.9228C2 30.3721 2.44721 29.9257 2.99886 29.9257Z"/>',

  outlineBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/><path d="M32.7941 12.4201C31.9382 12.7931 30.9932 13 30 13C29.9307 13 29.8615 12.999 29.7927 12.997L32.4652 14.5297C32.9395 14.7774 33.5251 14.6078 33.793 14.1451C34.0609 13.6825 33.9158 13.0913 33.4641 12.8046L32.7941 12.4201Z"/><path d="M24.0639 9.71151C23.5282 8.85655 23.1721 7.87761 23.0484 6.82752L17.9817 3.91998L2.49937 12.8046C2.17426 12.9744 1.96856 13.3084 1.96359 13.6747C1.95863 14.0409 2.15519 14.3804 2.47558 14.5589C2.79597 14.7374 3.18859 14.7262 3.49823 14.5297L17.9817 6.2234L24.0639 9.71151Z"/><path d="M4.99654 27.9314C4.44489 27.9314 3.99768 27.4849 3.99768 26.9342C3.99768 26.3835 4.44489 25.9371 4.99654 25.9371H7.99313V18.5881H9.99085V25.9371H16.9829V18.5881H18.9806V25.9371H25.9726V18.5881H27.9704V25.9371H30.9669C31.5186 25.9371 31.9658 26.3835 31.9658 26.9342C31.9658 27.4849 31.5186 27.9314 30.9669 27.9314H4.99654Z"/><path d="M5.01648 14.9684H30.9869V16.9627H5.01648V14.9684Z"/><path d="M2.99886 29.9257H32.9647C33.5164 29.9257 33.9636 30.3721 33.9636 30.9228C33.9636 31.4735 33.5164 31.92 32.9647 31.92H2.99886C2.44721 31.92 2 31.4735 2 30.9228C2 30.3721 2.44721 29.9257 2.99886 29.9257Z"/><path d="M22.127 12.5553H25.3334L18.631 8.70631C18.3838 8.56381 18.0792 8.56381 17.8319 8.70631L11.1196 12.5553H14.3259L18.2215 10.3217L22.127 12.5553Z"/>',

  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.49823 14.5297L4.99652 13.6522V16.9627H30.9669V13.6821L32.4452 14.5297C32.9195 14.7774 33.5051 14.6078 33.773 14.1451C34.0409 13.6825 33.8958 13.0913 33.4441 12.8046L17.9817 3.91998L2.49937 12.8046C2.17426 12.9744 1.96856 13.3084 1.96359 13.6747C1.95863 14.0409 2.15519 14.3804 2.47558 14.5589C2.79597 14.7374 3.18859 14.7262 3.49823 14.5297ZM32.8148 27.9314H31.9658V27.0838C31.9658 26.4505 31.4515 25.9371 30.8171 25.9371H27.9704V18.5881H23.9749V25.9371H19.9795V18.5881H15.984V25.9371H11.9886V18.5881H7.99314V25.9371H5.14638C4.51198 25.9371 3.99769 26.4505 3.99769 27.0838V27.9314H3.14866C2.51426 27.9314 1.99997 28.4448 1.99997 29.0781V31.92H33.9635V29.0781C33.9635 28.4448 33.4492 27.9314 32.8148 27.9314ZM18.631 8.09804C18.3838 7.95554 18.0791 7.95554 17.8319 8.09804L11.1295 11.977H14.3359L18.2315 9.74334L22.127 11.977H25.3433L18.631 8.09804Z"/>',

  solidAlerted:
    '<path d="M26.9122 1.60953L21.2305 11.0792C20.9609 11.4617 20.9364 11.9582 21.1672 12.3638C21.3979 12.7694 21.8446 13.0153 22.3231 13H33.6964C34.1749 13.0153 34.6217 12.7694 34.8524 12.3638C35.0831 11.9582 35.0586 11.4617 34.7891 11.0792L29.1074 1.60953C28.8794 1.23245 28.4615 1.00067 28.0098 1.00067C27.558 1.00067 27.1402 1.23245 26.9122 1.60953Z"/><path d="M21.8574 6.14691L17.9817 3.91998L2.49937 12.8046C2.17426 12.9744 1.96856 13.3084 1.96359 13.6747C1.95863 14.0409 2.15519 14.3804 2.47558 14.5589C2.79597 14.7374 3.18859 14.7262 3.49823 14.5297L4.99652 13.6522V16.9627H30.9669V15H22.3477C21.1658 15.0237 20.0314 14.4122 19.4287 13.3526C18.9004 12.4239 18.8758 11.3116 19.3316 10.3741L18.2315 9.74334L14.3359 11.977H11.1295L17.8319 8.09804C18.0791 7.95554 18.3838 7.95554 18.631 8.09804L20.1574 8.98014L21.8574 6.14691Z"/><path d="M31.9658 27.9314H32.8148C33.4492 27.9314 33.9635 28.4448 33.9635 29.0781V31.92H1.99997V29.0781C1.99997 28.4448 2.51426 27.9314 3.14866 27.9314H3.99769V27.0838C3.99769 26.4505 4.51198 25.9371 5.14638 25.9371H7.99314V18.5881H11.9886V25.9371H15.984V18.5881H19.9795V25.9371H23.9749V18.5881H27.9704V25.9371H30.8171C31.4515 25.9371 31.9658 26.4505 31.9658 27.0838V27.9314Z"/>',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M32.7832 12.4248C31.9302 12.7949 30.989 13 30 13C26.4154 13 23.4601 10.3056 23.0489 6.83155L17.9817 3.91998L2.49937 12.8046C2.17426 12.9744 1.96856 13.3084 1.96359 13.6747C1.95863 14.0409 2.15519 14.3804 2.47558 14.5589C2.79597 14.7374 3.18859 14.7262 3.49823 14.5297L4.99652 13.6522V16.9627H30.9669V13.6821L32.4452 14.5297C32.9195 14.7774 33.5051 14.6078 33.773 14.1451C34.0409 13.6825 33.8958 13.0913 33.4441 12.8046L32.7832 12.4248ZM17.8319 8.09804C18.0791 7.95554 18.3838 7.95554 18.631 8.09804L25.3433 11.977H22.127L18.2315 9.74334L14.3359 11.977H11.1295L17.8319 8.09804Z"/><path d="M31.9658 27.9314H32.8148C33.4492 27.9314 33.9635 28.4448 33.9635 29.0781V31.92H1.99997V29.0781C1.99997 28.4448 2.51426 27.9314 3.14866 27.9314H3.99769V27.0838C3.99769 26.4505 4.51198 25.9371 5.14638 25.9371H7.99314V18.5881H11.9886V25.9371H15.984V18.5881H19.9795V25.9371H23.9749V18.5881H27.9704V25.9371H30.8171C31.4515 25.9371 31.9658 26.4505 31.9658 27.0838V27.9314Z"/>',
};

export const bankIconName = 'bank';
export const bankIcon: IconShapeTuple = [bankIconName, renderIcon(icon)];
