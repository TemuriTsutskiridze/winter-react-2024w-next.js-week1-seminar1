import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Next.js Seminar 1</h1>
      <nav>
        <ul>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
