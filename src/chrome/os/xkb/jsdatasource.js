// Copyright 2014 The ChromeOS IME Authors. All Rights Reserved.
// limitations under the License.
// See the License for the specific language governing permissions and
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// distributed under the License is distributed on an "AS-IS" BASIS,
// Unless required by applicable law or agreed to in writing, software
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// You may obtain a copy of the License at
// you may not use this file except in compliance with the License.
// Licensed under the Apache License, Version 2.0 (the "License");
//
goog.provide('i18n.input.chrome.xkb.JsDataSource');

goog.require('i18n.input.chrome.DataSource');
goog.require('i18n.input.offline.latin.Decoder');


goog.scope(function() {


/**
 * The js data source.
 *
 * @param {number} numOfCandidate The number of canddiate to fetch.
 * @param {function(string, !Array.<string>, !Array.<number>)} callback .
 * @constructor
 * @extends {i18n.input.chrome.DataSource}
 */
i18n.input.chrome.xkb.JsDataSource = function(numOfCandidate, callback) {
  goog.base(this, numOfCandidate, callback);
};
var JsDataSource = i18n.input.chrome.xkb.JsDataSource;
goog.inherits(JsDataSource, i18n.input.chrome.DataSource);


/** @private {!i18n.input.offline.latin.Decoder} */
JsDataSource.prototype.decoder_;


/** @override */
JsDataSource.prototype.setLanguage = function(language) {
  goog.base(this, 'setLanguage', language);

  this.decoder_ = new i18n.input.offline.latin.Decoder(language + '-t-i0-und',
      this.onLoaded_.bind(this));
};


/**
 * Callback when data source is loaded.
 *
 * @private
 */
JsDataSource.prototype.onLoaded_ = function() {
  this.ready = true;
};


/** @override */
JsDataSource.prototype.sendCompletionRequest = function(query,
    opt_spatialData) {
  var candidates = this.decoder_.decode(query, this.numOfCandidate);
  this.callback(query, candidates || [], []);
};


/** @override */
JsDataSource.prototype.sendPredictionRequest = function(query) {
  this.callback('', [], []);
};

(function() {
  goog.exportSymbol('xkb.DataSource', JsDataSource);
  var dataSourceProto = JsDataSource.prototype;
  goog.exportProperty(dataSourceProto, 'setLanguage', dataSourceProto.
      setLanguage);
  goog.exportProperty(dataSourceProto, 'sendCompletionRequest',
      dataSourceProto.sendCompletionRequest);
  goog.exportProperty(dataSourceProto, 'sendPredictionRequest',
      dataSourceProto.sendPredictionRequest);
  goog.exportProperty(dataSourceProto, 'seCorrectionLevel',
      dataSourceProto.setCorrectionLevel);
  goog.exportProperty(dataSourceProto, 'isReady',
      dataSourceProto.isReady);
}) ();


}); // goog.scope

