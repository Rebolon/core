/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '  <path d="M19.8286 8.33244C22.1684 6.00279 25.9359 6.00279 28.2757 8.33244L28.2557 8.37273C29.3723 9.4916 30 11.012 30 12.5977C30 14.1834 29.3723 15.7038 28.2557 16.8227L23.5617 21.5059C21.2219 23.8356 17.4545 23.8356 15.1147 21.5059C14.642 21.0316 14.2528 20.4799 13.9637 19.8744L15.2548 18.5852C15.3411 18.4996 15.4348 18.4221 15.535 18.3536C15.7141 19.0055 16.0591 19.5991 16.5359 20.0758C18.095 21.6245 20.6015 21.6245 22.1606 20.0758L26.8545 15.3925C27.5922 14.6519 28.0067 13.6463 28.0067 12.5977C28.0067 11.5491 27.5922 10.5435 26.8545 9.80288C25.2954 8.2542 22.7889 8.2542 21.2298 9.80288L18.7677 12.2603C18.0827 12.073 17.3759 11.9781 16.666 11.9783H16.1756L19.8286 8.33244Z" fill="black"/>\n' +
    '  <path d="M14.7944 27.4078L17.2565 24.9504C17.9401 25.1233 18.6434 25.2045 19.3482 25.1921H19.8486L16.1956 28.838C13.8558 31.1676 10.0884 31.1676 7.74852 28.838C6.62943 27.7204 6 26.1995 6 24.613C6 23.0264 6.62943 21.5055 7.74852 20.388L12.4525 15.6645C14.7923 13.3348 18.5597 13.3348 20.8995 15.6645C21.3722 16.1388 21.7614 16.6905 22.0505 17.2961L20.7594 18.5852C20.6781 18.6843 20.5877 18.7754 20.4892 18.8571C20.3101 18.2052 19.9651 17.6116 19.4883 17.1349C17.9292 15.5862 15.4227 15.5862 13.8636 17.1349L9.16971 21.8181C8.43203 22.5588 8.01746 23.5643 8.01746 24.613C8.01746 25.6616 8.43203 26.6672 9.16971 27.4078C10.7288 28.9565 13.2353 28.9565 14.7944 27.4078Z" fill="black"/>\n',
};

export const linkIconName = 'link';
export const linkIcon: IconShapeTuple = [linkIconName, renderIcon(icon)];
