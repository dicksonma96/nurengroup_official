import "./style.scss";

function About() {
  return (
    <main className="about">
      <section className="snapshot rowc">
        <img
          className="snapshot_abstract"
          src="https://media.nurengroup.com/About/snap_shot_abstract.png"
          alt="motherhood flowers decoration"
        />
        <div className="text col">
          <h1>SNAPSHOT OF</h1>
          <h1 className="pink_text">NUREN Group</h1>
          <div className="bottom row">
            <div className="tag  rowc">NUREN GROUP</div>

            <p className="urban_text">
              <span className="pink_text">Nuren Group</span> is a leading
              Malaysian-based technology company, which is female-led and
              VC-funded. We are the leading Digital Content provider, focusing
              on parenting education, maternity wellness and women livelihood.
              Our digital products include Motherhood.com.my, Kelabmama.com,
              Ibuencer.com & the recently launched Motherhood Parenting
              SuperApp. To date, our community consist of 5,000+
              merchants/brands and 5 million+ active users across 3 countries
              (Malaysia, Singapore, Thailand).
            </p>
          </div>
        </div>
      </section>
      <section className="groups col">
        <div className="text col">
          <h1>
            <span className="yellow">Education</span> &{" "}
            <span className="green">Wellness</span>
          </h1>
          <h1>
            <span className="pink_bg">DELIVERING</span>
            <span className="pink_text"> METERNITY</span>
          </h1>
          <h1 className="stroke_text">
            CHILDREN <span className="purple">HEALTH</span>CARE
          </h1>
        </div>
        <img
          src="https://media.nurengroup.com/About/womens.png"
          alt=""
          className="womens_model"
        />
      </section>
      <section className="vision_mission col">
        <p className="urban_text">
          LARGEST FEMALE COMMUNITY MARKETPLACE THAT EMPOWERS WOMEN AND CHILDREN
          TO THRIVE
        </p>
        <h1>
          VISION x <br /> MISSION
        </h1>
        <p className="urban_text" style={{ textAlign: "right" }}>
          BUILD AN INNOVATIVE, DATA AND AI DRIVEN PLATFORM THAT DELIVERS
          SUSTAINABLE, QUALITY HEALTHCARE AND EDUCATION TO OUR COMMUNITY.
        </p>
        <div className="tag  rowc">NUREN GROUP</div>
      </section>
      <section className="stay_mission col">
        <h1>HOW WE STAY ON MISSION</h1>

        <div className="cards row">
          <p className="urban_text">
            Nuren Group is well positioned to support partners to:
          </p>

          <div className="card col">
            <div className="top row">
              <div className="number" style={{ background: "#F4AF67" }}>
                1
              </div>
              <img
                src="https://media.nurengroup.com/Landing/color4.jpg"
                alt=""
              />
            </div>
            <div className="desc urban_text">
              <strong>Gateway for global brands</strong> entering South East
              Asia
            </div>
          </div>
          <div className="card col">
            <div className="desc urban_text">
              Helping brands to reach and <strong>bigger community</strong>
            </div>
            <div className="top row">
              <div className="number" style={{ background: "#C84A67" }}>
                2
              </div>
              <img
                src="https://media.nurengroup.com/Landing/color4.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="card col">
            <div className="top row">
              <div className="number" style={{ background: "#00999E" }}>
                3
              </div>
              <img
                src="https://media.nurengroup.com/Landing/color4.jpg"
                alt=""
              />
            </div>
            <div className="desc urban_text">
              <strong>Digital enabler</strong> emerging brands to expand cross
              border
            </div>
          </div>
        </div>

        <div className="deco rowc">
          <img
            className="womens"
            src="https://media.nurengroup.com/About/city_womens.svg"
            alt=""
          />
        </div>
      </section>
    </main>
  );
}

export default About;
