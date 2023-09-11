import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessiProfilePageRoutingModule } from './messi-profile-routing.module';

import { MessiProfilePage } from './messi-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessiProfilePageRoutingModule
  ],
  declarations: [MessiProfilePage]
})
export class MessiProfilePageModule {}
