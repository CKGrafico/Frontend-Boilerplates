import { RouteConfig } from 'vue-router';
import { CitiesComponent, CityListComponent } from '.';

export let citiesRoutes: RouteConfig = {
    path: '/cities',
    name: 'cities',
    component: CitiesComponent,
    children: [
        {
            path: '',
            name: 'city-list',
            component: CityListComponent
        },
        // {
        //     path: '/:id',
        //     name: 'city-detail',
        //     component: CityDetailComponent,
        //     props: true
        // },
        // {
        //     path: '/:id/edit',
        //     name: 'city-edit',
        //     component: CityEditComponent,
        //     props: true
        // }
    ]
};