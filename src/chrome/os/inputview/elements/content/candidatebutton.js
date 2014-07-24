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
goog.provide('i18n.input.chrome.inputview.elements.content.CandidateButton');

goog.require('goog.dom.TagName');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('i18n.input.chrome.inputview.Css');
goog.require('i18n.input.chrome.inputview.elements.Element');



goog.scope(function() {
var ElementType = i18n.input.chrome.inputview.elements.ElementType;
var Css = i18n.input.chrome.inputview.Css;



/**
 * The icon button in the candidate view.
 *
 * @param {string} id .
 * @param {ElementType} type .
 * @param {string} iconCss .
 * @param {string} text .
 * @param {!goog.events.EventTarget=} opt_eventTarget .
 * @constructor
 * @extends {i18n.input.chrome.inputview.elements.Element}
 */
i18n.input.chrome.inputview.elements.content.CandidateButton = function(
    id, type, iconCss, text, opt_eventTarget) {
  goog.base(this, id, type, opt_eventTarget);

  /** @type {string} */
  this.text = text;

  /** @type {string} */
  this.iconCss = iconCss;
};
var CandidateButton = i18n.input.chrome.inputview.elements.content.
    CandidateButton;
goog.inherits(CandidateButton, i18n.input.chrome.inputview.elements.Element);


/** @type {!Element} */
CandidateButton.prototype.tableCell;


/** @override */
CandidateButton.prototype.createDom = function() {
  goog.base(this, 'createDom');

  var dom = this.getDomHelper();
  var elem = this.getElement();
  goog.dom.classlist.addAll(elem, [Css.CANDIDATE_INTER_CONTAINER,
    Css.CANDIDATE_BUTTON]);
  this.tableCell = dom.createDom(goog.dom.TagName.DIV, Css.TABLE_CELL);
  dom.appendChild(elem, this.tableCell);

  var iconElem = dom.createDom(goog.dom.TagName.DIV, Css.INLINE_DIV);
  if (this.iconCss) {
    goog.dom.classlist.add(iconElem, this.iconCss);
  }
  if (this.text) {
    dom.setTextContent(iconElem, this.text);
  }
  dom.appendChild(this.tableCell, iconElem);
};


/** @override */
CandidateButton.prototype.resize = function(width, height) {
  goog.style.setSize(this.tableCell, width, height);

  goog.base(this, 'resize', width, height);
};


});  // goog.scope

