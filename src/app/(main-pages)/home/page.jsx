import "./style.scss";
import AssetPath from "@/app/utils/assetpath";
import Landing from "./landing";
import LandingVideo from "./landingVideo";

export const metadata = {
  title:
    "Nuren Group | Empower Women in Parenting, Education & Maternity Wellness",
  description:
    "Nuren Group is a digital media company & service provider in parenting education, maternity wellness and women livelihood.",
};

function About() {
  return (
    <main className="about">
      {/* <Landing /> */}
      <LandingVideo />
      <section className="snapshot rowc " id="snapshot">
        <img
          className="snapshot_abstract"
          src={AssetPath("About/snap_shot_abstract.png")}
          alt="motherhood flowers decoration"
        />
        <div className="text col">
          <h1>SNAPSHOT OF</h1>
          <h1 className="pink_text">NUREN GROUP</h1>
          <div className="bottom col">
            <div className="tag  rowc">NUREN GROUP</div>

            <p className="urban_text">
              <strong className="pink_text">Nuren Group </strong> is a leading
              Malaysian-based technology company, which is female-led and
              VC-funded. We are the leading ecommerce & digital content
              provider, focusing on parenting education, maternity wellness and
              women livelihood. Our digital products include Motherhood.com.my,
              Kelabmama.com, Ibuencer.com & the recently launched Motherhood
              Parenting Superapp. To date, our community consist of 5,000+
              merchants/brands and 5 million+ active users across 3 countries
              (Malaysia, Singapore, Thailand).
            </p>
          </div>
        </div>
      </section>
      <section className="description row ">
        <div className="des_item rowc">
          <p className="urban_text" style={{ color: "#403C47" }}>
            <strong>Nuren Group</strong> is a strong supporter on women-in-tech
            and career-comeback-program. Our mission is to build an innovative
            and AI-driven platform to effectively deliver sustainable, quality
            health, wellness and education to our community of mothers and
            children. With this, we are aiming to drive growth in our domestic
            digital economy through technology adoption, as well as increasing
            digital export sales, by becoming the tech-enablers and superapp
            bridging the engagement between brands and our community across
            Southeast Asia. We currently hire 50+ knowledge workers who
            specialize in AI, big data, digital media and ecommerce space.
          </p>
        </div>
        <div className="des_item rowc" style={{ background: "#C84A67" }}>
          <p className="urban_text">
            Under the leadership of Petrina (CEO & Founder),{" "}
            <strong>Nuren Group</strong> is fortunate to have received backing &
            support from corporates and venture capital firms. Throughout the
            years, Petrina and the company has also received awards &
            recognitions such as Southeast Asia Top 50 Rising Women in Tech
            2021, Top 12 Best Startup in Asia 2019, MVCA Outstanding Women
            Entrepreneur 2018, APICTA Malaysia Award 2017, Inti Alumni Young
            Entrepreneur of the Year Award 2016.
          </p>
        </div>
      </section>
      <section className="groups col ">
        <div className="text col">
          <h1>
            <span className="yellow">Delivering</span> &{" "}
            <span className="green">Maternity</span>
          </h1>
          <h1>
            <span className="pink_bg">Wellness</span>
            <span className="pink_text"> Education</span>
          </h1>
          <h1 className="stroke_text">
            Children <span className="purple">Health</span>care
          </h1>
        </div>
        <img
          src={AssetPath("About/talks.jpg")}
          alt=""
          className="womens_model"
        />
        <div
          className="ball"
          style={{ background: "#C84A67", top: "50%" }}
        ></div>
        <div
          className="ball"
          style={{ background: "#F25075", top: "60%", left: "2%" }}
        ></div>
        <div
          className="ball"
          style={{
            background: "#F25075",
            top: "15%",
            left: "auto",
            right: "-10%",
          }}
        ></div>
      </section>
      <section className="vision_mission col ">
        <p className="urban_text">
          LARGEST FEMALE COMMUNITY MARKETPLACE THAT EMPOWERS WOMEN AND CHILDREN
          TO THRIVE
        </p>

        <h1>VISION x MISSION</h1>
        <p className="urban_text" style={{ textAlign: "right" }}>
          BUILD AN INNOVATIVE, DATA AND AI DRIVEN PLATFORM THAT DELIVERS
          SUSTAINABLE, QUALITY HEALTHCARE AND EDUCATION TO OUR COMMUNITY.
        </p>

        <div className="tag  rowc">NUREN GROUP</div>
      </section>
      <section className="stay_mission col ">
        <h1>HOW WE STAY ON MISSION</h1>

        <div className="cards row">
          <p className="urban_text">
            Nuren Group is well positioned to support partners to
          </p>

          <div className="card col">
            <div className="top row">
              <div className="number" style={{ background: "#F4AF67" }}>
                1
              </div>
              <img
                src="https://media.nurengroup.com/About/mission1.jpg"
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
                src="https://media.nurengroup.com/About/mission2.jpg"
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
                src="https://media.nurengroup.com/About/mission3.jpg"
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
            src={AssetPath("About/city_womens.svg")}
            alt=""
          />
        </div>
      </section>
    </main>
  );
}

export default About;
