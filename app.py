from flask import Flask, render_template, request
import smtplib

app = Flask(__name__)

@app.route('/', methods=['GET','POST'])

def index():
  firstName = request.form.get('firstName')
  lastName = request.form.get('lastName')
  email = request.form.get('email')
  message = request.form.get('message')

  if not firstName and not lastName and not email and not message:
    firstName = ''
    lastName = ''
    email = ''
    message = ''
  else:
    server = smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login("barbaradmorantesc@gmail.com", "rlutcgpusdzocadu")
    server.sendmail("barbaradmorantesc@gmail.com", email, message)


  return render_template("index.html")