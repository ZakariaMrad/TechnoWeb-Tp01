import { Caracteres } from "./Caractere";

export class Citation { //Une citation est un tableau de caractère, mais elle peut aussi etre une partie de la citation complete 
                        // comme une rangée ou une colonne.
    

    citation: Caracteres[] = [];

    constructor( str: string) {
        let Cita:Caracteres[]=[]; //tableau à modifier
        for (let i = 0; i < str.length; i++) {
            Cita.push(new Caracteres(str[i]));
        }
        this.citation=this.enleverEspaces(Cita);

        
    }
    melanger() {
        this.citation=this.citation.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value); //Cette fonction va mélanger les caractères de la citation
        
        let c=0;
        for (let i = 0; i < this.citation.length; i++) { //Puis enlever les espaces qui peuvent être n'importe ou
            const e = this.citation[i];
            if(e.caractere===""){
                this.citation.splice(i,1);
                i--;
                c++;
            }
        }
        for (let i = 0; i < c; i++) { //Pour les rajouter à la fin
            this.citation.push(new Caracteres(""));      
        }
    }

    remplacerCar(arg0: string): Citation { //Remplace tous les caractères qui ne sont pas des espaces bizarres (ombre), avec 
                                           //un autre caractère (un autre espace bizarre mais qui est différent)
        let cita = new Citation("");
        this.citation.forEach(car => {
            cita.ajouter(new Caracteres( car.caractere===""?"":arg0));
        });
        return cita;
    }

    ajouter(car:Caracteres){ //Ajoute un caractère à la fin de la citation
        this.citation.push(car);
    }

    at(n:number){ //retourne le caractère à l'emplacement donné
        if(n>=this.citation.length) //s'il n'existe pas retourne le premier caractère de la citation
            return this.citation[0];
        return this.citation[n];
    }

    enleverEspaces(cita:Caracteres[]) { //Enleve les doubles (ou plus) espaces bizarres
        for (let i = 0; i < cita.length; i++) {
            let val = cita[i];
            if(val.caractere==="" && cita[i- (i==0?0:1)].caractere===""){
                //[index- (index==0?0:1)] permet de ne pas verifier si le caractere avnt est aussi un espace s'il n'est pas dans le tableau'.
                    cita.splice(i,1);
                    i--;
                }
        }
        return cita;
    }

    AfficherCons() { //Affiche la citation dans la console
        let str="";
        this.citation.forEach(x=>{
            str+=x.caractere;
        });
        console.log(str);
    }
    estFinDeMot(n:number){ //vrai si l'emplacement est une fin de mot
        if(n>=this.citation.length)
            return false;
        return this.citation[n].caractere==" " || this.citation[n+1].caractere==" "
    }
}