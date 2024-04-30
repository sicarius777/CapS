from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from openai import OpenAI
openai = OpenAI()
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chatgpt.db'
db = SQLAlchemy(app)

# Define Response model
class Response(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    prompt = db.Column(db.String(255))
    response = db.Column(db.String(255))

# Create operation
@app.route('/create', methods=['POST'])
def create_response():
    prompt = request.json.get('prompt')
    # Send prompt to ChatGPT model and get response (simulate for now)
    response_text = f"Generated response for prompt: {prompt}"
    # Store prompt and response in database
    response = Response(prompt=prompt, response=response_text)
    db.session.add(response)
    db.session.commit()
    return jsonify({'message': 'Response created successfully', 'response': response_text}), 201

# Read operation
@app.route('/responses', methods=['GET'])
def get_responses():
    responses = Response.query.all()
    response_data = [{'id': response.id, 'prompt': response.prompt, 'response': response.response} for response in responses]
    return jsonify(response_data)

# Update operation
@app.route('/responses/<int:response_id>', methods=['PUT'])
def update_response(response_id):
    response = Response.query.get_or_404(response_id)
    prompt = request.json.get('prompt')
    response_text = request.json.get('response')
    response.prompt = prompt
    response.response = response_text
    db.session.commit()
    return jsonify({'message': 'Response updated successfully'}), 200

# Delete operation
@app.route('/responses/<int:response_id>', methods=['DELETE'])
def delete_response(response_id):
    response = Response.query.get_or_404(response_id)
    db.session.delete(response)
    db.session.commit()
    return jsonify({'message': 'Response deleted successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)

# Eh you know costing money just to make requests and have them maybe mess up because 
# i dont know everything im doing is no good so ill get it all set up but i will wait on paying