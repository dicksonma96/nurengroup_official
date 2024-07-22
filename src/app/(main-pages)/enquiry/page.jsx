import AssetPath from "@/app/utils/assetpath";
import "./style.scss";
import EnquireForm from "./enquire_form";
import nodemailer from "nodemailer";

export const metadata = {
  title: "Contact Us | Nuren Group - Motherhood SuperApp, Kelabmama, Ibuencer",
  description:
    "Contact Us. Nuren Group provides parenting education and maternity wellness services",
};

function Enquire() {
  const sitekey = process.env.CAPTCHA_SITEKEY;

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
        from: process.env.SMTP_USERNAME,
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
          <strong>${formData.get("subject")}</strong>
          <br>
          <p><strong>Message:</strong></p>
          <p>${formData.get("message")}</p>
          <br>
          <p>Please take appropriate action to address this inquiry promptly.</p>
          <br>
          <p>Best regards,</p>
          <p>nurengroup.com</p>
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
    <main className="enquire section col">
      <div className="enquire_content col">
        <EnquireForm handleSubmit={handleSubmit} captcha_sitekey={sitekey} />
        <div className="map rowc">
          <Pin style={{ left: "33%", top: "20%" }} delay={0.2} />
          <Pin style={{ left: "32%", top: "31%" }} delay={0} />
          <Pin style={{ left: "36%", top: "36%" }} delay={0.4} />
          <Pin style={{ right: "16%", bottom: "4%" }} delay={0.2} />

          <img src={AssetPath("Other/map.png")} alt="" />
        </div>
      </div>
      <div className="addresses row">
        <div className="address col">
          <strong>Australia Office:</strong>
          Nuren Group Limited (ACN: 673015597) Level 9, 505 Little Collins
          Street Melbourne VIC 3000, Australia.
        </div>
        <div className="address col">
          <strong>Malaysia Office:</strong>
          Enlinea Sdn Bhd (Reg: 201201007097 (980617-A)) H-89-1, Jaya One, 72A
          Jalan Prof Diraja Ungku Aziz, 46200 Petaling Jaya, Selangor, Malaysia.
        </div>
        <div className="address col">
          <strong>Thailand Office:</strong>
          Unit B14, 23rd Floor, Serm-Mit Tower, 159/37 Sukhumvit Road (Asoke
          21), Khlong Toei Nuea, Watthana, Bangkok 10110, Thailand.
        </div>
        <div className="address col">
          <strong>Singapore Office:</strong>
          151 Chin Swee Road, #07-12 Manhattan House, Singapore 169876.
        </div>
      </div>
    </main>
  );
}

function Pin({ style, delay }) {
  return (
    <div className="pin rowc" style={style}>
      <div className="pin1" style={{ animationDelay: `-${delay}s` }}></div>
      <div className="pin2" style={{ animationDelay: `-${delay}s` }}></div>
      <div className="pin3" style={{ animationDelay: `-${delay}s` }}></div>
    </div>
  );
}

export default Enquire;
