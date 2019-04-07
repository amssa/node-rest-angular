import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './services/search.service';
//import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  	FormsModule,
  	ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    /*AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsP_Lw0TBWe99PUyzaahnPrV8HaVi-7-Q'
    })*/
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
