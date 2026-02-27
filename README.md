# 🛍️ ShopCo — Online Clothing Store

**ShopCo** is a modern and responsive **React + Vite** e-commerce project for
clothing.  
It demonstrates a fully functional frontend store experience — including product
catalog, filters, sorting, search, cart management, and product detail pages —
all powered by mock data and state management via **Redux Toolkit** and **RTK
Query**.

---

## 🚀 Tech Stack

**Core technologies:**

- ⚛️ **React 19** — UI library for building modern web applications
- ⚡ **Vite 7** — fast development and build tool
- 🧠 **Redux Toolkit** — global state management
- 🌐 **RTK Query** — data fetching and API emulation (mocked API)
- 💾 **Redux Persist** — cart state persistence via localStorage
- 🔍 **React Router DOM** — routing between pages
- 💅 **Sass (SCSS Modules)** — component-based styling and responsive design
- 🔔 **React Hot Toast** — lightweight notifications for user actions

**Development tools:**

- ✨ **Prettier** — consistent code style and formatting
- ♻️ **React Refresh** — fast refresh in development

---

## 🧩 Features

### 🏠 Home Page

- Category sections like **New Arrivals**, **Top Selling**, etc.
- Highlights featured products with clean and modern layout

    <img width="746" height="910" alt="image" src="https://github.com/user-attachments/assets/0e684e44-0f16-4a35-904a-3a70437623ff" />

##

### 🛍️ Product Catalog

- Displays full list of mock products
- **Filters** by category, gender, or price range
- **Sorting** (e.g., by price or rating)
- **Search bar** for finding products by name (with real-time match filtering)

<img width="1471" height="912" alt="image" src="https://github.com/user-attachments/assets/b4ef03c9-86aa-411c-b620-1d2faf1e8aad" />
<img width="968" height="316" alt="image" src="https://github.com/user-attachments/assets/61d3af2f-616d-4632-a2c7-aad8e753372b" />

##

### 📄 Product Details

- Individual product page with detailed info (name, price, discount,
  description, rating, etc.)

<img width="1473" height="908" alt="image" src="https://github.com/user-attachments/assets/4e8a518d-3d1f-4ae5-a4dd-9c69ee13932c" />

##

### 🛒 Shopping Cart

- Add / remove products
- Update item quantity
- Persistent state using **localStorage**
- Managed with **Redux Toolkit**

<img width="1535" height="911" alt="image" src="https://github.com/user-attachments/assets/9faad4c5-1777-4130-b48b-4f9436865935" />

##

### ⚙️ Data Handling

- No backend — all data is **mocked**
- **RTK Query** simulates API requests for products

### 📱 Responsive Design

- Fully adaptive layout optimized for desktop, tablet, and mobile screens

---

## 📁 Project Structure (simplified)

src/  
├── 🧩 components/ # Reusable UI blocks
│ # (Header, Footer, Filters, ProductCard, etc.)  
│  
├── 📄 pages/ # Main pages
│ # (Home, Catalog, Details, Cart, NotFound)  
│  
├── 🔄 redux/ # Store, slices, and RTK Query APIs  
│  
├── 🪝 hooks/ # Custom React hooks  
│  
├── 🛣️ routes/ # App routes config  
│  
├── 🎨 styles/ # Global SCSS, variables, mixins  
│  
├── 🔘 UI/ # Small reusable UI components
│ # (Button, Loader, Pagination)  
│  
├── 🛠️ utils/ # Helper functions
│ # (filtering, sorting, etc.)  
│  
├── App.tsx  
├── main.tsx  
└── main.scss

## 🚀 Live Demo

Check out the live version here: https://shop-co-black.vercel.app/
