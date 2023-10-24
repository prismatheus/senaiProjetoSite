let participantes = [];
let a = 0;
let participanteCadastrado
for (let i = 0; i < 100; i++) {
  participantes[i] = "numero vago";
}

document
  .getElementById("inputForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o refresh da página

    const nome = document.getElementById("nameInput").value;
    const valor = document.getElementById("valueInput").value;
    if (valor > 100) {
      alert("numero invalido");
      
    } else {
    participantes[valor]=participanteCadastrado

    participantes = document.createElement("li");
    participantes.textContent = `${nome} | ${valor}`;
    document.getElementById("br").appendChild(participantes).join("/br");

    // Limpa os campos
    document.getElementById("nameInput").value = "";
    document.getElementById("valueInput").value = "";
    }
  });

function reset() {
  window.location.reload(true);
}

console.log(window);
