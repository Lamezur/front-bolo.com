import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
function Jobfindbox() {
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
		<div className="section-full browse-job-find">
			<div className="container">
				<div className="find-job-bx">
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
									<label>City, State or ZIP</label>
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
										<option>Select Sector</option>
										<option>Construction</option>
										<option>Corodinator</option>
										<option>Employer</option>
										<option>Financial Career</option>
										<option>Information Technology</option>
										<option>Marketing</option>
										<option>Quality check</option>
										<option>Real Estate</option>
										<option>Sales</option>
										<option>Supporting</option>
										<option>Teaching</option>
									</Form.Select>
								</div>
							</div>
							<div className="col-lg-2 col-md-6">
								<button type="submit" className="site-button btn-block">Find Job</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
export default Jobfindbox;