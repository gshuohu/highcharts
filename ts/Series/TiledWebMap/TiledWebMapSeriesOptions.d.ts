/* *
 *
 *  (c) 2010-2022
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Imports
 *
 * */

import type MapSeriesOptions from '../Map/MapSeriesOptions';
import type { TilesProviderRegistryName } from '../../Maps/TilesProviders/TilesProviderRegistry';

/* *
 *
 *  Declarations
 *
 * */

interface TiledWebMapSeriesOptions extends MapSeriesOptions {
    provider?: ProviderOptions
}

interface ProviderOptions {
    type?: TilesProviderRegistryName,
    theme?: string,
    subdomain?: string,
    url?: string,
    onload?: Function,
    apiKey?: string
}

/* *
 *
 *  Default export
 *
 * */

export default TiledWebMapSeriesOptions;
