# Sequence-to-Sequence English-French Translation using Nodejs and Tensorflowjs

This code shows how to perform sequence-to-sequence prediction using the Layers
API of TensorFlow.js.

It demonstrates loading a pretrained model hosted at a URL, using
`tf.loadLayersModel()`

## Training Overview

The training data was 149,861 English-French sentence pairs available from [http://www.manythings.org/anki](http://www.manythings.org/anki).

The model was trained in Node.js with Tensorflow.js, which the model code is converted from Python to TypeScript by @[huan](https://github.com/huan) based on the [translation.py](https://github.com/tensorflow/tfjs-examples/blob/master/translation/python/translation.py) example.


## LAUNCHING THE APP

To launch the demo, do

```sh
yarn
yarn watch
```


## Credits

I have learnt alot from the tensorflowjs examples and have followed their guide to produce this code.
