import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes,RouterModule} from '@angular/router';
//Custom module
import { FirstPageModule } from './first-page/first-page.module';
import { MainComponent } from './first-page/main/main.component';

const appRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstPageModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
