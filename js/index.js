'use strict';

// アコーディオンの開閉の関数
const accordionToggle = function(e) {
  e.currentTarget.closest(('.js-accordionBox')).classList.toggle('is-open');
}