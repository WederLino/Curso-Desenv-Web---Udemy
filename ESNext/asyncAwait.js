const pegarAluno = async () =>{
    const alunos =  await fetch("http://files.cod3r.com.br/curso-js/turmaA.json");
    const resposta = await alunos.json();
    
    console.log(resposta.map(x => x.nome))
}

pegarAluno();