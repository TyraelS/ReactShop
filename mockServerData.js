module.exports = () => ({
  products: new Array(10).fill().map((e, i) => ({ id: i + 1, name: `Product ${i + 1}, price: i+1` }))
});
