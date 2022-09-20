import { Caracteres } from "./Caractere";

export class Citation {
    citation: Caracteres[] = [];

    constructor(cit: string) {
        let Cita:Caracteres[]=[]; //tableau à modifier
        for (let i = 0; i < cit.length; i++) {
            Cita.push(new Caracteres(cit[i], i));
        }
        this.citation=this.enleverEspaces(Cita);

        
    }
    melanger() {
        this.citation=this.citation.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
        let c=0;
        for (let i = 0; i < this.citation.length; i++) {
            const e = this.citation[i];
            if(e.caractere==="-"){
                this.citation.splice(i,1);
                i--;
                c++;
            }
            
        }
        for (let i = 0; i < c; i++) {
            this.citation.push(new Caracteres("-",1));      
        }
    }
    remplacer(str: string) {
        this.citation.forEach(e => {
            e.caractere= e.caractere=="-"?"-":str;
        });
    }
    ajouter(car:Caracteres){
        this.citation.push(car);
    }
    at(n:number){
        if(n>=this.citation.length)
            return this.citation[0];
        return this.citation[n];
    }
    enleverEspaces(cita:Caracteres[]) {
        cita.forEach((val,index,arr)=>{
            if(val.caractere==="-" && arr[index- (index==0?0:1)].caractere==="-"){
            //[index- (index==0?0:1)] permet de ne pas verifier si le caractere avnt est aussi un espace s'il n'est pas dans le tableau'.
                //console.log(index+ (cita.length>index?1:0));
                cita.splice(index,1);
            }
        });
        return cita;
    }

    AfficherCons() {
        let str="";
        this.citation.forEach(x=>{
            str+=x.caractere;
        });
        console.log(str);
    }
    isEndofWord(n:number){
        if(n>=this.citation.length)
            return false;
        return this.citation[n].caractere=="-" || this.citation[n+1].caractere=="-"
    }
}
        // for (let index = 0; index < this.citation.length; index++) {
        //     if (this.citation[index] == "-" && this.citation[index - 1] == "-") {
        //         this.citation.splice(index, 1);
        //         index--;
        //     }
        // }

//     constructor(cit: string) {
//         this.creerCitation(cit);
//         this.nettoyerCitation();
//         this.trouverLH();
//         this.creerTable();
//         this.citationTab.forEach((x,i) => {
//             let str="i: ";
//             x.forEach(y => {
//                 str+=y+", ";
//             });
//             console.log(str);
//         });
//     }
//     creerCitation(cit: string) {
//         cit = cit.toUpperCase();
//         for (let i = 0; i < cit.length; i++) {
//             const le = cit[i];
//             this.citation.push(le);
//         }
//     }
//     nettoyerCitation() {
//         this.citation.forEach((lettre, index) => { //Enelever les caractères non permis
//             if (["É", "È", "Ê", "Ë"].includes(lettre))
//                 this.citation[index] = "E";
//             if (["À", "Ä", "Â"].includes(lettre))
//                 this.citation[index] = "A";
//             if (lettre == "Ç")
//                 return "C";
//             if ([",", ".", ";", ":", "'", '"', "`", "!", "?"," "].includes(lettre))
//                 this.citation[index] = "-";
//             return true;
//         });
//         for (let index = 0; index < this.citation.length; index++) {
//             if (this.citation[index] == "-" && this.citation[index - 1] == "-") {
//                 this.citation.splice(index,1);
//                 index--;
//             }
//         }
//     }
//     trouverLH(){
//         let meilleur:number=0;
//         let lon=0;
//         for (let lo = 13; lo < 18; lo++) {
//             let curscore=0;
//             let chunks=sliceIntoChunks(this.citation,lo);
//             chunks.forEach(chunk=>{
//                 if(chunk[0]==="-")
//                     curscore++;
//                 if( chunk[lo-1]==="-")
//                     curscore++;
//             })
//             if(curscore>meilleur){
//                 meilleur=curscore;
//                 lon=lo;
//             }
//         }
//         this.longueur=lon;
//         this.longueurDernier=this.citation.length%this.longueur;
//         if (Math.floor(this.citation.length / lon) != this.citation.length / lon) {
//             this.hauteur = Math.floor(this.citation.length / lon) + 1;
//         } else {
//             this.hauteur = Math.floor(this.citation.length / lon);
//         }
//         console.log(this.longueur+ ":"+this.hauteur+":"+this.longueurDernier)
//     }
//     creerTable(){
//         let arr=sliceIntoChunks(this.citation,this.longueur)
//         arr[1].forEach(element => {
//             this.citationTab.push([""]);
//         });
//         arr.forEach((el,i) => {
//             el.forEach((ele,j) => {
//                 this.citationTab[j]=ele
//                 console.log(ele);
//             });
//         });
//     }
// }
// function sliceIntoChunks(arr:any[], chunkSize:number) {
//     const res = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//         const chunk = arr.slice(i, i + chunkSize);
//         res.push(chunk);
//     }
//     return res;
// }