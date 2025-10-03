import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import PageTitle from '../../layout/PageTitle';
import { IMAGES } from '../../constant/theme';

function Register1() {
	return (
		<>
			<Header />
			<div className="page-content">
				<div className="dez-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: `url(${IMAGES.bnr2})` }}>
					<PageTitle motherName="Home" activeName="Register" />
				</div>
				<div className="section-full content-inner browse-job shop-account">
					<div className="container">
						<div className="row">
							<div className="col-md-12 m-b30">
								<div className="card max-w500 radius-sm m-auto">
									<div className="tab-content">
										<form id="login" className="tab-pane active">
											<h4 className="font-weight-700 m-b5">PERSONAL INFORMATION</h4>
											<p className="font-weight-600">If you have an account with us, please log in.</p>
											<div className="form-group">
												<label className="font-weight-700">First Name <span className='text-danger'>*</span></label>
												<input name="dzName" required="" className="form-control" placeholder="First Name" type="text" />
											</div>
											<div className="form-group">
												<label className="font-weight-700">Last Name <span className='text-danger'>*</span></label>
												<input name="dzName" required="" className="form-control" placeholder="Last Name" type="text" />
											</div>
											<div className="form-group">
												<label className="font-weight-700">E-MAIL <span className='text-danger'>*</span></label>
												<input name="dzName" required="" className="form-control" placeholder="Your Email Address" type="email" />
											</div>
											<div className="form-group">
												<label className="font-weight-700">Password <span className='text-danger'>*</span></label>
												<input name="dzName" required="" className="form-control " placeholder="Type Password" type="password" />
											</div>
											<div className="text-left">
												<button className="site-button button-lg outline outline-2">CREATE</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
export default Register1;