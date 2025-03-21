import React from "react";
import { Card } from "antd";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";

const CardPage = ({ food }) => {
  //   console.log(food);
  const { title, description, price, image } = food;
  return (
    <Card style={{ width: 300 }} hoverable>
      {/* Ensure Image URL exists */}
      {/* {images?.length > 0 && (
        <Image
          src={images[0].secure_url}
          height={200}
          width={300}
          alt={name}
          className="rounded-md object-cover"
        />
      )} */}
      <Image
        src={image}
        height={200}
        width={300}
        alt="PicnName"
        className="rounded-md object-cover"
      />
      <p className="text-orange-400 font-bold mt-2">{title}</p>
      <p className="text-gray-600">{description}</p>

      <div className="w-full items-center mt-4">
        {/* <p className="text-blue-700 font-bold">Price: ${price}</p> */}
        <Link href={"/blogs/id"}>
          <Button type="primary">View Details</Button>
        </Link>
      </div>
    </Card>
  );
};

export default CardPage;
