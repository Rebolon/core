/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M4 6H32C33.1046 6 34 6.89543 34 8V18.37C33.4351 17.663 32.7597 17.0518 32 16.56V8H4V28H20.41L20.5 28.16L19 30H4C2.89543 30 2 29.1046 2 28V8C2 6.89543 2.89543 6 4 6Z" /><path d="M7 11.9553H24V13.5434H7V11.9553Z" /><path d="M18 15.9256H7V17.5136H18V15.9256Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M27.455 17.1463C24.838 17.1277 22.4765 18.7022 21.5044 21.1143C20.5317 23.528 21.1492 26.2867 23.06 28.0645L21.12 30.4168L22.02 33.9999L25.68 29.5731C26.8385 29.9131 28.0715 29.9131 29.23 29.5731L32.89 33.9999L33.79 30.4168L31.85 28.0645C33.7608 26.2867 34.3783 23.528 33.4056 21.1143C32.4335 18.7022 30.072 17.1277 27.455 17.1463ZM23.2102 23.4299C23.1882 25.7847 25.0877 27.7142 27.46 27.747C29.8547 27.758 31.808 25.8459 31.83 23.4691C31.8298 21.1143 29.9122 19.2024 27.5397 19.1916C25.1673 19.1809 23.2321 21.0752 23.2102 23.4299Z" /><path d="M7 22.8734H17V24.4615H7V22.8734Z" />\n',

  outlineAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" /><path d="M21.9594 6H4C2.89543 6 2 6.89543 2 8V28C2 29.1046 2.89543 30 4 30H19L20.5 28.16L20.41 28H4V8H20.7594L21.9594 6Z" /><path d="M32 15.0367H33.6637C33.7763 15.0389 33.8886 15.0354 34 15.0263V18.37C33.4351 17.663 32.7597 17.0518 32 16.56V15.0367Z" /><path d="M19.005 11.9553C19.0277 12.4492 19.1653 12.9407 19.4206 13.3893C19.4504 13.4418 19.4815 13.4932 19.5139 13.5434H7V11.9553H19.005Z" /><path d="M7 15.9256H18V17.5136H7V15.9256Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M27.455 17.1463C24.838 17.1277 22.4765 18.7022 21.5044 21.1143C20.5317 23.528 21.1492 26.2867 23.06 28.0645L21.12 30.4168L22.02 33.9999L25.68 29.5731C26.8385 29.9131 28.0715 29.9131 29.23 29.5731L32.89 33.9999L33.79 30.4168L31.85 28.0645C33.7608 26.2867 34.3783 23.528 33.4056 21.1143C32.4335 18.7022 30.072 17.1277 27.455 17.1463ZM23.2102 23.4299C23.1882 25.7847 25.0877 27.7142 27.46 27.747C29.8547 27.758 31.808 25.8459 31.83 23.4691C31.8298 21.1143 29.9122 19.2024 27.5397 19.1916C25.1673 19.1809 23.2321 21.0752 23.2102 23.4299Z" /><path d="M17 22.8734H7V24.4615H17V22.8734Z" />\n',

  outlineBadged:
    '<path d="M4 27.8362V7.98511H22.78C22.5968 7.33899 22.5026 6.67122 22.5 6H4C2.89543 6 2 6.88876 2 7.98511V27.8362C2 28.9326 2.89543 29.8213 4 29.8213H19L20.5 27.995L20.41 27.8362H4Z" /><path d="M32 13.1663V16.4814C32.7597 16.9695 33.4351 17.5762 34 18.2779V12.3226C33.3785 12.6993 32.7046 12.9836 32 13.1663Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M27.455 17.1464C24.838 17.1278 22.4765 18.7023 21.5044 21.1144C20.5317 23.528 21.1492 26.2867 23.06 28.0645L21.12 30.4169L22.02 34L25.68 29.5732C26.8385 29.9132 28.0715 29.9132 29.23 29.5732L32.89 34L33.79 30.4169L31.85 28.0645C33.7608 26.2867 34.3783 23.528 33.4056 21.1144C32.4335 18.7023 30.072 17.1278 27.455 17.1464ZM27.46 27.7469C25.0877 27.7141 23.1882 25.7846 23.2102 23.4298C23.2321 21.0751 25.1673 19.1808 27.5397 19.1915C29.9122 19.2023 31.8298 21.1142 31.83 23.469C31.808 25.8458 29.8547 27.7579 27.46 27.7469Z" /><path d="M17 22.8734H7V24.4615H17V22.8734Z" /><path d="M7 15.9256H18V17.5136H7V15.9256Z" /><path d="M24 11.9553H7V13.5434H24V11.9553Z" /><path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" />\n',

  solid:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M19 30H4C2.89543 30 2 29.1046 2 28V8C2 6.89543 2.89543 6 4 6H32C33.1046 6 34 6.89543 34 8V18.37C31.2314 14.8437 26.1703 14.1373 22.5418 16.7705C18.9133 19.4038 18.0159 24.4345 20.51 28.16L19.58 29.3L19 30ZM29.0721 17.3463C31.8808 18.0768 33.8374 20.6033 33.83 23.4899C33.8265 25.2167 33.1108 26.8664 31.85 28.0539L33.79 30.4104L32.89 33.9999L29.23 29.5652C28.0715 29.9058 26.8385 29.9058 25.68 29.5652L22.02 33.9999L21.12 30.4104L23.06 28.0539C20.9607 26.0599 20.4829 22.9068 21.8981 20.3863C23.3133 17.8659 26.2635 16.6157 29.0721 17.3463ZM25.7457 19.4334C24.1148 20.1248 23.0657 21.7274 23.09 23.4901H23.1C23.122 25.8672 25.0692 27.7812 27.46 27.7756C29.2329 27.7754 30.83 26.7102 31.5028 25.0792C32.1755 23.4482 31.7905 21.5746 30.5282 20.3368C29.2659 19.0989 27.3766 18.742 25.7457 19.4334ZM7 13.5568V11.9659H24V13.5568H7ZM7 17.5341H18V15.9432H7V17.5341ZM17 24.4943H7V22.9034H17V24.4943Z" />\n',

  solidAlerted:
    '<path d="M26.9039 1.64621L21.2222 11.1159C20.9526 11.4984 20.9281 11.9949 21.1588 12.4005C21.3896 12.806 21.8363 13.0519 22.3148 13.0367H33.6881C34.1666 13.0519 34.6134 12.806 34.8441 12.4005C35.0748 11.9949 35.0503 11.4984 34.7808 11.1159L29.0991 1.64621C28.8711 1.26913 28.4532 1.03735 28.0015 1.03735C27.5497 1.03735 27.1319 1.26913 26.9039 1.64621Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M21.9594 6H4C2.89543 6 2 6.89543 2 8V28C2 29.1046 2.89543 30 4 30H19L19.58 29.3L20.51 28.16C18.0159 24.4345 18.9133 19.4038 22.5418 16.7705C26.1703 14.1373 31.2314 14.8437 34 18.37V15.0263C33.8886 15.0354 33.7763 15.0389 33.6637 15.0367H22.3395C21.2214 15.0591 20.1458 14.513 19.5226 13.5568H7V11.9659H19.0055C18.9723 11.2948 19.1514 10.6186 19.5362 10.0387L21.9594 6ZM18 17.5341H7V15.9432H18V17.5341ZM7 24.4943H17V22.9034H7V24.4943Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M33.83 23.4899C33.8374 20.6033 31.8808 18.0768 29.0721 17.3463C26.2635 16.6157 23.3133 17.8659 21.8981 20.3863C20.4829 22.9068 20.9607 26.0599 23.06 28.0539L21.12 30.4104L22.02 33.9999L25.68 29.5652C26.8385 29.9058 28.0715 29.9058 29.23 29.5652L32.89 33.9999L33.79 30.4104L31.85 28.0539C33.1108 26.8664 33.8265 25.2167 33.83 23.4899ZM23.09 23.4901C23.0657 21.7274 24.1148 20.1248 25.7457 19.4334C27.3766 18.742 29.2659 19.0989 30.5282 20.3368C31.7905 21.5746 32.1755 23.4482 31.5028 25.0792C30.83 26.7102 29.2329 27.7754 27.46 27.7756C25.0692 27.7812 23.122 25.8672 23.1 23.4901H23.09Z" />\n',

  solidBadged:
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M34 11.7453C32.8662 12.5362 31.4872 13 30 13C26.134 13 23 9.86599 23 6H4C2.89543 6 2 6.89543 2 8V28C2 29.1046 2.89543 30 4 30H19L19.58 29.3L20.51 28.16C18.0159 24.4345 18.9133 19.4038 22.5418 16.7705C26.1703 14.1373 31.2314 14.8437 34 18.37V11.7453ZM7 11.9659V13.5568H24V11.9659H7ZM18 17.5341H7V15.9432H18V17.5341ZM7 24.4943H17V22.9034H7V24.4943Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M33.83 23.4899C33.8374 20.6033 31.8808 18.0768 29.0721 17.3463C26.2635 16.6157 23.3133 17.8659 21.8981 20.3863C20.4829 22.9068 20.9607 26.0599 23.06 28.0539L21.12 30.4104L22.02 33.9999L25.68 29.5652C26.8385 29.9058 28.0715 29.9058 29.23 29.5652L32.89 33.9999L33.79 30.4104L31.85 28.0539C33.1108 26.8664 33.8265 25.2167 33.83 23.4899ZM23.09 23.4901C23.0657 21.7274 24.1148 20.1248 25.7457 19.4334C27.3766 18.742 29.2659 19.0989 30.5282 20.3368C31.7905 21.5746 32.1755 23.4482 31.5028 25.0792C30.83 26.7102 29.2329 27.7754 27.46 27.7756C25.0692 27.7812 23.122 25.8672 23.1 23.4901H23.09Z" />\n',
};

export const certificateIconName = 'certificate';
export const certificateIcon: IconShapeTuple = [certificateIconName, renderIcon(icon)];
