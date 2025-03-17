import CounterPage from "../Counter/counter";
import CardPage from "../Card/Card";
import { Button } from "antd";
import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/foods", {
    next: {
      revalidate: 5,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const foods = await res.json();
  // console.log(data);
  // throw new Error("Error From Home Page");
  return (
    <div className="text-2xl text-center">
      <h1> Welcome to the server component Page</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 my-2 justify-items-center mx-auto">
        {foods.slice(0, 4).map((food) => (
          <CardPage key={food.id} food={food} />
        ))}
      </div>
      <Link href={"/ourmenu"}>
        <Button ghost>See More</Button>
      </Link>
      <div className="flex items-center justify-center min-h-screen">
        <CounterPage />
      </div>
    </div>
  );
};

export default HomePage;
