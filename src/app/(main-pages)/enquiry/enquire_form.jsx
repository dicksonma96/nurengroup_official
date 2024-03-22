"use client";
import { useState } from "react";
import SubmitBtn from "./submit_btn";
import Image from "next/image";
import Check from "../../../assets/img/icon/check.svg";
import ReCAPTCHA from "react-google-recaptcha";

function EnquireForm({ handleSubmit, captcha_sitekey }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [captcha, setCaptcha] = useState(null);

  const onSubmit = async (e) => {
    try {
      if (captcha == null) throw "Recaptcha not verified!";

      setError(null);
      let formData = e;
      let file = formData.get("file");

      if (file instanceof File && file.name != "") {
        // Creating a promise to resolve once the file is read
        const fileReadPromise = new Promise((resolve) => {
          const reader = new FileReader();

          reader.onload = function (event) {
            const dataUri = event.target.result;
            formData.set("fileUri", dataUri);

            // Resolve the promise when the file is read and fileUri is set
            resolve();
          };

          reader.readAsDataURL(file);
        });

        // Wait for the file to be read and fileUri to be set
        await fileReadPromise;
      }

      let res = await handleSubmit(e);
      setSubmitted(res);
      if (res == false) throw "error";
    } catch (e) {
      setError(e);
    }
  };

  return (
    <>
      {submitted ? (
        <div className="submit_success colc">
          <Image src={Check} alt="Success check icon" />
          <strong>Thank You</strong>
          <p className="urban_text">
            Your submission has been sent. <br />
            We will reach you out soon.
          </p>
        </div>
      ) : (
        <>
          <h1>Say Hello to us!</h1>
          <p className="urban_text">
            Let’s talk business or just have a coffee. We would love to hear
            from you!
          </p>
          <br />

          <hr />
          <br />
          <form action={onSubmit} className="contact_form">
            {error && (
              <div className="errormessage" style={{ gridColumn: "1 / 3" }}>
                {error}
              </div>
            )}
            <select name="userType" required>
              <option value="Prospective Client">
                I am a Prospective Client
              </option>
              <option value="Media Prospect">I am a Media Prospect</option>
              <option value="Career Explorer">I am a Career Explorer</option>
              <option value="Investor">I am an Investor</option>
            </select>

            <select name="enquiryType" required>
              <option value="General Enquiries">General Enquiries</option>
              <option value="Media Enquiries">Media Enquiries</option>
              <option value="Job Application">Job Application</option>
              <option value="Investors Relations">Investors Relations</option>
            </select>

            <input name="name" type="text" placeholder="Name" required />
            <input name="email" type="text" placeholder="Email" required />
            <input
              name="phone"
              type="text"
              placeholder="Mobile Number"
              required
            />
            <input name="file" type="file" placeholder="Attach Resume" />
            <textarea
              name="message"
              placeholder="Message"
              required
              style={{ gridColumn: "1/3" }}
            ></textarea>
            <ReCAPTCHA
              sitekey={captcha_sitekey}
              style={{ gridColumn: "1 / 3" }}
              onChange={setCaptcha}
            />
            <SubmitBtn />
          </form>
        </>
      )}
    </>
  );
}

export default EnquireForm;
