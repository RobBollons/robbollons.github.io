'use strict';

require([
    'ramda',
    'jquery'
  ],
  function (_, $) {
let Impure = {
  getJSON: _.curry(function(callback, url) {
    $.getJSON(url, callback)
  }),
};
