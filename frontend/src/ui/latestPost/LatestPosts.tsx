import BlogCart from './BlogCart';

const posts = [
  {
    title: 'مزایای ورزش برای بدن',
    desc: 'ورزش سبک زندگی و روش‌های روانی را بهبود می‌بخشد، قلب، عضلات و ارگان‌ها را تقویت می‌کند.',
    img: '/public/img/image1.png',
  },
  {
    title: 'مزایای ورزش هوازی',
    desc: 'ورزش هوازی باعث افزایش انرژی، آموزش قلب و کاهش چربی می‌شود.',
    img: '/public/img/image2.png',
  },
  {
    title: 'افراد موفق در بدنسازی',
    desc: 'ورزش نه‌تنها بدن را می‌سازد، بلکه اعتماد به‌نفس و سلامت روان را افزایش می‌دهد.',
    img: '/public/img/image3.png',
  },
  {
    title: 'فیتنس کار برای بانوان',
    desc: 'ورزش‌های قدرتی و مقاومتی سلامت عمومی و فیزیکی بانوان را ارتقا می‌دهد.',
    img: '/public/img/image4.png',
  },
  {
    title: 'تست سلامت ورزشی',
    desc: 'ارزیابی دقیق سطح آمادگی و توانایی جسمانی ورزشکاران پیش از شروع تمرینات.',
    img: '/public/img/image5.png',
  },
  {
    title: 'یوگا و زنان',
    desc: 'یوگا به کاهش استرس، بهبود تمرکز و تقویت سلامت کلی بانوان کمک می‌کند.',
    img: '/public/img/image6.png',
  },
];

function LatestPosts() {
  return (
    <section className="font-farsi px-4 py-10 text-right sm:px-6 lg:px-16">
      <h2 className="mb-10 text-center text-2xl font-extrabold text-[#002A5C] sm:text-3xl">
        آخرین پست ها
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <BlogCart key={index} title={post.title} desc={post.desc} img={post.img} />
        ))}
      </div>
    </section>
  );
}

export default LatestPosts;
