import React from "react";

const HomePage = () => {
  const categories = [{ name: "New Arrival" }, { name: "Top Sale" }];
  return (
    <main className={"container"}>
      <section style={{ height: 500 }}>
        <h1>HERO TITLE</h1>
        <div>CONTENT</div>
      </section>
      {categories.map((category) => (
        <section style={{ height: 500 }}>
          <h2>{category.name}</h2>
          <div>Content</div>
        </section>
      ))}
    </main>
  );
};

export default HomePage;
