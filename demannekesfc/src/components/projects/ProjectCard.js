export default function ProjectCard({
  title,
  about,
  image,
  alt,
  href,
  icons = [],
}) {
  return (
    <div className="text-white m-2">
      <div>
        <img
          src={image}
          alt={alt}
          className="object-contain aspect-square rounded-lg"
        />
      </div>
      <div className="pt-4">
        <h3 className="text-xl font-bold pb-4">{title}</h3>
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
        <p className="pb-4 pt-2">{about}</p>
        <a href={href} className="text-blue-500 hover:underline">
          See more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
