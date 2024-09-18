import React, { useContext } from 'react'
import logo from "../../assets/Logo.png";
import Darklogo from "../../assets/DarkLogo.png";
import { ModeContext } from '../../Context/ModeContext';
function Footer() {

    const {theme} = useContext(ModeContext);
  return (
    <>
        <footer className="footer bg-base-200 text-base-content p-10 mt-14">
        <aside className='flex flex-col gap-6'>
         {theme === "light" ? <img src={logo} alt='img' /> : <img src={Darklogo} alt='img' />}
            <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
            </p>
        </aside>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover" href='#'>About us</a>
    <a className="link link-hover" href='#'>Blog</a>
    <a className="link link-hover" href='#'>Contact Us</a>
    <a className="link link-hover" href='#'>Pricing</a>
    <a className="link link-hover" href='#'>Testimonials</a>
  </nav>
  <nav>
    <h6 className="footer-title">Support</h6>
    <a className="link link-hover" href='#'>Help center</a>
    <a className="link link-hover" href='#'>Terms of use</a>
    <a className="link link-hover" href='#'>Legal</a>
    <a className="link link-hover" href='#'>Privacy policy</a>
    <a className="link link-hover" href='#'>Status</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-accent join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    </>
  )
}

export default Footer