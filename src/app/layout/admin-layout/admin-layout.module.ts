import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

const PARTS = [
  AdminLayoutComponent
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

export class AdminLayoutModule { }
