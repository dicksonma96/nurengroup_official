import Image from "next/image";
import N from "../../assets/img/logo_letter/n.svg";
import U from "../../assets/img/logo_letter/u.svg";
import R from "../../assets/img/logo_letter/r.svg";
import E from "../../assets/img/logo_letter/e.svg";
import T from "../../assets/img/logo_letter/t.svg";
import Group from "../../assets/img/logo_letter/group.svg";
import Site from "../../assets/img/logo_letter/site.svg";
import Link from "next/link";
import "./style.scss";

function LandingLogo() {
  return (
    <Link href="/about" className="landing_logo col">
      <div className="top_row rowc">
        <div className="letter colc">
          <Image src={N} />
          <Image src={E} />
        </div>
        <div className="letter colc">
          <Image src={U} style={{ transitionDelay: "0.2s" }} />
          <Image src={N} style={{ transitionDelay: "0.2s" }} />
        </div>
        <div className="letter colc" style={{ margin: "0 0% 0 -1%" }}>
          <Image src={R} style={{ transitionDelay: "0.5s" }} />
          <Image src={T} style={{ transitionDelay: "0.5s" }} />
        </div>
        <div className="letter colc" style={{ margin: "0 -2% 0 -3%" }}>
          <Image src={E} style={{ transitionDelay: "0.3s" }} />
          <Image src={E} style={{ transitionDelay: "0.3s" }} />
        </div>
        <div className="letter colc">
          <Image src={N} style={{ transitionDelay: "0.1s" }} />
          <Image src={R} style={{ transitionDelay: "0.1s" }} />
        </div>
      </div>
      <div className="subline col">
        <Image src={Group} />
        <Image src={Site} style={{ width: "60%" }} />
      </div>
    </Link>
  );
}

export default LandingLogo;
