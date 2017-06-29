import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from "./auth-guard.service"
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {path: 'login',loadChildren: 'app/pages/login/login.module#LoginModule'},
  // {path: 'register',loadChildren: 'app/pages/register/register.module#RegisterModule',
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule', canActivate: [AuthGuard] },
      { path: 'areas', loadChildren: './areas/areas.module#AreasModule', canActivate: [AuthGuard]}

      // { path: 'editors', loadChildren: './editors/editors.module#EditorsModule', canActivate: [AuthGuard] },
      // { path: 'components', loadChildren: './components/components.module#ComponentsModule', canActivate: [AuthGuard] },
      // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule', canActivate: [AuthGuard] },
      // { path: 'ui', loadChildren: './ui/ui.module#UiModule', canActivate: [AuthGuard] },
      // { path: 'forms', loadChildren: './forms/forms.module#FormsModule', canActivate: [AuthGuard] },
      // { path: 'tables', loadChildren: './tables/tables.module#TablesModule', canActivate: [AuthGuard] },
    ],canActivate: [AuthGuard] 
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
