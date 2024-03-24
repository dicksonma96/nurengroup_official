import AssetPath from "@/app/utils/assetpath";
import "../style.scss";
import BackBtn from "@/components/backBtn";

export async function generateMetadata({ params }) {
  return {
    title:
      "Nuren Group | Prof Dr K.Y. Wong, Petrina S.Y. Goh, Leigh L.H. Zhang",
    description:
      "Nuren Group - Prof Dr K.Y. Wong (Chairman, Non Executive Director), Shze Yinn Goh (Group CEO, Founder, Executive Director), Li Hua Zhang (Independent, Non Executive Director)",
  };
}

function DrWong() {
  return (
    <main className="bod_detail col">
      <BackBtn />

      <section
        id="prof_drwong"
        className="person_detail row"
        style={{ backgroundColor: "#f25075" }}
        data-name="Prof Dr K.Y. Wong"
      >
        <div className="left colc">
          <img src={AssetPath("BOD/prof-dr-wong.png")} alt="Prof Dr Wong" />
          <div className="title col">
            <strong>Prof Dr K.Y. Wong</strong>
            <span className="urban_text">Chairman, Non-Executive Director</span>
            <span className="urban_text">
              CEO of D'Mace Group Ltd (Singapore)
            </span>
          </div>
        </div>

        <div className="description">
          <p>
            Economist Prof Dr Wong, is Director of EUDA Health Holdings Limited
            (NASDAQ:EUDA), Director of E-Plus Ltd (NSX:8EP) and Group CEO of
            D’Mace Ltd (Australia). He holds PhD from Strathclyde Business
            School (UK), postdoctoral at Peking University (China), BBA from
            Western Michigan University (USA) and M.Econ from University Putra
            (Malaysia). With a distinguished career as both scholar and
            corporate leader, Prof Dr Wong has held various executive positions
            in public listed companies, VP/deanship with universities, and lead
            consultant roles in several initiatives with ASEAN and UNWTO. From
            2004 to 2016, he served as advisor to the government of Malaysia,
            SEA nations and China. In 2010, he led the National Key Economic
            Area EPP10, an essential component of Malaysia's Economic
            Transformation Program under the Prime Minister's Office. Prof Dr
            Wong's significant experience in the fields of business, economic
            policy and planning, showcase his ability to provide strategic
            guidance as Chairman of Nuren Group.
          </p>
        </div>
      </section>
      <section
        id="leigh_zhang"
        className="person_detail row "
        style={{ background: "#442F55" }}
        data-name="LI HUA ZHANG"
      >
        <div className="left colc">
          <img src={AssetPath("BOD/leigh-zhang.png")} alt="Leigh Zhang" />
          <div className="title col">
            <strong>Li Hua Zhang</strong>
            <span className="urban_text">
              Independent, Non-Executive Director
            </span>
          </div>
        </div>

        <div className="description">
          <p>
            Ms Zhang has over 23 years of professional experience in investment
            banking and financial services in Australia, specializing in cross
            border investment transactions and private equity investments. She
            is the co-founder and Chief Investment Officer of WealthSpring
            International Group, a boutique financial service provider
            headquartered in Sydney with offices in Shanghai and Hangzhou. Prior
            to establishing WealthSpring International Group, Ms Zhang served a
            number of senior management roles for Australian financial
            organizations, such as Director of Babcock & Brown China, CEO of
            CommFinance (subsidiary of Commonwealth Bank of Australia) and
            General Manager of Macquarie Securitisation China. Ms Zhang also
            serves as Board Member at Maxoniq Pty Ltd (Australia) and Tell Me
            Media Pty Ltd (Australia). Prior migrating to Australia, Ms Zhang
            was an economic lecturer in Ningbo University China.
          </p>
        </div>
      </section>

      {/* <section
      className="person_detail row "
      style={{ background: "#E9A762" }}
      data-name="KELVIN LEOW WEE KEAT"
    >
      <div className="left colc">
        <img src={AssetPath("BOD/kelvin-leow.png")} alt="Kelvin Leow" />
        <div className="title col">
          <strong>
            KELVIN LEOW <br /> WEE KEAT
          </strong>
          <span className="urban_text">Chief Technology Officer,</span>
          <span className="urban_text">Executive Director</span>
        </div>
      </div>

      <div className="description">
        <p>
          Kelvin Leow has over 20 years of experience in the tech industry. He
          is a certified Project Management Professional (PMP), and honor degree
          holder in Bachelor of Software Engineering from University of New
          South Wales (Australia). He started career in Sydney (Australia), and
          gained work experiences in Malaysia, Singapore, Cambodia & United
          States. Throughout his career, he has held various roles in software
          development, project management & technology consulting. Prior to his
          current endeavors, Leow held pivotal roles at Intel Malaysia and
          Motorola Australia, focusing on manufacturing automation software and
          mobile messaging software development. Leow is a successful
          entrepreneur who also co-founded Claritas – a cloud-based enterprise
          customer relationship management solution company, which was later
          acquired by Incite Innovations in 2022.
        </p>
        <br />
        <p>
          As a testament to his industry influence, Leow has been invited as
          keynote speaker at numerous innovation and technology conferences,
          reinforcing his stature as a thought leader. Leow’s core competencies
          encompass solution architecture, customer relationship management,
          artificial intelligence, digital media, retail management and
          fin-tech. In current role, Leow spearheads the technology innovation
          and product direction of Nuren Group.
        </p>
      </div>
    </section> */}

      <section
        id="petrina_goh"
        className="person_detail row "
        style={{ background: "#E9A762" }}
        data-name="Shze Yinn Goh"
      >
        <div className="left colc">
          <img src={AssetPath("BOD/petrina-goh.png")} alt="Shze Yinn Goh" />
          <div className="title col">
            <strong>Shze Yinn Goh</strong>
            <span className="urban_text">Group CEO, Founder,</span>
            <span className="urban_text">Executive Director</span>
          </div>
        </div>

        <div className="description">
          <p>
            Ms Goh is the Founder and CEO of the group. She is an accomplished
            professional with a diverse background in the technology and finance
            sectors. She holds a Master Degree (Accounting & Finance) from
            University of Bath; and Bachelor Degree (Engineering) from
            University of Hull. Prior to this, she served as a tech consultant
            in Accenture, where she honed her expertise in the industry.
            Additionally, her tenure as an investment banker in CIMB Investment
            Bank (Malaysia) and Tael Partners (Malaysia) allowed her to manage a
            substantial investment portfolio, specializing in the evaluation of
            technology sector deals. Ms Goh is a recipient of MVCA Outstanding
            Women Entrepreneur of the year 2018 and the Inti Alumni Young
            Entrepreneur of the Year Award 2016. Besides being active keynote
            speakers, she is also a strong supporter of women in tech. Her
            remarkable journey and expertise make her a prominent figure in both
            the technology and business realms.
          </p>
        </div>
      </section>
    </main>
  );
}

export default DrWong;
