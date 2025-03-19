"use client";
import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const CardDetails = ({ food }) => {
  const { title, description, price, image } = food;
  return (
    <Card style={{ width: 300 }} hoverable>
      {/* {images?.length > 0 && (
        <Image
          src={images[0].secure_url}
          height={200}
          width={300}
          alt="name of image"
          className="rounded-md object-cover"
        />
      )} */}
      <Image
        src={image}
        height={200}
        width={300}
        alt="name of image"
        className="rounded-md object-cover"
      />

      <p className="text-orange-400 font-bold mt-2">{title}</p>
      <p className="text-gray-600">{description}</p>

      <div className="flex justify-between items-center mt-4">
        <p className="text-blue-700 font-bold">Price: ${price}</p>
        <Link href={"/bookings"}>
          {/* //`/blogs/${params}` */}
          <Button type="primary">Buy Now</Button>
        </Link>
      </div>
    </Card>
  );
};

export default CardDetails;
