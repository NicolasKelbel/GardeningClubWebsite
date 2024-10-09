from flask import Flask

app = Flask(__name__)

@app.route("/")
def test():
    return {
        "test": "successful"
    }

@app.route("/home")
def home():
    return {
        "": ""
    }

@app.route("/funding")
def funding():
    return {
        "": ""
    }

@app.route("/blogs")
def blogs():
    return {
        "": ""
    }

@app.route("/articles")
def articles():
    return {
        "": ""
    }