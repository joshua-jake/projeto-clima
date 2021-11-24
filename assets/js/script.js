//RECEBENDO OS DADOS ENVIADOS PELO FORMOULARIO

document.querySelector('.busca').addEventListener('submit', async (event)=>{
    //previnindo o formulario de ser enviado!
    event.preventDefault();
    //pegar o que ele digitou!
    let input = document.querySelector('#searchInput').value;
    //saber se o usuario digitou alguma coisa

        if(input !== ''){
            clearInfon();
            showWarning('Carregando...');

            //Montando a url para pagar os dados da API
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=01c21d587d6ff6be0f5285fb02503964&units=metric&lang=pt_br`;
            //fazendo a requisição e pegando o resultado dela usando uma função do javascript fetch
            let results = await fetch(url);
            //tranformando o resultado em objeto para que eu possa conseguir ler 
            let json = await results.json(); 

            //Verificar agora se ele encontrou a cidade que estou procurando 

            if(json.cod === 200) {
                
                showInfo({
                    name: json.name, //name da cidade
                    country: json.sys.country,//pais
                    temp: json.main.temp, //temperatura,            
                    tempIcon: json.weather[0].icon,//icone da temperatura céu, chuva ...
                    windSpeed: json.wind.speed, //pegando informações do vento 
                    windAngle: json.wind.deg //Angulo do vendo 


                });
            }
            else {

                clearInfon();
                showWarning('Não encontramos esta localização!');
            }
          


        }
        else {
            clearInfon();
        }
        
  
});


// Criando uma função para mostrar as Informações! 

function showInfo(json) {
    showWarning('');

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;

    document.querySelector('.tempInfo').innerHTML = `${json.temp}<sup>ºC</sup>`;

    document.querySelector('.ventoInfo').innerHTML = `${json.temp}<span>km/h</span>`;

    //Trocando a imagens da url 
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);

    //Trocando a posição do do icone do vento 
    
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`;
    
    document.querySelector('.resultado').style.display = 'block';
    

}



//Criando uma Função para limpar 

function clearInfon() {
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
}


//função para mostrar ou remover um aviso! 

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

