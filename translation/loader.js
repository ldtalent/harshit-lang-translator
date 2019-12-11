import * as tf from '@tensorflow/tfjs';
import * as ui from './ui';

/**
 * Test whether a given URL is retrievable.
 */
export async function urlExists(url) {
  ui.status('Testing url ' + url);
  try {
    const response = await fetch(url, {method: 'HEAD'});
    return response.ok;
  } catch (err) {
    return false;
  }
}

/**
 * Load pretrained model stored at a remote URL.
 *
 * @return An instance of `tf.Model` with model topology and weights loaded.
 */
export async function loadHostedPretrainedModel(url) {
  ui.status('Loading pretrained model from ' + url);
  try {
    const model = await tf.loadLayersModel(url);
    ui.status('Done loading pretrained model.');
    // We can't load a model twice due to
    // https://github.com/tensorflow/tfjs/issues/34
    // Therefore we remove the load buttons to avoid user confusion.
    ui.disableLoadModelButtons();
    return model;
  } catch (err) {
    console.error(err);
    ui.status('Loading pretrained model failed.');
  }
}

/**
 * Load metadata file stored at a remote URL.
 *
 * @return An object containing metadata as key-value pairs.
 */
export async function loadHostedMetadata(url) {
  ui.status('Loading metadata from ' + url);
  try {
    const metadataJson = await fetch(url);
    const metadata = await metadataJson.json();
    ui.status('Done loading metadata.');
    return metadata;
  } catch (err) {
    console.error(err);
    ui.status('Loading metadata failed.');
  }
}
