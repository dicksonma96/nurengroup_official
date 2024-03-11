import AssetPath from "@/app/utils/assetpath";
import "../style.scss";
import BackBtn from "@/components/backBtn";

export async function generateMetadata() {
  return {
    title: "PROF DR WONG KONG YEW",
    description: "NurenGroup | Chairman, Non-Executive | Independent Director",
    openGraph: {
      images: [AssetPath("BOD/prof-dr-wong.png")],
    },
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
        data-name="PROF DR WONG"
      >
        <div className="left colc">
          <img src={AssetPath("BOD/prof-dr-wong.png")} alt="Prof Dr Wong" />
          <div className="title col">
            <strong>
              PROF DR WONG <br />
              KONG YEW
            </strong>
            <span className="urban_text">Chairman, Non-Executive</span>
            <span className="urban_text">Independent Director</span>
          </div>
        </div>

        <div className="description">
          <p>
            Economist Dr. Wong, is Group CEO at D’Mace Ltd (Australia), Class 1
            Director of EUDA Health Holdings Limited, NASDAQ (USA), Director of
            E-Plus Ltd., NSX (AUS) and is Managing Director of D’Mace Holdings
            Ltd (Singapore). With a distinguished career as both a scholar and a
            corporate leader, Dr. Wong has made significant contributions to the
            fields of economics and business. Dr. Wong's expertise and knowledge
            have been sought after in various high-profile projects. He has
            served as the lead consultant in several initiatives with ASEAN and
            UNWTO, showcasing his ability to provide strategic guidance and
            valuable insights. Prior to his current roles, Dr. Wong has had held
            the esteemed executives’ position of CEO of public listed companies,
            and Vice President and Deanship of Universities. These experiences
            allowed him to gain valuable insights into the intricacies of the
            corporate world and hone his leadership skills.
          </p>
          <br />
          <p>
            He obtained his Ph.D. from the esteemed Strathclyde Business School
            at the University of Strathclyde in the UK in 2004. Following that,
            he pursued postdoctoral studies at the prestigious Peking University
            in China. Dr. Wong's educational journey also includes studies in
            Economics at Western Michigan University, where he earned a BBA in
            1996, and at University Putra Malaysia, where he obtained a M.Econ
            in 1999. His commitment to education extends to his time as an
            academic, with his last posting being at PUTRA Business School, UPM
            in 2016. There, he specialized in areas such as foreign direct
            investment, industrial development, and multinational corporation
            strategy, shaping the minds of future business leaders. Dr. Wong has
            made significant contributions to economic policy and planning. From
            2004 to 2016, he served as an advisor to the government in Malaysia,
            SEA nations, and China. In 2010, his expertise was recognized as he
            was entrusted to lead the National Key Economic Area - Entry Point
            Project 10 (EPP10), an essential component of Malaysia's Economic
            Transformation Program under the Prime Minister's Office. This
            project achieved remarkable success, earning it a Certificate of
            Commendation from The Prime Minister of Malaysia and solidifying Dr.
            Wong's reputation as a capable and visionary leader.
          </p>
          <br />
          <p>
            Dr. Wong's accomplishments extend beyond his professional endeavors.
            He holds Permanent Residence status in Australia and was granted a
            Distinguished Global Talent Visa in 2021, acknowledging his
            exceptional contributions to the field of economics.
          </p>
        </div>
      </section>
      <section
        id="leigh_zhang"
        className="person_detail row "
        style={{ background: "#442F55" }}
        data-name="LEIGH ZHANG LI HUA"
      >
        <div className="left colc">
          <img src={AssetPath("BOD/leigh-zhang.png")} alt="Leigh Zhang" />
          <div className="title col">
            <strong>
              LEIGH ZHANG <br /> LI HUA
            </strong>
            <span className="urban_text">Non-Executive, </span>
            <span className="urban_text">Independent Director</span>
          </div>
        </div>

        <div className="description">
          <p>
            Ms Leigh Zhang has over 23 years of professional experience in
            investment banking and financial services in Australia specializing
            in cross border investment transactions and private equity
            investments. She is the Co-Founder and Chief Investment Officer of
            WealthSpring International Group, a boutique financial service
            provider headquartered in Sydney Australia with offices in Shanghai
            and Hangzhou China.  Prior to establishing WealthSpring
            International Group. Ms Leigh Zhang served a number of senior
            management roles for Australian financial organizations, such as
            Director of Babcock & Brown in China, CEO of CommFinance (a 100%
            owned subsidiary of CommonWealth Bank of Australia) and GM of
            Macquarie Securitisation (Shanghai). 
          </p>
          <br />
          <p>
            Ms Leigh Zhang also serves as Board Director for Maxoniq, Tell me
            Baby Media Group and WealthSpring international Group. Prior to
            migrating to Australia, Ms Leigh was an Economic lecturer in Ningbo
            University.
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
        data-name="PETRINA GOH SHZE YINN"
      >
        <div className="left colc">
          <img src={AssetPath("BOD/petrina-goh.png")} alt="Petrina Goh" />
          <div className="title col">
            <strong>
              PETRINA GOH <br /> SHZE YINN
            </strong>
            <span className="urban_text">
              Founder, Chief Executive Officer,
            </span>
            <span className="urban_text">Executive, Independent Director</span>
          </div>
        </div>

        <div className="description">
          <p>
            Petrina Goh is an accomplished professional with a diverse
            background in the technology and finance sectors. As the Co-founder
            & CEO of her own venture, she has demonstrated exceptional
            leadership and entrepreneurial prowess. Prior to this, she served as
            a tech consultant in Accenture, where she honed her expertise in the
            industry. Additionally, her tenure as an investment banker in CIMB
            Investment & Tael Partners allowed her to manage a substantial $600
            million investment portfolio, specializing in the evaluation of
            technology sector deals. Petrina's outstanding achievements have
            been recognized through prestigious accolades, including the MVCA
            Outstanding Women Entrepreneur of the year in 2018 and the Inti
            Alumni Young Entrepreneur of the Year Award in 2016. Her remarkable
            journey and expertise make her a prominent figure in both the
            technology and business realms.
          </p>
          <br />
        </div>
      </section>
    </main>
  );
}

export default DrWong;
