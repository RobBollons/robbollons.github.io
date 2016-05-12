'use strict';

require(['ramda', 'jquery'], function (_, $) {
  var whiskeyData = $.getJSON('./data.json', callback),
      getTotalWhiskeyPrice = function (data) {
        var total = 0;
        data.whiskey.each(function (item) {
          total = total + item.price;
        });
        return total;
      };

  console.log(getTotalWhiskeyPrice(whiskeyData));
});

require(['ramda', 'jquery'], function (_, $) {

  const Impure = {
          getJSON: _.curry(function (callback, url) {
            $.getJSON(url, callback)
          })
        },

        getWhiskey           = _.prop('whiskey'),
        getPrices            = _.compose(_.map, _.prop('price')),
        getTotalWhiskeyPrice = _.compose(_.sum, getPrice, getWhiskey),

        app = Impure.getJSON(getTotalWhiskeyPrice);

  console.log(app('./data.json'));
});
