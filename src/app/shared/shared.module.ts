import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { ButtonModule } from "./button/button.module";

const PART = [];

@NgModule({
  declarations: [...PART],
  exports: [...PART],
  imports: [ButtonModule],
  entryComponents: [...PART],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {}
