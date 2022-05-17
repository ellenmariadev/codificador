const selecione = document.querySelector(".select");
const incremento = document.querySelector(".chave-container");
const btn = document.querySelector("button");
const radiobtn = document.querySelector(".radio-button");
const codificar = document.querySelector("#codificar");
const decodificar = document.querySelector("#decodificar");

// Incremento da Cifra de César
selecione.addEventListener("click", function () {
  if (selecione.value == "cifra") {
    incremento.style.display = "block";
  } else {
    incremento.style.display = "none";
  }
});

// Botão
radiobtn.addEventListener("click", function () {
  if (codificar.checked) {
    btn.innerHTML = "Codificar Mensagem!";
  } else if (decodificar.checked) {
    btn.innerHTML = "Decodificar Mensagem!";
  }
});

// Base64

function base64() {
  let mensagem = document.querySelector("#mensagem").value;

  if (codificar.checked === true) {
    let codificado = btoa(mensagem);
    return codificado;
  } else if (decodificar.checked === true) {
    let decodificado = atob(mensagem);
    return decodificado;
  }
}

btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (selecione.value === "base64") {
    resultado.innerText = base64();
  } else {
    return 0;
  }
});
