from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import db, User, World, Note, Map, Inspiration, Flora, Fauna, Location, Weather, Government, Character, Material, Relic  # Import your models from models.py

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

# Route to get all users
@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.serialize() for user in users])

# Route to get a specific user by ID
@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    if user:
        return jsonify(user.serialize())
    else:
        return jsonify({'error': 'User not found'}), 404

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

# Route to update an existing user
@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get(user_id)
    if user:
        data = request.json
        user.username = data.get('username', user.username)
        user.email = data.get('email', user.email)
        user.password = data.get('password', user.password)
        db.session.commit()
        return jsonify(user.serialize()), 200
    else:
        return jsonify({'error': 'User not found'}), 404

# Route to delete a user
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)
    if user:
        db.session.delete(user)
        db.session.commit()
        return jsonify({'message': 'User deleted successfully'}), 200
    else:
        return jsonify({'error': 'User not found'}), 404

# Route to get all maps
@app.route('/maps', methods=['GET'])
def get_maps():
    maps = Map.query.all()
    return jsonify([map.serialize() for map in maps])

# Route to get a specific map by ID
@app.route('/maps/<int:map_id>', methods=['GET'])
def get_map(map_id):
    map = Map.query.get(map_id)
    if map:
        return jsonify(map.serialize())
    else:
        return jsonify({'error': 'Map not found'}), 404

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

# Route to get all notes
@app.route('/notes', methods=['GET'])
def get_notes():
    notes = Note.query.all()
    return jsonify([note.serialize() for note in notes])

# Route to get a specific note by ID
@app.route('/notes/<int:note_id>', methods=['GET'])
def get_note(note_id):
    note = Note.query.get(note_id)
    if note:
        return jsonify(note.serialize())
    else:
        return jsonify({'error': 'Note not found'}), 404

# Route to create a new note
@app.route('/notes', methods=['POST'])
def create_note():
    data = request.json
    content = data.get('content')
    world_id = data.get('world_id')
    if content and world_id:
        new_note = Note(content=content, world_id=world_id)
        db.session.add(new_note)
        db.session.commit()
        return jsonify(new_note.serialize()), 201
    else:
        return jsonify({'error': 'Missing data'}), 400

# Route to update an existing note
@app.route('/notes/<int:note_id>', methods=['PUT'])
def update_note(note_id):
    note = Note.query.get(note_id)
    if note:
        data = request.json
        note.content = data.get('content', note.content)
        note.world_id = data.get('world_id', note.world_id)
        db.session.commit()
        return jsonify(note.serialize()), 200
    else:
        return jsonify({'error': 'Note not found'}), 404

# Route to delete a note
@app.route('/notes/<int:note_id>', methods=['DELETE'])
def delete_note(note_id):
    note = Note.query.get(note_id)
    if note:
        db.session.delete(note)
        db.session.commit()
        return jsonify({'message': 'Note deleted successfully'}), 200
    else:
        return jsonify({'error': 'Note not found'}), 404

# Route to get all inspirations
@app.route('/inspirations', methods=['GET'])
def get_inspirations():
    inspirations = Inspiration.query.all()
    return jsonify([inspiration.serialize() for inspiration in inspirations])

# Route to get a specific inspiration by ID
@app.route('/inspirations/<int:inspiration_id>', methods=['GET'])
def get_inspiration(inspiration_id):
    inspiration = Inspiration.query.get(inspiration_id)
    if inspiration:
        return jsonify(inspiration.serialize())
    else:
        return jsonify({'error': 'Inspiration not found'}), 404

# Route to create a new inspiration
@app.route('/inspirations', methods=['POST'])
def create_inspiration():
    data = request.json
    content = data.get('content')
    world_id = data.get('world_id')
    if content and world_id:
        new_inspiration = Inspiration(content=content, world_id=world_id)
        db.session.add(new_inspiration)
        db.session.commit()
        return jsonify(new_inspiration.serialize()), 201
    else:
        return jsonify({'error': 'Missing data'}), 400

# Route to update an existing inspiration
@app.route('/inspirations/<int:inspiration_id>', methods=['PUT'])
def update_inspiration(inspiration_id):
    inspiration = Inspiration.query.get(inspiration_id)
    if inspiration:
        data = request.json
        inspiration.content = data.get('content', inspiration.content)
        inspiration.world_id = data.get('world_id', inspiration.world_id)
        db.session.commit()
        return jsonify(inspiration.serialize()), 200
    else:
        return jsonify({'error': 'Inspiration not found'}), 404

