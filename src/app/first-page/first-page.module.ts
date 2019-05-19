import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Custom components
import { MainComponent } from './main/main.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
//BootStrap module
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MainComponent, CarouselComponent,ProgressbarComponent],
  imports: [
    CommonModule,
    NgbModule //Imports all Angular Bootstrap materials
  ],
  exports: [
    MainComponent
  ]
})
export class FirstPageModule { }
