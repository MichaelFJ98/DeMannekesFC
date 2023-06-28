export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer" className="bg-primaryBlue text-white text-center p-4">
      <p>© {currentYear} Mannekes. All rights reserved.</p>
    </div>
  );
}
