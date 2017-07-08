import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing } from './areas.routing';
import { Areas } from './areas.component';
import { AreaList } from "./components/areaList/areaList.component"
import { AreaDashboard } from "./components/areaDashboard/areaDashboard.component"
import { AreaBuilder } from "./components/areaBuilder/areaBuilder.component"
import { AreasService } from "./areas.service"
import { UsersService } from "../users/users.service"
import { InlineForm } from "./components/areaBuilder/components/inlineForm/inlineForm.component"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Areas,
    AreaList,
    AreaDashboard,
    AreaBuilder,
    InlineForm,

  ],
  providers: [
    AreasService,
    UsersService
    // BubbleMapsService,
    // LineMapsService

  ]
})
export class AreasModule {}
