import "./style.scss";
import Link from "next/link";
import Logo from "../../assets/img/logo.svg";
import Image from "next/image";
import { menu } from "@/app/utils/navSetting";
import AssetPath from "@/app/utils/assetpath";
import social_medias from "@/app/utils/social_medias";
import quicklinks from "@/app/utils/quicklinks";
import footer_copywriting from "@/app/utils/footer_copywriting";

function Footer() {
  return (
    <section className="footer colc">
      <h3>Quicklinks</h3>
      <div className="quicklinks rowc">
        {quicklinks.map((link, index) => {
          return (
            <Link
              key={index}
              className="urban_text"
              href={link.href}
              target={link.newTab ? "_blank" : "_self"}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="bottom_row rowc">
        <Image className="logo" src={Logo} alt="NurenGroup logo" />
        <div className="col f_middle">
          <nav className="rowc">
            {menu.map((link, index) => (
              <Link key={index} className="urban_text" href={link.path}>
                {link.label}
              </Link>
            ))}
          </nav>
          <footer className="urban_text">{footer_copywriting}</footer>
        </div>
        <div className="col f_right">
          <div className="sm rowc">
            {social_medias.map((sm, index) => (
              <Link key={index} href={sm.link} className="rowc" target="_blank">
                <img src={AssetPath(`icon/${sm.img}.svg`)} alt={sm.img} />
              </Link>
            ))}
          </div>
          <a href="tel:+60379320050">+603 7932 0050</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
