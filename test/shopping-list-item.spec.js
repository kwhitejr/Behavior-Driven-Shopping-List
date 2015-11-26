var expect = chai.expect;

describe('ShoppingListItem', function () {

  var shoppingListItem = new ShoppingListItem();

  it('should be a function', function () {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have a property "name"', function () {
    expect(shoppingListItem).to.have.property('name');
  });

  it('should have a property "description"', function () {
    expect(shoppingListItem).to.have.property('description');
  });

  it('should have a property "isDone"', function () {
    expect(shoppingListItem).to.have.property('isDone');
  });

});

describe('.check', function() {
  it('should be a function', function () {
    var shoppingListItem = new ShoppingListItem();
    expect(shoppingListItem.check).to.be.a('function');
  });

  it('should set isDone variable to true', function() {
    var shoppingListItem = new ShoppingListItem();
    shoppingListItem.check();
    expect(shoppingListItem.isDone).to.equal(true);
  });
});

describe('.uncheck', function() {
  it('should be a function', function () {
    var shoppingListItem = new ShoppingListItem();
    expect(shoppingListItem.uncheck).to.be.a('function');
  });

  it('should set isDone variable to false', function() {
    var shoppingListItem = new ShoppingListItem();
    shoppingListItem.uncheck();
    expect(shoppingListItem.isDone).to.equal(false);
  });
});

describe('.render', function() {
  it('should be a function', function () {
    var shoppingListItem = new ShoppingListItem();
    expect(shoppingListItem.render).to.be.a('function');
  });

});