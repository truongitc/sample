import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonHomeWebsiteComponent } from './button-home/button-home.component';
import { ButtonFollowingWebsiteComponent } from './button-following/button-following.component';
import { ButtonInfoWebsiteComponent } from './button-info/button-info.component';
import { ButtonMessagesWebsiteComponent } from './button-messages/button-messages.component';
import { ButtonNotificationWebsiteComponent } from './button-notification/button-notification.component';

const PARTS = [
  ButtonFollowingWebsiteComponent,
  ButtonHomeWebsiteComponent,
  ButtonInfoWebsiteComponent,
  ButtonMessagesWebsiteComponent,
  ButtonNotificationWebsiteComponent
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

export class ButtonModule { }
