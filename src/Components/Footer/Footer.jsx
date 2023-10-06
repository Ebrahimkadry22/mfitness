import { NavLink } from "react-router-dom"
import {BsFacebook ,BsWhatsapp ,BsGithub} from 'react-icons/bs';
import {AiOutlineSend } from 'react-icons/ai'
import {RiTwitterXFill } from 'react-icons/ri'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className='wapper section'>
      
      <div className='container'>
      
      <div className='listsFooter'>
      
      <div className='list'>
      <h4><span>MF</span>itness</h4>
      
      <ul>
      
      <li>100 Nallin Street, New Youk</li>
      <li>+00 000 000 00</li>
      <li>MFitness@domine.com</li>
      <li> <BsFacebook /> <RiTwitterXFill/> <BsWhatsapp /> <BsGithub /></li>

      </ul>
      
      </div>

      <div className='list'>
      <h4>Quick Links</h4>
      
      <ul>
      
      <li><NavLink to='home' >Home</NavLink></li>
      <li><NavLink to='about' >About</NavLink></li>
      
      

      </ul>

      </div>

      <div className='list'>
      <h4>News Letter</h4>
      
      <div>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nisi!
      </p>
      
      <div className="input-list">
      <input type="text" placeholder="example@domine.com" />
      <button  className="btn"><AiOutlineSend size={'1.2rem'} className="iconsend"/></button>
      </div>

      </div>

      </div>

      </div>
      <hr />
      </div>
      
      </div>
      <p className="reserved ">© 2023 eng Ibrahim Kadry. All rights reserved</p>
      </div>
  )
}

export default Footer
