//Est le caractère à afficher dans le tableau, ainsi que son apparence
export class Caracteres {
    caractere = "";
    style = "clair";

    constructor(str: string) {
        str = str.toUpperCase();
        this.caractere = str;
        if (["É", "È", "Ê", "Ë"].includes(str))
            this.caractere = "E";
        if (["À", "Ä", "Â"].includes(str))
            this.caractere = "A";
        if (str == "Ç")
            this.caractere = "C";
        if ([",", ".", ";", ":", "'", '"', "`", "!", "?", " ", "-", "’", ""].includes(str)) { //Utilisation de caractère "espace" différent
            //pour aider à mieux afficher
            this.caractere = "";
            this.style = "ombre"; //Si c'est un caractère qui n'est pas une lettre, il est remplacer par un espace bizarre
        }
    }
}