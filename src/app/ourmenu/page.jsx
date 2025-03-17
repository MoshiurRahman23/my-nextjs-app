import CardPage from "@/components/Card/Card";

const MenuPage = async () => {
  const res = await fetch("http://localhost:5000/foods", {
    next: {
      revalidate: 5,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch foods");
  }
  const foods = await res.json();
  return (
    <div>
      <h1 className="text-center text-2xl">Our Menus</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 my-2 justify-items-center mx-auto">
        {foods.map((food) => (
          <CardPage key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
