module.exports = () => ({
  products: new Array(10).fill().map((e, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    text: `text for product ${i + 1}`,
    price: i + 1,
    image: 'http://www.randomkittengenerator.com/cats/rotator.php'
  }))
});
