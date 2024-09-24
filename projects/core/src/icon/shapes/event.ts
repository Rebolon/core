/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m16.17 25.86-5.36-5.36a1 1 0 0 1 1.41-1.41L16.17 23l8.64-8.64a1 1 0 0 1 1.41 1.41z"/><path d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6"/><path d="M10 10a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1m16 0a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1m-3-4H13v2h10z"/>',
  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path d="M32 15.037h1.664q.169.003.336-.01V30.19A1.78 1.78 0 0 1 32.25 32H3.75A1.78 1.78 0 0 1 2 30.19V7.81A1.78 1.78 0 0 1 3.75 6H7v2H4v22h28z"/><path d="M24.133 15.037h2.324l.003.044a1 1 0 0 1-.24.689L16.17 25.86l-5.36-5.36a1 1 0 0 1 1.41-1.41L16.17 23zM21.96 6l-1.2 2H13V6zM10.707 9.707A1 1 0 0 1 9 9V3a1 1 0 0 1 2 0v6a1 1 0 0 1-.293.707"/>',
  outlineBadged:
    '<path d="m10.81 20.5 5.36 5.36 10.05-10.05a1 1 0 0 0-1.41-1.41L16.17 23l-3.94-3.94a1 1 0 0 0-1.41 1.41zM10 10a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1"/><path d="M32 13.22V30H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V12.34a7.5 7.5 0 0 1-2 .88"/><path d="M22.5 6H13v2h9.78a7.5 7.5 0 0 1-.28-2m7.5 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>',
  solid:
    '<path d="M10 10a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1m16 0a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1"/><path d="M32.25 6h-4v3a2.2 2.2 0 1 1-4.4 0V6H12.2v3a2.2 2.2 0 1 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6m-6.31 10.58-9.67 9.67L11 20.94A1.36 1.36 0 0 1 12.9 19l3.38 3.38L24 14.66a1.363 1.363 0 0 1 2.226 1.487q-.105.25-.296.443z"/>',
  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path d="M21.96 6H12.2v3a2.2 2.2 0 1 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V15.026q-.167.015-.336.01h-7.468l.03.067a1.365 1.365 0 0 1-.296 1.487l-9.66 9.66L11 20.94A1.36 1.36 0 0 1 12.9 19l3.38 3.38 7.343-7.343H22.34a3.28 3.28 0 0 1-2.92-1.648 3.19 3.19 0 0 1 .116-3.35z"/><path d="M10 10a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1"/>',
  solidBadged:
    '<path d="M10 10a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1"/><path d="M30 13.5A7.5 7.5 0 0 1 22.5 6H12.2v3a2.2 2.2 0 1 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V12.34a7.45 7.45 0 0 1-4 1.16m-4.06 3.08-9.67 9.67L11 20.94A1.36 1.36 0 0 1 12.9 19l3.38 3.38L24 14.66a1.363 1.363 0 0 1 2.226 1.487q-.105.25-.296.443z"/><path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>',
};

export const eventIconName = 'event';
export const eventIcon: IconShapeTuple = [eventIconName, renderIcon(icon)];
