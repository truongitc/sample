import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultLayoutComponent } from "./layout/default-layout/default-layout.component";
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    // children: [
    //   {
    //     path: '',
    //     loadChildren: `src/app/function-view/website#WebsiteModule`,
    //     data: { reuse: true },
    //   },
    // ],
  },
  {
    path: '',
    component: MasterLayoutComponent,
    children: [],
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
