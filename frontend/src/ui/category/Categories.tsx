import Title from "../Title";
import CategoriesItem from "./CategoriesItem";

function Categories() {
  return (
    <section className="container mx-auto my-24">
      <div className="flex flex-col items-center gap-6">
        <div className="mb-6 space-y-3 text-center">
      <Title>برخی دسته بندی محصولات </Title>
        </div>
        <div className="flex flex-row space-x-7">
          <CategoriesItem pic="/public/img/box.png" />
          <CategoriesItem pic="/public/img/balls.png" />
          <CategoriesItem pic="/public/img/chess.png" />
          <CategoriesItem pic="/public/img/finish-flag.png" />
          <CategoriesItem pic="/public/img/glaider.png" />
        </div>
      </div>
    </section>
  );
}

export default Categories;
