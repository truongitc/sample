import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppWebsiteComponent } from './app-website.component';

const PARTS = [
  AppWebsiteComponent
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

export class AppWebsiteModule { }
