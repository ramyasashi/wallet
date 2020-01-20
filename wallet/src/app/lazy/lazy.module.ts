import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { DashboardComponent } from '../dashboard/dashboard.component';
import { TransferComponent } from '../transfer/transfer.component';
import { HistoryComponent } from '../history/history.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { HomeComponent } from '../home/home.component';
import { ChartComponent } from '../chart/chart.component';
import { AdsComponent } from '../ads/ads.component';
import { ImageComponent } from '../image/image.component';




@NgModule({
  declarations: [
    DashboardComponent,
    TransferComponent,
    HistoryComponent,
    MyProfileComponent,
    HomeComponent,
    ChartComponent,
    AdsComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule
  ]
})
export class LazyModule { }
