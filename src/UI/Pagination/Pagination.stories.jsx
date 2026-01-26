import Pagination from "./Pagination.jsx";

export default {
  title: "UI/Pagination",
  component: Pagination,
};

export const FirstPage = {
  args: {
    page: 1,
    limit: 9,
    total: 50,
  },
};

export const LastPage = {
  args: {
    page: 6,
    limit: 9,
    total: 50,
  },
};
