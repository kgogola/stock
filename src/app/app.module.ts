import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutes } from './app.routes';


import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { WatchComponent } from './components/watch/watch.component';
import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './services/stocks.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    MenuComponent,
    WatchComponent,
    DashboardComponent,
    ManageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatMenuModule,
    FormsModule,
    MatToolbarModule,
    AppRoutes,
    RouterModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
