import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex space-x-10">
      <ul className="flex space-x-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profil</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
