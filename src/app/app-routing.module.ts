import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from "./_guard/auth-guard.service";

const routes: Routes = [
  {
    path: 'home', canActivate: [AuthGuardService],
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'view-route', canActivate: [AuthGuardService],
    loadChildren: () => import('./view-route/view-route.module').then( m => m.ViewRoutePageModule)
  },
  {
    path: 'charging', canActivate: [AuthGuardService],
    loadChildren: () => import('./charging/charging.module').then(m => m.ChargingPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
