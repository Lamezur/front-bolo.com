import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import {
	loadingToggleAction,
	signupAction,
} from '../../../store/actions/AuthActions';
import { IMAGES } from '../../constant/theme';

function Register2(props) {
	const [email, setEmail] = useState('');
	let errorsObj = { email: '', password: '' };
	const [errors, setErrors] = useState(errorsObj);
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	function onSignUp(e) {
		e.preventDefault();
		let error = false;
		const errorObj = { ...errorsObj };
		if (email === '') {
			errorObj.email = 'Email is Required';
			error = true;
		}
		if (password === '') {
			errorObj.password = 'Password is Required';
			error = true;
		}
		setErrors(errorObj);
		if (error) return;
		dispatch(loadingToggleAction(true));
		dispatch(signupAction(email, password, props.history));
	}
	return (
		<div className="page-wraper">
			<div className="browse-job login-style3">
				<div className="bg-img-fix" style={{ backgroundImage: `url(${IMAGES.bg6})`, height: "100vh" }}>
					<div className="row">
						<div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 bg-white z-index2 relative p-a0 content-scroll skew-section left-bottom d-block">
							<div className="login-form style-2">
								<div className="logo-header mostion logo-dark text-center p-tb30">
									<Link to={"/"}><img src={IMAGES.logo} alt=" " /></Link>
								</div>
								<div className="logo-header mostion logo-white text-center p-tb30">
									<Link to={"/"}><img src={IMAGES.logowhite} alt=" " /></Link>
								</div>
								<div className="clearfix"></div>
								<div className="tab-content nav p-b30 tab">
									<div id="login" className="tab-pane active ">
										{props.errorMessage && (
											<div className=''>
												{props.errorMessage}
											</div>
										)}
										{props.successMessage && (
											<div className=''>
												{props.successMessage}
											</div>
										)}
										<form className=" dez-form p-b30" onSubmit={onSignUp}>
											<h3 className="form-title m-t0">Personal Information</h3>
											<div className="dez-separator-outer m-b5">
												<div className="dez-separator bg-primary style-liner"></div>
											</div>
											<p>Enter your e-mail address and your password.</p>
											<div className="form-group">
												<input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="username" />
												<div className="text-danger">{errors.email && <div>{errors.email}</div>}</div>
											</div>
											<div className="form-group">
												<input value={password} className="form-control" defaultValue="Password" placeholder='Password'
													onChange={(e) =>
														setPassword(e.target.value)
													}
												/>
												<div className="text-danger">{errors.password && <div>{errors.password}</div>}</div>
											</div>
											<div className="form-group text-left d-flex align-items-center justify-content-between">
												<span className="form-check">
													<input type="checkbox" className="form-check-input" id="check1" name="example1" />
													<label className="form-check-label" htmlFor="check1">Remember me</label>
												</span>
												<button type="submit" className="site-button dz-xs-flex m-r5">Sign me up</button>
											</div>
												<Link data-toggle="tab" to="#forgot-password" className="forget-pass m-l5 mb-4"><i className="fa fa-unlock-alt" /> Forgot Password</Link>
											<div className="dz-social clearfix">
												<h5 className="form-title m-t5 float-start">Sign In With</h5>
												<ul className="dez-social-icon dez-border float-end dez-social-icon-lg text-white">
													<li><Link to={'https://www.facebook.com/dexignzone'} className="fa fa-facebook  fb-btn me-1" target="bank"></Link></li>
													<li><Link to={'https://x.com/dexignzone'} className="fa fa-twitter  tw-btn me-1" target="bank"></Link></li>
													<li><Link to={'https://www.linkedin.com/showcase/dexignzone/posts/?feedView=all'} className="fa fa-linkedin link-btn me-1" target="bank"></Link></li>
													<li><Link to={'https://dexignzone.com/'} className="fa fa-google-plus  gplus-btn" target="bank"></Link></li>
												</ul>
											</div>
										</form>
										<div className="text-center bottom">
											<Link to="/login" className="site-button button-md btn-block text-white">Sign In</Link>
										</div>
									</div>
								</div>
								<div className="bottom-footer clearfix m-t10 m-b20 row text-center">
									<div className="col-lg-12 text-center">
										<span> © Copyright by <i className="fa fa-heart m-lr5 text-red heart" />
											<Link to={'https://dexignzone.com/'} >DexignZone </Link> All rights reserved.</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		errorMessage: state.auth.errorMessage,
		successMessage: state.auth.successMessage,
		showLoading: state.auth.showLoading,
	};
};
export default connect(mapStateToProps)(Register2);