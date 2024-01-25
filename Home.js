import './Home.css'
import image from './image.jpg'
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";


const Home = () => {
  return(
    <>
    <main>
      <h1 className="name">DEDE SUPRIATNA</h1>
      <article className="cards">
        <p className="paragraf">Hallo Saya Seorang Web Programing,<br></br>
          Saya sudah mengeluti bidang ini selama 
          hampir 2 tahun,<br></br> saya mahir di bidang HTML, Css, 
          React, Next, angular, tailwin, SQL Dll...<br></br>
          Jika Minat Hubungi Kami.
        </p>
      </article>
      <div className="btn">
        <button>HUBUNGI KAMI</button>
      <div className="images">
        <img 
            src={image}
            alt="profile"
            sizes={600}
            
            />
      </div>
      </div>
    </main>
      <div className="icon">
           <FaTwitterSquare className="searchicon"/>
           <FaGithubSquare className="searchicon"/>
           <MdEmail className="searchicon"/>
           <TiSocialInstagram className="searchicon"/>
      </div>
      
    </>
  )
}
export default Home