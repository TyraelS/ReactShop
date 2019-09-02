import changeProductCount from './changeProductCount';

describe('Given the changeProductCount action', () => {
  let action;

  describe('when action is called', () => {
    let product;

    beforeEach(() => {
      action = changeProductCount(product);
    });

    it('should have the CHANGE_PRODUCT_COUNT type', () => {
      expect(action.type).toBe('CHANGE_PRODUCT_COUNT');
    });

    describe('and product object is provided', () => {
      beforeAll(() => {
        product = {
          id: 1,
          count: 1
        };
      });

      it('should create payload with the provided product object', () => {
        expect(action.payload.id).toBe(1);
        expect(action.payload.count).toBe(1);
      });

      describe('and product object of a product is not provided', () => {
        beforeAll(() => {
          product = null;
        });

        it('should create payload without provided product object', () => {
          expect(action.payload).toBeNull();
        });
      });
    });
  });
});
