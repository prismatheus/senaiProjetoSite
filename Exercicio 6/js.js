document.getElementById("inputForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o refresh da página

  const name = document.getElementById("nameInput").value;
  const value = document.getElementById("valueInput").value;

  const newItem = document.createElement("li");
  newItem.textContent = `Nome: ${name}, Valor: ${value}`;
  document.getElementById("itemsList").appendChild(newItem);

  // Limpa os campos
  document.getElementById("nameInput").value = "";
  document.getElementById("valueInput").value = "";
});

  
 
