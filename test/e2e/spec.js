describe('MainController', function () {

  var tagline = element(by.binding('tagline'));


  beforeEach(function() {
    browser.get('http://localhost:3000/');
  });

  it('retrieve tagline expression', function () {
    expect(tagline.getText()).toEqual('Self destruct sequence activated!')
  });

});

describe('YetiController', function () {

  var tagline = element(by.binding('tagline'));


  beforeEach(function() {
    browser.get('http://localhost:3000/yeti');
  });

  it('retrieve tagline expression', function () {
    expect(tagline.getText()).toEqual('That Wizard came from the Moon!')
  });

});
