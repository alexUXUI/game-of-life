var game = require('./test/game.js').gameOfLife;
var expect = require("chai").expect;
var logic = require('./test/game.js').logic

describe('This is the game of Life Test Suite', function(){
  it("should return a 2d array", function(){
    var gameBoard = [
      [1,0,1,0,0],
      [1,0,1,0,0],
      [1,0,1,0,0],
      [1,0,1,0,0],
      [1,0,1,0,0],
    ];
    expect(Array.isArray(gameBoard)).to.equal(true);
    gameBoard.forEach(function(item) {
      expect(Array.isArray(item)).to.equal(true);
    })
  });

  it("any cell with less than two dies", function(){
    expect(logic(1,0)).to.equal(0)
  })
  it("any cell with two stays alive", function(){
    expect(logic(2,1)).to.equal(1)
  })
  it("any dead cell with three lives comes to Life", function(){
    expect(logic(3,0)).to.equal(1)
  })

  it("should return this very board", function(){
    var gameBoard = [
      [1,0,1,0,0],
      [1,0,1,0,0],
      [1,0,1,0,0],
      [1,0,1,0,0],
      [1,0,1,0,0],
    ];
    var result = [
      [0,0,0,0,0],
      [1,0,1,1,0],
      [1,0,1,1,0],
      [1,0,1,1,0],
      [0,0,0,0,0],
    ]
  expect(game(gameBoard)).to.deep.equal(result)
  })

});
