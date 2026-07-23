const imagens= [ //criando uma lista com as imgs
    document.getElementById("fefe"),
    document.getElementById("frajola"),
    document.getElementById("trixie")
];

let imagemAtual= 0;  //img atual na posição 0 (primeira img)

setInterval(function() { //função que se repete a cada 500ms
    //função executada para cada imagem
    imagens.forEach(function(imagem){ // o forEach serve para percorrer a lista, e fazer algo com alguma coisa dela
        imagem.style.opacity= "0"; //escondendo a img
    });
    imagens[imagemAtual].style.opacity= "1"; //mostrando a img
    imagemAtual++;  //img atual= 0, dps img atual= 1
    /*como o setInterval n delimita um fim, usamos o if para isso.
    assim, quando chegar no ultimo elemento, e ele procurar mais um, vai cair no if, e o if faz ele voltar para a primeira img
    */
    if (imagemAtual === imagens.length) {
        imagemAtual= 0;
    }

}, 500); //tempo delimitado



setTimeout(() => {

    document.getElementById("loading").style.display = "none";

}, 5000);   

setTimeout(() => {
    document.getElementById("btn").style.display = "block";
}, 5000);

/*setTimeOut é uma função disparada depois de um tempo estipulado.
podendo ser usada tanto pra colocar elementos na tela dps de um tempo,
quanto pra fazer um elemento desaparecer tbm*/

/*criamos uma função anonima diretamente dentro do setInterval, pq ele precisa saber oq exatamente repetir (dá pra fazer uma função com nome tbm, e dps so chamar dentro do setinterval.).
  imagens.forEach(function(imagem){}) = para cada item dentro de imgens, execute essa função, e coloque o item atual dentro dessa variavel imagem.
  imagens[imagemaAtual]= colocamos imagemAtual dentro de [], pq a imagem atual dentro dessa var vai ser usada por imagens.
*/

