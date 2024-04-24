from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db, User, World, Note, Map, Inspiration  # Import your models from models.py

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
migrate = Migrate(app, db)

# Route to get all worlds
@app.route('/worlds', methods=['GET'])
def get_worlds():
    worlds = World.query.all()
    return jsonify([world.serialize() for world in worlds])

# Route to get a specific world by ID
@app.route('/worlds/<int:world_id>', methods=['GET'])
def get_world(world_id):
    world = World.query.get(world_id)
    if world:
        return jsonify(world.serialize())
    else:
        return jsonify({'error': 'World not found'}), 404

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

# Route to update an existing world
@app.route('/worlds/<int:world_id>', methods=['PUT'])
def update_world(world_id):
    world = World.query.get(world_id)
    if world:
        data = request.json
        world.title = data.get('title', world.title)
        world.description = data.get('description', world.description)
        world.user_id = data.get('user_id', world.user_id)
        db.session.commit()
        return jsonify(world.serialize()), 200
    else:
        return jsonify({'error': 'World not found'}), 404

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


if __name__ == '__main__':
    app.run(debug=True)
