/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/icon/register.js';
import '@cds/core/button/register.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { imageIcon } from '@cds/core/icon/shapes/image.js';
import { userIcon } from '@cds/core/icon/shapes/user.js';

import { axisChartIcon } from '@cds/core/icon/shapes/axis-chart.js';
import { barChartIcon } from '@cds/core/icon/shapes/bar-chart.js';
import { boxPlotIcon } from '@cds/core/icon/shapes/box-plot.js';
import { bubbleChartIcon } from '@cds/core/icon/shapes/bubble-chart.js';
import { cloudChartIcon } from '@cds/core/icon/shapes/cloud-chart.js';
import { curveChartIcon } from '@cds/core/icon/shapes/curve-chart.js';
import { gridChartIcon } from '@cds/core/icon/shapes/grid-chart.js';
import { heatMapIcon } from '@cds/core/icon/shapes/heat-map.js';
import { lineChartIcon } from '@cds/core/icon/shapes/line-chart.js';
import { pieChartIcon } from '@cds/core/icon/shapes/pie-chart.js';
import { scatterPlotIcon } from '@cds/core/icon/shapes/scatter-plot.js';
import { tickChartIcon } from '@cds/core/icon/shapes/tick-chart.js';
import { bellCurveIcon } from '@cds/core/icon/shapes/bell-curve.js';

import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { homeIcon } from '@cds/core/icon/shapes/home.js';
import { baseStyles, spreadProps, getElementStorybookArgs, property } from '@cds/core/internal';

// here for testing
ClarityIcons.addIcons(
  userIcon,
  imageIcon,
  homeIcon,
  // Charts
  axisChartIcon,
  barChartIcon,
  boxPlotIcon,
  bubbleChartIcon,
  cloudChartIcon,
  curveChartIcon,
  gridChartIcon,
  heatMapIcon,
  lineChartIcon,
  pieChartIcon,
  scatterPlotIcon,
  tickChartIcon,
  bellCurveIcon
);

export default {
  title: 'Stories/Icon',
  component: 'cds-icon',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A2700',
    },
  },
};

@customElement('demo-all-icons')
class AllIcons extends LitElement {
  @state() icons: string[] = [];

  connectedCallback() {
    super.connectedCallback();
    import('@cds/core/icon').then(module => {
      module.loadChartIconSet();
      module.loadCommerceIconSet();
      module.loadCoreIconSet();
      module.loadEssentialIconSet();
      module.loadMediaIconSet();
      module.loadMiniIconSet();
      module.loadSocialIconSet();
      module.loadTechnologyIconSet();
      module.loadTextEditIconSet();
      module.loadTravelIconSet();
      this.icons = Object.keys(ClarityIcons.registry);
    });
  }

  render() {
    return html`
      <div cds-layout="horizontal gap:lg">
        ${this.icons.map(
          icon =>
            html`<cds-icon
              size="lg"
              role="img"
              .shape=${icon}
              aria-label="This is an example of an icon using the ${icon} shape"
            ></cds-icon>`
        )}
      </div>
    `;
  }
}

@customElement('demo-icons-collection')
class CollectionIcons extends LitElement {
  @state() icons: string[] = [];

  @property({ type: String }) collection: string;

  connectedCallback() {
    super.connectedCallback();

    import('@cds/core/icon').then(module => {
      const collection = (module as any)[`${this.collection}CollectionIcons`];
      const aliases = (module as any)[`${this.collection}CollectionAliases`];

      ClarityIcons.addIcons(...collection);
      ClarityIcons.addAliases(...aliases);

      this.icons = collection.map(ClarityIcons.getIconNameFromShape);
    });
  }

  render() {
    return html`
      <strong>${this.collection} (${this.icons.length})</strong>
      <div>
        ${this.icons.map(
          (icon, index) =>
            html`
              <div style="whitespace: no-wrap; display: inline-block; margin-right: .5rem;">
                ${index + 1}.
                <cds-icon
                  size="lg"
                  role="img"
                  .shape=${icon}
                  aria-label="This is an example of an icon using the ${icon} shape"
                >
                </cds-icon>
                ${icon}
              </div>
            `
        )}
      </div>
    `;
  }
}

