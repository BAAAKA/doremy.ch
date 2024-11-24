from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api', methods=['POST'])
def api():
    data = request.get_json()  # Get the JSON data sent by the client
    message = data.get('message', 'No message received')
    
    # Respond with a simple message
    return jsonify({'reply': f'Python server received: {message}'})

if __name__ == '__main__':
    app.run(debug=True)
