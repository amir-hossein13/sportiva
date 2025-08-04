type CategoryItems = {
  pic: string;
};
function CategoriesItem({ pic }: CategoryItems) {
  return (
    <div className="mx-3 mt-6">
      <div className="from-[#a2c4cf to-aqua flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr shadow-lg transition duration-300 hover:scale-105 sm:h-32 sm:w-32">
        <img src={pic} alt="" className="h-20 w-20 object-contain sm:h-24 sm:w-24" />
      </div>
    </div>
  );
}

export default CategoriesItem;
