/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M13.1001 9.0573L9.06006 13.0957C8.67006 13.4856 8.67006 14.1253 9.06006 14.5252C9.26006 14.7251 9.52006 14.825 9.77006 14.825C10.0201 14.825 10.2901 14.7251 10.4801 14.5252L14.5201 10.4867C14.9101 10.0969 14.9101 9.45715 14.5201 9.0573C14.1301 8.65746 13.4901 8.66745 13.0901 9.0573H13.1001ZM24.1401 17.6539L26.0901 15.7047C27.2401 14.5552 27.2401 12.6859 26.0901 11.5363L17.4101 2.85972C16.2601 1.71017 14.3901 1.71017 13.2401 2.85972L2.86006 13.2357C1.71006 14.3852 1.71006 16.2545 2.86006 17.404L11.5401 26.0807C12.6901 27.2302 14.5601 27.2302 15.7101 26.0807L17.6601 24.1314L20.4601 26.9303H23.9101V29.9591H25.9301V31.3886L28.5401 33.9976H34.0001V27.5301L24.1401 17.6739V17.6539ZM31.9901 31.9684H29.3801L27.9501 30.5389V27.9299H25.9301V24.9011H21.3001L17.6701 21.2725L14.2901 24.6512C13.9301 25.0111 13.3401 25.0111 12.9801 24.6512L4.29006 15.9746C3.93006 15.6147 3.93006 15.025 4.29006 14.6651L14.6701 4.28916C15.0301 3.9293 15.6201 3.9293 15.9801 4.28916L24.6601 12.9658C25.0201 13.3256 25.0201 13.9154 24.6601 14.2753L21.2801 17.6539L31.9801 28.3498V31.9684H31.9901Z" />\n',

  outlineAlerted:
    '<path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z" fill="#A36500"/>\n' +
    '<path d="M21.4308 6.88082L17.4101 2.86006C16.2601 1.71006 14.3901 1.71006 13.2401 2.86006L2.86006 13.2401C1.71006 14.3901 1.71006 16.2601 2.86006 17.4101L11.5401 26.0901C12.6901 27.2401 14.5601 27.2401 15.7101 26.0901L17.6601 24.1401L20.4601 26.9401H23.9101V29.9701H25.9301V31.4001L28.5401 34.0101H34.0001V27.5401L24.1401 17.6801V17.6601L26.0901 15.7101C26.2945 15.5056 26.4627 15.2783 26.5944 15.0364H23.9037L21.2801 17.6601L31.9801 28.3601V31.9801H29.3801L27.9501 30.5501V27.9401H25.9301V24.9101H21.3001L17.6701 21.2801L14.2901 24.6601C13.9301 25.0201 13.3401 25.0201 12.9801 24.6601L4.29006 15.9801C3.93006 15.6201 3.93006 15.0301 4.29006 14.6701L14.6701 4.29006C15.0301 3.93006 15.6201 3.93006 15.9801 4.29006L20.3583 8.66833L21.4308 6.88082Z" />\n' +
    '<path d="M9.06006 13.1001L13.1001 9.06006H13.0901C13.4901 8.67006 14.1301 8.66006 14.5201 9.06006C14.9101 9.46006 14.9101 10.1001 14.5201 10.4901L10.4801 14.5301C10.2901 14.7301 10.0201 14.8301 9.77006 14.8301C9.52006 14.8301 9.26006 14.7301 9.06006 14.5301C8.67006 14.1301 8.67006 13.4901 9.06006 13.1001Z" />\n',

  outlineBadged:
    '<path d="M13.1001 9.0573L9.06006 13.0957C8.67006 13.4856 8.67006 14.1253 9.06006 14.5252C9.26006 14.7251 9.52006 14.825 9.77006 14.825C10.0201 14.825 10.2901 14.7251 10.4801 14.5252L14.5201 10.4867C14.9101 10.0969 14.9101 9.45715 14.5201 9.0573C14.1301 8.65746 13.4901 8.66745 13.0901 9.0573H13.1001ZM24.1401 17.6539L26.0901 15.7047C27.2401 14.5552 27.2401 12.6859 26.0901 11.5363L17.4101 2.85972C16.2601 1.71017 14.3901 1.71017 13.2401 2.85972L2.86006 13.2357C1.71006 14.3852 1.71006 16.2545 2.86006 17.404L11.5401 26.0807C12.6901 27.2302 14.5601 27.2302 15.7101 26.0807L17.6601 24.1314L20.4601 26.9303H23.9101V29.9591H25.9301V31.3886L28.5401 33.9976H34.0001V27.5301L24.1401 17.6739V17.6539ZM31.9901 31.9684H29.3801L27.9501 30.5389V27.9299H25.9301V24.9011H21.3001L17.6701 21.2725L14.2901 24.6512C13.9301 25.0111 13.3401 25.0111 12.9801 24.6512L4.29006 15.9746C3.93006 15.6147 3.93006 15.025 4.29006 14.6651L14.6701 4.28916C15.0301 3.9293 15.6201 3.9293 15.9801 4.28916L24.6601 12.9658C25.0201 13.3256 25.0201 13.9154 24.6601 14.2753L21.2801 17.6539L31.9801 28.3498V31.9684H31.9901Z" />\n' +
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n',

  solid:
    '<path d="M24.1401 17.6539L26.0901 15.7047C27.2401 14.5552 27.2401 12.6859 26.0901 11.5363L17.4101 2.85972C16.2601 1.71017 14.3901 1.71017 13.2401 2.85972L2.86006 13.2357C1.71006 14.3852 1.71006 16.2545 2.86006 17.404L11.5401 26.0807C12.6901 27.2302 14.5601 27.2302 15.7101 26.0807L17.6601 24.1314L20.4601 26.9303H23.9101V29.9591H25.9301V31.3886L28.5401 33.9976H34.0001V27.5301L24.1401 17.6739V17.6539ZM14.6701 10.6267L10.6301 14.6651C10.4001 14.895 10.1001 15.015 9.77006 15.015C9.44006 15.015 9.14006 14.885 8.91006 14.6651C8.44006 14.1953 8.44006 13.4256 8.91006 12.9558L12.9501 8.91736C13.1801 8.68745 13.4801 8.56749 13.8101 8.56749C14.1401 8.56749 14.4401 8.69744 14.6701 8.91736C15.1401 9.38717 15.1401 10.1569 14.6701 10.6267ZM31.9801 31.9684H29.3701L27.9401 30.5389V27.9299H25.9201V24.9011H21.2901L19.0401 22.652L22.6601 19.0334L31.9801 28.3498V31.9684Z" />\n',

  solidAlerted:
    '<path d="M26.9039 1.64597L21.2222 11.1156C20.9526 11.4981 20.9281 11.9946 21.1588 12.4002C21.3896 12.8058 21.8363 13.0517 22.3148 13.0364H33.6881C34.1666 13.0517 34.6134 12.8058 34.8441 12.4002C35.0748 11.9946 35.0503 11.4981 34.7808 11.1156L29.0991 1.64597C28.8711 1.26889 28.4532 1.03711 28.0015 1.03711C27.5497 1.03711 27.1319 1.26889 26.9039 1.64597Z" fill="#A36500"/>\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.4315 6.87963L19.5362 10.0385C18.8704 11.042 18.8204 12.334 19.4206 13.3891C20.0234 14.4487 21.1578 15.0601 22.3396 15.0364H26.5916C26.4603 15.2763 26.2931 15.5017 26.0901 15.7047L24.1401 17.6539V17.6739L34.0001 27.5301V33.9976H28.5401L25.9301 31.3886V29.9591H23.9101V26.9303H20.4601L17.6601 24.1314L15.7101 26.0807C14.5601 27.2302 12.6901 27.2302 11.5401 26.0807L2.86006 17.404C1.71006 16.2545 1.71006 14.3852 2.86006 13.2357L13.2401 2.85972C14.3901 1.71017 16.2601 1.71017 17.4101 2.85972L21.4315 6.87963ZM10.6301 14.6651L14.6701 10.6267C15.1401 10.1569 15.1401 9.38717 14.6701 8.91736C14.4401 8.69744 14.1401 8.56749 13.8101 8.56749C13.4801 8.56749 13.1801 8.68745 12.9501 8.91736L8.91006 12.9558C8.44006 13.4256 8.44006 14.1953 8.91006 14.6651C9.14006 14.885 9.44006 15.015 9.77006 15.015C10.1001 15.015 10.4001 14.895 10.6301 14.6651ZM29.3701 31.9684H31.9801V28.3498L22.6601 19.0334L19.0401 22.652L21.2901 24.9011H25.9201V27.9299H27.9401V30.5389L29.3701 31.9684Z" />\n',

  solidBadged:
    '<path d="M24.1401 17.6539L26.0901 15.7047C27.2401 14.5552 27.2401 12.6859 26.0901 11.5363L17.4101 2.85972C16.2601 1.71017 14.3901 1.71017 13.2401 2.85972L2.86006 13.2357C1.71006 14.3852 1.71006 16.2545 2.86006 17.404L11.5401 26.0807C12.6901 27.2302 14.5601 27.2302 15.7101 26.0807L17.6601 24.1314L20.4601 26.9303H23.9101V29.9591H25.9301V31.3886L28.5401 33.9976H34.0001V27.5301L24.1401 17.6739V17.6539ZM14.6701 10.6267L10.6301 14.6651C10.4001 14.895 10.1001 15.015 9.77006 15.015C9.44006 15.015 9.14006 14.885 8.91006 14.6651C8.44006 14.1953 8.44006 13.4256 8.91006 12.9558L12.9501 8.91736C13.1801 8.68745 13.4801 8.56749 13.8101 8.56749C14.1401 8.56749 14.4401 8.69744 14.6701 8.91736C15.1401 9.38717 15.1401 10.1569 14.6701 10.6267ZM31.9801 31.9684H29.3701L27.9401 30.5389V27.9299H25.9201V24.9011H21.2901L19.0401 22.652L22.6601 19.0334L31.9801 28.3498V31.9684Z" />\n' +
    '<path d="M30 11C32.7614 11 35 8.76142 35 6C35 3.23858 32.7614 1 30 1C27.2386 1 25 3.23858 25 6C25 8.76142 27.2386 11 30 11Z" fill="#E02200"/>\n',
};

export const keyIconName = 'key';
export const keyIcon: IconShapeTuple = [keyIconName, renderIcon(icon)];
