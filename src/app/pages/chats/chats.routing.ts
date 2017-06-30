import { Routes, RouterModule } from '@angular/router';

import { Chats } from './chats.component';
import { ChatList } from "./components/chatList/chatList.component"
import { ChatDashboard } from "./components/chatDashboard/chatDashboard.component"
import { ChatMapview } from "./components/chatMapview/chatMapview.component"

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Chats,
    children: [
      {path: 'chat_dashboard', component: ChatDashboard },
      {path: 'chat_list', component: ChatList },
      {path: 'chat_mapview', component: ChatMapview },
      
    ]
  }
];

export const routing = RouterModule.forChild(routes);
