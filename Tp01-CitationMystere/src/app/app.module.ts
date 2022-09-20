import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ChoixCitationComponent } from './choix-citation/choix-citation.component';
import { AffichageCitationComponent } from './affichage-citation/affichage-citation.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoixCitationComponent,
    AffichageCitationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
