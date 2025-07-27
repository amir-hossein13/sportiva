import Title from "../Title";
import CategoriesItem from "./CategoriesItem";

function Categories() {
  return (
    <section className="container mx-auto my-10">
      <div className="flex flex-col items-center gap-6">
        <div className="mb-6 space-y-3 text-center">
      <Title>برخی دسته بندی محصولات </Title>
        </div>
        <div className="flex flex-row flex-wrap space-x-7">
          <CategoriesItem pic="/img/box.png" />
          <CategoriesItem pic="/img/balls.png" />
          <CategoriesItem pic="/img/chess.png" />
          <CategoriesItem pic="/img/finish-flag.png" />
          <CategoriesItem pic="/img/glaider.png" />
        </div>
      </div>
    </section>
  );
}

export default Categories;
