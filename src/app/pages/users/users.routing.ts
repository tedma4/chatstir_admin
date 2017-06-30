import { Routes, RouterModule } from '@angular/router';

import { Users } from './users.component';
import { UserList } from "./components/userList/userList.component"
import { UserDashboard } from "./components/userDashboard/userDashboard.component"
import { UserMapview } from "./components/userMapview/userMapview.component"

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Users,
    children: [
      {path: 'user_dashboard', component: UserDashboard },
      {path: 'user_list', component: UserList },
      {path: 'user_mapview', component: UserMapview },
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