all.element = AllIcons; // get around unused class

export function all() {
  return html`<demo-all-icons></demo-all-icons>`;
}

collections.element = CollectionIcons; // get around unused class

export function collections() {
  return html`
    <div cds-layout="vertical gap:xs">
      <demo-icons-collection collection="chart"></demo-icons-collection>
      <demo-icons-collection collection="commerce"></demo-icons-collection>
      <demo-icons-collection collection="core"></demo-icons-collection>
      <demo-icons-collection collection="essential"></demo-icons-collection>
      <demo-icons-collection collection="media"></demo-icons-collection>
      <demo-icons-collection collection="mini"></demo-icons-collection>
      <demo-icons-collection collection="social"></demo-icons-collection>
      <demo-icons-collection collection="technology"></demo-icons-collection>
      <demo-icons-collection collection="textEdit"></demo-icons-collection>
      <demo-icons-collection collection="travel"></demo-icons-collection>
    </div>
  `;
}

export function API(args: any) {
  return html`
    <cds-demo inline-block>
      <cds-icon
        ...="${spreadProps(getElementStorybookArgs(args))}"
        role="img"
        aria-label="This is an icon example that can be used to try out the Clarity icon element's API"
      ></cds-icon>
    </cds-demo>
  `;
}

export function iconsV3_1_0() {
  return (
    html`<h3>Charts</h3>` +
    `Axis-chart (Dev) Axes (Figma):` +
    `<cds-icon shape="axis-chart" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="axis-chart" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="axis-chart" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="axis-chart" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="axis-chart" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="axis-chart" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `Bar-chart (Dev) Bar (Figma):` +
    `<cds-icon shape="bar-chart" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bar-chart" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bar-chart" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bar-chart" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bar-chart" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bar-chart" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `box-plot (Dev) box (Figma):` +
    `<cds-icon shape="box-plot" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="box-plot" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="box-plot" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="box-plot" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="box-plot" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="box-plot" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `bubble-chart (Dev) bubble (Figma):` +
    `<cds-icon shape="bubble-chart" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bubble-chart" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bubble-chart" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bubble-chart" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bubble-chart" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bubble-chart" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `cloud (Dev) cloud (Figma):` +
    `<cds-icon shape="cloud" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="cloud" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="cloud" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="cloud" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="cloud" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="cloud" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `curve-chart (Dev) curve (Figma):` +
    `<cds-icon shape="curve-chart" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="curve-chart" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="curve-chart" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="curve-chart" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="curve-chart" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="curve-chart" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `grid-chart (Dev) grid (Figma):` +
    `<cds-icon shape="grid-chart" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="grid-chart" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="grid-chart" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="grid-chart" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="grid-chart" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="grid-chart" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `heat-map (Dev) heat (Figma):` +
    `<cds-icon shape="heat-map" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="heat-map" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="heat-map" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="heat-map" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="heat-map" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="heat-map" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `line-chart (Dev) line (Figma):` +
    `<cds-icon shape="line-chart" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="line-chart" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="line-chart" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="line-chart" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="line-chart" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="line-chart" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `pie-chart (Dev) pie (Figma):` +
    `<cds-icon shape="pie-chart" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="pie-chart" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="pie-chart" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="pie-chart" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="pie-chart" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="pie-chart" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `scatter-plot (Dev) scatter (Figma):` +
    `<cds-icon shape="scatter-plot" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="scatter-plot" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="scatter-plot" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="scatter-plot" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="scatter-plot" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="scatter-plot" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `tick-chart (Dev) ticks (Figma):` +
    `<cds-icon shape="tick-chart" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="tick-chart" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="tick-chart" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="tick-chart" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="tick-chart" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="tick-chart" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `bell-curve (Dev) bell-curve (Figma):` +
    `<cds-icon shape="bell-curve" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bell-curve" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bell-curve" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bell-curve" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bell-curve" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bell-curve" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>`
  );
}

