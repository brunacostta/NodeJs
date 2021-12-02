export class Pessoa{
    #nome;
    #endereco;

    get nome(){
        return this.#nome;
    }
    
    set nome(nm){
        this.#nome = nm;
    }

    get endereco(){
        return this.#endereco;
    }
    
    set endereco(end){
        this.#endereco = end;
    }
}