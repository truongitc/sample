import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DefaultLayoutComponent } from './default-layout.component';
import { ContentWebsiteComponent } from 'src/app/function-view/website/content-website/content-website.component';
import { HeaderWebsiteComponent } from 'src/app/function-view/website/header/header.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { TextInputModule } from 'src/app/shared/text-input/text-input.module';

const PARTS = [
  DefaultLayoutComponent,
  HeaderWebsiteComponent,
  ContentWebsiteComponent
];

@NgModule({
  declarations: [...PARTS],
  imports: [
    CommonModule,
    ButtonModule,
    TextInputModule
  ],
  entryComponents: [...PARTS],
  exports: [...PARTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class DefaultLayoutModule { }
