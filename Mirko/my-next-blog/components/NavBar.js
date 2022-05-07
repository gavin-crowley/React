import Link from "next/link";

function NavBar() {
  // console.log("[NavBar] render");
  return (
    <>
      <nav>
        <ul>
          <li>
            {/* <a href="/about">About </a> */}
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            {/* <a href="/about">About </a> */}
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
        <style jsx>{`
          ul {
            list-style-type: none;
            padding: 0;
          }

          li {
            display: inline;
            margin-left: 0.75rem;
          }

          li:not(:first-child) {
            margin-left: 0.75rem;
          }
        `}</style>
      </nav>
    </>
  );
}

export default NavBar;
