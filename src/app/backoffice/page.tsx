
import PostProducts from "@/Components/Backoffice/postProducts";
import DisplayProducts from "@/Components/Backoffice/DisplayProducts";
import Header from "@/Components/Backoffice/Header";

const Index = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex">
        <PostProducts />
        <DisplayProducts />
      </div>
    </div>
  );
};

export default Index;
