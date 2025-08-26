import Title from '../Title';
const brands = [
  { name: 'Adidas', img: '/img/addidas.png' },
  { name: 'Everlast', img: '/img/boxBrand.png' },
  { name: 'Other', img: '/img/other.png' },
  { name: 'RDX', img: '/img/rdx.png' },
];
function Brandes() {
  return (
    <div className="fade-in my-10 text-center sm:container sm:mx-auto w-full">
      <Title>برندهای ویژه</Title>
      <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-5">
        {brands.map((brand) => (
          <div key={brand.name} className="flex items-center justify-center">
            <img src={brand.img} alt={brand.name} className="max-h-full max-w-full object-fill" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brandes;
