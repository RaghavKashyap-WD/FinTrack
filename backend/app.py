from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from dotenv import load_dotenv
from urllib.parse import quote
import os
from flask_cors import CORS
from extensions import db

SECRET_KEY = os.getenv("SECRET_KEY")

app = Flask(__name__)
CORS(app, origins=["http://localhost:3001"], supports_credentials=True)
app.secret_key = SECRET_KEY 


# Load environment variables from .env file
load_dotenv()

# Replace these with environment variables
DB_USER = os.getenv("DB_USER")
DB_PASS = os.getenv("DB_PASS")
DB_NAME = os.getenv("DB_NAME")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT", "3000")


# Encode the password to handle special characters
encoded_password = quote(DB_PASS)
# Update the SQLALCHEMY_DATABASE_URI to include the port
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{DB_USER}:{encoded_password}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)


bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.init_app(app)
login_manager.login_view = 'login'
@login_manager.unauthorized_handler
def unauthorized_callback():
    if request.accept_mimetypes.accept_html:
        # Request expects HTML → redirect
        return redirect(url_for('login'))
    # Otherwise, it's an API call → JSON 401
    return jsonify({'error': 'Unauthorized'}), 401



@login_manager.user_loader
def load_user(user_id):
    from models import User
    return User.query.get(int(user_id))


@app.route('/signup', methods=['POST'])
def signup():
    from models import User
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if User.query.filter_by(username=username).first():
        return jsonify({'success': False, 'message': 'Username already exists!'}), 409
    hashed_pw = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(username=username, password=hashed_pw)
    db.session.add(new_user)
    db.session.commit()
    login_user(new_user)
    return jsonify({'success': True, 'message': 'Signup successful!'}), 201

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'GET':
        return redirect("http://localhost:3001/login")

    from models import User
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    user = User.query.filter_by(username=username).first()
    if user and bcrypt.check_password_hash(user.password, password):
        login_user(user)
        return jsonify({'success': True, 'message': 'Login successful!'}), 200
    else:
        return jsonify({'success': False, 'message': 'Invalid credentials'}), 401


@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash('You have been logged out!')
    return redirect(url_for('login'))

@app.route('/dashboard')
@login_required
def dashboard():
    return f"Welcome, {current_user.username}!"

if __name__ == "__main__":
    app.run(debug=True, port=5000)
