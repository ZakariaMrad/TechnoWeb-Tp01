import { ThisReceiver } from "@angular/compiler";
import { Caracteres } from "./Caractere";
import { Citation } from "./Citation";

export class TableauCitation {
    nbColonnes = 0;
    nbRangeesPleine = 0;
    nbDerniereRangee = 0;
    TableauVertical: Citation[] = new Array();
    TableauHorinzontal: Citation[] = new Array();
    TableauHorinzontalVide: Citation[] = new Array();
    TableauHorinzontalRand: Citation[] = new Array();

    constructor(cit: Citation) {
        this.trouverNbColonnes(cit);
        this.nbRangeesPleine = Math.floor(cit.citation.length / this.nbColonnes);
        this.nbDerniereRangee = cit.citation.length % this.nbColonnes; //Le nombre de caractère dans la derniere rangée

        this.TableauHorinzontal = this.CreerTableauH(cit);
        this.CreerTableauHRand(cit);
        
        //this.Afficher();
    }
    Remplacer(tab: Citation[],str:string) {
        tab.forEach(e => {
            e.remplacer(str);
        });
        return tab;
    }
    CreerTableauHRand(CitationComplete: Citation) {
        this.CreerTableauV(CitationComplete);
        this.MelangerTableauV();
        let cit:Citation=new Citation("");
        for (let i = 0; i < this.nbRangeesPleine; i++) {
            this.TableauVertical.forEach(tab => {
                cit.ajouter(tab.at(i));
            })
        }
        for (let i = 0; i < this.nbDerniereRangee; i++) {
            cit.ajouter(this.TableauVertical[i].at(this.nbRangeesPleine));
        }
        //cit.AfficherCons();
        this.TableauHorinzontalRand = this.CreerTableauH(cit);
    }
    MelangerTableauV() {
        this.TableauVertical.forEach(tab => {
            tab.melanger();

        });
    }
    CreerTableauH(CitationComplete: Citation) {
        let arr: Citation[] = [];
        for (let i = 0; i < this.nbRangeesPleine; i++) {
            let citPartiel = new Citation("");
            for (let j = 0; j < this.nbColonnes; j++) {
                citPartiel.ajouter(CitationComplete.at(i * this.nbColonnes + j))
            }
            arr.push(citPartiel);
        }
        let str = "";
        let citPartiel = new Citation("");
        for (let i = 0; i < this.nbDerniereRangee; i++) {
            citPartiel.ajouter(CitationComplete.at(this.nbColonnes * this.nbRangeesPleine + i))
        }
        arr.push(citPartiel);
        return arr;
    }
    CreerTableauV(CitationComplete: Citation) {
        for (let i = 0; i < this.nbColonnes; i++) {
            let citPartiel = new Citation("");
            for (let j = 0; j < this.nbRangeesPleine; j++) {
                citPartiel.ajouter(CitationComplete.at(j * this.nbColonnes + i));
            }
            if (i < this.nbDerniereRangee)
                citPartiel.ajouter(CitationComplete.at(this.nbColonnes * this.nbRangeesPleine + i));
            this.TableauVertical.push(citPartiel);
        }
    }

    trouverNbColonnes(cit: Citation) {
        let meilleurScore = 0;
        let meilleur = 13;
        for (let i = 13; i < 17 + 1; i++) {
            let curscore = 0;
            for (let j = 1; j < cit.citation.length / i; j++) {
                curscore += cit.isEndofWord(j * i - 1) ? 1 : 0;
            }
            //console.log(curscore)
            if (curscore >= meilleurScore) {
                meilleurScore = curscore;
                meilleur = i;
            }
        }
        this.nbColonnes = meilleur;
    }
    Afficher() {
        this.TableauVertical.forEach((e, i) => {
            console.log("tab: " + i)
            e.AfficherCons();
        })
        this.TableauHorinzontal.forEach((e, i) => {
            console.log("tab: " + i)
            e.AfficherCons();
        })
    }
}