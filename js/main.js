 


const controle = document.querySelectorAll("[data-controle]"); //todos os elementos com essa classe vão ser buscados
const estatisticas = document.querySelectorAll("[data-estatistica]");//array de estatisticas para atualizar cada uma preciso percorrer todas
 

const pecas = { //valores a serem alterados
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
} 



controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);//toda vez que e um input e value e um texto e textContext
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

//passar para operação o valor do controle
function manipulaDados(operacao,controle){
    
    //controle e o pai do elemento que foi clicado 
    //toda vez que eu clicar no controle eu vou buscar quem e o controle contador e vou adicionar e subtrair um item
    const peca = controle.querySelector("[data-contador]"); 
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;//transformando string em numero
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca){
    //saber que peça foi clicada  
    //pegando todos os dados do ponto especifico daquele objeto
    //navegando no objeto pecas[]retorno e o objeto daqueles dados 


    estatisticas.forEach( (elemento) =>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica];//recebendo o valor atual dele que eu quero atualizar
        
        //o texto do elemento
    })//atualizar cada uma da estatisticas o elemento que eu estou quero que ele seja atualizado que seu texto seja atualizado com o novo valor
}
//ao clicar em cada um desses elementos quero atualizar o textContext