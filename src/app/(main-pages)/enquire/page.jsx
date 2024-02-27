"use client";

import AssetPath from "@/app/utils/assetpath";
import "./style.scss";

function Enquire() {
  return (
    <main className="section enquire col">
      <div className="enquire_banner rowc">
        <h1>HELLO</h1>
        <img src={AssetPath("Other/enquire_abstract.png")} alt="" />
      </div>

      <div className="enquire_content row">
        <div className="addresses">
          <div className="address col" style={{ background: "#F8F7F3" }}>
            <strong>MALAYSIA</strong>
            <div className="addr">
              Nuren Group H-89-1, Block H, Jaya One, 72A Jalan Profesor Diraja
              Ungku Aziz, 46200 Petaling Jaya, Selangor, Malaysia
            </div>
            <a href="tel:60379320050" className="phone">
              +603 7932 0050
            </a>
          </div>
          <div className="address col" style={{ background: "#E6E6E6" }}>
            <strong>SINGAPORE</strong>
            <div className="addr">
              Nuren Group 151 Chin Swee Road, #07-12 Manhattan House, Singapore
              16987
            </div>
            <a href="tel:6531591211" className="phone">
              +65 3159 1211
            </a>
          </div>
          <div className="address col" style={{ background: "#D3DBF9" }}>
            <strong>THAILAND</strong>
            <div className="addr">
              Nuren Group 50 GMM Grammy Place, Unit 2301-2303, 23rd Floor,
              Sukhumvit21 (Asoke) Rd, Khlong Toei Nuea, Watthana, Bangkok 10110
              Thailand
            </div>
            <a href="tel:6620261126" className="phone">
              +662 026 1126
            </a>
          </div>
          <div className="address col" style={{ background: "#F9D3E1" }}>
            <strong>AUSTRALIA</strong>
            <div className="addr">
              Nuren Group Level 6, 414 La Trobe Street, Melbourne Vic 3000,
              Australia
            </div>
          </div>
        </div>
        <div className="contact_form col">
          <select>
            <option value="0" disabled selected>
              I am
            </option>
          </select>
          <select>
            <option value="0" disabled selected>
              I am interested in
            </option>
          </select>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Mobile Number" />
          <input type="text" placeholder="Attach Resume" />
          <textarea placeholder="Message" name=""></textarea>

          <button>Submit</button>
        </div>
      </div>
    </main>
  );
}

export default Enquire;
