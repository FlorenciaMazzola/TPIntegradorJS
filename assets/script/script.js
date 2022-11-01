function calcTotal () {
   cantidad = document.getElementById('cantInput').value;
    categoria = document.getElementById('catSelect').value;
    cantidad = parseInt(cantidad);
    categoria = parseInt(categoria);
    valor =200;
    total = 0;
    if(cantidad <=0){
        alert('Debe ingresar una cantidad mayor a 0');
    }
    if (categoria ==1) {
        total = cantidad * (valor -(valor * 0.8));
    } else if (categoria ==2){
        total = cantidad * (valor - (valor * 0.5));   
        
    } else if (categoria ==3){
        total = cantidad * (valor -(valor * 0.15));   
       
    } else{
        total = cantidad * valor;
    }

    document.getElementById('cantTotal').innerHTML = "Total a Pagar: $ "+total;   
  }

function borrarTotal(){
    document.getElementById('cantTotal').innerHTML = "Total a Pagar: $ ";
}