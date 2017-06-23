import { Routes, RouterModule } from '@angular/router';

import { Areas } from './areas.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Areas,
    children: [
      // { path: 'googlemaps', component: GoogleMaps },
      // { path: 'area_list', compnoent: AreaList},
      // { path: 'area_builder', compnoent: AreaBuilder}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
