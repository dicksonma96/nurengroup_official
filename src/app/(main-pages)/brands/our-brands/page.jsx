import React from "react";
import AssetPath from "@/app/utils/assetpath";
import "./style.scss";

function OurBrands() {
  const brands = [
    "motherhood",
    "kelabmama",
    "careplus",
    "ibuencer",
    "mca",
    "newmom",
    "parentcraft",
    "superkids",
    "mmcbt",
  ];
  return (
    <main className="our_brand col">
      <section className="brand_banner row">
        <div className="text col">
          <h1>
            OUR <br /> BRANDS
          </h1>
          <p className="urban_text">
            Welcome to Nuren Group, the esteemed home of iconic brands that
            resonate with the heart of parenthood and family life. Within our
            nurturing embrace, you'll find a diverse array of platforms and
            initiatives designed to support and empower mothers, fathers, and
            caregivers on their extraordinary journey.
          </p>
        </div>
        <div className="abstract"></div>
      </section>
      <div className="brand_logos row">
        <div className="content">
          {brands.map((brand, index) => (
            <div key={index} className="brand">
              <img
                className="colorize"
                src={AssetPath(`brand/logo/${brand}.png`)}
                alt={brand}
              />
              <img src={AssetPath(`brand/logo/${brand}_w.png`)} alt={brand} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default OurBrands;
