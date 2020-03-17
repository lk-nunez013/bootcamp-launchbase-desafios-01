const dev = {
    nome: 'Lucas',
    idade: 22,
    tecnologias:[
        {nome: 'Html', especialidade: 'Mobile/Web'},
        {nome: 'Css', especialidade: 'Mobile/Web'},
        {nome: 'JS', especialidade: 'Mobile/Web'}

    ]
    
}

console.log(`o usuário ${dev.nome} tem ${dev.idade} anos e usa a tecnologia ${dev.tecnologias[0].nome} com especialidade em ${dev.tecnologias[0].especialidade}!`)