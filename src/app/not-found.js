import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto text-center">
        <Image
          src="https://freefrontend.com/assets/img/html-css-404-page-templates/Pure-CSS-404-Error-Page.gif"
          width={1000}
          height={500}
          alt="not found page"
          className="w-full"
        />
        {/* <h2>Not Found</h2>
      <p>Could not find requested resource</p> */}
        <Link className="py-8" href="/">
          <Button type="primary" ghost>
            Primary
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
