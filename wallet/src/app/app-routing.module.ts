import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full' 
  },
  {
    path:'dashboard',
    canActivate: [AuthGuard],
    loadChildren : () => import('./lazy/lazy.module').then(m => m.LazyModule),
  },
  {
    path:'login',
    component: LoginComponent,
  }
  // {
  //   path:'',
  //   component: LoginComponent,
  // },
  // {
  //   path:'dashboard',
  //   canActivate: [AuthGuard],
  //   loadChildren : () => import('./lazy/lazy.module').then(m => m.LazyModule),
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
