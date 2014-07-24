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
goog.provide('i18n.input.chrome.inputview.Css');


/**
 * The css used for input view keyboard.
 *
 * @enum {string}
 */
i18n.input.chrome.inputview.Css = {
  A11Y: goog.getCssName('inputview-a11y'),
  ALTDATA_COVER: goog.getCssName('inputview-altdata-cover'),
  ALTDATA_KEY: goog.getCssName('inputview-altdata-key'),
  ALTDATA_SEPARATOR: goog.getCssName('inputview-altdata-separator'),
  ALTDATA_VIEW: goog.getCssName('inputview-altdata-view'),
  ALTGR_CONTENT: goog.getCssName('inputview-ac'),
  ARROW_KEY: goog.getCssName('inputview-arrow-key'),
  BACKSPACE_ICON: goog.getCssName('inputview-backspace-icon'),
  CANDIDATE: goog.getCssName('inputview-candidate'),
  CANDIDATES_LINE: goog.getCssName('inputview-candidates-line'),
  CANDIDATES_TOP_LINE: goog.getCssName('inputview-candidates-top-line'),
  CANDIDATE_BUTTON: goog.getCssName('inputview-candidate-button'),
  CANDIDATE_DEFAULT: goog.getCssName('inputview-candidate-default'),
  CANDIDATE_HIGHLIGHT: goog.getCssName('inputview-candidate-highlight'),
  CANDIDATE_INTER_CONTAINER: goog.getCssName('inputview-candiate-ic'),
  CANDIDATE_SEPARATOR: goog.getCssName('inputview-candidate-separator'),
  CANDIDATE_VIEW: goog.getCssName('inputview-candidate-view'),
  CANVAS: goog.getCssName('inputview-canvas'),
  CANVAS_LEFT_COLUMN: goog.getCssName('inputview-canvas-left-column'),
  CANVAS_RIGHT_COLUMN: goog.getCssName('inputview-canvas-right-column'),
  CANVAS_VIEW: goog.getCssName('inputview-canvasview'),
  CAPSLOCK_DOT: goog.getCssName('inputview-capslock-dot'),
  CAPSLOCK_DOT_HIGHLIGHT: goog.getCssName('inputview-capslock-dot-highlight'),
  CHARACTER: goog.getCssName('inputview-character'),
  CHARACTER_HIGHLIGHT: goog.getCssName('inputview-ch'),
  COMPACT_KEY: goog.getCssName('inputview-compact-key'),
  COMPACT_SWITCHER: goog.getCssName('inputview-compact-switcher'),
  CONTAINER: goog.getCssName('inputview-container'),
  DEFAULT_CONTENT: goog.getCssName('inputview-dc'),
  DIGIT_CHARACTER: goog.getCssName('inputview-digit-character'),
  DOWN_KEY: goog.getCssName('inputview-down-key'),
  ELEMENT_HIGHLIGHT: goog.getCssName('inputview-element-highlight'),
  ENTER_ICON: goog.getCssName('inputview-enter-icon'),
  EXPAND_CANDIDATES_ICON: goog.getCssName('inputview-expand-candidates-icon'),
  FONT: goog.getCssName('inputview-font'),
  GLOBE_ICON: goog.getCssName('inputview-globe-icon'),
  HANDWRITING: goog.getCssName('inputview-handwriting'),
  HANDWRITING_BACK: goog.getCssName('inputview-handwriting-back'),
  HANDWRITING_LAYOUT: goog.getCssName('inputview-handwriting-layout'),
  HANDWRITING_NETWORK_ERROR:
      goog.getCssName('inputview-handwriting-network-error'),
  HANDWRITING_SWITCHER: goog.getCssName('inputview-handwriting-switcher'),
  HANDWRITING_PRIVACY_INFO:
      goog.getCssName('inputview-handwriting-privacy-info'),
  HANDWRITING_PRIVACY_INFO_HIDDEN:
      goog.getCssName('inputview-handwriting-privacy-info-hidden'),
  HIDE_KEYBOARD_ICON: goog.getCssName('inputview-hide-keyboard-icon'),
  HINT_TEXT: goog.getCssName('inputview-hint-text'),
  HOLD: goog.getCssName('inputview-hold'),
  IME_LIST_CONTAINER: goog.getCssName('inputview-ime-list-container'),
  INLINE_DIV: goog.getCssName('inputview-inline-div'),
  JP_IME_SWITCH: goog.getCssName('inputview-jp-ime-switch'),
  KEY_HOLD: goog.getCssName('inputview-key-hold'),
  LAYOUT_VIEW: goog.getCssName('inputview-layoutview'),
  LEFT_KEY: goog.getCssName('inputview-left-key'),
  LINEAR_LAYOUT: goog.getCssName('inputview-linear'),
  MENU_FOOTER: goog.getCssName('inputview-menu-footer'),
  MENU_FOOTER_HANDWRITING_BUTTON:
      goog.getCssName('inputview-menu-footer-handwriting-button'),
  MENU_FOOTER_ITEM: goog.getCssName('inputview-menu-footer-item'),
  MENU_FOOTER_SETTING_BUTTON:
      goog.getCssName('inputview-menu-footer-setting-button'),
  MENU_LIST_INDICATOR: goog.getCssName('inputview-menu-list-indicator'),
  MENU_LIST_INDICATOR_NAME:
      goog.getCssName('inputview-menu-list-indicator-name'),
  MENU_LIST_ITEM: goog.getCssName('inputview-menu-list-item'),
  MENU_LIST_NAME: goog.getCssName('inputview-menu-list-name'),
  MENU_VIEW: goog.getCssName('inputview-menu-view'),
  MODIFIER: goog.getCssName('inputview-modifier'),
  MODIFIER_ON: goog.getCssName('inputview-modifier-on'),
  MODIFIER_STATE_ICON: goog.getCssName('inputview-modifier-state-icon'),
  PAGE_DOWN_ICON: goog.getCssName('inputview-page-down-icon'),
  PAGE_UP_ICON: goog.getCssName('inputview-page-up-icon'),
  REGULAR_SWITCHER: goog.getCssName('inputview-regular-switcher'),
  RIGHT_KEY: goog.getCssName('inputview-right-key'),
  SHIFT_ICON: goog.getCssName('inputview-shift-icon'),
  SHRINK_CANDIDATES_ICON: goog.getCssName('inputview-shrink-candidates-icon'),
  SOFT_KEY: goog.getCssName('inputview-sk'),
  SOFT_KEY_VIEW: goog.getCssName('inputview-skv'),
  SPACE_ICON: goog.getCssName('inputview-space-icon'),
  SPECIAL_KEY_BG: goog.getCssName('inputview-special-key-bg'),
  SPECIAL_KEY_HIGHLIGHT: goog.getCssName('inputview-special-key-highlight'),
  SPECIAL_KEY_NAME: goog.getCssName('inputview-special-key-name'),
  TABLE_CELL: goog.getCssName('inputview-table-cell'),
  TAB_ICON: goog.getCssName('inputview-tab-icon'),
  THREE_CANDIDATES: goog.getCssName('inputview-three-candidates'),
  TITLE: goog.getCssName('inputview-title'),
  TITLE_BAR: goog.getCssName('inputview-title-bar'),
  UP_KEY: goog.getCssName('inputview-up-key'),
  VERTICAL_LAYOUT: goog.getCssName('inputview-vertical'),
  VIEW: goog.getCssName('inputview-view'),
  WRAPPER: goog.getCssName('inputview-wrapper')
};

