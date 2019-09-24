'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var GAP = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var TEXT_HEIGHT = 20;
var barHeight = CLOUD_HEIGHT - BAR_GAP - TEXT_HEIGHT - BAR_GAP;
var FONT_SIZE = '16px';
var FONT_FAMILY = 'PT Mono';
var TEXT_BASELINE = 'hanging';
var FONT_COLOR = '#000';
var PLAYER_COLOR = 'rgba(255, 0, 0, 1)';
var winnerText = ['Ура вы победили!', 'Список результатов: '];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  function textGenerate(textArr) {
    ctx.font = FONT_SIZE + FONT_FAMILY;
    ctx.textBaseline = TEXT_BASELINE;
    ctx.fillStyle = FONT_COLOR;
    for (var i = 0; i < textArr.length; i++) {
      ctx.fillText(textArr[i], CLOUD_X + GAP, CLOUD_Y + (i + 1) * TEXT_HEIGHT);
    }
  }
  textGenerate(winnerText);

  var renderBar = function (x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, BAR_WIDTH, (-barHeight * times[i]) / getMaxElement(times));
  };

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = FONT_COLOR;
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT * 2 + (-barHeight * times[i]) / getMaxElement(times));
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - TEXT_HEIGHT);


    var randomColor = function () {
      return players[i] === 'Вы' ? PLAYER_COLOR : 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 40%)';
    };

    renderBar(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - TEXT_HEIGHT - GAP, randomColor());
  }
};

