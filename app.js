function gerar() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (!peso || !altura) {
    alert("Preencha os dados!");
    return;
  }

  const imc = peso / (altura * altura);

  document.getElementById("perfil").innerText =
    `👤 ${nome} | ${idade} anos`;

  document.getElementById("imc").innerText =
    `IMC: ${imc.toFixed(2)}`;

  let objetivo = "";
  let ficha = "";
  let proteina = (peso * 2).toFixed(0);

  document.getElementById("proteina").innerText =
    `🍗 Proteína diária: ${proteina}g`;

  // 🔴 EMAGRECIMENTO
  if (imc > 25) {
    objetivo = "Emagrecimento";

    ficha = `
    <h3>🔥 Plano de Corte</h3>

    <div class="exercicio">
      <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b">
      <p><b>Agachamento</b><br>3x15<br>Descanso: 45s<br>Execução: descer controlado</p>
    </div>

    <div class="exercicio">
      <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e">
      <p><b>Abdominal</b><br>3x20<br>+ Cardio 30min</p>
    </div>
    `;
  }

  // 🔵 DEFINIÇÃO
  else if (imc >= 18.5 && imc <= 25) {
    objetivo = "Definição";

    ficha = `
    <h3>💪 Plano de Definição</h3>

    <div class="exercicio">
      <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e">
      <p><b>Supino</b><br>3x10<br>Descanso: 60s<br>Execução: controle total</p>
    </div>

    <div class="exercicio">
      <img src="https://images.unsplash.com/photo-1594737625785-cfa53b1e5a7b">
      <p><b>Costas</b><br>3x10<br>Foco na contração</p>
    </div>
    `;
  }

  // 🟡 MASSA
  else {
    objetivo = "Hipertrofia";

    ficha = `
    <h3>🏋️ Plano de Massa</h3>

    <div class="exercicio">
      <img src="https://images.unsplash.com/photo-1599058918147-1ffabb6ab9a2">
      <p><b>Agachamento pesado</b><br>4x8<br>Descanso: 90s</p>
    </div>
    `;
  }

  document.getElementById("objetivo").innerText =
    `🎯 Objetivo: ${objetivo}`;

  document.getElementById("ficha").innerHTML = ficha;

  // salvar no backend
  fetch("/api/salvar", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ nome, idade, peso, altura, imc, objetivo })
  });
}

function verDados() {
  fetch("/api/dados")
    .then(res => res.json())
    .then(d => {
      document.getElementById("ficha").innerHTML =
        "<pre>" + JSON.stringify(d, null, 2) + "</pre>";
    });
}
