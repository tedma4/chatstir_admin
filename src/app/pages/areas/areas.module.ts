import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './areas.routing';
import { Areas } from './areas.component';
import { AreasService } from "./areas.service"
import { AreaList } from "./components/areaList/areaList.component"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
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
export class MapsModule {}
