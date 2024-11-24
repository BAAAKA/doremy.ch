from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api', methods=['POST'])
def api():
    # Check for the 'X-Forwarded-For' header if behind a proxy
    client_ip = request.headers.get('X-Forwarded-For', request.remote_addr)
    
    # Print the client's IP address to the console
    print(f"Client IP: {client_ip}")
    
    # Get data from the POST request
    data = request.get_json()
    message = data.get('message', 'No message received')
    
    # Respond with the message and client's IP address
    return jsonify({
        'reply': f'Python server received: {message}',
        'client_ip': client_ip
    })

if __name__ == '__main__':
    app.run(debug=True)