# Route to delete an inspiration
@app.route('/inspirations/<int:inspiration_id>', methods=['DELETE'])
def delete_inspiration(inspiration_id):
    inspiration = Inspiration.query.get(inspiration_id)
    if inspiration:
        db.session.delete(inspiration)
        db.session.commit()
        return jsonify({'message': 'Inspiration deleted successfully'}), 200
    else:
        return jsonify({'error': 'Inspiration not found'}), 404

# Route to get all flora
@app.route('/flora', methods=['GET'])
def get_flora():
    flora = Flora.query.all()
    return jsonify([item.serialize() for item in flora])

# Route to get a specific flora item by ID
@app.route('/flora/<int:item_id>', methods=['GET'])
def get_flora_item(item_id):
    item = Flora.query.get(item_id)
    if item:
        return jsonify(item.serialize())
    else:
        return jsonify({'error': 'Flora item not found'}), 404

# Route to create a new flora item
@app.route('/flora', methods=['POST'])
def create_flora():
    data = request.json
    name = data.get('name')
    description = data.get('description')
    world_id = data.get('world_id')
    if name and world_id:
        new_item = Flora(name=name, description=description, world_id=world_id)
        db.session.add(new_item)
        db.session.commit()
        return jsonify(new_item.serialize()), 201
    else:
        return jsonify({'error': 'Missing data'}), 400

# Route to update an existing flora item
@app.route('/flora/<int:item_id>', methods=['PUT'])
def update_flora(item_id):
    item = Flora.query.get(item_id)
    if item:
        data = request.json
        item.name = data.get('name', item.name)
        item.description = data.get('description', item.description)
        item.world_id = data.get('world_id', item.world_id)
        db.session.commit()
        return jsonify(item.serialize()), 200
    else:
        return jsonify({'error': 'Flora item not found'}), 404

# Route to delete a flora item
@app.route('/flora/<int:item_id>', methods=['DELETE'])
def delete_flora(item_id):
    item = Flora.query.get(item_id)
    if item:
        db.session.delete(item)
        db.session.commit()
        return jsonify({'message': 'Flora item deleted successfully'}), 200
    else:
        return jsonify({'error': 'Flora item not found'}), 404


# CRUD operations for Fauna model
@app.route('/fauna', methods=['GET'])
def get_fauna():
    fauna = Fauna.query.all()
    return jsonify([item.serialize() for item in fauna])

@app.route('/fauna/<int:item_id>', methods=['GET'])
def get_fauna_item(item_id):
    item = Fauna.query.get(item_id)
    if item:
        return jsonify(item.serialize())
    else:
        return jsonify({'error': 'Fauna item not found'}), 404

@app.route('/fauna', methods=['POST'])
def create_fauna():
    data = request.json
    name = data.get('name')
    description = data.get('description')
    world_id = data.get('world_id')
    if name and world_id:
        new_item = Fauna(name=name, description=description, world_id=world_id)
        db.session.add(new_item)
        db.session.commit()
        return jsonify(new_item.serialize()), 201
    else:
        return jsonify({'error': 'Missing data'}), 400

@app.route('/fauna/<int:item_id>', methods=['PUT'])
def update_fauna(item_id):
    item = Fauna.query.get(item_id)
    if item:
        data = request.json
        item.name = data.get('name', item.name)
        item.description = data.get('description', item.description)
        item.world_id = data.get('world_id', item.world_id)
        db.session.commit()
        return jsonify(item.serialize()), 200
    else:
        return jsonify({'error': 'Fauna item not found'}), 404

@app.route('/fauna/<int:item_id>', methods=['DELETE'])
def delete_fauna(item_id):
    item = Fauna.query.get(item_id)
    if item:
        db.session.delete(item)
        db.session.commit()
        return jsonify({'message': 'Fauna item deleted successfully'}), 200
    else:
        return jsonify({'error': 'Fauna item not found'}), 404



# CRUD operations for Location model
@app.route('/locations', methods=['GET'])
def get_locations():
    locations = Location.query.all()
    return jsonify([location.serialize() for location in locations])

@app.route('/locations/<int:location_id>', methods=['GET'])
def get_location(location_id):
    location = Location.query.get(location_id)
    if location:
        return jsonify(location.serialize())
    else:
        return jsonify({'error': 'Location not found'}), 404

@app.route('/locations', methods=['POST'])
def create_location():
    data = request.json
    name = data.get('name')
    description = data.get('description')
    world_id = data.get('world_id')
    if name and world_id:
        new_location = Location(name=name, description=description, world_id=world_id)
        db.session.add(new_location)
        db.session.commit()
        return jsonify(new_location.serialize()), 201
    else:
        return jsonify({'error': 'Missing data'}), 400

