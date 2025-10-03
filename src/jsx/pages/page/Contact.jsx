import { Link } from 'react-router-dom';
import { IMAGES } from '../../constant/theme';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import PageTitle from '../../layout/PageTitle';

function Contact() {
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: `url(${IMAGES.bnr1})` }}>
					<PageTitle motherName="Home" activeName="Contact Us" />
				</div>
				<div className="section-full content-inner bg-white contact-style-1">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6 d-lg-flex d-md-flex">
								<div className="p-a30 border-1  m-b30 contact-area border-1 align-self-stretch radius-sm">
									<h4 className="m-b10">Quick Contact</h4>
									<p>If you have any questions simply use the following contact details.</p>
									<ul className="no-margin">
										<li className="icon-bx-wraper left m-b30">
											<div className="icon-bx-xs border-1"> <Link to={"#"} className="icon-cell"><i className="ti-location-pin" /></Link> </div>
											<div className="icon-content">
												<h6 className="text-uppercase m-tb0 dez-tilte">Address:</h6>
												<p>123 West Street, Melbourne Victoria 3000 Australia</p>
											</div>
										</li>
										<li className="icon-bx-wraper left  m-b30">
											<div className="icon-bx-xs border-1"> <Link to={"#"} className="icon-cell"><i className="ti-email" /></Link> </div>
											<div className="icon-content">
												<h6 className="text-uppercase m-tb0 dez-tilte">Email:</h6>
												<p>info@example.com</p>
											</div>
										</li>
										<li className="icon-bx-wraper left">
											<div className="icon-bx-xs border-1"> <Link to={"#"} className="icon-cell"><i className="ti-mobile" /></Link> </div>
											<div className="icon-content">
												<h6 className="text-uppercase m-tb0 dez-tilte">PHONE</h6>
												<p>+61 3 8376 6284</p>
											</div>
										</li>
									</ul>
									<div className="m-t20">
										<ul className="dez-social-icon dez-social-icon-lg">
											<li><Link to={"https://www.facebook.com/dexignzone"} className="fa fa-facebook bg-primary me-1"></Link></li>
											<li><Link to={"https://twitter.com/dexignzone"} className="fa fa-twitter bg-primary me-1"></Link></li>
											<li><Link to={"https://www.linkedin.com/showcase/dexignzone/posts/?feedView=all"} className="fa fa-linkedin bg-primary me-1"></Link></li>
											<li><Link to={"https://in.pinterest.com/dexignzone/"} className="fa fa-pinterest-p bg-primary me-1"></Link></li>
											<li><Link to={"https://dexignzone.com/"} className="fa fa-google-plus bg-primary"></Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="p-a30 m-b30 radius-sm bg-gray clearfix">
									<h4>Send Message Us</h4>
									<div className="dzFormMsg"></div>
									<form method="post" className="dzForm" action="script/contact.php">
										<input type="hidden" value="Contact" name="dzToDo" />
										<div className="row">
											<div className="col-lg-12">
												<div className="form-group">
													<div className="input-group">
														<input name="dzName" type="text" required className="form-control" placeholder="Your Name" />
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<div className="input-group">
														<input name="dzEmail" type="email" className="form-control" required placeholder="Your Email Address" />
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<div className="input-group">
														<textarea name="dzMessage" rows="4" className="form-control" required placeholder="Your Message..."></textarea>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="recaptcha-bx">
													<div className="input-group">
														<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
														<input className="form-control d-none" style={{ display: "none" }} data-recaptcha="true" required data-error="Please complete the Captcha" />
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<button name="submit" type="submit" value="Submit" className="site-button "> <span>Submit</span> </button>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-lg-4 col-md-12 d-lg-flex m-b30">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219"
									className="align-self-stretch radius-sm"
									style={{ border: "0", width: "100%", minHeight: "350px" }}
									allowFullScreen>
								</iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
export default Contact;