import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderWebsiteComponent } from './header/header.component';
import { ContentWebsiteComponent } from './content-website/content-website.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

const PARTS = [
  ContentWebsiteComponent,
  HeaderWebsiteComponent
];

@NgModule({
  declarations: [...PARTS],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [...PARTS],
  exports: [...PARTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class WebsiteModule { }
