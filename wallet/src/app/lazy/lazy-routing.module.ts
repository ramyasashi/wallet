import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TransferComponent } from '../transfer/transfer.component';
import { HistoryComponent } from '../history/history.component';
import { HomeComponent } from '../home/home.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';


const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children: [
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full' 
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'profile',
        component: MyProfileComponent
      },
      {
        path:'transfer',
        component: TransferComponent
      },
      {
        path:'history',
        component: HistoryComponent
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
