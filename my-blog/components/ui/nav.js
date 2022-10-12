import Logo from "./logo";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="sticky top-0 w-full flex justify-between items-center bg-transparent p-2">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <nav className="bg-inherit">
        <ul className="flex gap-x-6">
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
