import { Link } from 'react-router-dom';
import Footer from '../../layout/Footer';
import { Form } from 'react-bootstrap';
import EmployeeSidebar from '../../Element/empolysidebar';
import Header from '../../layout/Header';

function Companyprofile() {
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white p-t50 p-b20">
						<div className="container">
							<div className="row">
								<EmployeeSidebar />
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx submit-resume">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Company Profile</h5>
											<Link to={"/company-profile"} className="site-button right-arrow button-sm float-end">Back</Link>
										</div>
										<form>
											<div className="row m-b30">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Company Name</label>
														<input type="text" className="form-control" placeholder="Enter Company Name" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Your Email</label>
														<input type="email" className="form-control" placeholder="info@gmail.com" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Website</label>
														<input type="text" className="form-control" placeholder="Website Link" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Founded Date </label>
														<input type="email" className="form-control" placeholder="17/12/2018" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Category</label>
														<Form.Control as="select" custom className="custom-select">
															<option>Web Designer</option>
															<option>Web Developer1</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Country</label>
														<input type="email" className="form-control" placeholder="London" />
													</div>
												</div>
												<div className="col-lg-12 col-md-12">
													<div className="form-group">
														<label>Description:</label>
														<textarea className="form-control">
														</textarea>
													</div>
												</div>
											</div>
											<div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Contact Information</h5>
											</div>
											<div className="row m-b30">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Phone</label>
														<input type="number" className="form-control" placeholder="+1 123 456 7890" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Email</label>
														<input type="email" className="form-control" placeholder="exemple@gmail.com" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Contry</label>
														<input type="text" className="form-control" placeholder="India" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>City</label>
														<input type="email" className="form-control" placeholder="Delhi" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Zip</label>
														<input type="number" className="form-control" placeholder="504030" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Address</label>
														<input type="text" className="form-control" placeholder="New york city" />
													</div>
												</div>
												<div className="col-lg-12">
													<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57784.32772205062!2d75.85546240000001!3d25.151897599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1545138498580"
														style={{ border: '0', width: "100%", height: '300px' }} allowFullScreen></iframe>
												</div>
											</div>

											<div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Social link</h5>
											</div>
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Facebook</label>
														<input type="text" className="form-control" placeholder="https://www.facebook.com/" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Twitter</label>
														<input type="email" className="form-control" placeholder="https://www.twitter.com/" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Google</label>
														<input type="text" className="form-control" placeholder="https://www.google.com/" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Linkedin</label>
														<input type="email" className="form-control" placeholder="https://www.linkedin.com/" />
													</div>
												</div>
											</div>
											<button type="submit" className="site-button m-b30">Update Setting</button>
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
export default Companyprofile;