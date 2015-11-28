var expect = chai.expect;

describe('ShoppingList', function () {

  var shoppingList = new ShoppingList();

  it('should be a function', function () {
    expect(ShoppingList).to.be.a('function');
  });

  it('should have a property named "items"', function () {
    expect(shoppingList).to.have.property('items');
  });

  it('"items" should be initialized as an empty array', function() {
    expect(shoppingList.items).to.deep.equal([]);
  });

});

describe('.addItem', function () {

  var shoppingList = new ShoppingList();
  var apple = new ShoppingListItem('apple', 'red and shiny');
  var orange = 'orange';

  it ('should be a function', function () {
    expect(shoppingList.addItem).to.be.a('function');
  });

  shoppingList.addItem(apple);
  shoppingList.addItem(orange);

  it ('shopping list should contain the item passed', function () {
    expect(shoppingList.items).to.contain(apple);
  });

  it('shopping list should not contain item that is not a ShoppingListItem', function () {
    expect(shoppingList.items).to.not.contain('orange');
  });

  it('item passed must be a ShoppingListItem', function () {
    expect(apple).to.be.instanceof(ShoppingListItem);
  });

  it('should throw error if parameter is not a ShoppingListItem', function () {
    expect(orange).to.not.be.instanceof(ShoppingListItem);
    expect(shoppingList.addItem(orange).to.throw(Error));
  });

});

describe('.removeItem', function () {

  var shoppingList = new ShoppingList();
  var apple = new ShoppingListItem('apple', 'red and shiny');
  var banana = new ShoppingListItem('banana', 'yellow and mushy');
  var peach = new ShoppingListItem('peach', 'pink and fuzzy');
  var orange = 'orange';
  shoppingList.addItem(apple);
  shoppingList.addItem(banana);
  shoppingList.addItem(peach);
  shoppingList.addItem(orange);
  shoppingList.removeItem(banana);

  it('should be a function', function () {
    expect(shoppingList.removeItem).to.be.a('function');
  });

  it('should only accept ShoppingListItems as parameter', function () {
    expect(banana).to.be.instanceof(ShoppingListItem);
  });

  it('should remove item from ShoppingList', function () {
    expect(shoppingList.items.length).to.be(2);
  });

  shoppingList.removeItem();

  it('should remove last item if no parameter is given', function () {
    expect(shoppingList.items.length).to.be(1);
    expect(shoppingList.items).to.not.contain(peach);
  });

  shoppingList.push(orange);

  it('should throw error if parameter is not a ShoppingListItem', function () {
    expect(shoppingList.removeItem(orange)).to.throw(Error);
  });

});