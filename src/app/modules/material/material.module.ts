import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatProgressBarModule } from '@angular/material/progress-bar'; 


const MaterialComponents = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatProgressBarModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
