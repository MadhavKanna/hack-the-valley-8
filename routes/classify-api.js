const express = require('express');
const tf = require('@tensorflow/tfjs-node');
const classifyApiRouter = express.Router();
const predictionMap = {
    0: 'Organic Waste', 1: 'Recyclable'
}
classifyApiRouter.post("/classify", [], async function (req, res) {
    // const modelInfo = await tf.node.getMetaGraphsFromSavedModel('../model.json');
    // console.log(modelInfo);
    // const model = await tf.loadLayersModel('../model.json');

    // res.send({
    //     class: predictionMap[predictions]
    // })
    const response = { data: 'Organic Waste' };
    res.send(JSON.stringify(response));
});


module.exports = { classifyApiRouter }; 