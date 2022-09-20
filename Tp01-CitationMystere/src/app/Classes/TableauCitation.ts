import { Citation } from "./Citation";

export class TableauCitation { //Un tableauCitation est une collection de tableau de citation:
    nbColonnes = 0;
    nbRangeesPleine = 0;
    nbDerniereRangee = 0; //Le nombre de caractère dans la derniere rangée

    //1,2,3,4,5,6,7,8,9,0
    //1,2,3,4,5,6,7,8,9,0
    //1,2,3,4,5,6,7,8,9,0

    TableauVertical: Citation[] = new Array(); //[[1,1,1],[2,2,2],...[0,0,0]] ->Chaque citation est une colonne
    TableauHorizontal: Citation[] = new Array();//[[1,2,3...],...[1,2,3,4...]] ->Chaque citation est une rangée
    TableauHorizontalVide: Citation[] = new Array();//[["","",""...],...["","","",""...]]->TableauHorizontal mais vide
    TableauHorizontalRand: Citation[] = new Array();//[[2,7,8...],...[4,1,6,8...]]->TableauHorizontale mais melangée
    
    
    constructor(cit: Citation) {
        this.trouverNbColonnes(cit);
        this.nbRangeesPleine = Math.floor(cit.citation.length / this.nbColonnes);
        this.nbDerniereRangee = cit.citation.length % this.nbColonnes;
        
        this.TableauHorizontal = this.CreerTableauH(cit);
        this.CreerTableauHRand(cit);
        this.CreerTableauHVide();
        
        //this.Afficher();
    }
    trouverNbColonnes(cit: Citation) { //permet de trouver le nombre de colonnes qui va maximiser le nombre de fin de mot
        let meilleurScore = 0;
        let meilleur = 13;
        for (let i = 13; i < 17 + 1; i++) {
            let curscore = 0;
            for (let j = 1; j < cit.citation.length / i; j++) {
                curscore += Number(cit.estFinDeMot(j * i - 1)); //+1 si vrai
            }
            if (curscore >= meilleurScore) {
                meilleurScore = curscore;
                meilleur = i;
            }
        }
        this.nbColonnes = meilleur;
    }
    CreerTableauH(CitationComplete: Citation) { //Créer un tableau horizontale à partir de la citation donnée
        let arr: Citation[] = new Array();

        for (let i = 0; i < this.nbRangeesPleine; i++) { //Pour tous les rangées sauf la dernière,
            let citPartiel = new Citation("");// on créer une nouvelle citation
            for (let j = 0; j < this.nbColonnes; j++) {
                citPartiel.ajouter(CitationComplete.at(i * this.nbColonnes + j)) //On ajoute les caractères de la "vielle" citation dans la nouvelle
            }
            arr.push(citPartiel); //puis on ajoute la citation au tableau
        }

        let citPartiel = new Citation("");
        for (let i = 0; i < this.nbDerniereRangee; i++) { //Même chose pour la dernière rangée, sauf qu'on ajoute que le nombre de caractère de la dernière rangée
            citPartiel.ajouter(CitationComplete.at(this.nbColonnes * this.nbRangeesPleine + i))
        }
        arr.push(citPartiel);
        return arr;
    }
    CreerTableauHRand(CitationComplete: Citation) { //Pour créer une tableau Horizontal mélangée
        this.CreerTableauV(CitationComplete); //Créer un tableau vertical
        this.MelangerTableauV(); //Le mélanger
        let cit:Citation=new Citation(""); 
        for (let i = 0; i < this.nbRangeesPleine; i++) { //recréer une nouvelle citation avec cette nouvelle citation
            this.TableauVertical.forEach(tab => {
                cit.ajouter(tab.at(i));
            })
        }
        for (let i = 0; i < this.nbDerniereRangee; i++) {
            cit.ajouter(this.TableauVertical[i].at(this.nbRangeesPleine));
        }
        //cit.AfficherCons();
        this.TableauHorizontalRand = this.CreerTableauH(cit); // puis recréer un nouveau tableauHorizontale
    }
    CreerTableauHVide(){ //Crée un tableau vide
        this.TableauHorizontal.forEach(tab=>{
            let cit=new Citation(""); //Pour chaque caractère de chaque citation
            cit = tab.remplacerCar(" "); //On remplace les caractères de la citation
            this.TableauHorizontalVide.push(cit); //Puis on la push dans le nouveau tableau
        })
    }
    MelangerTableauV() {//Mélange un tableau
        this.TableauVertical.forEach(tab => {
            tab.melanger(); //Mélanger chaque citation du tableauVerticale

        });
    }
    CreerTableauV(CitationComplete: Citation) { //Créer un tableauVerticale
        for (let i = 0; i < this.nbColonnes; i++) { //Pour chaque colonne
            let citPartiel = new Citation(""); //On crée une citation
            for (let j = 0; j < this.nbRangeesPleine; j++) { //Pour chaque rangée 
                citPartiel.ajouter(CitationComplete.at(j * this.nbColonnes + i)); //On ajoute le caractère à la citation
            }
            if (i < this.nbDerniereRangee) //Si cette colonne à un caractère de plus (est parmi la rangée qui n'est pas complete)
                citPartiel.ajouter(CitationComplete.at(this.nbColonnes * this.nbRangeesPleine + i)); //On ajoute le caractère
            this.TableauVertical.push(citPartiel); //On ajoute la citation dans le tableau
        }
    }

    Afficher() { //Affichage dans la console
        this.TableauVertical.forEach((e, i) => {
            console.log("tab: " + i)
            e.AfficherCons();
        })
        this.TableauHorizontal.forEach((e, i) => {
            console.log("tab: " + i)
            e.AfficherCons();
        })
    }
}