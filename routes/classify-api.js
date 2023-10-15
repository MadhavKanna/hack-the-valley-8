const express = require('express');
const tf = require('@tensorflow/tfjs-node');
const classifyApiRouter = express.Router();
const predictionMap = {
    0: 'Not Waste', 1: 'Organic Waste', 2: 'Recyclable Waste', 3: 'Electronic Waste', 4: 'Regular Waste'
}
classifyApiRouter.post("/classify", [], async function (req, res) {
    const model = await tf.loadLayersModel('../model.json');
    const inputElement = req.params.data;
    const tensor = tf.browser.fromPixels(inputElement)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .expandDims();

    // Use ResNet50 preprocessing (mean subtraction)
    const offset = tf.scalar(127.5);
    const processedTensor = tensor.sub(offset).div(offset);

    // Make prediction
    const predictions = model.predict(processedTensor);
    res.send({
        class: predictionMap[predictions]
    })
});


module.exports = { classifyApiRouter }; 