/** @website */
export function icon() {
  return html`<cds-icon
    shape="user"
    role="img"
    aria-label="This is an icon example that shows how to use the icon element in an application"
  ></cds-icon>`;
}

/** @website */
export function sizes() {
  return html`
    <cds-icon
      shape="home"
      size="xs"
      role="img"
      aria-label="This is an example of an icon using a pre-defined extra small size"
    ></cds-icon>
    <cds-icon
      shape="home"
      size="sm"
      role="img"
      aria-label="This is an example of an icon using a pre-defined small size"
    ></cds-icon>
    <cds-icon
      shape="home"
      size="md"
      role="img"
      aria-label="This is an example of an icon using a pre-defined medium size"
    ></cds-icon>
    <cds-icon
      shape="home"
      size="lg"
      role="img"
      aria-label="This is an example of an icon using a pre-defined large size"
    ></cds-icon>
    <cds-icon
      shape="home"
      size="xl"
      role="img"
      aria-label="This is an example of an icon using a pre-defined extra large size"
    ></cds-icon>
    <cds-icon
      shape="home"
      size="xxl"
      role="img"
      aria-label="This is an example of an icon using a pre-defined extra extra large size"
    ></cds-icon>

    <cds-icon
      shape="home"
      size="16"
      role="img"
      aria-label="This is an example of an icon using a custom size of 16 pixels wide and tall"
    ></cds-icon>
    <cds-icon
      shape="home"
      size="24"
      role="img"
      aria-label="This is an example of an icon using a custom size of 24 pixels wide and tall"
    ></cds-icon>
    <cds-icon
      shape="home"
      size="48"
      role="img"
      aria-label="This is an example of an icon using a custom size of 48 pixels wide and tall"
    ></cds-icon>
    <cds-icon
      shape="home"
      size="64"
      role="img"
      aria-label="This is an example of an icon using a custom size of 64 pixels wide and tall"
    ></cds-icon>
    <cds-icon
      shape="home"
      size="128"
      loading
      role="img"
      aria-label="This is an example of an icon using a custom size of 128 pixels wide and tall"
    ></cds-icon>
  `;
}

/** @website */
export function badges() {
  return html`
    <cds-icon
      shape="user"
      size="lg"
      badge="info"
      role="img"
      aria-label="This is an example of an icon of a user with a blue informational badge"
    ></cds-icon>
    <cds-icon
      shape="user"
      size="lg"
      badge="success"
      role="img"
      aria-label="This is an example of an icon of a user with a green badge indicating success"
    ></cds-icon>
    <cds-icon
      shape="user"
      size="lg"
      badge="danger"
      role="img"
      aria-label="This is an example of an icon of a user with a red badge indicating danger or an error"
    ></cds-icon>
    <cds-icon
      shape="user"
      size="lg"
      badge="warning"
      role="img"
      aria-label="This is an example of an icon of a user with a dark orange badge indicating a warning"
    ></cds-icon>
    <cds-icon
      shape="user"
      size="lg"
      badge="neutral"
      role="img"
      aria-label="This is an example of an icon of a user with a gray neutral badge"
    ></cds-icon>
    <cds-icon
      shape="user"
      size="lg"
      badge="warning-triangle"
      role="img"
      aria-label="This is an example of an icon of a user with a dark orange triangle indicating something may be wrong"
    ></cds-icon>
    <cds-demo inverse inline-block>
      <cds-icon
        shape="user"
        size="lg"
        badge="inherit-triangle"
        inverse
        role="img"
        aria-label="This is an example of an icon of a user on a dark background with a warning triangle that is the same color as the icon"
      ></cds-icon>
    </cds-demo>
  `;
}

