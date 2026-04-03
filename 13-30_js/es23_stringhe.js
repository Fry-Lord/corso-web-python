function formattaData(data) {
  const giorno = String(data.getDate()).padStart(2, "0");
  const mese = String(data.getMonth() + 1).padStart(2, "0");
  const anno = data.getFullYear();
  return `${giorno}/${mese}/${anno}`;
}

const dataDaFormattare = new Date();
const dataFormattata = formattaData(dataDaFormattare);
console.log("Data formattata:", dataFormattata);