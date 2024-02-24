import AssetPath from "@/app/utils/assetpath";
import React from "react";
import "./style.scss";

function Leadership() {
  return (
    <main className="leadership">
      <div className="banner col">
        <div className="banner_content col">
          <img src={AssetPath("Leadership/banner.jpg")} alt="" />
          <div className="text row">
            <h1>LEADERSHIP</h1>
            <p>
              At NUREN, our directors and managers play a crucial role in
              driving performance. Through their visionary leadership and
              ability to inspire teams, they pave the way for the entire
              organization to successfully attain ambitious objectives.
            </p>
          </div>
        </div>
      </div>

      <div className="leadership_grid">
        <div className="grid_row row">
          <img src={AssetPath("Leadership/maton.jpg")} alt="" />
          <div className="square" style={{ background: "#F4AF67" }}></div>
          <img src={AssetPath("Leadership/alison.jpg")} alt="" />
        </div>
        <div className="grid_row row">
          <img src={AssetPath("Leadership/pankhi.jpg")} alt="" />
          <div className="square" style={{ background: "#F25075" }}></div>
          <img src={AssetPath("Leadership/rachel.jpg")} alt="" />
        </div>
        <div className="grid_row row">
          <img src={AssetPath("Leadership/jolene.jpg")} alt="" />
          <div className="square" style={{ background: "#ECE9DE" }}></div>
          <img src={AssetPath("Leadership/tingsiang.jpg")} alt="" />
        </div>
        <div className="grid_row row">
          <img src={AssetPath("Leadership/zac2.jpg")} alt="" />
          <img src={AssetPath("Leadership/zac.jpg")} alt="" />
          <div className="square" style={{ background: "#5B327C" }}></div>
        </div>
        <div className="grid_row row">
          <img src={AssetPath("Leadership/jinny.jpg")} alt="" />
          <div className="square" style={{ background: "#D3DBF9" }}></div>
          <img src={AssetPath("Leadership/razid.jpg")} alt="" />
        </div>
      </div>
    </main>
  );
}

export default Leadership;
