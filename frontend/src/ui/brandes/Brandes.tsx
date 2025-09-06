import Title from '../Title';
const brands = [
  { name: 'Adidas', img: '/img/addidas.png' },
  { name: 'Everlast', img: '/img/boxBrand.png' },
  { name: 'Other', img: '/img/other.png' },
  { name: 'RDX', img: '/img/rdx.png' },
];
function Brandes() {
  return (
    <div className="fade-in my-10 w-full text-center sm:container sm:mx-auto">
      <Title>برندهای ویژه</Title>
      <div className="flex flex-wrap mt-5 items-center justify-center gap-5 sm:gap-5">
        {brands.map((brand) => (
          <div key={brand.name} className="flex items-center justify-center">
            <div className="flex h-2/3 w-2/3 items-center justify-center">
              <img src={brand.img} alt={brand.name} className="h-full w-full object-contain" />
            </div>{' '}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brandes;
