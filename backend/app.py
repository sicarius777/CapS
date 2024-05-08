# app.py
from flask import Flask, jsonify, request, session, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db, User, World, Note, Map, Inspiration, Flora, Fauna, Location, Weather, Government, Character, Material, Relic  # Import your models from models.py
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()
SECRET_KEY = os.getenv("SECRET_KEY")
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = os.getenv ('SQLALCHEMY_TRACK_MODIFICATIONS')
app.config['FLASK_DEBUG'] = os.getenv ('FLASK_DEBUG')
db.init_app(app)
migrate = Migrate(app, db)

# Route to login
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and user.check_password(password):
        session['user_id'] = user.id  # Set the user ID in the session
        return jsonify({'message': 'Login successful', 'user_id': user.id}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401

# Route for accessing user profile
@app.route('/profile')
def profile():
    # Check if user is logged in
    if 'user_id' in session:
        # Retrieve user ID from session
        user_id = session['user_id']
        # Fetch user data from the database based on user_id
        # Render user profile page with fetched data
        return f'User profile page for user with ID {user_id}'
    else:
        return redirect(url_for('login'))

# Route for logout
@app.route('/logout')
def logout():
    # Clear session data
    session.clear()
    return redirect(url_for('login'))

# Route to set the user ID in the session upon login
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and user.check_password(password):
        session['user_id'] = user.id  # Set the user ID in the session
        return jsonify({'message': 'Login successful', 'user_id': user.id}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401

# Route to get the current session's user ID
@app.route('/api/current_user', methods=['GET'])
def get_current_user():
    user_id = session.get('user_id')
    if user_id:
        return jsonify({'user_id': user_id}), 200
    else:
        return jsonify({'error': 'User not authenticated'}), 401


















# Route to create a new user
@app.route('/users', methods=['POST'])
def create_user():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    if username and email and password:
        new_user = User(username=username, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify(new_user.serialize()), 201
    else:
        return jsonify({'error': 'Missing data'}), 400

# Route to create a new world
@app.route('/worlds', methods=['POST'])
def create_world():
    data = request.json
    title = data.get('title')
    description = data.get('description')
    user_id = data.get('user_id')
    if title and user_id:
        new_world = World(title=title, description=description, user_id=user_id)
        db.session.add(new_world)
        db.session.commit()
        return jsonify(new_world.serialize()), 201
    else:
        return jsonify({'error': 'Missing data'}), 400


# Route to delete a world
@app.route('/worlds/<int:world_id>', methods=['DELETE'])
def delete_world(world_id):
    world = World.query.get(world_id)
    if world:
        db.session.delete(world)
        db.session.commit()
        return jsonify({'message': 'World deleted successfully'}), 200
    else:
        return jsonify({'error': 'World not found'}), 404

# Route to create a new map
@app.route('/maps', methods=['POST'])
def create_map():
    data = request.json
    content = data.get('content')
    world_id = data.get('world_id')
    if content and world_id:
        new_map = Map(content=content, world_id=world_id)
        db.session.add(new_map)
        db.session.commit()
        return jsonify(new_map.serialize()), 201
    else:
        return jsonify({'error': 'Missing data'}), 400
    
  # Route to update an existing map
@app.route('/maps/<int:map_id>', methods=['PUT'])
def update_map(map_id):
    map = Map.query.get(map_id)
    if map:
        data = request.json
        map.content = data.get('content', map.content)
        map.world_id = data.get('world_id', map.world_id)
        db.session.commit()
        return jsonify(map.serialize()), 200
    else:
        return jsonify({'error': 'Map not found'}), 404

# Route to delete a map
@app.route('/maps/<int:map_id>', methods=['DELETE'])
def delete_map(map_id):
    map = Map.query.get(map_id)
    if map:
        db.session.delete(map)
        db.session.commit()
        return jsonify({'message': 'Map deleted successfully'}), 200
    else:
        return jsonify({'error': 'Map not found'}), 404


