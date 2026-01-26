import CartPage from "./CartPage";
import { StorybookProviders } from "../../../.storybook/StoryBookProviders.jsx";

export default {
  title: "Pages/Cart",
  component: CartPage,
};

export const EmptyCart = {
  decorators: [
    (Story) => (
      <StorybookProviders
        preloadedState={{
          cart: {
            items: [],
            deliveryFee: 15,
            promoCodeDiscount: 0,
          },
        }}
      >
        <Story />
      </StorybookProviders>
    ),
  ],
};

export const CartWithProducts = {
  decorators: [
    (Story) => (
      <StorybookProviders
        preloadedState={{
          cart: {
            items: [
              {
                id: 1,
                name: "Black T-Shirt",
                price: 80,
                basePrice: 100,
                quantity: 2,
                color: "black",
                size: "M",
              },
              {
                id: 2,
                name: "Blue Jeans",
                price: 230,
                basePrice: 250,
                quantity: 5,
                color: "red",
                size: "L",
              },
            ],
            deliveryFee: 15,
            promoCodeDiscount: 10,
          },
        }}
      >
        <Story />
      </StorybookProviders>
    ),
  ],
};
