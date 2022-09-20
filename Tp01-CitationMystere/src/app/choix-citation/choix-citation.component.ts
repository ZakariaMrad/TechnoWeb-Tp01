import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Citation } from '../Classes/Citation';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-choix-citation',
  templateUrl: './choix-citation.component.html',
  styleUrls: ['./choix-citation.component.css']
})
export class ChoixCitationComponent implements OnInit {
  @Output() CitationCourante = new EventEmitter<Citation>();
  cita: Citation = new Citation("");
  NouvelleCitation: string = "";
  messageInput: string = "Veuillez entrer votre citation!";
  constructor() { }

  ngOnInit(): void {
  }
  onEnter() {
    if (this.NouvelleCitation.length < 1) {
      this.messageInput = "Votre citation doit contenir au moins 35 caractères";
      this.NouvelleCitation = "";
    } else if (this.NouvelleCitation.length > 100) {
      this.messageInput = "Votre citation doit contenir moins de 100 caractères";
      this.NouvelleCitation = "";
    } else {
      this.cita = new Citation(this.NouvelleCitation);
      this.NouvelleCitation = "";
      this.messageInput = "Veuillez entrer votre citation!";
      this.CitationCourante.emit(this.cita);
      //this.cita.AfficherCons();
    }
  }
}
