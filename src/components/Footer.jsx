import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'
 

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={"https://avatars.githubusercontent.com/u/147420243?v=4&size=64"} alt="founder" />
            <h2>muzamil nabi </h2>
            <p>Motivation is temporary but discipline last forever.</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://youtube.com" target = {"blank"}><AiFillYoutube /></a>
                <a href="https://instagram.com/muzamil_nabii" target = {"blank"}><AiFillInstagram /></a>
                <a href="https://github.com/muzamil1233" target = {"blank"}><AiFillGithub /></a>
                <a href="https://linkedin.com/in/muzamil-nabi-1a2435224" target = {"blank"}><AiFillLinkedin /></a>

            </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp /></a>
    </footer>
  )
}

export default Footer
