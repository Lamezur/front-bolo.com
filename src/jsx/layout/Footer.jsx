import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constant/theme';
import { footerdata } from '../constant/alldata';
import emailjs from '@emailjs/browser';

function Footer() {
	let year = new Date().getFullYear()
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
		emailjs.sendForm('service_zubfdvh', 'template_iy1pb0b', e.target, 'user_FvNIKVJ7om2PphifhzMm2')
			.then((result) => {
				console.log(result.text);
				alert('Email sent successfully');
			}, (error) => {
				console.log(error.text);
				alert('Email failed to send');
			});
		e.target.reset()
	};
	return (
		<footer className="site-footer">
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-xl-5 col-lg-4 col-md-12 col-sm-12">
							<div className="widget">
								<div className="logo-white">
									<img src={IMAGES.logowhite} width="180" className="m-b15" alt="" />
								</div>
								<p className="text-capitalize m-b20">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the.</p>
								<div className="subscribe-form m-b20">
									<form className="dzSubscribe" method="post" ref={form} onSubmit={sendEmail}>
										<div className="dzSubscribeMsg"></div>
										<div className="input-group">
											<input name="dzEmail" required="required" className="form-control" placeholder="Your Email Address" type="email" />
											<span className="input-group-btn">
												<button name="submit" value="Submit" type="submit" className="site-button radius-xl">Subscribe</button>
											</span>
										</div>
									</form>
								</div>
								<ul className="list-inline m-a0">
									<li><Link to={'https://www.facebook.com/dexignzone'} className="site-button white facebook circle me-1"><i className="fa fa-facebook" /></Link></li>
									<li><Link to={'https://dexignzone.com/'} className="site-button white google-plus circle me-1"><i className="fa fa-google-plus" /></Link></li>
									<li><Link to={'https://www.linkedin.com/showcase/dexignzone/posts/?feedView=all'} className="site-button white linkedin circle me-1"><i className="fa fa-linkedin" /></Link></li>
									<li><Link to={'https://www.instagram.com/dexignzone/'} className="site-button white instagram circle me-1"><i className="fa fa-instagram" /></Link></li>
									<li><Link to={'https://twitter.com/dexignzone'} className="site-button white twitter circle "><i className="fa fa-twitter" /></Link></li>
								</ul>
							</div>
						</div>
						{footerdata.map((data, i) => (
							<div className={data.class} key={i}>
								<div className="widget border-0">
									<h5 className="m-b30 text-white">{data.title}</h5>
									<ul className={`list-2 list-line ${data.columnstand}`}>
										{data.data.map((item, i) => (
											<li key={i}><Link to={item.link}>{item.title}</Link></li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<span> © Copyright {year} by <i className="fa fa-heart m-lr5 text-red heart" />
								<Link to={'https://bolo.com'}> Bolo </Link> All rights reserved.</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer;								
