const express = require('express');
const tf = require('@tensorflow/tfjs-node');
const classifyApiRouter = express.Router();
const predictionMap = {
    0: 'Organic Waste', 1: 'Recyclable'
}
classifyApiRouter.post("/classify", [], async function (req, res) {
    // const model = await tf.node.loadSavedModel(, [['server']], ['__saved']);
    // const output = model.predict(input);
    // res.send({
    //     class: predictionMap[predictions]
    // })
    res.send("Organic Waste");
});


module.exports = { classifyApiRouter }; 