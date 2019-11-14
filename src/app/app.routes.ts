import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ManageComponent } from "./components/manage/manage.component";
import { WatchComponent } from "./components/watch/watch.component";
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "manage",
    component: ManageComponent
  },
  {
    path: "watch",
    component: WatchComponent
  }
];
export const AppRoutes = RouterModule.forRoot(routes);
