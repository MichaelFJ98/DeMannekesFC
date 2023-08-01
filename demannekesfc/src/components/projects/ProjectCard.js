export default function ProjectCard({ image, alt, link }) {
  const handleClick = () => {
    if (link) window.open(link, "_blank");
  };

  return (
    <div className="m-2">
      <img
        src={image}
        alt={alt}
        onClick={handleClick}
        className="object-contain rounded-lg cursor-pointer shadow-md md:hover:-translate-y-4 transition-all"
      />
    </div>
  );
}
