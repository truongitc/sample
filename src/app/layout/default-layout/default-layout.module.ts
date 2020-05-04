import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout.component';

const PARTS = [
  DefaultLayoutComponent
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

export class DefaultLayoutModule { }
