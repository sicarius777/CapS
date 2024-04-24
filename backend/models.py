# models.py

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    worlds = db.relationship('World', backref='user', lazy=True)

class World(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    notes = db.relationship('Note', backref='world', lazy=True)
    inspirations = db.relationship('Inspiration', backref='world', lazy=True)
    maps = db.relationship('Map', backref='world', lazy=True)
    flora = db.relationship('Flora', backref='world', lazy=True)
    fauna = db.relationship('Fauna', backref='world', lazy=True)
    locations = db.relationship('Location', backref='world', lazy=True)
    weather = db.relationship('Weather', backref='world', lazy=True)
    governments = db.relationship('Government', backref='world', lazy=True)
    characters = db.relationship('Character', backref='world', lazy=True)
    materials = db.relationship('Material', backref='world', lazy=True)
    relics = db.relationship('Relic', backref='world', lazy=True)

class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    world_id = db.Column(db.Integer, db.ForeignKey('world.id'), nullable=False)

class Inspiration(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    world_id = db.Column(db.Integer, db.ForeignKey('world.id'), nullable=False)

class Map(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    world_id = db.Column(db.Integer, db.ForeignKey('world.id'), nullable=False)

# Define other categories similarly...
