function calcolaEta()
{
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let data = document.getElementById("data").value;

    let nascita = new Date(data);
    let oggi = new Date();

    let eta = oggi.getFullYear() - nascita.getFullYear();

    let m = oggi.getMonth() - nascita.getMonth();

    if (m < 0 || (m === 0 && oggi.getDate() < nascita.getDate()))
    {
        eta--;
    }

    document.getElementById("risultato").textContent =
        nome + " " + cognome + " ha " + eta + " anni";
}