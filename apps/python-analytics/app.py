from flask import Flask, jsonify
import datetime

app = Flask(__name__)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        "status": "UP",
        "service": "Transaction-Analytics-Python",
        "timestamp": datetime.datetime.now(datetime.timezone.utc).isoformat()
    }), 200

@app.route('/api/v1/risk-score', methods=['GET'])
def calculate_risk():
    return jsonify({
        "risk_level": "LOW",
        "score": 0.02,
        "evaluation": "Approved"
    }), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)