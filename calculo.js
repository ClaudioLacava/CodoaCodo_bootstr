
console.log("Hola");


const formulario = document.getElementById('formulario1');{
  formulario.addEventListener('submit', function (event) {
event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    console.log(nombre)
    let apellido = document.getElementById('apellido').value;
    console.log(apellido)
    let email = document.getElementById('email').value;
    console.log(email)
    let quantity = document.getElementById('quantity').value;
    console.log(quantity)
    let category = document.getElementById('category').value;
    console.log(category)
  
  
  let valor = 200;
  
  
  if (category === 'selected'){
    alert('Selecciona una opción de categoría');
   return;
  } else if (category === 'estudiante'){
    valor = (valor - (valor * 80 / 100));
  } else if (category === 'trainee'){
    valor = (valor - (valor * 50 / 100));
  } else if (category === 'junior'){
    valor = (valor - (valor * 15 / 100));
  }
  console.log('Total a Pagar: $ ' + (valor * quantity));
  
  
  var botonRespuesta = document.getElementById('payment');
  botonRespuesta.style.display = 'block';
  botonRespuesta.textContent =  + (valor * quantity);
  
}  
)}
