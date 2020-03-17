const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];



function checaSeUsuarioUsaCss(usuario){
    for(let tecnologia of usuario.tecnologias){
        if (tecnologia =='CSS') return true
    }
    return false
}

for ( let i = 0; i < usuarios.length; i++){
    const usuarioUsaCss = checaSeUsuarioUsaCss(usuarios[i]);

    if(usuarioUsaCss){
        console.log(`O usuario ${usuarios[i].nome} trabalha com CSS!`)
    }
}