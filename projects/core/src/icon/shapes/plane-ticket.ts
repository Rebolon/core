/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M30.9375 18.0137H28.9375V20.0043H30.9375V18.0137ZM30.9375 22.0148H28.9375V24.0054H30.9375V22.0148ZM30.9375 14.0126H28.9375V16.0032H30.9375V14.0126ZM30.9375 26.0059H28.9375V27.9965H30.9375V26.0059ZM33.9375 10.0016H12.7175L28.9375 6.26053V8.00101H30.9375V5.00019C30.9375 4.7001 30.7975 4.41002 30.5575 4.21997C30.3175 4.02992 30.0075 3.9699 29.7075 4.02992L3.7175 10.0216V10.0416C3.2775 10.1416 2.9375 10.5217 2.9375 11.0018V31.0073C2.9375 31.5574 3.3875 32.0076 3.9375 32.0076H33.9375C34.4875 32.0076 34.9375 31.5574 34.9375 31.0073V11.0018C34.9375 10.4517 34.4875 10.0016 33.9375 10.0016ZM32.9375 30.007H4.9375V12.0021H32.9375V30.007ZM9.0075 22.3749C9.1575 22.755 9.5275 23.0051 9.9375 23.0051H13.0575L11.9775 26.7261C11.8875 27.0262 11.9475 27.3563 12.1375 27.6064C12.3275 27.8564 12.6275 28.0065 12.9375 28.0065H15.9375C16.2275 28.0065 16.4975 27.8864 16.6875 27.6764L20.8475 23.0051H25.3975C25.8075 23.0051 26.1775 22.755 26.3275 22.3649L26.8675 20.9646C26.9975 20.6145 26.9375 20.2243 26.6975 19.9443L24.1375 16.9735C24.1375 16.9735 24.0775 16.9034 24.0375 16.8734C23.5575 16.4533 22.9175 16.2433 22.2575 16.3133L20.2575 16.5533L16.4775 14.1427C16.3175 14.0427 16.1275 13.9826 15.9375 13.9826H12.9375C12.5575 13.9826 12.2175 14.1927 12.0475 14.5328C11.8775 14.8629 11.9075 15.273 12.1275 15.5731L13.4475 17.3836L11.4175 17.6336L12.1875 19.5542L22.4875 18.2938C22.5575 18.2938 22.6275 18.2938 22.6875 18.3438L24.7975 20.7845L24.7175 20.9846H20.3975C20.1075 20.9846 19.8375 21.1046 19.6475 21.3146L15.4875 25.9859H14.2675L15.3475 22.2649C15.4375 21.9648 15.3775 21.6347 15.1875 21.3847C14.9975 21.1346 14.6975 20.9846 14.3875 20.9846H10.6075L10.4975 20.7045C10.4975 20.7045 10.4775 20.7045 10.4775 20.6845L8.8275 16.5533C8.5975 16.0832 8.0575 15.8632 7.5675 16.0532C7.0575 16.2633 6.8075 16.8434 7.0075 17.3536L9.0075 22.3549V22.3749ZM15.7175 17.1235L14.8975 16.0032H15.6375L17.1275 16.9535L15.7175 17.1235Z" fill="black"/>\n',
  solid:
    '  <path d="M14.9075 16.0032L15.7275 17.1235L17.1375 16.9535L15.6475 16.0032H14.9075ZM33.9375 10.0016H12.7175L28.9375 6.26053V8.00101H30.9375V5.00019C30.9375 4.7001 30.7975 4.41002 30.5575 4.21997C30.3175 4.02992 30.0075 3.9699 29.7075 4.02992L3.7175 10.0216V10.0416C3.2775 10.1416 2.9375 10.5217 2.9375 11.0018V31.0073C2.9375 31.5574 3.3875 32.0076 3.9375 32.0076H33.9375C34.4875 32.0076 34.9375 31.5574 34.9375 31.0073V11.0018C34.9375 10.4517 34.4875 10.0016 33.9375 10.0016ZM26.8675 20.9646L26.3275 22.3649C26.1775 22.745 25.8075 23.0051 25.3975 23.0051H20.8475L16.6875 27.6764C16.4975 27.8864 16.2275 28.0065 15.9375 28.0065H12.9375C12.6275 28.0065 12.3275 27.8564 12.1375 27.6064C11.9475 27.3563 11.8875 27.0262 11.9775 26.7261L13.0575 23.0051H9.9375C9.5275 23.0051 9.1575 22.755 9.0075 22.3749L7.0075 17.3736C6.7975 16.8634 7.0475 16.2833 7.5675 16.0732C8.0575 15.8732 8.5975 16.1032 8.8275 16.5733L10.4775 20.7045C10.4775 20.7045 10.4975 20.7045 10.4975 20.7245L10.6075 21.0046H14.3875C14.6975 21.0046 14.9975 21.1546 15.1875 21.4047C15.3775 21.6547 15.4375 21.9848 15.3475 22.2849L14.2675 26.0059H15.4875L19.6475 21.3347C19.8375 21.1246 20.1075 21.0046 20.3975 21.0046H24.7175L24.7975 20.8045L22.6875 18.3638C22.6275 18.3238 22.5575 18.3038 22.4875 18.3138L12.1875 19.5742L11.4175 17.6536L13.4475 17.4036L12.1275 15.5931C11.9075 15.293 11.8775 14.8829 12.0475 14.5528C12.2175 14.2127 12.5675 14.0026 12.9375 14.0026H15.9375C16.1275 14.0026 16.3175 14.0527 16.4775 14.1627L20.2575 16.5733L22.2575 16.3333C22.9075 16.2633 23.5475 16.4733 24.0375 16.8934C24.0775 16.9234 24.1075 16.9535 24.1375 16.9935L26.6975 19.9643C26.9375 20.2444 27.0075 20.6345 26.8675 20.9846V20.9646ZM30.9375 27.9865H28.9375V25.9959H30.9375V27.9865ZM30.9375 23.9954H28.9375V22.0048H30.9375V23.9954ZM30.9375 19.9943H28.9375V18.0037H30.9375V19.9943ZM30.9375 15.9932H28.9375V14.0026H30.9375V15.9932Z" fill="black"/>\n',
};

export const planeTicketIconName = 'planeTicket';
export const planeTicketIcon: IconShapeTuple = [planeTicketIconName, renderIcon(icon)];
