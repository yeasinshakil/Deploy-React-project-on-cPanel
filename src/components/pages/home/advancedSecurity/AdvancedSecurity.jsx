import React from 'react';
import { BsCheck } from 'react-icons/bs';
import maximizeimg from '../../../../assets/advanced-security-features-1x.webp';
import pcmag from '../../../../assets/pcmag-light-1x.webp';
import sfgate from '../../../../assets/sfgate-light-1x.webp';
import cnet from '../../../../assets/cnet-light-1x.webp';

function AdvancedSecurity() {
    const recommendData = [
        {
            img: pcmag,
            description: `Hostinger proved itself a reliable web hosting service. In fact, our test site didn't go down once during the 14-day observation period.`
        },
        {
            img: cnet,
            description: 'Plans include SSL certificates and all servers have an advanced security module to protect your data.'
        },
        {
            img: sfgate,
            description: 'With DDoS protection, auto-updates, automatic website backups, and other security measures, you can rest assured that your website is secured'
        },
    ]
    return (
        <div className=' px-24 bg-purple pt-20 pb-10'>
            <div className=' grid grid-cols-2 items-center'>
                <img src={maximizeimg} alt="" />
                <div className=' px-20 text-white font-medium'>
                    <h1 className=' text-4xl text-white font-semibold mb-10'>Advanced Security Features</h1>
                    <p className=' flex my-6'><span className=' text-xl  font-bold mr-2'><BsCheck /></span> Get unlimited SSL security certificates to encrypt your websites’ traffic.</p>
                    <p className=' flex my-6'><span className=' text-xl  font-bold mr-2'><BsCheck /></span> Protect your website from DDoS attacks with Cloudflare protected nameservers.</p>
                    <p className=' flex my-6'><span className=' text-xl font-bold mr-2'><BsCheck /></span> Secure your files with automatic backups.</p>
                    <p className=' flex my-6'><span className=' text-xl font-bold mr-2'><BsCheck /></span> Ensure your website is up and running with our 99.9% uptime guarantee.</p>
                </div>
            </div>

            <div className=' grid grid-cols-3 justify-center items-center mt-8'>
                {recommendData.map((data, i) => (
                    <div
                        key={i}
                        className=' w-[350px] h-[220px] bg-primary-dark text-white px-10 py-8 rounded-sm'>
                        <img src={data.img} alt="" className=' pb-4' />
                        <p className=' font-medium'>{data.description}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AdvancedSecurity;