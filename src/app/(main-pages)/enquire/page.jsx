import AssetPath from "@/app/utils/assetpath";
import "./style.scss";
import EnquireForm from "./enquire_form";
import nodemailer from "nodemailer";

function Enquire() {
  const handleSubmit = async (event) => {
    "use server";
    let formData = event;

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        tls: {
          ciphers: "SSLv3",
          rejectUnauthorized: false,
        },

        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      const mailSetting = {
        from: formData.get("email"),
        to: process.env.CONTACT_RECIPIENT,
        subject: `Inquiry from Nurengroup Website`,
        html: `
        <p><strong>Subject:</strong> New Inquiry from ${formData.get(
          "name"
        )}</p>
          <br>
          <p>Dear Team,</p>
          <br>
          <p>You have received a new inquiry with the following details:</p>
          <ul>
            <li>User Type: ${formData.get("userType")}</li>
            <li>Enquiry Type: ${formData.get("enquiryType")}</li>
            <li>Name: ${formData.get("name")}</li>
            <li>Email: ${formData.get("email")}</li>
            <li>Phone: ${formData.get("phone")}</li>
            ${
              formData.get("fileUri") ? "<li>With file attached below</li>" : ""
            }
          </ul>
          <p><strong>Message:</strong></p>
          <p>${formData.get("message")}</p>
          <br>
          <p>Please take appropriate action to address this inquiry promptly.</p>
          <br>
          <p>Best regards,</p>
          <p>Nurengroup official website</p>
        `,
      };

      if (formData.get("fileUri")) {
        mailSetting["attachments"] = [
          {
            filename: formData.get("file").name,
            path: formData.get("fileUri"),
          },
        ];
      }

      const mail = await transporter.sendMail(mailSetting);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

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
        <EnquireForm handleSubmit={handleSubmit} />
      </div>
    </main>
  );
}

export default Enquire;
