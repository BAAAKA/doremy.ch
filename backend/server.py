from flask import Flask, request, jsonify
from flask_cors import CORS 
from utils import save_to_file, ip_to_location

app = Flask(__name__)
CORS(app, origins="*")

@app.route('/visitor_stop', methods=['GET', 'POST']) 
def api():
    client_ip = request.headers.get('X-Forwarded-For', request.remote_addr)
    data = request.get_json()
    message = data.get('message', 'No message received')

    print(f"Client IP: {client_ip}, message from client: {message}")
    save_to_file([client_ip]+ip_to_location(client_ip))
    return jsonify({'reply': f'Thanks for letting me know, sleep well'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port = 22337)
