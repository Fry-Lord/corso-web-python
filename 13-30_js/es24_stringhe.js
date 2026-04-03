const nomiGiorniSettimana = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
];

function nomeGiornoSettimana(data) {
  const giorno = data.getDay();
  return nomiGiorniSettimana[giorno];
}

const dataDaVerificare = new Date();
const nomeGiorno = nomeGiornoSettimana(dataDaVerificare);
console.log("Nome giorno:", nomeGiorno);