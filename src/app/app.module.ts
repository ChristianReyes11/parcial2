import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormulaComponent } from './Ui/formula.component';
//import { InformationComponent } from './Ui/information.component';

@NgModule({
  declarations: [
    //AppComponent,
    //FormulaComponent,
   // InformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }