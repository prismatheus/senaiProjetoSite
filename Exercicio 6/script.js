let participantes = [];
let a = 0;
let participanteCadastrado = [];
for (let i = 0; i < 100; i++) {
  participantes[i] = "numero vago";
}

document
  .getElementById("inputForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o refresh da página

    const nome = document.getElementById("nameInput").value;
    const valor = document.getElementById("valueInput").value;
    if (valor < 99 && valor > 0) {
      if (participantes[valor] == "numero vago") {
        participantes[valor] = nome;

        let li = document.createElement("li");
        li.textContent = `${nome} | ${valor}`;
        // document.getElementById("br").appendChild(li).join("/br");
        document.getElementById("br").appendChild(li);
        document.getElementById("nameInput").value = "";
        document.getElementById("valueInput").value = "";
      } else {
        alert("Numero inválido! esse numero ja foi utilizado.");
      }
    } else {
      alert("Numero invalido!");
    }
  });

function sortear(event) {
  event.preventDefault();

  let participanteSorteado;
  let numeroSorteado = document.getElementById("sorteio").value;
  if (
    numeroSorteado > 99 ||
    participantes[numeroSorteado] == "numero vago" ||
    numeroSorteado < 0
  ) {
    alert("numero inválido!");
  } else {
    participanteSorteado = participantes[numeroSorteado];
    let h2 = document.createElement("h2");
    h2.textContent = `Vencedor: ${participanteSorteado}!!!`;
    document.getElementById("h2");
    $("#br").empty();
    var gif = document.getElementById("gif");
    var estiloGif = window.getComputedStyle(gif);
    var display = estiloGif.getPropertyValue("display");
    console.log(display);

    if ((display = "none")) {
      document.getElementById("gif").style.display = "block";
    }
    function fadeout() {
      $("#gif").fadeOut();
    }
    setTimeout(fadeout, 3000);
  }
}
