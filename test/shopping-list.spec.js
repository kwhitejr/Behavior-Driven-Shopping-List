var expect = chai.expect;

describe('ShoppingList', function () {
  it('should be a function', function () {
    expect(ShoppingList).to.be.a('function');
  });

  it('should have a property named "items"', function () {
    expect(ShoppingList).to.have.property('items');
  });
});