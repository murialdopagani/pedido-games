var total_quantidade = 0;
var total_valor = 0;

function adicionar() {
  const produto = $("#produto").val();
  const quantidade = $("#quantidade").val();
  const valor = $("#valor").val();
  const codigo = $("#lista-produto tbody").length + 1;

  total_quantidade += parseInt(quantidade);
  total_valor += parseFloat(valor) * parseInt(quantidade);

  $("#total_quantidade").text(total_quantidade);
  $("#total_valor").text(total_valor.toFixed(2));

  const linha = `<tr>
    <td>${codigo}</td>
    <td>${produto}</td> 
    <td>${valor}</td>
    <td>${quantidade}</td> 
    </tr>`;
  $("#lista-produto tbody").append(linha);
}
