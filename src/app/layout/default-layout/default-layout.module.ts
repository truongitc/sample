import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DefaultLayoutComponent } from './default-layout.component';
import { WebsiteModule } from 'src/app/function-view/website/website.module';

const PARTS = [
  DefaultLayoutComponent
];

@NgModule({
  declarations: [...PARTS],
  imports: [
    WebsiteModule,
  ],
  entryComponents: [...PARTS],
  exports: [...PARTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class DefaultLayoutModule { }
