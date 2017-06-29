import { Routes, RouterModule } from '@angular/router';

import { Maps } from './maps.component';
import { GoogleMaps } from './components/googleMaps/googleMaps.component';
// import { BubbleMaps } from './components/bubbleMaps/bubbleMaps.component';
// import { LeafletMaps } from './components/leafletMaps/leafletMaps.component';
// import { LineMaps } from './components/lineMaps/lineMaps.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Maps,
    children: [
      { path: 'googlemaps', component: GoogleMaps },
      // { path: 'area_list', compnoent: AreaList},
      // { path: 'area_builder', compnoent: AreaBuilder}

      // { path: 'leafletmaps', component: LeafletMaps },
      // { path: 'bubblemaps', component: BubbleMaps },
      // { path: 'linemaps', component: LineMaps }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
