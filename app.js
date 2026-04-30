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
    `Nome: ${nome} | Idade: ${idade}`;

  document.getElementById("imc").innerText =
    "IMC: " + imc.toFixed(2);

  let objetivo = "";
  let ficha = "";
  let proteina = (peso * 2).toFixed(0);

  document.getElementById("proteina").innerText =
    "Proteína diária: " + proteina + "g";

  // 🔴 EMAGRECIMENTO
  if (imc > 25) {
    objetivo = "Perder gordura";

    ficha = `
    <h4>Segunda (Full Body)</h4>
    <img src="img/agachamento.jpg">
    <p>Agachamento 3x15</p>

    <img src="img/supino.jpg">
    <p>Supino 3x12</p>

    <h4>Quarta (Cardio)</h4>
    <img src="img/abdominal.jpg">
    <p>Abdominal 3x20</p>
    <p>+ Cardio 30min</p>

    <h4>Sexta</h4>
    <p>Repetir treino</p>

    <p>💡 Foco: queima de gordura</p>
    `;
  }

  // 🔵 DEFINIÇÃO
  else if (imc >= 18.5 && imc <= 25) {
    objetivo = "Definição";

    ficha = `
    <h4>Segunda (Peito)</h4>
    <img src="img/supino.jpg">
    <p>Supino 3x10</p>

    <h4>Terça (Costas)</h4>
    <img src="img/costas.jpg">
    <p>Puxada 3x10</p>

    <h4>Quinta (Perna)</h4>
    <img src="img/agachamento.jpg">
    <p>Agachamento 3x12</p>

    <h4>Sexta</h4>
    <img src="img/abdominal.jpg">
    <p>Abdominal 3x15</p>

    <p>💡 Foco: definição muscular</p>
    `;
  }

  // 🟡 MASSA
  else {
    objetivo = "Ganho de massa";

    ficha = `
    <h4>Segunda (Peito)</h4>
    <img src="img/supino.jpg">
    <p>Supino 4x8</p>

    <h4>Quarta (Costas)</h4>
    <img src="img/costas.jpg">
    <p>Puxada 4x8</p>

    <h4>Sexta (Perna)</h4>
    <img src="img/agachamento.jpg">
    <p>Agachamento 4x8</p>

    <p>💡 Foco: ganhar massa muscular</p>
    `;
  }

  document.getElementById("objetivo").innerText =
    "Objetivo: " + objetivo;

  document.getElementById("ficha").innerHTML = ficha;
}