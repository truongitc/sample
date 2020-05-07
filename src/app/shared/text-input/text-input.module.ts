import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchHeaderComponent } from './input-search-header/input-search-header.component';

const PARTS = [
  InputSearchHeaderComponent
];

@NgModule({
  declarations: [...PARTS],
  imports: [
    CommonModule
  ],
  entryComponents: [...PARTS],
  exports: [...PARTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class TextInputModule { }
