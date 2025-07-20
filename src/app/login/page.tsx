import Register from "@/Components/Auth/register";

const Page = () => {
  return (
    <>
      <div className="mt-10">
        <h2 className="text-center font-semibold text-2xl">
          Product Management Panel
        </h2>
        <p className="text-center">
          A simple and powerful way to manage your product catalog.
        </p>
      </div>
      <Register type={"login"} />
    </>
  );
};

export default Page;
