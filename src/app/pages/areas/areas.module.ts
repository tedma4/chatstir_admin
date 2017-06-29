import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing } from './areas.routing';
import { Areas } from './areas.component';
import { AreaList } from "./components/areaList/areaList.component"
import { AreasService } from "./areas.service"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Areas,
    AreaList
    
  ],
  providers: [
    AreasService
    // BubbleMapsService,
    // LineMapsService

  ]
})
export class AreasModule {}