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
  //citationCourante:Citation=new Citation("");
  TableauCitation:TableauCitation= new TableauCitation(new Citation(""));
  Montrercitation:boolean=true;

  changerCitation(cit:Citation){
    this.TableauCitation=new TableauCitation(cit);
    this.Montrercitation=false
    //cit.AfficherCons();
  }
}
