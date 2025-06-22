import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Contact = () => (
  <>
    <Header />
    <div>
      <div className="contact-card1">
        <div className="contact-card1-text-card">
          <h1 className="cantact-card1-heading">Contact Us</h1>
          <p className="contact-card1-para">
            Have a question, idea, or project in mind? We are here to help — get
            in touch with us today.
          </p>
        </div>
      </div>
      <div className="contact-card2">
        <div className="contact-card22">
          <h1 className="contact-card2-heading">
            Need support or want to collaborate?
          </h1>
          <p className="contact-card2-para">
            Fill out the form and our team will get back to you shortly
          </p>
          <form>
            <div className="contact-card2-form-card1">
              <div className="contact-card2-form-card11">
                <label
                  className="contact-form-label-text"
                  htmlFor="contactFormFirstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="contactFormFirstName"
                  className="contact-form-input-text"
                />
              </div>
              <div className="contact-card2-form-card11">
                <label
                  className="contact-form-label-text"
                  htmlFor="contactFormSecondName"
                >
                  Second Name
                </label>
                <input
                  type="text"
                  id="contactFormSecondName"
                  className="contact-form-input-text"
                />
              </div>
              <div className="contact-card2-form-card11">
                <label
                  className="contact-form-label-text"
                  htmlFor="contactFormEmail"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  id="contactFormEmail"
                  className="contact-form-input-text"
                />
              </div>
            </div>
            <div className="contact-card2-form-card1">
              <div className="contact-card2-form-card11">
                <label
                  className="contact-form-label-text"
                  htmlFor="contactFormPhone"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="contactFormPhone"
                  className="contact-form-input-text"
                />
              </div>
              <div className="contact-card2-form-card11">
                <label
                  className="contact-form-label-text"
                  htmlFor="contactFormCompany"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="contactFormCompany"
                  className="contact-form-input-text"
                />
              </div>
              <div className="contact-card2-form-card11">
                <label
                  className="contact-form-label-text"
                  htmlFor="contactFormMessage"
                >
                  Message
                </label>
                <input
                  type="textarea"
                  id="contact message"
                  className="contact-form-input-textarea"
                />
              </div>
            </div>
            <button type="submit" className="contact-submit-btn">
              Submit
            </button>
          </form>
        </div>
        <h1 className="contact-address-heading">Address</h1>
        <div className="contact-address-map-card">
          <img
            src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750500026/websort_bangalore_-_Google_Maps_-_Google_Chrome_08-06-2025_21_54_26_2_pw6hxc.jpg"
            alt="map"
            className="contact-map-img"
          />
          <p className="contact-map-text">
            Based in Bangalore | contact@websort.com | +91-XXXXXXXXXX
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </>
)

export default Contact
