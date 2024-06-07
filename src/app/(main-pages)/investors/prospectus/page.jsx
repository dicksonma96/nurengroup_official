import React from "react";
import AssetPath from "@/app/utils/assetpath";
import Link from "next/link";
import "./style.scss";
import test from "@/assets/img/test.jpg";
import Image from "next/image";

export const metadata = {
  title: "Prospectus | Nuren Group Limited (NSX:NUR) - NSX Australia IPO 2024",
  description:
    "Download Prospectus of Nuren Group Limited (NSX:NUR) IPO 2024 Australia. If you have any questions about the Offer or any other matter, please contact your professional advisor.",
};

function Prospectus() {
  return (
    <div className="prospectus col">
      <div className="banner rowc">
        <img src={AssetPath("prospectus/page_banner.jpg")} alt="" />
      </div>

      <div className="content col">
        <h3>WEBSITE DISCLAIMER</h3>
        <p>
          Before downloading, printing or viewing the Prospectus, please
          carefully read this information. By accessing the Prospectus (by
          clicking on the link below) you agree to and acknowledge that you have
          read and accept these terms and conditions of access. The information
          on this page is not part of the Prospectus. If you do not understand
          it, you should consult your professional adviser without delay.
        </p>
        <h3>Applications</h3>
        <p>
          Anyone who wants to acquire securities in the Company will need to
          carefully consider the Prospectus and complete an application form
          attached to or accompanied by the Prospectus (Application Form). The
          completed Application Form must be lodged, and the application monies
          paid, in accordance with the details set out in the Prospectus and
          Application Form. The Corporations Act 2001 (Cth) prohibits any person
          from passing onto another person an Application Form unless it is
          attached to or accompanied by a complete and unaltered version of the
          Prospectus.
          <br /> <br />
          The Company reserves the right not to accept an Application Form from
          a person if it has reason to believe that when that person was given
          access to the electronic Application Form, it was not provided
          together with the electronic Prospectus and any relevant supplementary
          or replacement prospectus or any of those documents were incomplete or
          altered.
          <br /> <br />
          If an Application Form is not completed correctly or if the
          accompanying payment is the wrong amount, the Company may, in its
          discretion, still treat the Application Form to be valid. The
          Company’s decision to treat an application as valid and how to
          construe, amend or complete the Application Form, will be final.
        </p>
        <h3>No Advice</h3>
        <p>
          Nothing contained on this website or in the Prospectus constitutes
          investment, financial, legal, business, tax or other advice. In
          particular, the information on this website and in the Prospectus does
          not take into account your financial or investment objectives,
          financial situation or particular needs. In making an investment
          decision, you must rely on your own examination of the Company, the
          securities being offered for subscription and the terms of the
          offering, including the merits and risks involved. You should consult
          your professional advisers for investment, financial, legal, business
          or tax advice.
        </p>
        <h3>Acknowledgement</h3>
        <p>
          By clicking the “Accept” button below, you acknowledge and agree that:
        </p>
        <ol>
          <li>
            You have read and understood the above terms and conditions to
            access the electronic version of the Prospectus; and
          </li>

          <li>
            You will not pass onto any other person the Application Form unless
            it is attached to or accompanied by the complete and unaltered
            electronic version of the Prospectus.
          </li>
        </ol>
        <hr />

        <Link className="download_btn" href="prospectus/preview">
          Accept and Download
        </Link>
      </div>
    </div>
  );
}

export default Prospectus;
