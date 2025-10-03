import { Link } from 'react-router-dom';
import { IMAGES } from '../../constant/theme';

function Loginpage2() {
	return (
		<>
			<div className="page-content bg-white login-style2" style={{ backgroundImage: `url(${IMAGES.bg6})`, backgroundSize: "cover" }}>
				<div className="section-full">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6 d-flex">
								<div className="text-white max-w400 align-self-center">
									<div className="logo">
										<Link to={"/"}><img src={IMAGES.logowhite2} alt="" /></Link>
									</div>
									<h2 className="m-b10">Login To You Now</h2>
									<p className="m-b30">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry.</p>
									<ul className="list-inline m-a0">
										<li><Link to={'https://www.facebook.com/dexignzone'} className="site-button white facebook circle "><i className="fa fa-facebook" /></Link></li>
										<li><Link to={'https://www.linkedin.com/showcase/dexignzone/posts/?feedView=all'} className="site-button white linkedin circle "><i className="fa fa-linkedin" /></Link></li>
										<li><Link to={'https://www.instagram.com/dexignzone/'} className="site-button white instagram circle "><i className="fa fa-instagram" /></Link></li>
										<li><Link to={'https://twitter.com/dexignzone'} className="site-button white twitter circle "><i className="fa fa-twitter" /></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="login-2 submit-resume p-a30 seth">
									<div className="tab-content nav">
										<form id="login" className="tab-pane active col-12 p-a0 ">
											<p className="font-weight-600">If you have an account with us, please log in.</p>
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
											<div className="">
												<button className="site-button float-left">login</button>
												<Link data-toggle="tab" to="#forgot-password" className="site-button-link forget-pass m-t15 float-end"><i className="fa fa-unlock-alt" /> Forgot Password</Link>
											</div>
										</form>
										<form id="forgot-password" className="tab-pane fade  col-12 p-a0">
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
						</div>
					</div>

				</div>
				<footer className="login-footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<span className="float-start">© Copyright by <i className="fa fa-heart m-lr5 text-red heart" />
									<Link to={"#"}>DexignZone </Link> </span>
								<span className="float-end">
									All rights reserved.
								</span>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	)
}
export default Loginpage2;	