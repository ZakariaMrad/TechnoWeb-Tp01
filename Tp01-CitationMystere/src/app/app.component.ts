import { Component } from '@angular/core';
import { Citation } from './Classes/Citation';
import { TableauCitation } from './Classes/TableauCitation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tp01-CitationMystere';
  TableauCitation:TableauCitation= new TableauCitation(new Citation(""));
  MontrerCitation:boolean=true;
  MontrerReponse:boolean=false;

  changerCitation(cit:Citation){
    this.TableauCitation=new TableauCitation(cit);
    this.MontrerCitation=false
  }
  recommencer(){
    this.changerCitation(new Citation(""));
    this.MontrerCitation=true;
    this.MontrerReponse=false;
  }
  afficherCitation(){
    this.MontrerReponse=true;
  }
}
