/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M25.8178 33.8957C26.122 33.9641 26.4325 33.999 26.744 33.9999C27.913 34.0066 29.0364 33.5362 29.8651 32.6929L33.477 29.0371C33.8713 28.6215 34.0581 28.0444 33.9841 27.4704C33.9101 26.8963 33.5834 26.3884 33.0973 26.0916L26.1049 21.4697C25.5634 21.1377 24.8776 21.183 24.3823 21.5833L21.502 23.9227C19.4033 23.0108 17.4949 21.6958 15.8804 20.049C14.2553 18.4598 12.9442 16.5659 12.0184 14.4705L14.343 11.6292C14.76 11.1174 14.8014 10.3872 14.4449 9.82966L9.81418 2.83051C9.50768 2.36632 9.01602 2.06464 8.47128 2.00653C7.94638 1.96188 7.42771 2.14786 7.04502 2.51797L3.34047 6.16434C2.26056 7.19985 1.78669 8.73622 2.09019 10.218C3.35584 16.0641 6.25102 21.4099 10.4254 25.6085C14.6909 29.798 20.0264 32.6706 25.8178 33.8957ZM4.61854 7.52821L8.32309 3.88184L12.8241 10.6347L10.3236 13.6939C10.101 13.9336 10.0168 14.2746 10.1013 14.5937C11.0836 17.185 12.6253 19.516 14.6116 21.4129C16.5319 23.4077 18.8595 24.9439 21.4279 25.9116C21.7205 26.0055 22.0396 25.9452 22.28 25.7506L25.3733 23.2313L32.1248 27.6922L28.5129 31.348C27.9053 31.9647 27.0355 32.2281 26.1976 32.0489C20.7478 30.8976 15.7268 28.1956 11.7128 24.2542C7.80605 20.3069 5.1008 15.2871 3.92394 9.80128C3.74678 8.97132 4.0108 8.10734 4.61854 7.52821Z" />\n',
  solid:
    '<path d="M15.3015 20.6869C17.263 22.7188 19.6364 24.2876 22.2549 25.283L25.7974 22.4044C26.0124 22.2532 26.2965 22.2532 26.5115 22.4044L33.089 26.7319C33.5953 27.0427 33.929 27.5785 33.99 28.1785C34.0509 28.7785 33.8321 29.3728 33.3991 29.7832L30.3171 32.892C29.4206 33.7966 28.1398 34.1821 26.9061 33.9187C20.8475 32.6409 15.2631 29.6484 10.7912 25.283C6.41855 20.8742 3.39269 15.2645 2.08068 9.13424C1.81707 7.89231 2.20918 6.60007 3.1143 5.72794L6.30909 2.5807C6.70962 2.1604 7.27637 1.95019 7.84768 2.01003C8.41899 2.06986 8.93215 2.39318 9.24079 2.88775L13.6195 9.51805C13.7746 9.7318 13.7746 10.0239 13.6195 10.2377L10.7348 13.7783C11.7361 16.3987 13.2961 18.7587 15.3015 20.6869Z" />\n',
};

export const phoneHandsetIconName = 'phone-handset';
export const phoneHandsetIcon: IconShapeTuple = [phoneHandsetIconName, renderIcon(icon)];
