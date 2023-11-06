from flask import Flask, request, jsonify
import numpy as np
import cv2
from keras.models import load_model
from flask_cors import CORS

app = Flask(_name_)
CORS(app)

# Load the pre-trained model
model = load_model("../models/poxvisio.h5")

# Define the labels for the binary classification
labels = ["Monkey Pox", "Not Monkey Pox"]

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'})

    image_file = request.files['image']
    
    img = cv2.imdecode(np.frombuffer(image_file.read(), np.uint8), 1)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    img = cv2.resize(img, (256, 256))
    img = np.expand_dims(img, axis=0) / 255.0

    pred = model.predict(img)
    print(pred[0][0])
    
    response_data = {'monkeypox': str(1- pred[0][0]), 'non_monkeypox': str(pred[0][0])}
    
    return jsonify(response_data)

if _name_ == '_main_':
    app.run(debug=True)
