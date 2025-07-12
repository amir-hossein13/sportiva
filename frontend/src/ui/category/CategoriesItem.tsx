type CategoryItems = {
  pic: string;
};
function CategoriesItem({ pic }: CategoryItems) {
  return (
    <div className="relative mx-5 mt-10 flex items-center space-x-10">
      <div className="to-aqua flex h-50 w-50 overflow-hidden rounded-full bg-gradient-to-tr from-[#a2c4cf] align-middle">
        <div className="absolute top-[-5rem] left-[-12rem] z-10 h-auto w-[450px]">
          <img className="h-auto w-auto object-cover" src={pic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CategoriesItem;
