import Title from '../Title';
const brands = [
  { name: 'Adidas', img: '/public/img/addidas.png' },
  { name: 'Everlast', img: '/public/img/boxBrand.png' },
  { name: 'Other', img: '/public/img/other.png' },
  { name: 'RDX', img: '/public/img/rdx.png' },
];
function Brandes() {
  return (
    <div className="bg-white py-10 text-center">
      <Title>برندهای ویژه</Title>
      <div className="my-15 flex flex-wrap items-center justify-center gap-10">
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
