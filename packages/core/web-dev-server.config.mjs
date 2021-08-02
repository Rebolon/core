/**
 * Base Web Dev Server
 *
 * All dev hosting env in Core uses @web/dev-server including Storybook, Sandbox and Tests
 */

import { importMapsPlugin } from '@web/dev-server-import-maps';
import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  nodeResolve: true,
  open: './',
  watch: !hmr,
  plugins: [
    importMapsPlugin({
      inject: {
        importMap: {
          imports: {
            tslib: '/node_modules/tslib/tslib.es6.js',
            lit: '/node_modules/lit/index.js',
            'lit/decorators/custom-element.js': '/node_modules/lit/decorators/custom-element.js',
            'lit/decorators/property.js': '/node_modules/lit/decorators/property.js',
            'lit/decorators/query.js': '/node_modules/lit/decorators/query.js',
            'lit/decorators/state.js': '/node_modules/lit/decorators/state.js',
            'lit/directives/if-defined.js': '/node_modules/lit/directives/if-defined.js',
            'lit/directives/unsafe-html.js': '/node_modules/lit/directives/unsafe-html.js',
            'lit/directive-helpers.js': '/node_modules/lit/directive-helpers.js',
            'ramda/es/anyPass.js': '/node_modules/ramda/es/anyPass.js',
            'ramda/es/clone.js': '/node_modules/ramda/es/clone.js',
            'ramda/es/equals.js': '/node_modules/ramda/es/equals.js',
            'ramda/es/isNil.js': '/node_modules/ramda/es/isNil.js',
            'ramda/es/includes.js': '/node_modules/ramda/es/includes.js',
            'ramda/es/curryN.js': '/node_modules/ramda/es/curryN.js',
            'ramda/es/path.js': '/node_modules/ramda/es/path.js',
            'ramda/es/has.js': '/node_modules/ramda/es/has.js',
            'ramda/es/is.js': '/node_modules/ramda/es/is.js',
            'ramda/es/isEmpty.js': '/node_modules/ramda/es/isEmpty.js',
            'ramda/es/without.js': '/node_modules/ramda/es/without.js',

            '@cds/core/global.min.css': '/dist/core/global.min.css',
            '@cds/core/styles/theme.dark.min.css': '/dist/core/styles/theme.dark.min.css',
            '@cds/core/styles/theme.low-motion.min.css': '/dist/core/styles/theme.low-motion.min.css',
            '@cds/core/list/list.min.css': '/dist/core/list/list.min.css',
            '@cds/core/table/table.min.css': '/dist/core/table/table.min.css',
            '@cds/core/tokens/tokens.json': '/dist/core/tokens/tokens.json',

            '@cds/core': '/dist/core/index.js',
            '@cds/core/icon': '/dist/core/icon/index.js',
            '@cds/core/icon/register.js': '/dist/core/icon/register.js',
            '@cds/core/icon/icon.service.js': '/dist/core/icon/icon.service.js',
            '@cds/core/icon/icon.element.js': '/dist/core/icon/icon.element.js',
            '@cds/core/icon/shapes/error-standard.js': '/dist/core/icon/shapes/error-standard.js',
            '@cds/core/icon/shapes/info-standard.js': '/dist/core/icon/shapes/info-standard.js',
            '@cds/core/icon/shapes/success-standard.js': '/dist/core/icon/shapes/success-standard.js',
            '@cds/core/icon/shapes/warning-standard.js': '/dist/core/icon/shapes/warning-standard.js',
            '@cds/core/icon/shapes/exclamation-circle.js': '/dist/core/icon/shapes/exclamation-circle.js',
            '@cds/core/icon/shapes/help.js': '/dist/core/icon/shapes/help.js',
            '@cds/core/icon/shapes/times.js': '/dist/core/icon/shapes/times.js',
            '@cds/core/icon/shapes/angle.js': '/dist/core/icon/shapes/angle.js',
            '@cds/core/icon/shapes/clock.js': '/dist/core/icon/shapes/clock.js',
            '@cds/core/icon/shapes/search.js': '/dist/core/icon/shapes/search.js',
            '@cds/core/icon/shapes/folder.js': '/dist/core/icon/shapes/folder.js',
            '@cds/core/icon/shapes/calendar.js': '/dist/core/icon/shapes/calendar.js',
            '@cds/core/icon/shapes/eye.js': '/dist/core/icon/shapes/eye.js',
            '@cds/core/icon/shapes/eye-hide.js': '/dist/core/icon/shapes/eye-hide.js',
            '@cds/core/icon/shapes/check-circle.js': '/dist/core/icon/shapes/check-circle.js',
            '@cds/core/icon/shapes/check.js': '/dist/core/icon/shapes/check.js',
            '@cds/core/icon/shapes/cloud.js': '/dist/core/icon/shapes/cloud.js',
            '@cds/core/icon/shapes/download-cloud.js': '/dist/core/icon/shapes/download-cloud.js',
            '@cds/core/icon/shapes/download.js': '/dist/core/icon/shapes/download.js',
            '@cds/core/icon/shapes/headphones.js': '/dist/core/icon/shapes/headphones.js',
            '@cds/core/icon/shapes/node-group.js': '/dist/core/icon/shapes/node-group.js',
            '@cds/core/icon/shapes/times-circle.js': '/dist/core/icon/shapes/times-circle.js',
            '@cds/core/icon/shapes/user.js': '/dist/core/icon/shapes/user.js',
            '@cds/core/icon/shapes/home.js': '/dist/core/icon/shapes/home.js',
            '@cds/core/icon/shapes/nodes.js': '/dist/core/icon/shapes/nodes.js',
            '@cds/core/icon/shapes/stop.js': '/dist/core/icon/shapes/stop.js',
            '@cds/core/icon/shapes/pop-out.js': '/dist/core/icon/shapes/pop-out.js',
            '@cds/core/icon/shapes/image.js': '/dist/core/icon/shapes/image.js',
            '@cds/core/icon/shapes/trash.js': '/dist/core/icon/shapes/trash.js',
            '@cds/core/icon/shapes/plus.js': '/dist/core/icon/shapes/plus.js',
            '@cds/core/icon/shapes/step-forward-2.js': '/dist/core/icon/shapes/step-forward-2.js',
            '@cds/core/icon/shapes/info-circle.js': '/dist/core/icon/shapes/info-circle.js',
            '@cds/core/icon/shapes/applications.js': '/dist/core/icon/shapes/applications.js',
            '@cds/core/icon/shapes/blocks-group.js': '/dist/core/icon/shapes/blocks-group.js',
            '@cds/core/icon/shapes/bundle.js': '/dist/core/icon/shapes/bundle.js',
            '@cds/core/icon/shapes/building.js': '/dist/core/icon/shapes/building.js',
            '@cds/core/icon/shapes/cog.js': '/dist/core/icon/shapes/cog.js',
            '@cds/core/icon/shapes/share.js': '/dist/core/icon/shapes/share.js',
            '@cds/core/icon/shapes/thumbs-up.js': '/dist/core/icon/shapes/thumbs-up.js',
            '@cds/core/icon/shapes/dashboard.js': '/dist/core/icon/shapes/dashboard.js',
            '@cds/core/icon/shapes/dollar.js': '/dist/core/icon/shapes/dollar.js',
            '@cds/core/icon/shapes/help-info.js': '/dist/core/icon/shapes/help-info.js',
            '@cds/core/icon/shapes/line-chart.js': '/dist/core/icon/shapes/line-chart.js',
            '@cds/core/icon/shapes/file.js': '/dist/core/icon/shapes/file.js',
            '@cds/core/icon/shapes/pencil.js': '/dist/core/icon/shapes/pencil.js',

            '@cds/core/accordion': '/dist/core/accordion/index.js',
            '@cds/core/accordion/register.js': '/dist/core/accordion/register.js',
            '@cds/core/alert': '/dist/core/alert/index.js',
            '@cds/core/alert/register.js': '/dist/core/alert/register.js',
            '@cds/core/badge': '/dist/core/badge/index.js',
            '@cds/core/badge/register.js': '/dist/core/badge/register.js',
            '@cds/core/breadcrumb': '/dist/core/breadcrumb/index.js',
            '@cds/core/breadcrumb/register.js': '/dist/core/breadcrumb/register.js',
            '@cds/core/button': '/dist/core/button/index.js',
            '@cds/core/button/register.js': '/dist/core/button/register.js',
            '@cds/core/card': '/dist/core/card/index.js',
            '@cds/core/card/register.js': '/dist/core/card/register.js',
            '@cds/core/checkbox/index.js': '/dist/core/checkbox/index.js',
            '@cds/core/checkbox/register.js': '/dist/core/checkbox/register.js',
            '@cds/core/datalist/index.js': '/dist/core/datalist/index.js',
            '@cds/core/datalist/register.js': '/dist/core/datalist/register.js',
            '@cds/core/date': '/dist/core/date/index.js',
            '@cds/core/date/register.js': '/dist/core/date/register.js',
            '@cds/core/divider': '/dist/core/divider/index.js',
            '@cds/core/divider/register.js': '/dist/core/divider/register.js',
            '@cds/core/file': '/dist/core/file/index.js',
            '@cds/core/file/register.js': '/dist/core/file/register.js',
            '@cds/core/forms': '/dist/core/forms/index.js',
            '@cds/core/forms/register.js': '/dist/core/forms/register.js',
            '@cds/core/input': '/dist/core/input/index.js',
            '@cds/core/input/register.js': '/dist/core/input/register.js',
            '@cds/core/internal': '/dist/core/internal/index.js',
            '@cds/core/internal-components/close-button': '/dist/core/internal-components/close-button/index.js',
            '@cds/core/internal-components/close-button/register.js':
              '/dist/core/internal-components/close-button/register.js',
            '@cds/core/internal-components/overlay': '/dist/core/internal-components/overlay/index.js',
            '@cds/core/internal-components/overlay/register.js': '/dist/core/internal-components/overlay/register.js',
            '@cds/core/internal-components/panel': '/dist/core/internal-components/panel/index.js',
            '@cds/core/internal-components/panel/register.js': '/dist/core/internal-components/panel/register.js',
            '@cds/core/internal-components/visual-checkbox': '/dist/core/internal-components/visual-checkbox/index.js',
            '@cds/core/internal-components/visual-checkbox/register.js':
              '/dist/core/internal-components/visual-checkbox/register.js',
            '@cds/core/modal': '/dist/core/modal/index.js',
            '@cds/core/modal/register.js': '/dist/core/modal/register.js',
            '@cds/core/navigation': '/dist/core/navigation/index.js',
            '@cds/core/navigation/register.js': '/dist/core/navigation/register.js',
            '@cds/core/pagination': '/dist/core/pagination/index.js',
            '@cds/core/pagination/register.js': '/dist/core/pagination/register.js',
            '@cds/core/password': '/dist/core/password/index.js',
            '@cds/core/password/register.js': '/dist/core/password/register.js',
            '@cds/core/progress-circle': '/dist/core/progress-circle/index.js',
            '@cds/core/progress-circle/register.js': '/dist/core/progress-circle/register.js',
            '@cds/core/radio': '/dist/core/radio/index.js',
            '@cds/core/radio/register.js': '/dist/core/radio/register.js',
            '@cds/core/range': '/dist/core/range/index.js',
            '@cds/core/range/register.js': '/dist/core/range/register.js',
            '@cds/core/search': '/dist/core/search/index.js',
            '@cds/core/search/register.js': '/dist/core/search/register.js',
            '@cds/core/select': '/dist/core/select/index.js',
            '@cds/core/select/register.js': '/dist/core/select/register.js',
            '@cds/core/tag': '/dist/core/tag/index.js',
            '@cds/core/tag/register.js': '/dist/core/tag/register.js',
            '@cds/core/test': '/dist/core/test/index.js',
            '@cds/core/test-dropdown': '/dist/core/test-dropdown/index.js',
            '@cds/core/test-dropdown/register.js': '/dist/core/test-dropdown/register.js',
            '@cds/core/textarea': '/dist/core/textarea/index.js',
            '@cds/core/textarea/register.js': '/dist/core/textarea/register.js',
            '@cds/core/time': '/dist/core/time/index.js',
            '@cds/core/time/register.js': '/dist/core/time/register.js',
            '@cds/core/tree-view': '/dist/core/tree-view/index.js',
            '@cds/core/tree-view/register.js': '/dist/core/tree-view/register.js',
            '@cds/core/toggle': '/dist/core/toggle/index.js',
            '@cds/core/toggle/register.js': '/dist/core/toggle/register.js',
          },
        },
      },
    }),
    /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
    hmr &&
      hmrPlugin({
        include: ['./dist/core/**/*'],
        exclude: ['**/*/node_modules/**/*', '**/*.json'],
        presets: [presets.lit],
      }),
  ],
});
