import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
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
    path: 'view-route',
    loadChildren: () => import('./view-route/view-route.module').then( m => m.ViewRoutePageModule)
  },
  {
    path: 'connect',
    loadChildren: () => import('./connect/connect.module').then( m => m.ConnectPageModule)
  },
  {
    path: 'charging',
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
