import "./style.scss";
import Link from "next/link";

function PageNotFound() {
  return (
    <main className="page_not_found section colc">
      <span style={{ fontSize: "50px" }}>&#128532;</span>
      <h1>Opps, page not found</h1>
      <p className="line1">The page you were looking for doesn't exist.</p>
      <p className="urban_text line2">
        You may have mistyped the address or the page may have moved.
      </p>
      <Link className="backhome" href="/">
        BACK TO HOMEPAGE
      </Link>

      <div className="links rowc">
        <Link href="/mediahub">NEWSROOM</Link>
        <Link href="/brands/our-brands">OUR BRANDS</Link>
        <Link href="/home#snapshot">ABOUT US</Link>
      </div>
    </main>
  );
}

export default PageNotFound;
