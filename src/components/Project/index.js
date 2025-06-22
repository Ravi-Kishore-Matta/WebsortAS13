import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Project = () => (
  <>
    <Header />
    <div className="project-card">
      <h1 className="project-heading">Our Projects</h1>
      <div className="project-image-card">
        <img
          src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750414596/aa65fe867c31b42c007cd24e67e251d288917393_edjpn3.jpg"
          alt="Project Img"
          className="project-image1"
        />
        <img
          src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750414962/09301d3daf6cd4d731199dc2e4fb42fd1f0cfb3a_1_hns0pd.jpg"
          alt="Project Img"
          className="project-image2"
        />
        <img
          src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750482302/Rectangle_163_1_kewffq.jpg"
          alt="Project Img"
          className="project-image3"
        />
      </div>
      <h1 className="project-heading">UI/UX Design</h1>
    </div>
    <Footer />
  </>
)

export default Project
