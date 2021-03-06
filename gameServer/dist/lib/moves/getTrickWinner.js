"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTrickWinner = void 0;

var _lodash = require("lodash");

const getSuitPower = function ({
  firstCardSuit,
  trump,
  suit
}) {
  return suit === trump ? 2 : suit === firstCardSuit ? 1 : 0;
};

const getTrickWinner = ({
  trick,
  trump
}) => {
  const firstCardSuit = trick.cards[0].suit;
  const sorted = trick.cards.sort((a, b) => {
    const power_a = getSuitPower({
      firstCardSuit,
      trump,
      suit: a.card.suit
    });
    const power_b = getSuitPower({
      firstCardSuit,
      trump,
      suit: b.card.suit
    });
    return power_a === power_b ? b.card.value - a.card.value : power_b - power_a;
  });
  return sorted[0].position;
};

exports.getTrickWinner = getTrickWinner;