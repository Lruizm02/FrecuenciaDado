// Funcion Limpiar
function Limpiar(){
  location.reload();
}

// Funcion generar datos
function Lanzamientos(){
   var tirada;
   f=[0,0,0,0,0,0,0]
   n=parseInt(document.datos.n.value)

   for(i=0 ; i<n; i++){
           tirada=Math.round(6*Math.random(1)+0.5); 
           f[tirada]=f[tirada]+1
   }

   for(i=1 ; i<7; i++){ 
            document.datos[3*i-1].value=f[i]; 
            document.datos[3*i].value=f[i]/n;
   }
   dado1 = parseInt(document.getElementById("Dado1").value);
   dado2 = parseInt(document.getElementById("Dado2").value);
   dado3 = parseInt(document.getElementById("Dado3").value);
   dado4 = parseInt(document.getElementById("Dado4").value);
   dado5 = parseInt(document.getElementById("Dado5").value);
   dado6 = parseInt(document.getElementById("Dado6").value);
   document.getElementById("Dado1.1").value = dado1;
   document.getElementById("Dado1.2").value = dado1+dado2;
   document.getElementById("Dado1.3").value = dado1+dado2+dado3;
   document.getElementById("Dado1.4").value = dado1+dado2+dado3+dado4;
   document.getElementById("Dado1.5").value = dado1+dado2+dado3+dado4+dado5;
   document.getElementById("Dado1.6").value = dado1+dado2+dado3+dado4+dado5+dado6;
   document.getElementById("Grafica").innerHTML="";
   Graficar();
   var max = Math.max(dado1, dado2, dado3, dado4, dado5, dado6);
   document.getElementById("ValorMax").value = max;
   var min = Math.min(dado1, dado2, dado3, dado4, dado5, dado6);
   document.getElementById("ValorMin").value = min;
   var min = Math.min(dado1, dado2, dado3, dado4, dado5, dado6);
   document.getElementById("Lanzar").value = dado1+dado2+dado3+dado4+dado5+dado6;
}



//Funcion Graficar
function Graficar(){
   new Morris.Bar({
    element: 'Grafica',
    data: [
      { Dado: 'Dado 1', Valor: dado1},
      { Dado: 'Dado 2', Valor: dado2},
      { Dado: 'Dado 3', Valor: dado3},
      { Dado: 'Dado 4', Valor: dado4},
      { Dado: 'Dado 5', Valor: dado5},
      { Dado: 'Dado 6', Valor: dado6}
    ],
    xkey: ['Dado'],
    ykeys: ['Valor'],
    labels: ['Valor'],
    barColors: ['#8E44AD']
  });
}

