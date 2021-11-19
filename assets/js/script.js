//RECEBENDO OS DADOS ENVIADOS PELO FORMOULARIO

document.querySelector('.busca').addEventListener('submit', async (event)=>{
    //previnindo o formulario de ser enviado!
    event.preventDefault();
    //pegar o que ele digitou!
    let input = document.querySelector('#searchInput').value;
    //saber se o usuario digitou alguma coisa

        if(input !== ''){
            showWarning('Carregando...');

            //Montando a url para pagar os dados da API
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=01c21d587d6ff6be0f5285fb02503964&units=metric&lang=pt_br`;
            //fazendo a requisição e pegando o resultado dela usando uma função do javascript fetch
            let results = await fetch(url);
            //tranformando o resultado em objeto para que eu possa conseguir ler 
            let json = await results.json(); 

            //Verificar agora se ele encontrou a cidade que estou procurando 




        }
       
        

   

});

//função para mostrar ou remover um aviso! 

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}