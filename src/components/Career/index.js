import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Career = () => (
  <>
    <Header />
    <div>
      <div className="career-card1">
        <div className="career-card1-text-card">
          <h1 className="career-card1-heading">
            Talent wins games, but teamwork and intelligence win championships.
          </h1>
          <p className="career-card1-para">
            At Websort, we bring digital ideas to life through expert web and
            app development, digital marketing, and UI/UX design. Based in
            Bangalore, we build responsive websites and mobile apps, enhance
            online visibility with SEO, PPC, and social media, and design
            user-friendly interfaces. Choose Websort for innovative, tailored
            digital solutions.
          </p>
        </div>
        <div className="career-card1-image-card">
          <img
            src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750495669/image_24_qppxos.png"
            alt="Career Img"
            className="career-card1-image"
          />
        </div>
      </div>
      <div className="career-card2">
        <h1 className="career-card2-heading">
          Internship Opportunities at Websort
        </h1>
        <div className="career-card2-image-card">
          <div className="career-card2-image1-card">
            <img
              src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750495338/image_29_jf7fd0.png"
              alt="Career Img"
              className="career-card-image"
            />
            <p className="career-card2-image-text">Marketing</p>
          </div>
          <div className="career-card2-image1-card">
            <img
              src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750496448/image_30_1_oy6jub.jpg"
              alt="Career Img"
              className="career-card-image"
            />
            <p className="career-card2-image-text">App Development</p>
          </div>
          <div className="career-card2-image1-card">
            <img
              src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750496440/image_7_obfctk.jpg"
              alt="Career Img"
              className="career-card-image"
            />
            <p className="career-card2-image-text">Web Development</p>
          </div>
          <div className="career-card2-image1-card">
            <img
              src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750496433/image_31_1_ysliqg.jpg"
              alt="Career Img"
              className="career-card-image"
            />
            <p className="career-card2-image-text">UI UX</p>
          </div>
        </div>
      </div>
      <div className="career-card3">
        <h1 className="career-card3-heading">
          Fill out the form and our team will get back to you shortly
        </h1>
        <form>
          <div className="career-card3-form-card1">
            <div className="career-card3-form-card11">
              <label
                className="career-form-label-text"
                htmlFor="careerFormFirstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="careerFormFirstName"
                className="career-form-input-text"
              />
            </div>
            <div className="career-card3-form-card11">
              <label
                className="career-form-label-text"
                htmlFor="careerFormSecondName"
              >
                Second Name
              </label>
              <input
                type="text"
                id="careerFormSecondName"
                className="career-form-input-text"
              />
            </div>
            <div className="career-card3-form-card11">
              <label
                className="career-form-label-text"
                htmlFor="careerFormEmail"
              >
                Email Address
              </label>
              <input
                type="text"
                id="careerFormEmail"
                className="career-form-input-text"
              />
            </div>
          </div>
          <div className="career-card3-form-card1">
            <div className="career-card3-form-card11">
              <label
                className="career-form-label-text"
                htmlFor="careerFormPhone"
              >
                Phone
              </label>
              <input
                type="text"
                id="careerFormPhone"
                className="career-form-input-text"
              />
            </div>
            <div className="career-card3-form-card11">
              <label
                className="career-form-label-text"
                htmlFor="careerFormCompany"
              >
                Company
              </label>
              <input
                type="text"
                id="careerFormCompany"
                className="career-form-input-text"
              />
            </div>
            <div className="career-card3-form-card11">
              <label
                className="career-form-label-text"
                htmlFor="careerFormMessage"
              >
                Message
              </label>
              <input
                type="textarea"
                id="career message"
                className="career-form-input-textarea"
              />
            </div>
          </div>
          <button type="submit" className="career-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer />
  </>
)

export default Career
