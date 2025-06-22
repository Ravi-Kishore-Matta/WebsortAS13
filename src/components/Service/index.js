import './index.css'
import Header from '../Header'
import Footer from '../Footer'

const Service = () => (
  <>
    <Header />
    <div className="services-card1">
      <h1 className="services-heading">Our Services</h1>
      <div className="services1-card">
        <div className="services1-image-card">
          <img
            src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750414962/09301d3daf6cd4d731199dc2e4fb42fd1f0cfb3a_1_hns0pd.jpg"
            alt="services1"
            className="services1-image"
          />
        </div>
        <div className="services1-text-card">
          <h1 className="services1-heading">UI/UX Design</h1>
          <p className="services1-para">
            We design clean, intuitive, and engaging user interfaces that
            enhance the overall user experience. From wireframes to final
            designs, our focus is on usability, consistency, and creating
            visually appealing digital products that users love.
          </p>
        </div>
      </div>
      <div className="services1-card">
        <div className="services2-image-card">
          <img
            src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750414968/055c1fe8a92fb48ac917a89f08452005d34671dd_vxys1n.jpg"
            alt="services1"
            className="services1-image"
          />
        </div>
        <div className="services2-text-card">
          <h1 className="services1-heading">Web Development</h1>
          <p className="services1-para">
            Planned and executed a digital marketing strategy including SEO,
            social media marketing, and content creation. Improved website
            traffic and engagement through targeted campaigns and regular
            performance tracking.
          </p>
        </div>
      </div>
    </div>
    <div className="services-card2">
      <div className="services1-card">
        <div className="services1-image-card">
          <img
            src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750414596/aa65fe867c31b42c007cd24e67e251d288917393_edjpn3.jpg"
            alt="services1"
            className="services1-image"
          />
        </div>
        <div className="services1-text-card">
          <h1 className="services1-heading">App Development</h1>
          <p className="services1-para">
            Developed a cross-platform mobile app using Flutter for Android and
            iOS. The app allows users to browse services, make bookings, and
            receive real-time updates. Designed with a clean UI and smooth
            navigation to ensure a seamless user experience.
          </p>
        </div>
      </div>
    </div>
    <div className="services-card3">
      <div className="services1-card">
        <div className="services2-image-card">
          <img
            src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750482302/Rectangle_163_1_kewffq.jpg"
            alt="services1"
            className="services1-image"
          />
        </div>
        <div className="services2-text-card">
          <h1 className="services1-heading">Digital Marketing</h1>
          <p className="services1-para">
            Designed and developed a responsive, SEO-optimized website using
            React. The site includes a modern UI, fast loading speed, and full
            mobile compatibility. Key features include service pages, contact
            form, and an easy-to-manage content structure to support client
            updates and user engagement.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </>
)

export default Service
