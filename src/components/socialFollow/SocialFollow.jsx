import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import whatsapp from '../../static/whatsapp.png'
import '../socialFollow/socialFollow.css'

export default function SocialFollow() {
  return (
    <div className="footer">
      <h3>Seguinos en</h3>
      <a href="https://www.facebook.com/BIOrigensma-107655211192697"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.instagram.com/biorigensma/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a 
      href="https://api.whatsapp.com/send?phone=5492972431277" 
      target="_blank" 
      rel="noopener noreferrer"
      >
        <img src={whatsapp} alt="whatsapp" className="btn-wsp" />
      </a>
    </div>
  )
}