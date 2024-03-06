import "./style.scss";
import Link from "next/link";
import Logo from "../../assets/img/logo.svg";
import Image from "next/image";
import { menu } from "@/data/navSetting";
import AssetPath from "@/app/utils/assetpath";

function Footer() {
  const quicklinks = [
    { label: "Mediahub", href: "/media-hub", newTab: false },
    { label: "Enquiry", href: "/enquire", newTab: false },
    {
      label: "Supermums Survey",
      href: "https://www.motherhood.com.my/events/motherhood-survey",
      newTab: true,
    },
    {
      label: "Motherhood Parenting SuperApp",
      href: "https://www.motherhood.com.my/superapp/ ",
      newTab: true,
    },
    {
      label: "Motherhood Instagram",
      href: "https://www.instagram.com/motherhood.com.my/ ",
      newTab: true,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/motherhood.com.my",
      newTab: true,
    },
    {
      label: "Tiktok",
      href: "https://www.tiktok.com/@motherhood.com.my?_t=8kO7VXPD5JH&_r=1 ",
      newTab: true,
    },
    {
      label: "Motherhood Malaysia",
      href: "https://www.motherhood.com.my/home/ ",
      newTab: true,
    },
    {
      label: "Parenting Guide Malaysia",
      href: "https://story.motherhood.com.my/ ",
      newTab: true,
    },
    { label: "KelabMama", href: "https://www.kelabmama.com/ ", newTab: true },
    { label: "Ibuencer", href: " https://www.ibuencer.com/ ", newTab: true },
    // { label: "Wedding Malaysia", href: "/" },
    {
      label: "New Mum Program",
      href: "https://www.motherhood.com.my/events/newmom",
      newTab: true,
    },
    {
      label: "ParentCraft Class",
      href: "https://www.motherhood.com.my/parentcraft/dashboard ",
      newTab: true,
    },
    {
      label: "Superkids Class",
      href: "https://www.motherhood.com.my/superkids/main",
      newTab: true,
    },
    {
      label: "Motherhood Choice Awards",
      href: "https://www.motherhood.com.my/motherhood-award",
      newTab: true,
    },
    {
      label: "Promotions",
      href: "https://www.motherhood.com.my/monthly-promotions ",
      newTab: true,
    },
    {
      label: "BabyFair",
      href: "https://www.motherhood.com.my/babyfair ",
      newTab: true,
    },
    {
      label: "#MamaCubaTry",
      href: "https://www.motherhood.com.my/mamacubatry/main ",
      newTab: true,
    },
    {
      label: "AskMeDoctor Season 6",
      href: "https://youtube.com/playlist?list=PL1Wnpc9qYxULLAoGt0JDJMrJ8y5jh2zRJ&si=1pEX4_tFoxUqDLUy ",
      newTab: true,
    },
    {
      label: "AskMeDoctor Season 5",
      href: "https://youtube.com/playlist?list=PL1Wnpc9qYxUJyvWElOP3t9novpvqAvVeD&si=XO3iVPPqwWcg8sCo ",
      newTab: true,
    },
    {
      label: "AskMeDoctor Season 4",
      href: "https://youtube.com/playlist?list=PL1Wnpc9qYxULtC7hUY5WbUKAFjY8BmoeO&si=ZkRgBQ6ymGgXLHw8 ",
      newTab: true,
    },
    {
      label: "AskMeDoctor Season 3",
      href: "https://youtube.com/playlist?list=PL1Wnpc9qYxUI9QhkC_WqSxd8ppISOeP0t&si=bKTr1sq12esJanPU ",
      newTab: true,
    },
    {
      label: "AskMeDoctor Season 2",
      href: "https://youtube.com/playlist?list=PL1Wnpc9qYxUJd91nqwlhuXOfDI8GDxYnk&si=sTdgAbftDkiOs9PG ",
      newTab: true,
    },
    {
      label: "AskMeDoctor Season 1",
      href: "https://youtube.com/playlist?list=PL1Wnpc9qYxUL4cf1ovNd7inK4YwYMRQgk&si=kcfD9mR4DCWvPq1h ",
      newTab: true,
    },
    {
      label: "Money-Smart Mama",
      href: "https://youtube.com/playlist?list=PL1Wnpc9qYxUIW6Qwt7cG1FYnOFJEXspS9&si=xOPZYvVqVAQ4RBaN ",
      newTab: true,
    },
    {
      label: "Expert Explains",
      href: "https://youtube.com/playlist?list=PL1Wnpc9qYxUKwJB4vfJYoflN2GFKUQG4S&si=t6-257q9ipkRcOBW ",
      newTab: true,
    },
    {
      label: "Tahukah Si Manja?",
      href: "https://youtube.com/playlist?list=PL1Wnpc9qYxUKYD1fb3fXKwEhfI5e9P6X-&si=MbdpQDfGNqfrIXKv ",
      newTab: true,
    },
    {
      label: "Motherhood Challenge",
      href: "https://youtube.com/playlist?list=PL1Wnpc9qYxUK9PZ9-1zu-15TdvttNm5ZM&si=-rBzXjUGqMqUHNmx ",
      newTab: true,
    },
    {
      label: "Our Untold Story",
      href: "https://youtube.com/playlist?list=PL1Wnpc9qYxUKht2SJ1XjUKKjOcsI0dKfp&si=5m3PqWbbdBIzdq-n ",
      newTab: true,
    },
    {
      label: "Malaysia Supermom",
      href: "https://youtube.com/playlist?list=PL1Wnpc9qYxULNeD60GPvT2sJEYI6wX3WS&si=dfyAx0S0DuqeO1V_ ",
      newTab: true,
    },
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
        <div className="col">
          <nav className="rowc">
            {menu.map((link, index) => (
              <Link key={index} className="urban_text" href={link.path}>
                {link.label}
              </Link>
            ))}
          </nav>
          <footer className="urban_text">
            © 2023-2024 NurenGroup | All Rights Reserved
          </footer>
        </div>
        <div className="col">
          <div className="sm rowc">
            {social_medias.map((sm, index) => (
              <Link key={index} href={sm.link} className="rowc" target="_blank">
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
