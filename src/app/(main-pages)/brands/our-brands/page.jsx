import React from "react";
import AssetPath from "@/app/utils/assetpath";
import "./style.scss";
import Link from "next/link";

function OurBrands() {
  const brands = [
    {
      logo: "motherhood",
      link: "https://www.motherhood.com.my/ ",
      desc: "Motherhood.com.my is Malaysia's one-stop baby store, offering a wide range of products and services for parents and expecting mothers. From maternity essentials to items for newborns, toddlers, and kids, it provides valuable resources like parenting tips, breastfeeding guides, brand reviews, free samples, and testimonials, making it a complete destination for all parenting needs.",
      colors: ["#00999e", "#006072", "#fcb913"],
    },

    {
      logo: "kelabmama",
      link: "https://www.kelabmama.com/ ",
      desc: "Kelabmama is Malaysia's largest urban Malay site for parents, offering a comprehensive PABBY directory and content platform. With over 5,000 listings of babysitters and confinement nannies/centers, it serves as a vital resource for urban parents. Boasting a community of 500,000 mothers as of 2018, Kelabmama provides valuable information and support for parents across Malaysia.",
      colors: ["#ED589D", "#F29AC1", "#FFFFFF"],
    },
    // {
    //   logo: "careplus",
    //   link: "",
    //   desc: "",
    //   colors: ["#F16C8B", "#00B2AE", "#FFFFFF"],
    // },
    {
      logo: "ibuencer",
      link: "https://www.ibuencer.com/",
      desc: 'Ibuencer.com, blending "Ibu" (mother) and "Influencer," is Southeast Asia\'s top influencer platform for moms and families. Established in 2019 with offices in Malaysia, Singapore, and Thailand, it leverages a data-driven approach to drive word-of-mouth advocacy for brands. With over 5,000 active mom influencers across the region, Ibuencer.com facilitates meaningful brand connections with a growing audience.',
      colors: ["#0C4B80", "#ef7955", "#fcb913"],
    },
    {
      logo: "mca",
      link: "https://www.motherhood.com.my/motherhood-award",
      desc: "The Motherhood Choice Award celebrates top brands in pregnancy, maternity, baby, toddler, and kids products and services. Recognizing quality, safety, and innovation, it highlights brands endorsed by mothers worldwide and aligns with government efforts to enhance child safety measures.",
      colors: ["#000000", "#006072", "#ad8545", "#d6af50"],
    },
    {
      logo: "newmom",
      link: "https://www.motherhood.com.my/events/newmom",
      desc: "The New Mom Club by Motherhood.com.my offers exclusive discounts, gifts, and expert advice for new mothers. Members can enjoy special privileges, receive FREE New Mom Gifts, and attend informative webinars on maternity and baby care, creating a supportive community to navigate motherhood with confidence.",
      colors: ["#DC99A0", "#fb6b8d", "#ec008b", "#00b4b8"],
    },
    {
      logo: "parentcraft2",
      link: "https://www.motherhood.com.my/parentcraft/dashboard ",
      desc: "The Parentcraft Class provides expectant parents with comprehensive support through over 100 recorded antenatal videos and detailed online classes led by experts. Additionally, hands-on practical learning during the Parentcraft Offline Class equips parents with essential knowledge and skills for a confident journey into parenthood.",
      colors: ["#275E70", "#F4A7A2", "#ECD0CD"],
    },
    {
      logo: "superkids",
      link: "https://www.motherhood.com.my/superkids/main",
      desc: "Invest in your child's future today with the Super Kids Club. Unlock exclusive discounts at theme parks and enrichment programs, along with gifts, samples, and trial classes. Enjoy on-the-go enrichment activities, access educational resources, and participate in exclusive real-life events. Aimed at fostering growth and development, the club offers a fun and enriching experience for children.",
      colors: ["#72B53A", "#8159A5", "#430B56"],
    },
    {
      logo: "mmcbt",
      link: "https://www.motherhood.com.my/mamacubatry/main",
      desc: "The Mamacubatry Program invites mothers to join as testers, receiving free products to try and share experiences within our community of mothers. Through the program, mothers explore new products, offer feedback, and engage with fellow caregivers, fostering a supportive environment of shared insights.  ",
      colors: ["#fcb913", "#FFCE3B", "#9F1D20", "#8F5A24"],
    },
  ];
  return (
    <main className="our_brand section colc">
      <h1>OUR BRANDS</h1>
      <p>
        The esteemed home of iconic brands that resonate with the heart of
        parenthood and family life within our nurturing embrace.
      </p>
      <div className="brand_list col">
        {brands.map((brand, index) => (
          <a
            href={brand.link}
            target="_blank"
            key={index}
            className="brand_item rowc"
          >
            <div className="content rowc">
              <img
                src={AssetPath(`brand/logo/${brand.logo}.png?v=3`)}
                alt={brand}
              />
              <div className="left col">
                <Colors colors={brand.colors} />
                <p>{brand.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="superapp">
        <div className="explore rowc">
          <img
            className="explore_banner"
            src={AssetPath("brand/phone.png")}
            alt="motherhood app mockup"
          />

          <div className="explore_right col">
            <h2>
              Explore <br /> Motherhood{" "}
            </h2>
            <h3>The Parenting SuperApp</h3>
            <div className="row">
              <img
                src={AssetPath("brand/Motherhood-App-QR.png")}
                alt="qr code"
                className="qr"
              />
              <div className="col download">
                <img src={AssetPath("brand/appstore.png")} alt="app store" />
                <img
                  src={AssetPath("brand/googleplay.png")}
                  alt="google playstore"
                />
                <img
                  src={AssetPath("brand/huaweigallery.png")}
                  alt="huawei gallery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Colors({ colors }) {
  return (
    <div className="colors rowc">
      {colors.map((color, index) => (
        <svg
          key={index}
          viewBox="0 0 36 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 1.44338C17.047 0.550211 18.953 0.550212 20.5 1.44338L32.8205 8.55662C34.3675 9.44979 35.3205 11.1004 35.3205 12.8868V27.1132C35.3205 28.8996 34.3675 30.5502 32.8205 31.4434L20.5 38.5566C18.953 39.4498 17.047 39.4498 15.5 38.5566L3.17949 31.4434C1.63249 30.5502 0.679491 28.8996 0.679491 27.1132V12.8868C0.679491 11.1004 1.63249 9.44979 3.17949 8.55662L15.5 1.44338Z"
            fill={color}
            stroke={color == "#FFFFFF" ? "#E2E2E2" : ""}
          />
        </svg>
      ))}
    </div>
  );
}

export default OurBrands;
