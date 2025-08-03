let listaDeAmigos = []

function adicionarAmigo() {
  document.getElementById('resultado').innerHTML = ''
  if (document.querySelector('input').value == '') {
    alert('Por favor, insira um nome válido.')
  } else {
    listaDeAmigos.push(document.querySelector('input').value)
  }
  mostrarLista()
}
function mostrarLista() {
  let lista = document.getElementById('listaAmigos')
  lista.innerHTML = ''

  for (i = 0; i < listaDeAmigos.length; i++) {
    let item = document.createElement('li')
    item.textContent = listaDeAmigos[i]
    lista.appendChild(item)
  }
}
function sortearAmigo() {
  if (listaDeAmigos.length == 0) {
    document.getElementById('resultado').innerHTML = 'Lista vazia!'
  } else {
    let sorteio = parseInt(Math.random() * listaDeAmigos.length)
    let amigoSorteado = listaDeAmigos[sorteio]
    document.getElementById(
      'resultado'
    ).innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`
    listaDeAmigos = []
    mostrarLista()
  }
}
