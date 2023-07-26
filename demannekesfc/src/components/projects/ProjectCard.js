export default function ProjectCard({
  title,
  about,
  image,
  alt,
  href,
  icons = [],
}) {
  return (
    <div className="text-grey-500 m-2">
      <div className="drop-shadow-2xl">
        <img
          src={image}
          alt={alt}
          className="object-contain aspect-square rounded-lg "
        />
      </div>
      <div className="pt-4">
        <h1 className="text-2xl pb-4 font-black text-blue-950">{title}</h1>
        <div className="flex items-center space-x-4">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500"
            >
              <Icon className="w-7 h-7 p-1 text-white rounded-xl" />
            </div>
          ))}
        </div>
        <p className=" py-2 text-lg sm:text-xl md:text-xl text-gray-500">{about}</p>
        <a href={href} className="text-base font-semibold text-blue-500 hover:underline hover:scale-110">
          See more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
