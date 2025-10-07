import { Link } from "react-router-dom";
import { IMAGES, SVGICONS } from "../constant/theme";
import { footer2data } from "../constant/alldata";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

function Footer2() { 
    let year = new Date().getFullYear()
    const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
		emailjs.sendForm('service_zubfdvh', 'template_iy1pb0b', e.target, 'user_FvNIKVJ7om2PphifhzMm2')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		e.target.reset()
	};
    return (
        <>
            <footer className="site-footer style-1">
                <div className="footer-top style-1">
                    <div className="container">
                        <div className="row sp20">
                            <div className="col-xl-3 col-md-9 col-12">
                                <div className="widget widget-logo style-1">
                                    <div className="logo-footer style-1 logo-dark">
                                        <img src={IMAGES.logo} alt="" />
                                    </div>
                                    <div className="logo-footer style-1 logo-white">
                                        <img src={IMAGES.logowhite} alt="" />
                                    </div>
                                    <p className="m-b30">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                    <Link to={"#"}> {SVGICONS.email} Example@job.com </Link>
                                </div>
                            </div>
                            {footer2data.map((item, index) => (
                                <div className="col-xl-2 col-md-3 col-sm-4" key={index}>
                                    <div className={`widget style-1 border-0 ${item.columnstand}`}>
                                        <h5 className="m-b15">{item.title}</h5>
                                        <ul className={`list-line ${item.columnstand2}`}>
                                            {item.data.map((data, i) => (
                                                <li key={i}><Link to={data.link}>{data.title}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>  
                            ))}
                            <div className="col-xl-3 col-md-6 col-12">
                                <div className="widget widget-newsletter style-1 border-0">
                                    <h5 className="m-b15">Newsletter</h5>
                                    <p className="m-b20">Sign up to our archi. point to recent updates & office </p>
                                    <div className="subscribe-form m-b20">
                                        <form className="dzSubscribe style-1" method="post" ref={form} onSubmit={sendEmail}>
                                            <div className="dzSubscribeMsg"></div>
                                            <div className="input-group style-1">
                                                <input name="dzEmail" required="required" className="form-control" placeholder="Enter a Email" type="email" />
                                                <span className="input-group-btn">
                                                    <button name="submit" value="Submit" type="submit" className="site-button style-1">Send</button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom  style-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <span> Copyright © {year} <Link to={"https://bolo.com"}> Bolo. </Link> All rights reserved. </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer2;