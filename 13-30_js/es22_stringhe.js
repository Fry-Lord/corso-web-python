function isDataFutura(data) {
  const dataCorrente = new Date();
  return data > dataCorrente;
}

const dataDaVerificare = new Date(2023, 0, 1);
const isFutura = isDataFutura(dataDaVerificare);
if (isFutura)
  console.log("La data non è futura");
else
   console.log("La data è futura");