import Cart from "../../components/Cart/Cart.jsx";

export default {
  title: "Pages/Cart",
  component: Cart,
};

export const WithItems = {
  parameters: {
    storybook: {
      initialState: {
        cart: {
          items: [
            {
              id: 1,
              title: "Test product",
              price: 100,
              quantity: 2,
              size: "M",
              color: "black",
            },
          ],
          deliveryFee: 15,
          promoCodeDiscount: 0,
        },
      },
      initialEntries: ["/cart"],
    },
  },
};

export const Empty = {
  parameters: {
    storybook: {
      initialState: {
        cart: {
          items: [],
          totalPrice: 0,
        },
      },
    },
  },
};
