import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MasterLayoutComponent } from './master-layout.component';

const PARTS = [
  MasterLayoutComponent
];

@NgModule({
  declarations: [...PARTS],
  imports: [
    RouterModule,
  ],
  entryComponents: [...PARTS],
  exports: [...PARTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class MasterLayoutModule { }
