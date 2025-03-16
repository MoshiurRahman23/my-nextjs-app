import React from "react";
import { Card } from "antd";
import Image from "next/image";
import { Button } from "antd";

const CardPage = ({ product }) => {
  //   console.log(food);
  const { name, description, price, images } = product;
  return (
    <Card style={{ width: 300 }} hoverable>
      {/* Ensure Image URL exists */}
      {images?.length > 0 && (
        <Image
          src={images[0].secure_url}
          height={200}
          width={300}
          alt={name}
          className="rounded-md object-cover"
        />
      )}

      <p className="text-orange-400 font-bold mt-2">{name}</p>
      <p className="text-gray-600">{description}</p>

      <div className="flex justify-between items-center mt-4">
        <p className="text-blue-700 font-bold">Price: ${price}</p>
        <Button type="primary">Buy Now</Button>
      </div>
    </Card>
  );
};

export default CardPage;
