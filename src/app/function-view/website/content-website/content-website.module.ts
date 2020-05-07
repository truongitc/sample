import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

const PARTS = [];

@NgModule({
  declarations: [],
  imports: [],
  entryComponents: [...PARTS],
  exports: [...PARTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContentWebsiteModule {}