@app.route('/locations/<int:location_id>', methods=['PUT'])
def update_location(location_id):
    location = Location.query.get(location_id)
    if location:
        data = request.json
        location.name = data.get('name', location.name)
        location.description = data.get('description', location.description)
        location.world_id = data.get('world_id', location.world_id)
        db.session.commit()
        return jsonify(location.serialize()), 200
    else:
        return jsonify({'error': 'Location not found'}), 404

@app.route('/locations/<int:location_id>', methods=['DELETE'])
def delete_location(location_id):
    location = Location.query.get(location_id)
    if location:
        db.session.delete(location)
        db.session.commit()
        return jsonify({'message': 'Location deleted successfully'}), 200
    else:
        return jsonify({'error': 'Location not found'}), 404


# CRUD operations for Weather model
@app.route('/weather', methods=['GET'])
def get_weather():
    weather = Weather.query.all()
    return jsonify([item.serialize() for item in weather])

@app.route('/weather/<int:item_id>', methods=['GET'])
def get_weather_item(item_id):
    item = Weather.query.get(item_id)
    if item:
        return jsonify(item.serialize())
    else:
        return jsonify({'error': 'Weather item not found'}), 404

@app.route('/weather', methods=['POST'])
def create_weather():
    data = request.json
    name = data.get('name')
    description = data.get('description')
    world_id = data.get('world_id')
    if name and world_id:
        new_item = Weather(name=name, description=description, world_id=world_id)
        db.session.add(new_item)
        db.session.commit()
        return jsonify(new_item.serialize()), 201
    else:
        return jsonify({'error': 'Missing data'}), 400

@app.route('/weather/<int:item_id>', methods=['PUT'])
def update_weather(item_id):
    item = Weather.query.get(item_id)
    if item:
        data = request.json
        item.name = data.get('name', item.name)
        item.description = data.get('description', item.description)
        item.world_id = data.get('world_id', item.world_id)
        db.session.commit()
        return jsonify(item.serialize()), 200
    else:
        return jsonify({'error': 'Weather item not found'}), 404

@app.route('/weather/<int:item_id>', methods=['DELETE'])
def delete_weather(item_id):
    item = Weather.query.get(item_id)
    if item:
        db.session.delete(item)
        db.session.commit()
        return jsonify({'message': 'Weather item deleted successfully'}), 200
    else:
        return jsonify({'error': 'Weather item not found'}), 404


# CRUD operations for Government model
@app.route('/governments', methods=['GET'])
def get_governments():
    governments = Government.query.all()
    return jsonify([government.serialize() for government in governments])

@app.route('/governments/<int:government_id>', methods=['GET'])
def get_government(government_id):
    government = Government.query.get(government_id)
    if government:
        return jsonify(government.serialize())
    else:
        return jsonify({'error': 'Government not found'}), 404

@app.route('/governments', methods=['POST'])
def create_government():
    data = request.json
    name = data.get('name')
    description = data.get('description')
    world_id = data.get('world_id')
    if name and world_id:
        new_government = Government(name=name, description=description, world_id=world_id)
        db.session.add(new_government)
        db.session.commit()
        return jsonify(new_government.serialize()), 201
    else:
        return jsonify({'error': 'Missing data'}), 400

@app.route('/governments/<int:government_id>', methods=['PUT'])
def update_government(government_id):
    government = Government.query.get(government_id)
    if government:
        data = request.json
        government.name = data.get('name', government.name)
        government.description = data.get('description', government.description)
        government.world_id = data.get('world_id', government.world_id)
        db.session.commit()
        return jsonify(government.serialize()), 200
    else:
        return jsonify({'error': 'Government not found'}), 404

@app.route('/governments/<int:government_id>', methods=['DELETE'])
def delete_government(government_id):
    government = Government.query.get(government_id)
    if government:
        db.session.delete(government)
        db.session.commit()
        return jsonify({'message': 'Government deleted successfully'}), 200
    else:
        return jsonify({'error': 'Government not found'}), 404




# CRUD operations for Character model
@app.route('/characters', methods=['GET'])
def get_characters():
    characters = Character.query.all()
    return jsonify([character.serialize() for character in characters])

@app.route('/characters/<int:character_id>', methods=['GET'])
def get_character(character_id):
    character = Character.query.get(character_id)
    if character:
        return jsonify(character.serialize())
    else:
        return jsonify({'error': 'Character not found'}), 404

