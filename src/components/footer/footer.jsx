import "./style.scss";
import Link from "next/link";
import Logo from "../../assets/img/logo.png";
import Image from "next/image";
import { menu } from "@/data/navSetting";
import AssetPath from "@/app/utils/assetpath";

function Footer() {
  const quicklinks = [
    { label: "Mediahub", href: "/media-hub" },
    { label: "Enquiry", href: "/enquire" },
    {
      label: "Supermums Survey",
      href: "https://www.motherhood.com.my/events/motherhood-survey",
    },
    { label: "Motherhood Parenting SuperApp", href: "/" },
    { label: "Motherhood Instagram", href: "/" },
    { label: "Facebook", href: "/" },
    { label: "Tiktok", href: "/" },
    { label: "Motherhood Malaysia", href: "/" },
    { label: "Parenting Guide Malaysia", href: "/" },
    { label: "KelabMama", href: "/" },
    { label: "Ibuencer", href: "/" },
    { label: "Wedding Malaysia", href: "/" },
    { label: "New Mum Program", href: "/" },
    { label: "ParentCraft Class", href: "/" },
    { label: "Superkids Class", href: "/" },
    { label: "Motherhood Choice Awards", href: "/" },
    { label: "Promotions", href: "/" },
    { label: "BabyFair", href: "/" },
    { label: "#MamaCubaTry", href: "/" },
    { label: "AskMeDoctor", href: "/" },
    { label: "Money-Smart Mama", href: "/" },
    { label: "Expert Explains", href: "/" },
    { label: "Tahukah Si Manja?", href: "/" },
    { label: "Motherhood Challenge", href: "/" },
    { label: "Our Untold Story", href: "/" },
    { label: "Malaysia Supermom", href: "/" },
  ];
  const social_medias = [
    { img: "facebook", link: "https://www.facebook.com/NurenGroup/" },
    { img: "instagram", link: "https://www.instagram.com/motherhood.com.my/" },
    { img: "linkedin", link: "https://www.linkedin.com/company/nurengroup/" },
    {
      img: "tiktok",
      link: "https://www.tiktok.com/@motherhood.com.my?lang=en",
    },
    {
      img: "xhs",
      link: "https://www.xiaohongshu.com/user/profile/6502662c0000000002010e22",
    },
  ];

  return (
    <section className="footer colc">
      <h3>Quicklinks</h3>
      <div className="quicklinks rowc">
        {quicklinks.map((link, index) => {
          return (
            <Link className="urban_text" href={link.href} target="_blank">
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="bottom_row rowc">
        <Image className="logo" src={Logo} alt="NurenGroup logo" />
        <div className="col">
          <nav className="rowc">
            {menu.map((link, index) => (
              <Link className="urban_text" href={link.path}>
                {link.label}
              </Link>
            ))}
            <Link className="urban_text" href="/">
              Sitemap
            </Link>
          </nav>
          <footer className="urban_text">
            © 2023-2024 NurenGroup | All Rights Reserved
          </footer>
        </div>
        <div className="col">
          <div className="sm rowc">
            {social_medias.map((sm, index) => (
              <Link href={sm.link} className="rowc" target="_blank">
                <img src={AssetPath(`icon/${sm.img}.svg`)} alt={sm.img} />
              </Link>
            ))}
          </div>
          <a className="urban_text" href="mailto:admin@nurengroup.com">
            admin@nurengroup.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
