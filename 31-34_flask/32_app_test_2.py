from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Pagina principale"

@app.route("/ciao")
def ciao():
    return "Ciao ragazzi!"

@app.route("/me")
def me():
    return "Ciao Maurizio!"

app.run(debug=True)