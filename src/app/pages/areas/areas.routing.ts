import { Routes, RouterModule } from '@angular/router';

import { Areas } from './areas.component';
import { AreaList }from "./components/areaList/areaList.component"

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Areas,
    children: [
    	{path: 'area_list', component: AreaList },
      // { path: 'googlemaps', component: GoogleMaps },
      // { path: 'area_list', compnoent: AreaList},
      // { path: 'area_builder', compnoent: AreaBuilder}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
