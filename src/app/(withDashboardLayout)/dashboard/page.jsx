import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          {/* <h1 className="text-4xl text-center mt-10">
            Welcome - {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged-in user Email - {session?.user?.email}
          </h1>
          <Image
            className="mx-auto rounded-full mt-5"
            src={
              session?.user?.image ||
              "https://www.freepik.com/free-photos-vectors/avatar"
            }
            width={100}
            height={100}
            alt="picture"
          /> */}
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <Image
                src={
                  session?.user?.image ||
                  "https://www.freepik.com/free-photos-vectors/avatar"
                }
                width={500}
                height={500}
                alt="picture"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">{session?.user?.name}</h1>
                <p className="py-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt soluta molestias ullam sit. Doloremque quos molestias
                  repellendus dolorum, sint consequuntur.
                  <span className="text-2xl text-blue-700">
                    {session?.user?.email}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
