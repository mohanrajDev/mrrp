import { NgModule } from '@angular/core';

import { IconCamera, IconHeart, IconGithub, IconServer } from 'angular-feather';
 
const icons = [
  IconCamera,
  IconHeart,
  IconGithub,
  IconServer
];

@NgModule({
  exports: icons
})
export class FeatherIconsModule { }
