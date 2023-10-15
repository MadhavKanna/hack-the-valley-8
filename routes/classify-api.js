const express = require('express');
const tf = require('@tensorflow/tfjs-node');
const classifyApiRouter = express.Router();
const predictionMap = {
    0: 'Organic Waste', 1: 'Recyclable'
}
classifyApiRouter.post("/classify", [], async function (req, res) {
    const model = await tf.node.loadSavedModel('final_model.h5', [['server']], ['__saved_model_init_op', 'serving_default']);
    const output = model.predict(req.data);
    res.send(predictionMap[output]);
});


module.exports = { classifyApiRouter }; 