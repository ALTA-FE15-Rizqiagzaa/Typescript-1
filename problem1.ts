function anc(phrase: string): string{
    const words = phrase.split(" ");
    let acrnm= "";

    for(const word of words){
        if(word !== ""){
        acrnm += word[0].toUpperCase();
    }
}
return acrnm;
}

console.log(anc("Portable Network Graphics")) //case 1
console.log(anc("Correct me if I'm wrong")) //case 2
console.log(anc("Thanks god It's Friday")) //case 3