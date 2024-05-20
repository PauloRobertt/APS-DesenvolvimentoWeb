function Reservar(element) {
    var salaDiv = element.closest('.sala');

    var status = salaDiv.querySelector('span').textContent;
    
    if(status == "DISPONIVEL"){
        return alert('Sala Reservada com Sucesso!')
    }else{alert('Status da Sala: ' + status);}
}