/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6.54252 17.282C6.74201 17.3815 6.84176 17.3815 7.04125 17.3815C7.24074 17.3815 7.44023 17.282 7.53998 17.282L14.5222 13.202C14.8214 13.003 15.0209 12.7044 15.0209 12.3064C15.0209 11.9083 14.8214 11.6098 14.5222 11.4108L12.0285 9.91811L14.1232 6.13665C14.5222 5.44007 15.1206 4.843 15.8188 4.44495C17.8138 3.35032 20.3074 4.14642 21.4046 6.13665C21.7038 6.63421 22.3023 6.73373 22.801 6.43519C22.801 6.43519 22.801 6.43519 22.9008 6.43519C23.2998 6.13665 23.3995 5.53958 23.2 5.14154C22.6015 4.14642 21.8036 3.25081 20.8061 2.75325C17.8138 1.16106 14.1232 2.15618 12.5272 5.14154L9.73438 9.8186C9.43514 10.3162 9.63463 10.9132 10.0336 11.2118L12.0285 12.4059L8.0387 14.7942V8.12689C8.0387 7.52982 7.63972 7.13177 7.04125 7.13177C6.54252 7.23129 6.14354 7.62933 6.14354 8.22641V16.4859C6.14354 16.7844 6.34303 17.083 6.54252 17.282Z" /><path d="M32.1771 20.8644L28.686 14.6947C28.5863 14.4957 28.287 14.2966 28.0875 14.1971C27.7883 14.0976 27.5888 14.1971 27.2896 14.2966L25.0952 15.5903V10.9132L30.5812 14.1971C30.6809 14.1971 30.6809 14.2966 30.7807 14.2966C31.2794 14.4957 31.8779 14.2966 32.0774 13.7991C32.2768 13.3015 32.0774 12.7044 31.5786 12.5054L24.5964 8.32592C24.2972 8.12689 23.8982 8.12689 23.599 8.32592C23.2 8.42543 23.1003 8.72397 23.1003 9.12201V17.3815C23.1003 17.7796 23.2 18.1776 23.4992 18.3766C23.7985 18.5756 24.1975 18.5756 24.4967 18.3766L27.3893 16.6849L30.3817 21.9591C31.0799 23.2527 31.0799 24.7454 30.3817 26.039C29.7832 27.2332 28.4865 27.9298 27.1898 27.9298H26.2921C25.7934 27.9298 25.0952 28.3278 25.0952 28.9249C25.1949 29.522 25.6936 29.92 26.2921 29.92H27.1898C29.2845 29.92 31.1796 28.8254 32.1771 27.0342C33.2743 25.0439 33.2743 22.7551 32.1771 20.8644Z" /><path d="M22.5018 28.0293L15.5196 23.8498C15.2204 23.6508 14.8214 23.6508 14.5222 23.8498C14.2229 24.0488 14.1232 24.3473 14.1232 24.7454V28.0293H9.23565C7.73947 27.9298 6.34303 27.1337 5.64481 25.7405C4.84685 24.3473 4.84685 22.5561 5.64481 21.163C5.94405 20.6654 5.74456 20.0683 5.24583 19.7698C4.7471 19.4713 4.14863 19.6703 3.84939 20.1678C2.65245 22.2576 2.75219 24.7454 3.94914 26.7356C5.04634 28.6264 7.14099 29.8205 9.33539 29.8205H15.1206C15.7191 29.8205 16.1181 29.4224 16.1181 28.8254V26.4371L20.1079 28.8254L14.5222 32.1093C14.2229 32.3083 14.0234 32.6068 14.0234 33.0049C14.0234 33.602 14.5222 34 15.0209 34C15.2204 34 15.3201 33.9005 15.5196 33.801L22.5018 29.6215C22.7013 29.522 22.801 29.4224 22.9008 29.2234C23.2 28.8254 23.0005 28.2283 22.5018 28.0293Z" />\n',
  solid:
    '<path d="M20.8297 2.77247C17.8247 1.13965 14.1185 2.16016 12.4157 5.22168L10.212 9.09961L8.20868 7.97706C8.20868 7.77295 8.00835 7.77295 7.90818 7.77295C7.40735 7.77295 7.00668 8.18116 7.00668 8.69141V16.0391C7.00668 16.3452 7.10684 16.6514 7.40735 16.8555C7.50751 16.9575 7.70785 16.9575 7.80801 16.9575C8.00835 16.9575 8.10851 16.9575 8.20868 16.8555L14.5192 13.1816C14.8197 12.9775 14.9199 12.7734 14.9199 12.3652C14.9199 12.0591 14.7195 11.7529 14.5192 11.5488L12.015 10.1201L14.2187 6.24219C14.6194 5.52784 15.2204 4.91553 15.9215 4.50733C17.9249 3.38477 20.429 4.20118 21.5309 6.24219C21.8314 6.75245 22.4324 6.8545 22.9332 6.6504C23.4341 6.34424 23.5342 5.73194 23.3339 5.22168C22.6327 4.20118 21.8314 3.28272 20.8297 2.77247Z" /><path d="M32.2487 21.1416L29.2437 15.7329L31.5476 14.4063C31.8481 14.2022 31.9482 13.9981 31.9482 13.5898C31.9482 13.2837 31.7479 12.9775 31.5476 12.7734L25.3372 9.09961C25.2371 8.99756 25.0367 8.99756 24.9366 8.99756C24.4357 8.99756 24.0351 9.40577 24.0351 9.91602V17.2637C24.0351 17.5698 24.2354 17.876 24.4357 18.0801C24.5359 18.1821 24.7362 18.1821 24.8364 18.1821C25.0367 18.1821 25.1369 18.0801 25.2371 18.0801L27.4407 16.7534L30.4457 22.1621C31.1469 23.3867 31.1469 25.0195 30.4457 26.2441C29.7446 27.4688 28.5426 28.1831 27.2404 28.1831H26.3389C25.7379 28.1831 25.3372 28.5913 25.3372 29.2036C25.3372 29.8159 25.7379 30.2241 26.3389 30.2241H27.2404C29.3439 30.2241 31.2471 29.1016 32.2487 27.1626C33.2504 25.4277 33.2504 23.0806 32.2487 21.1416Z" /><path d="M21.7312 28.5913L15.5209 24.9175C15.4207 24.8154 15.2204 24.8154 15.1202 24.8154C14.6194 24.8154 14.2187 25.2236 14.2187 25.7339V28.3872H9.31052C7.80801 28.3872 6.40568 27.5708 5.70451 26.2441C4.90317 24.8154 4.90317 23.0806 5.70451 21.6519C6.00501 21.1416 5.80467 20.5293 5.30384 20.2231C4.80301 19.917 4.202 20.1211 3.9015 20.6314C2.6995 22.6724 2.6995 25.2236 3.9015 27.2647C5.00334 29.2036 7.00668 30.4282 9.31052 30.4282H14.1185V33.0815C14.1185 33.3877 14.3189 33.6938 14.5192 33.8979C14.6194 34 14.8197 34 14.9199 34C15.02 34 15.2204 34 15.3205 33.8979L21.6311 30.2241C21.9316 30.02 22.0317 29.8159 22.0317 29.4077C22.1319 28.9995 21.9316 28.6934 21.7312 28.5913Z" />\n',
};

export const recycleIconName = 'recycle';
export const recycleIcon: IconShapeTuple = [recycleIconName, renderIcon(icon)];
