import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing } from './chats.routing';
import { Chats } from './chats.component';
import { ChatList } from "./components/chatList/chatList.component"
import { ChatDashboard } from "./components/chatDashboard/chatDashboard.component"
import { ChatMapview } from "./components/chatMapview/chatMapview.component"
import { ChatsService } from "./chats.service"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Chats,
    ChatList,
    ChatDashboard,
    ChatMapview,

    
  ],
  providers: [
    ChatsService
    // BubbleMapsService,
    // LineMapsService

  ]
})
export class ChatsModule {}
