import { Link } from 'react-router-dom';
import { IMAGES } from '../../constant/theme';

function Loginpage3() {
	return (
		<div className="page-content bg-gray login-form-bx browse-job login-style2">
			<div className="section-full bg-white">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-6 col-md-7 box-skew d-flex">
							<div className="login-2 p-a30 seth d-flex align-self-center m-auto wow fadeInRight" data-wow-delay="0.8s" >
								<div className="tab-content nav">
									<form id="login" className="tab-pane active col-12 p-a0 ">
										<p className="font-weight-600 text-center">If you have an account with us, please log in.</p>
										<div className="form-group">
											<label>E-Mail Address<span className='text-danger'>*</span></label>
											<div className="input-group">
												<input name="dzName" required="" className="form-control" placeholder="Your Email Address" type="email" />
											</div>
										</div>
										<div className="form-group">
											<label>Password <span className='text-danger'>*</span></label>
											<div className="input-group">
												<input name="dzName" required="" className="form-control " placeholder="Type Password" type="password" />
											</div>
										</div>
										<div className="text-left">
											<button className="site-button">login</button>
											<Link data-toggle="tab" to="#forgot-password" className="site-button-link forget-pass pull-right m-t15"><i className="fa fa-unlock-alt" /> Forgot Password</Link>
										</div>
									</form>
									<form id="forgot-password" className="tab-pane fade col-12 p-a0">
										<p>We will send you an email to reset your password. </p>
										<div className="form-group">
											<label>E-Mail address *</label>
											<div className="input-group">
												<input name="dzName" required="" className="form-control" placeholder="Your Email Address" type="email" />
											</div>
										</div>
										<div className="text-left">
											<Link className="site-button outline gray" data-toggle="tab" to="#login">Back</Link>
											<button className="site-button pull-right">Submit</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-5 d-flex box-skew1">
							<div className="text-white max-w400 align-self-center">
								<div className="logo">
									<Link to={"/"}><img src={IMAGES.logowhite2} alt="" /></Link>
								</div>
								<h2 className="m-b10">Login To You Now</h2>
								<p className="m-b40">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry.</p>
								<ul className="list-inline m-a0">
									{/* <li><Link to={'https://www.facebook.com/dexignzone'} className="site-button white facebook circle "><i className="fa fa-facebook" /></Link></li> */}
									<li><Link to={'https://www.linkedin.com/showcase/dexignzone/posts/?feedView=all'} className="site-button white linkedin circle "><i className="fa fa-linkedin" /></Link></li>
									{/* <li><Link to={'https://www.instagram.com/dexignzone/'} className="site-button white instagram circle "><i className="fa fa-instagram" /></Link></li> */}
									{/* <li><Link to={'https://twitter.com/dexignzone'} className="site-button white twitter circle "><i className="fa fa-twitter" /></Link></li> */}
								</ul>
							</div>
						</div>
					</div>
				</div>

			</div>
			<footer className="login-footer">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<span className="float-start text-black-light"> © Copyright by <i className="fa fa-heart m-lr5 text-red heart" />
								<Link to={"#"} className="text-primary">bolo.com </Link></span>
							<span className="float-end">All rights reserved.</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
export default Loginpage3;