/** @website */
export function status() {
  return html`
    <cds-icon
      shape="user"
      size="lg"
      role="img"
      aria-label="This is an example of an icon of a user with the default color of the surrounding text"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="info"
      size="lg"
      role="img"
      aria-label="This is an example of a blue, informational icon of a user"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="success"
      size="lg"
      role="img"
      aria-label="This is an example of a green icon of a user indicating success"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="warning"
      size="lg"
      role="img"
      aria-label="This is an example of a dark orange icon of a user indicating a warning"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="danger"
      size="lg"
      role="img"
      aria-label="This is an example of a red icon of a user indicating danger or an error"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="neutral"
      size="lg"
      role="img"
      aria-label="This is an example of a gray icon of a user indicating a neutral status"
    ></cds-icon>

    <cds-icon
      shape="user"
      size="lg"
      solid
      role="img"
      aria-label="This is an example of an icon of a user completely filled in with the default color of the surrounding text"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="info"
      size="lg"
      solid
      role="img"
      aria-label="This is an example of an icon of a user completely filled in with the blue, informational color"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="success"
      size="lg"
      solid
      role="img"
      aria-label="This is an example of an icon of a user completely filled in with a green color indicating success"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="warning"
      size="lg"
      solid
      role="img"
      aria-label="This is an example of an icon of a user completely filled in with a dark orange color indicating warning"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="danger"
      size="lg"
      solid
      role="img"
      aria-label="This is an example of an icon of a user completely filled in with a red color indicating danger or an error"
    ></cds-icon>
    <cds-icon
      shape="user"
      status="neutral"
      size="lg"
      solid
      role="img"
      aria-label="This is an example of an icon of a user completely filled in with a gray color indicating a neutral status"
    ></cds-icon>
  `;
}

/** @website */
export function statusInverse() {
  return html`
    <cds-demo inverse inline-block>
      <cds-icon shape="user" inverse size="lg" role="img" aria-label="This is an example of an icon of a user on a dark background with the default color of the surrounding text"></cds-icon>
      <cds-icon shape="user" inverse status="info" size="lg" role="img" aria-label="This is an example of a blue, informational icon of a user on a dark background"></cds-icon>
      <cds-icon shape="user" inverse status="success" size="lg" role="img" aria-label="This is an example of a green icon of a user on a dark background indicating success"></cds-icon>
      <cds-icon shape="user" inverse status="warning" size="lg" role="img" aria-label="This is an example of a dark orange icon of a user on a dark background indicating a warning"></cds-icon>
      <cds-icon shape="user" inverse status="danger" size="lg" role="img" aria-label="This is an example of a red icon of a user on a dark background indicating danger or an error"></cds-icon>
      <cds-icon shape="user" inverse status="neutral" size="lg" role="img" aria-label="This is an example of a gray icon of a user on a dark background indicating a neutral status"></cds-icon>

      <cds-icon shape="user" inverse size="lg" solid role="img" aria-label="This is an example of an icon of a user completely filled in with the default color of the surrounding text on a dark background"></cds-icon>
      <cds-icon shape="user" inverse status="info" size="lg" solid role="img" aria-label="This is an example of an icon of a user completely filled in with the blue, informational color on a dark background"></cds-icon>
      <cds-icon shape="user" inverse status="success" size="lg" solid role="img" aria-label="This is an example of an icon of a user on a dark background completely filled in with a green color indicating success"></cds-icon>
      <cds-icon shape="user" inverse status="warning" size="lg" solid role="img" aria-label="This is an example of an icon of a user on a dark background completely filled in with a dark orange color indicating warning"></cds-icon>
      <cds-icon shape="user" inverse status="danger" size="lg" solid role="img" aria-label="This is an example of an icon of a user on a dark background completely filled in with a red color indicating danger or an error"></cds-icon></cds-icon>
      <cds-icon shape="user" inverse status="neutral" size="lg" solid role="img" aria-label="This is an example of an icon of a user on a dark background completely filled in with a gray color indicating a neutral status"></cds-icon></cds-icon>
    </cds-demo>
  `;
}

