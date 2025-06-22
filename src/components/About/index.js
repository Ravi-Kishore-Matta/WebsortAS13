import {Link} from 'react-router-dom'
import {useState} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import {Home4CardImage} from './styledComponents'
import './index.css'

const About = () => {
  const [imageAndStyle, setImageAndStyle] = useState({
    homeCard4Image:
      'https://res.cloudinary.com/doyw7v77k/image/upload/v1750416896/8b42fb6448b4bd24aae783308ee3e6c87fd6ea24_osibue.png',
    homeCard4Text: 'AI and IoT-driven products',
    activeBtn1: true,
    activeBtn2: false,
    activeBtn3: false,
  })

  const onClickBtn1 = () => {
    setImageAndStyle({
      homeCard4Image:
        'https://res.cloudinary.com/doyw7v77k/image/upload/v1750416896/8b42fb6448b4bd24aae783308ee3e6c87fd6ea24_osibue.png',
      homeCard4Text: 'AI and IoT-driven products',
      activeBtn1: true,
      activeBtn2: false,
      activeBtn3: false,
    })
  }

  const onClickBtn2 = () => {
    setImageAndStyle({
      homeCard4Image:
        'https://res.cloudinary.com/doyw7v77k/image/upload/v1750424443/f5ef6c41417f157c2adf6636fdd5962a62f08fc8_couyhh.png',
      homeCard4Text:
        'Creating a tech community hub for developers and entrepreneurs',
      activeBtn1: false,
      activeBtn2: true,
      activeBtn3: false,
    })
  }

  const onClickBtn3 = () => {
    setImageAndStyle({
      homeCard4Image:
        'https://res.cloudinary.com/doyw7v77k/image/upload/v1750424422/99c71398ecb55dd4252e6d6462d38947682b7cec_wfipq6.png',
      homeCard4Text:
        'Creating a tech community hub for developers and entrepreneurs',
      activeBtn1: false,
      activeBtn2: false,
      activeBtn3: true,
    })
  }

  const activeBtn1Style = imageAndStyle.activeBtn1
    ? 'https://res.cloudinary.com/doyw7v77k/image/upload/v1750581024/Vector_2_yryw1i.png'
    : 'https://res.cloudinary.com/doyw7v77k/image/upload/v1750580526/Vector_1_m7qcry.png'
  const activeBtn2Style = imageAndStyle.activeBtn2
    ? 'https://res.cloudinary.com/doyw7v77k/image/upload/v1750581024/Vector_2_yryw1i.png'
    : 'https://res.cloudinary.com/doyw7v77k/image/upload/v1750580526/Vector_1_m7qcry.png'
  const activeBtn3Style = imageAndStyle.activeBtn3
    ? 'https://res.cloudinary.com/doyw7v77k/image/upload/v1750581024/Vector_2_yryw1i.png'
    : 'https://res.cloudinary.com/doyw7v77k/image/upload/v1750580526/Vector_1_m7qcry.png'
  return (
    <div className="about-main-card">
      <Header />
      <div className="home-card1">
        <h1 className="home-card1-heading">
          Digitizing Ideas with Clean Code & Modern Design
        </h1>
        <p className="home-card1-para">
          At Websort, we turn digital visions into reality with expert web and
          app development, UI/UX design, and digital marketing. Based in
          Bangalore, we craft responsive websites, innovative mobile apps, and
          drive results through SEO, PPC, and social media strategies.
        </p>
        <div className="home-card1-btn-card">
          <Link to="/contact">
            <button className="home-card1-btn1" type="button">
              Contact us
            </button>
          </Link>
          <Link to="/">
            <button className="home-card1-btn2" type="button">
              About us
            </button>
          </Link>
        </div>
      </div>
      <div className="home-card2">
        <div className="home-card2-bg-color">
          <div className="home-card2-about1">
            <h1 className="home-card2-about1-heading">About Us</h1>
            <p className="home-card2-about1-para">
              Where Innovation <br className="home-card2-br" />
              Meets Execution
            </p>
          </div>
          <div className="home-card2-about2">
            <p className="home-card2-about2-para">
              Websort builds websites, apps, and digital marketing solutions to
              help you grow online. Based in Bangalore, we focus on smart
              design, strong tech, and real results.We specialize in web
              development, mobile app development, UI/UX design, and digital
              marketing—delivering responsive websites, high-performance
              Android/iOS apps, and visually engaging interfaces. Our digital
              marketing expertise spans SEO, PPC, social media marketing, and
              content creation, helping businesses grow and connect with their
              ideal audience.
            </p>
            <button type="button" className="home-card2-about-btn">
              Know More
            </button>
          </div>
        </div>
        <div className="home-card3">
          <h1 className="home-card3-heading">Our Project</h1>
          <div className="home-card3-project-image-card">
            <div className="home-card3-project-image1-card">
              <img
                src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750414596/aa65fe867c31b42c007cd24e67e251d288917393_edjpn3.jpg"
                alt="project-image1"
                className="home-card3-project-image1"
              />
              <p className="home-card3-project-title1">App Developement</p>
            </div>
            <div className="home-card3-project-image1-card">
              <img
                src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750414962/09301d3daf6cd4d731199dc2e4fb42fd1f0cfb3a_1_hns0pd.jpg"
                alt="project-image1"
                className="home-card3-project-image2"
              />
              <p className="home-card3-project-title2">UI/UX Design</p>
            </div>
            <div className="home-card3-project-image1-card">
              <img
                src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750414968/055c1fe8a92fb48ac917a89f08452005d34671dd_vxys1n.jpg"
                alt="project-image1"
                className="home-card3-project-image1"
              />
              <p className="home-card3-project-title1">Web Developement</p>
            </div>
          </div>
        </div>
        <div className="home-card4">
          <h1 className="home-card4-heading">
            Fueling the Future with Innovation
          </h1>
          <Home4CardImage bgImg={imageAndStyle.homeCard4Image}>
            <div className="home-card4-bg">
              <p className="home-card4-para">{imageAndStyle.homeCard4Text}</p>
            </div>
          </Home4CardImage>
          <div className="home-card4-btn-card">
            <button type="button" className="btn" onClick={onClickBtn1}>
              <img
                src={activeBtn1Style}
                alt="homeCard4NextImage"
                className={activeBtn1Style}
              />
            </button>
            <button type="button" className="btn" onClick={onClickBtn2}>
              <img
                src={activeBtn2Style}
                alt="homeCard4NextImage"
                className={activeBtn2Style}
              />
            </button>
            <button type="button" className="btn" onClick={onClickBtn3}>
              <img
                src={activeBtn3Style}
                alt="homeCard4NextImage"
                className={activeBtn3Style}
              />
            </button>
          </div>
          <button type="button" className="home-card4-know-btn">
            Know More
          </button>
        </div>
        <div className="home-card5-bg">
          <div className="home-card5-card1">
            <h1 className="home-card5-card1-heading">
              See Our Work in Web Design & Development
            </h1>
            <p className="home-card5-card1-para">
              We specialize in building responsive, user-friendly websites
              tailored to client needs. Take a look at our recent projects to
              see how design and functionality come together.
            </p>
            <button type="button" className="home-card5-btn">
              Explore more
            </button>
          </div>
          <div className="home-card5-card2">
            <img
              src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750481834/image_13_oj0pjq.jpg"
              alt="homeCard5Image"
              className="home-card5-imgae"
            />
          </div>
        </div>
        <div className="home-card6">
          <div className="home-card6-card1">
            <h1 className="home-card6-heading">Why We Stand Out</h1>
            <p className="home-card6-para">
              At Websort, we don’t just build digital products — we build
              careers. By joining our team, you become part of a creative and
              collaborative environment that values innovation, continuous
              learning, and personal growth.
            </p>
          </div>
          <div className="home-card6-card2">
            <img
              src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750482294/Mask_group_zxtyw2.jpg"
              alt="homeCard6Image"
              className="home-card6-image"
            />
          </div>
        </div>
        <div className="home-card7">
          <h1 className="home-card7-heading">
            One of our proudest achievements.
          </h1>
          <p className="home-card7-para">
            A standout from our portfolio, this project exemplifies the quality,
            creativity, and performance we bring to every solution. It is a true
            reflection of our commitment to excellence.
          </p>
          <div className="home-card7-image-card">
            <div className="home-card7-image1-card">
              <img
                src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750482302/Rectangle_163_1_kewffq.jpg"
                alt="homeCard7Image"
                className="home-card7-image"
              />
              <h1 className="home-card7-image-heading">Web Development</h1>
              <button type="button" className="home-card7-image-btn">
                Explore more
              </button>
            </div>
            <div className="home-card7-image1-card">
              <img
                src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750414596/aa65fe867c31b42c007cd24e67e251d288917393_edjpn3.jpg"
                alt="homeCard7Image"
                className="home-card7-image"
              />
              <h1 className="home-card7-image-heading">App Development</h1>
              <button type="button" className="home-card7-image-btn">
                Explore more
              </button>
            </div>
            <div className="home-card7-image1-card">
              <img
                src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750482309/Rectangle_165_c3x8bw.jpg"
                alt="homeCard7Image"
                className="home-card7-image"
              />
              <h1 className="home-card7-image-heading">Digital Marketing</h1>
              <button type="button" className="home-card7-image-btn">
                Explore more
              </button>
            </div>
          </div>
        </div>
        <div className="home-card8">.</div>
        <div className="home-card9">
          <h1 className="home-card9-heading">
            Questions? <br />
            We are here to <br />
            answer them!
          </h1>
          <form type="sumbit" className="home-card9-form">
            <label htmlFor="homeCard9Name" className="home-card9-label">
              Name
            </label>
            <input
              type="text"
              className="home-card9-input"
              id="homeCard9Name"
            />
            <label htmlFor="homeCard9Email" className="home-card9-label">
              Email
            </label>
            <input
              type="text"
              className="home-card9-input"
              id="homeCard9Email"
            />
            <label htmlFor="homeCard9Number" className="home-card9-label">
              Number
            </label>
            <input
              type="text"
              className="home-card9-input"
              id="homeCard9Number"
            />
            <label htmlFor="homeCard9Message" className="home-card9-label">
              Message
            </label>
            <input
              type="textarea"
              rows="4"
              cols="50"
              className="home-card9-input-textarea"
              id="homeCard9Message"
            />
          </form>
        </div>
        <div className="home-card10">
          <h1 className="home-card10-heading">
            See what opportunities await you
          </h1>
          <button type="button" className="home-card10-button">
            Explore More
          </button>
        </div>
        <Footer />
      </div>
    </div>
  )
}
export default About
