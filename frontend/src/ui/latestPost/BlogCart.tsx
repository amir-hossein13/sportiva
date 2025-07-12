interface BlogCartProps {
  title: string;
  desc: string;
  img: string;
}
function BlogCart({title,desc,img}:BlogCartProps) {
    return (
      <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-lg">
        <img src={img} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-black/30 p-4 text-white">
          <h3 className="mb-2 text-lg font-bold">{title}</h3>
          <p className="text-sm leading-5 text-gray-200">{desc}</p>
        </div>
      </div>
    );
}

export default BlogCart
