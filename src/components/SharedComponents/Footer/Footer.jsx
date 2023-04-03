import React from 'react'
import logo from '../../../assets/Hostinger_Logo.png';
import visa from '../../../assets/visa.svg';
import mastercard from '../../../assets/mastercard.svg';
import amex from '../../../assets/amex.svg';
import discoverCard from '../../../assets/discover.svg';
import jcb from '../../../assets/jcb.svg';
import dinersclub from '../../../assets/dinersclub.svg';
import maestro from '../../../assets/maestro.svg';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';

function Footer() {
    return (
        <div className=' px-24 py-10 mt-10 bg-lightGray flex flex-col'>
            <div className=' grid grid-cols-6 gap-4 my-8'>
                <div className=' w-[350px] col-span-2'>
                    <div>
                        <img src={logo} alt="HOSTINGER" className='w-[100%] max-w-[160px] max-h-[80px] mb-6' />
                    </div>
                    <p className=' text-sm my-8'>We are a web hosting provider on a mission to bring success to everyone who goes online.
                        We do it by constantly improving server technology, providing professional support, and making the web hosting experience seamless.</p>
                    <div className=' flex flex-wrap gap-2'>
                        <img src={visa} alt="Visa" />
                        <img src={mastercard} alt="mastercard" />
                        <img src={amex} alt="amex" />
                        <img src={discoverCard} alt="discover" />
                        <img src={jcb} alt="jcb" />
                        <img src={maestro} alt="maestro" />
                        <img src={dinersclub} alt="dinersclub" />
                        <button className=' font-medium text-primary'>And more</button>
                    </div>
                </div>

                <div className=' w-[150px] flex flex-col gap-2'>
                    <h1 className=' text-xl text-primary font-semibold my-2'>HOSTING</h1>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Web Hosting</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Professional Web Hosting</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>VPS Hosting</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Minecraft Server Hosting</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>CyberPanel Hosting</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Cloud Hosting</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>WordPress Hosting</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Email Hosting</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>CMS Hosting</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>eCommerce Hosting</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Free Website Hosting</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Online Store</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Website Builder</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Website Templates</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Buy Hosting</Link>

                </div>
                <div className=' w-[150px] flex flex-col gap-2'>
                    <h1 className=' text-xl text-primary font-semibold my-2'>DOMAINS</h1>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Domain Name Search</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Domain Transfer</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Free Domain</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>XYZ Domain</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Cheap Domain Names</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Domain Extensions</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>WHOIS Lookup</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Free SSL Certificate</Link>

                </div>
                <div className=' w-[150px] flex flex-col gap-2'>
                    <h1 className=' text-xl text-primary font-semibold my-2'>INFORMATION</h1>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Migrate to Hostinger</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>System Status</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Affiliate Program</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Payment Methods</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Wall of Fame</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Reviews</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Pricing</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Free SSL Certificate</Link>
                    <h1 className=' text-xl text-primary font-semibold my-2 mt-6'>LEGAL</h1>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Privacy Policy</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Terms of Service</Link>

                </div>
                <div className=' w-[150px] flex flex-col gap-2'>
                    <h1 className=' text-xl text-primary font-semibold my-2'>COMPANY</h1>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>About Hostinger</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Our Technology</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Career</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Newsroom</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Roadmap</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Contact Us</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Blog</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Student Discount</Link>
                    <h1 className=' text-xl text-primary font-semibold my-2 mt-6'>HELP</h1>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Tutorials</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Knowledge Base</Link>
                    <Link to='/' className=' text-sm text-primary hover:text-primary-dark'>Report Abuse</Link>

                </div>
            </div>
            {/* Social media icon */}
            <div className=' text-3xl flex justify-end gap-2 my-8'>
                <p className=' text-primary cursor-pointer hover:text-primary-dark transition duration-200'><AiFillLinkedin /></p>
                <p className=' text-primary cursor-pointer hover:text-primary-dark transition duration-200'><AiFillFacebook /></p>
                <p className=' text-primary cursor-pointer hover:text-primary-dark transition duration-200'><AiFillInstagram /></p>
                <p className=' text-primary cursor-pointer hover:text-primary-dark transition duration-200'><AiFillTwitterSquare /></p>
                <p className=' text-primary cursor-pointer hover:text-primary-dark transition duration-200'><AiFillYoutube /></p>
            </div>

            <div className=' w-full h-[2px] bg-gray mb-8'></div>
            <div className=' flex  justify-between mb-6 mt-1 px-6 text-primary text-sm'>
                <p>&copy; 2004-2023 hostinger.com - Premium Web Hosting, Cloud, VPS & Domain Registration Services.</p>
                <p>Prices are listed without VAT</p>
            </div>
        </div>
    )
}

export default Footer