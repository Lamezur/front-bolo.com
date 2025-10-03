import { Link } from 'react-router-dom';
import { IMAGES } from '../constant/theme';
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';

function IndexBanner() {
	useEffect(() => {
		const inputSelector = document.querySelectorAll('input, textarea');
		const handleFocus = (event) => {
			event.target.parentElement.parentElement.classList.add("focused");
		};
		const handleBlur = (event) => {
			const inputValue = event.target.value;
			if (inputValue === '') {
				event.target.parentElement.parentElement.classList.remove('filled');
				event.target.parentElement.parentElement.classList.remove('focused');
			} else {
				event.target.parentElement.parentElement.classList.add('filled');
			}
		};
		inputSelector.forEach(input => {
			input.addEventListener('focus', handleFocus);
			input.addEventListener('blur', handleBlur);
		});
		return () => {
			inputSelector.forEach(input => {
				input.removeEventListener('focus', handleFocus);
				input.removeEventListener('blur', handleBlur);
			});
		};
	}, []);
	return (
		<div className="dez-bnr-inr dez-bnr-inr-md main-slider" style={{ backgroundImage: `url( ${IMAGES.slide2} )` }}>
			<div className="container">
				<div className="dez-bnr-inr-entry align-m">
					<div className="find-job-bx">
						<Link to={"#"} className="site-button button-sm">Find Jobs, Employment & Career Opportunities</Link>
						<h2>Search Between More Then <br /> <span className="text-primary">50,000</span> Open Jobs.</h2>
						<form className="dezPlaceAni">
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="form-group">
										<label>Job Title, Keywords, or Phrase</label>
										<div className="input-group">
											<input type="text" className="form-control" placeholder="" />
											<div className="input-group-append">
												<span className="input-group-text"><i className="fa fa-search" /></span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<label>Email address</label>
										<div className="input-group">
											<input type="text" className="form-control" placeholder="" />
											<div className="input-group-append">
												<span className="input-group-text"><i className="fa fa-map-marker" /></span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group dz-dropdown2">
										<Form.Select className="form-control p-2">
											<option value="">Select Sector</option>
											<option value="">Construction</option>
											<option value="">Corodinator</option>
											<option value="">Employer</option>
											<option value="">Financial Career</option>
											<option value="">Information Technology</option>
											<option value="">Marketing</option>
											<option value="">Quality check</option>
											<option value="">Real Estate</option>
											<option value="">Sales</option>
											<option value="">Supporting</option>
											<option value="">Teaching</option>
										</Form.Select>
									</div>
								</div>
								<div className="col-lg-2 col-md-6">
									<button type="submit" to="#" className="site-button btn-block">Find Job</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
export default IndexBanner;