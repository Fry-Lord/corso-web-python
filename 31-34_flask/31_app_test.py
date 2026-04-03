from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Ciao dal server Flask!"

app.run(debug=True)