/** @website */
export function direction() {
  return html`
    <cds-icon
      shape="image"
      size="lg"
      direction="up"
      role="img"
      aria-label="This is an example of an icon whose glyph is directed with its top to point upward. This is the default icon direction."
    ></cds-icon>
    <cds-icon
      shape="image"
      size="lg"
      direction="left"
      role="img"
      aria-label="This is an example of an icon whose glyph is directed with its top to point to the left."
    ></cds-icon>
    <cds-icon
      shape="image"
      size="lg"
      direction="down"
      role="img"
      aria-label="This is an example of an icon whose glyph is directed with its top to point downward."
    ></cds-icon>
    <cds-icon
      shape="image"
      size="lg"
      direction="right"
      role="img"
      aria-label="This is an example of an icon whose glyph is directed with its top to point to the right."
    ></cds-icon>
  `;
}

/** @website */
export function customStyles() {
  return html`
    <style>
      .custom-icon-colors {
        background: black;
        padding: 8px 12px;
        border-radius: 3px;
        display: inline-block;
        margin-left: 12px;
        position: relative;
      }

      .custom-icon-colors.c {
        background: #dcdcdc;
      }

      .custom-icon-colors::before {
        content: 'X';
        font-size: 14px;
        position: absolute;
        display: block;
        top: 0;
        left: 4px;
        color: white;
      }

      .custom-icon-colors.a::before {
        content: 'A';
      }

      .custom-icon-colors.b::before {
        content: 'B';
      }

      .custom-icon-colors.c::before {
        content: 'C';
        color: #313131;
      }

      .custom-icon-colors cds-icon {
        height: 36px;
        width: 36px;
      }

      .icon-a {
        --color: limegreen;
        --badge-color: yellow;
      }

      .icon-b {
        --color: fuchsia;
        --badge-color: fuchsia;
      }

      .icon-c {
        --badge-color: fuchsia;
      }
    </style>
    <div class="custom-icon-colors a">
      <cds-icon
        shape="user"
        badge="neutral"
        class="icon-a"
        aria-label="This is an example of how an icon can be visually customized."
      ></cds-icon>
    </div>
    <div class="custom-icon-colors b">
      <cds-icon
        shape="user"
        class="icon-b"
        badge="warning-triangle"
        aria-label="This is another example of how an icon can be visually customized."
      ></cds-icon>
    </div>
    <div class="custom-icon-colors c">
      <cds-icon
        shape="user"
        badge="neutral"
        class="icon-c"
        aria-label="This is a third example of how an icon can be visually customized."
      ></cds-icon>
    </div>
    <p>
      <i>The first icon should be green with a yellow badge</i><br />
      <i>The second icon should be all pink (even the warning triangle should be pink)</i><br />
      <i>The third icon should be default gray color with a custom pink badge</i>
    </p>
  `;
}

/** @website */
export function flip() {
  return html`
    <cds-icon
      size="lg"
      shape="image"
      aria-label="This is an example of an icon whose glyph is positioned upright. This is the default."
    ></cds-icon>
    <cds-icon
      size="lg"
      flip="vertical"
      shape="image"
      aria-label="This is an example of an icon whose glyph is flipped vertically."
    ></cds-icon>
    <cds-icon
      size="lg"
      flip="horizontal"
      shape="image"
      aria-label="This is an example of an icon whose glyph is flipped horizontally."
    ></cds-icon>
  `;
}

