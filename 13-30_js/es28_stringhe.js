//const N = parseInt(prompt("Inserisci un numero:"));
N = 20
for (let i = 1; i <= N; i++) {
  let riga = "";
  for (let j = 1; j <= i; j++) {
    riga += "* ";
  }
  console.log(riga);
}