fetch("api.js")
.then(res => res.json())
.then(data => {

document.getElementById("respostaIA").innerHTML = `
🤖 Resultado da IA:

${data.resultado}
`;

});