/** @website */
export function darkTheme() {
  return html`
    <div cds-layout="vertical gap:sm" cds-theme="dark" cds-text="body">
      <div cds-layout="horizontal gap:sm">
        <cds-icon shape="user" size="lg" badge="info"></cds-icon>
        <cds-icon shape="user" size="lg" badge="success"></cds-icon>
        <cds-icon shape="user" size="lg" badge="danger"></cds-icon>
        <cds-icon shape="user" size="lg" badge="warning"></cds-icon>
        <cds-icon shape="user" size="lg" badge="neutral"></cds-icon>
        <cds-icon shape="user" size="lg" badge="warning-triangle"></cds-icon>
      </div>

      <div cds-layout="horizontal gap:sm">
        <cds-icon shape="user" size="lg"></cds-icon>
        <cds-icon shape="user" status="info" size="lg"></cds-icon>
        <cds-icon shape="user" status="success" size="lg"></cds-icon>
        <cds-icon shape="user" status="warning" size="lg"></cds-icon>
        <cds-icon shape="user" status="danger" size="lg"></cds-icon>
        <cds-icon shape="user" status="neutral" size="lg"></cds-icon>
      </div>

      <div cds-layout="horizontal gap:sm">
        <cds-icon shape="user" size="lg" solid></cds-icon>
        <cds-icon shape="user" status="info" size="lg" solid></cds-icon>
        <cds-icon shape="user" status="success" size="lg" solid></cds-icon>
        <cds-icon shape="user" status="warning" size="lg" solid></cds-icon>
        <cds-icon shape="user" status="danger" size="lg" solid></cds-icon>
        <cds-icon shape="user" status="neutral" size="lg" solid></cds-icon>
      </div>
    </div>
  `;
}

export function lazyLoading() {
  let shapeName = 'jabberwockee';

  return html`
    <div cds-layout="horizontal gap:sm">
      <div cds-layout="p-r:md">
        <cds-icon
          size="lg"
          id="lazy-load-icon"
          shape="jabberwockee"
          aria-label="This is an example of an icon that takes a little while to load its shape."
        ></cds-icon>
      </div>
      <div>
        <cds-button @click=${toggleLazyIcon}>Toggle Icon</cds-button>
      </div>
    </div>
  `;

  function toggleLazyIcon() {
    const mySvg =
      '<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M14.29,11.4a1.49,1.49,0,0,1,1.28-.72h1a2.89,2.89,0,0,0,2.75,2.09,3,3,0,0,0,0-5.91,2.9,2.9,0,0,0-2.67,1.82H15.57a3.49,3.49,0,0,0-3,1.66l-3,4.83h2.36Zm5-2.94A1.36,1.36,0,1,1,18,9.81,1.32,1.32,0,0,1,19.33,8.46Z"></path><path d="M34.3,17.37l-6.11-3.66a.7.7,0,0,0-.7,0,.71.71,0,0,0-.36.61V17H6.92a2.33,2.33,0,0,1,.32,1.17,2.47,2.47,0,1,1-2.47-2.46,2.37,2.37,0,0,1,1.15.3l.93-1.76A4.44,4.44,0,1,0,9.15,19h3.58l4.17,6.65a3.49,3.49,0,0,0,3,1.66h1.66v1.28a.79.79,0,0,0,.8.79h4.49a.79.79,0,0,0,.8-.79v-4.4a.79.79,0,0,0-.8-.8H22.34a.8.8,0,0,0-.8.8v1.12H19.88a1.51,1.51,0,0,1-1.28-.72L15.09,19h12v2.66a.69.69,0,0,0,.36.61.67.67,0,0,0,.34.09.65.65,0,0,0,.36-.1l6.11-3.66a.69.69,0,0,0,.34-.6A.71.71,0,0,0,34.3,17.37ZM23.14,25H26v2.8H23.14Zm5.39-4.56V15.55l4,2.42Z"></path></svg>';

    if (ClarityIcons.registry[shapeName]) {
      shapeName = shapeName + 'e';
      document.getElementById('lazy-load-icon').setAttribute('shape', shapeName);
    } else {
      ClarityIcons.addIcons([shapeName, mySvg]);
    }
  }
}

