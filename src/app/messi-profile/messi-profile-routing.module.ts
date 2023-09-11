import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessiProfilePage } from './messi-profile.page';

const routes: Routes = [
  {
    path: '',
    component: MessiProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessiProfilePageRoutingModule {}
