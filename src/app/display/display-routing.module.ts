import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // path: '',
    // component: DisplayComponent,
    // data: { reuse: true },
    // children: [
    //   {
    //     path: 'PatientSearch',
    //     loadChildren: 'src/app/function-view/patient-search/patient-search.module#PatientSearchModule',
    //     data: { reuse: true },
    //   },
    // ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayRoutingModule {}
