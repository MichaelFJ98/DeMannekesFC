export default function ProjectCard({ image, alt, link }) {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="m-2">
      <img
        src={image}
        alt={alt}
        onClick={handleClick}
        className="object-contain rounded-lg hover:cursor-pointer shadow-md hover:-translate-y-4 transition-all"
      />
    </div>
  );
}
