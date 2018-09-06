'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 50;
var GRAPH_HEIGHT = 150;
var TEXT_HEIGHT = 90;
var FONT_STYLE = '16px PT Mono';
var FONT_COLOR = '#000';


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT, color);
};

var findMaxArrelement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var createHistogram = function (ctx, names, times) {
  var maxTime = findMaxArrelement(times);

  for (var i = 0; i < names.length; i++) {
    var blue = Math.floor(Math.random() * 255);
    var randomBlue = 'rgba(' + 0 + ',' + 0 + ',' + blue + ')';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randomBlue;
    }

    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, TEXT_HEIGHT + GRAPH_HEIGHT - GRAPH_HEIGHT * times[i] / maxTime, BAR_WIDTH, GRAPH_HEIGHT * times[i] / maxTime);
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GRAPH_HEIGHT + TEXT_HEIGHT + GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, TEXT_HEIGHT + GRAPH_HEIGHT - GRAPH_HEIGHT * times[i] / maxTime - GAP);
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = FONT_COLOR;
  ctx.font = FONT_STYLE;
  ctx.fillText('Ура вы победили!', 140, 40);
  ctx.fillText('Список результатов:', 140, 60);

  createHistogram(ctx, names, times);
};
