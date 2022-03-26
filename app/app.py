import os
from flask import Flask, render_template, redirect, url_for, request, flash
from flask_mail import Mail, Message

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = EMAIL_ADDRESS
app.config['MAIL_PASSWORD'] = EMAIL_KEY
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
mail = Mail(app)

@app.route('/', methods=['GET','POST'])

def index():
  firstName = request.form.get('firstName')
  lastName = request.form.get('lastName')
  email = request.form.get('email')
  message = request.form.get('message')

  if request.method == 'POST':
    firstName = request.form.get('firstName')
    lastName = request.form.get('lastName')
    email = request.form.get('email')
    message = request.form.get('message')

    msg = Message('Contact from personal website', sender= (firstName + ' ' + lastName, email), recipients = [EMAIL_ADDRESS], reply_to=email)
    msg.body = message
    mail.send(msg)
    flash('Message sent')
    return redirect(url_for('index'))
   
  return render_template("index.html")
