import { Component, Input, OnInit, Output } from '@angular/core';
import { Citation } from '../Classes/Citation';
import { TableauCitation } from '../Classes/TableauCitation';

@Component({
  selector: 'app-affichage-citation',
  templateUrl: './affichage-citation.component.html',
  styleUrls: ['./affichage-citation.component.css']
})
export class AffichageCitationComponent implements OnInit {
  @Input() tableauCitationCourante:TableauCitation=new TableauCitation(new Citation(""));
  @Input() Vide:boolean= true;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
