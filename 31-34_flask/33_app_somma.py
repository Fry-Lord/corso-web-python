from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():

    risultato = None

    if request.method == "POST":
        a = int(request.form["a"])
        b = int(request.form["b"])
        risultato = a + b

    return render_template("index_somma.html", risultato=risultato)

app.run(debug=True)