const testNonequilateralIcon =
  '<svg style="background: yellow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 96 124"><defs><linearGradient id="illus_grad" x1="-1907.36" x2="-1863.1" y1="63.08" y2="112.71" gradientTransform="matrix(-1 0 0 1 -1840.95 0)" gradientUnits="userSpaceOnUse"><stop offset=".15" stop-color="#0091da" stop-opacity=".6"/><stop offset=".54" stop-color="#0091da" stop-opacity=".32"/><stop offset="1" stop-color="#0091da" stop-opacity="0"/></linearGradient><linearGradient id="illus_grad-2" x1="-1923.8" x2="-1892.27" y1="71.55" y2="106.92" xlink:href="#illus_grad"/><style>.path-size{fill:none}.vmw-color-blue-67,.vmw-color-blue-87{opacity:.5}.vmw-color-blue-87{fill:url(#illus_grad)}.vmw-color-blue-67{fill:url(#illus_grad-2)}.vmw-color-blue{fill:#0091da}</style></defs><path id="Layer_6" d="M0 0h96v124H0z" class="path-size" data-name="Layer 6"/><g id="Layer_4" data-name="Layer 4"><path d="M16.04 94.86h44.03V50.84L16.04 94.86z" class="vmw-color-blue-87"/><path d="M46.97 94.2h31.37V62.83L46.97 94.2z" class="vmw-color-blue-67"/></g><g id="Layer_2" data-name="Layer 2"><path d="M89.91 95.91H5.46a1 1 0 110-2h84.45a1 1 0 010 2zM57.38 40H38.62a1 1 0 010-2h18.76a1 1 0 010 2zM48.1 80.67A4.72 4.72 0 1152.82 76a4.72 4.72 0 01-4.72 4.67zm0-7.44A2.72 2.72 0 1050.82 76a2.72 2.72 0 00-2.72-2.77zM76.92 47H67v2h9.92a1 1 0 000-2zM19.08 48H29v2h-9.92a1 1 0 010-2z" class="vmw-color-blue"/><path d="M64 96a1 1 0 01-1-1V31a1 1 0 00-1-1H34a1 1 0 00-1 1v64a1 1 0 01-2 0V31a3 3 0 013-3h28a3 3 0 013 3v64a1 1 0 01-1 1zM83 95h-2V41a1 1 0 00-1-1H67v-2h13a3 3 0 013 3zM15 95h-2V41a3 3 0 013-3h13v2H16a1 1 0 00-1 1z" class="vmw-color-blue"/></g></svg>';
const testNonequilateralIconName = 'test-nonequilateral';

ClarityIcons.addIcons([testNonequilateralIconName, testNonequilateralIcon]);

// rotate and resize!

@customElement('demo-non-equilateral')
class NonEquilateralIcon extends LitElement {
  static get styles() {
    return [baseStyles];
  }

  @state() sizeToFit = false;

  toggleFitSizing() {
    this.sizeToFit = !this.sizeToFit;
  }

  render() {
    return html`
      <div cds-layout="vertical gap:lg">
        <div cds-layout="horizontal gap:lg">
          <cds-icon
            size=${this.sizeToFit ? 'xl fit' : 'xl'}
            shape=${testNonequilateralIconName}
            aria-label="This is an example of an icon that is taller than it is wide."
            style="border: 1px solid red"
          ></cds-icon>
          <cds-icon
            size=${this.sizeToFit ? 'xl fit' : 'xl'}
            shape=${testNonequilateralIconName}
            direction="right"
            aria-label="This is an example of an icon that is taller than it is wide rotated to the right."
            style="border: 1px solid red"
          ></cds-icon>
          <cds-icon
            size=${this.sizeToFit ? 'xl fit' : 'xl'}
            shape=${testNonequilateralIconName}
            direction="down"
            aria-label="This is an example of an icon that is taller than it is wide flipped upside down."
            style="border: 1px solid red"
          ></cds-icon>
          <cds-icon
            size=${this.sizeToFit ? 'xl fit' : 'xl'}
            shape=${testNonequilateralIconName}
            direction="left"
            aria-label="This is an example of an icon that is taller than it is wide rotated to the left."
            style="border: 1px solid red"
          ></cds-icon>
        </div>
        <div>
          <cds-button type="button" @click=${this.toggleFitSizing}>Size to Image</cds-button>
        </div>
      </div>
    `;
  }
}

nonequilateral.element = NonEquilateralIcon; // get around unused class

export function nonequilateral() {
  return html`<demo-non-equilateral></demo-non-equilateral>`;
}
