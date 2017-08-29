import { BaseSeed } from '.';
import { City } from '../../shared';

export class CitiesSeed extends BaseSeed {
    constructor() {
        let data: City[] = [
            {
                title: 'London',
                location_type: 'City',
                woeid: 44418,
                latt_long: '51.506321,-0.12714'
            },

            {
                title: 'Rome',
                location_type: 'City',
                woeid: 721943,
                latt_long: '41.903111,12.495760'
            },

            {
                title: 'Berlin',
                location_type: 'City',
                woeid: 638242,
                latt_long: '52.516071,13.376980'
            },

            {
                title: 'Washington DC',
                location_type: 'City',
                woeid: 2514815,
                latt_long: '38.899101,-77.028999'
            },

            {
                title: 'Lima',
                location_type: 'City',
                woeid: 418440,
                latt_long: '-12.043600,-77.021217'
            }
        ];

        super('cities', data);
    }
}