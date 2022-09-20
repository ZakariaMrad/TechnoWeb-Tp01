export class Caracteres {
    Id=0;
    caractere="";
    style="clair";

    constructor(str:string,i:number){
        str=str.toUpperCase();
        this.caractere=str;
        if (["É", "È", "Ê", "Ë"].includes(str))
            this.caractere="E";
        if (["À", "Ä", "Â"].includes(str))
            this.caractere = "A";
        if (str == "Ç")
            this.caractere="C";
        if ([",", ".", ";", ":", "'", '"', "`", "!", "?"," ","-","’" ].includes(str)){
            this.caractere="-";
            this.style="ombre";
        }
        this.Id=i;
    }
}