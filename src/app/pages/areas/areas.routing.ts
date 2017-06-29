import { Routes, RouterModule } from '@angular/router';

import { Areas } from './areas.component';
import { AreaList } from "./components/areaList/areaList.component"
import { AreaDashboard } from "./components/areaDashboard/areaDashboard.component"
import { AreaBuilder } from "./components/areaBuilder/areaBuilder.component"

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Areas,
    children: [
      {path: 'area_dashboard', component: AreaDashboard },
      {path: 'area_list', component: AreaList },
      {path: 'area_builder', component: AreaBuilder },
      // { path: 'googlemaps', component: GoogleMaps },
      // { path: 'area_list', compnoent: AreaList},
      // { path: 'area_builder', compnoent: AreaBuilder}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