@app.route('/characters', methods=['POST'])
def create_character():
    data = request.json
    name = data.get('name')
    description = data.get('description')
    world_id = data.get('world_id')
    if name and world_id:
        new_character = Character(name=name, description=description, world_id=world_id)
        db.session.add(new_character)
        db.session.commit()
        return jsonify(new_character.serialize()), 201
    else:
        return jsonify({'error': 'Missing data'}), 400

@app.route('/characters/<int:character_id>', methods=['PUT'])
def update_character(character_id):
    character = Character.query.get(character_id)
    if character:
        data = request.json
        character.name = data.get('name', character.name)
        character.description = data.get('description', character.description)
        character.world_id = data.get('world_id', character.world_id)
        db.session.commit()
        return jsonify(character.serialize()), 200
    else:
        return jsonify({'error': 'Character not found'}), 404

@app.route('/characters/<int:character_id>', methods=['DELETE'])
def delete_character(character_id):
    character = Character.query.get(character_id)
    if character:
        db.session.delete(character)
        db.session.commit()
        return jsonify({'message': 'Character deleted successfully'}), 200
    else:
        return jsonify({'error': 'Character not found'}), 404

# CRUD operations for Material model
@app.route('/materials', methods=['GET'])
def get_materials():
    materials = Material.query.all()
    return jsonify([material.serialize() for material in materials])

@app.route('/materials/<int:material_id>', methods=['GET'])
def get_material(material_id):
    material = Material.query.get(material_id)
    if material:
        return jsonify(material.serialize())
    else:
        return jsonify({'error': 'Material not found'}), 404

@app.route('/materials', methods=['POST'])
def create_material():
    data = request.json
    name = data.get('name')
    description = data.get('description')
    world_id = data.get('world_id')
    if name and world_id:
        new_material = Material(name=name, description=description, world_id=world_id)
        db.session.add(new_material)
        db.session.commit()
        return jsonify(new_material.serialize()), 201
    else:
        return jsonify({'error': 'Missing data'}), 400

@app.route('/materials/<int:material_id>', methods=['PUT'])
def update_material(material_id):
    material = Material.query.get(material_id)
    if material:
        data = request.json
        material.name = data.get('name', material.name)
        material.description = data.get('description', material.description)
        material.world_id = data.get('world_id', material.world_id)
        db.session.commit()
        return jsonify(material.serialize()), 200
    else:
        return jsonify({'error': 'Material not found'}), 404

@app.route('/materials/<int:material_id>', methods=['DELETE'])
def delete_material(material_id):
    material = Material.query.get(material_id)
    if material:
        db.session.delete(material)
        db.session.commit()
        return jsonify({'message': 'Material deleted successfully'}), 200
    else:
        return jsonify({'error': 'Material not found'}), 404


# CRUD operations for Relic model
@app.route('/relics', methods=['GET'])
def get_relics():
    relics = Relic.query.all()
    return jsonify([relic.serialize() for relic in relics])

@app.route('/relics/<int:relic_id>', methods=['GET'])
def get_relic(relic_id):
    relic = Relic.query.get(relic_id)
    if relic:
        return jsonify(relic.serialize())
    else:
        return jsonify({'error': 'Relic not found'}), 404

@app.route('/relics', methods=['POST'])
def create_relic():
    data = request.json
    name = data.get('name')
    description = data.get('description')
    world_id = data.get('world_id')
    if name and world_id:
        new_relic = Relic(name=name, description=description, world_id=world_id)
        db.session.add(new_relic)
        db.session.commit()
        return jsonify(new_relic.serialize()), 201
    else:
        return jsonify({'error': 'Missing data'}), 400

@app.route('/relics/<int:relic_id>', methods=['PUT'])
def update_relic(relic_id):
    relic = Relic.query.get(relic_id)
    if relic:
        data = request.json
        relic.name = data.get('name', relic.name)
        relic.description = data.get('description', relic.description)
        relic.world_id = data.get('world_id', relic.world_id)
        db.session.commit()
        return jsonify(relic.serialize()), 200
    else:
        return jsonify({'error': 'Relic not found'}), 404

@app.route('/relics/<int:relic_id>', methods=['DELETE'])
def delete_relic(relic_id):
    relic = Relic.query.get(relic_id)
    if relic:
        db.session.delete(relic)
        db.session.commit()
        return jsonify({'message': 'Relic deleted successfully'}), 200
    else:
        return jsonify({'error': 'Relic not found'}), 404



if __name__ == '__main__':
    app.run(debug=True)
