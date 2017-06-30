import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing } from './users.routing';
import { Users } from './users.component';
import { UserList } from "./components/userList/userList.component"
import { UserDashboard } from "./components/userDashboard/userDashboard.component"
import { UserMapview } from "./components/userMapview/userMapview.component"
import { UsersService } from "./users.service"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Users,
    UserList,
    UserDashboard,
    UserMapview,
    
  ],
  providers: [
    UsersService

  ]
})
export class UsersModule {}
