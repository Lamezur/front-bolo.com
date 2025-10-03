import { Link } from 'react-router-dom';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import PageTitle from '../../layout/PageTitle';
import Jobfindbox from '../../Element/Jobfindbox';
import { Form } from 'react-bootstrap';
import { IMAGES } from '../../constant/theme';
import { postBox } from '../../constant/alldata';

function Browsecandidates() {
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: `url(${IMAGES.bnr1})` }}>
					<PageTitle motherName="Home" activeName="Browse Candidates" />
				</div>
				<Jobfindbox />
				<div className="content-block">
					<div className="section-full bg-white browse-job p-b50">
						<div className="container">
							<div className="row">
								<div className="col-xl-9 col-lg-8">
									<div className="m-b30">
										<input type="text" className="form-control" placeholder="Search freelancer services" />
									</div>
									<ul className="post-job-bx">
										{postBox.map((item, index) => (
											<li key={index}>
												<div className="post-bx">
													<div className="d-flex m-b30">
														<div className="job-post-company">
															<Link to={'#'}><span>
																<img alt="" src={item.image} />
															</span></Link>
														</div>
														<div className="job-post-info">
															<h4><Link to={"/job-detail"}>Digital Marketing Executive</Link></h4>
															<ul>
																<li><i className="fa fa-map-marker" /> New York</li>
																<li><i className="fa fa-usd" /> Full Time</li>
																<li><i className="fa fa-clock-o" /> Published 11 months ago</li>
															</ul>
														</div>
													</div>
													<div className="d-flex">
														<div className="job-time me-auto">
															<Link to={"#"} className="me-1"><span>Javascript</span></Link>
															<Link to={"#"} className="me-1"><span>CSS</span></Link>
															<Link to={"#"} className="me-1"><span>HTML</span></Link>
															<Link to={"#"}><span>Bootstrap</span></Link>
														</div>
														<div className="salary-bx">
															<span>$45 Per Hour</span>
														</div>
													</div>
													<label className="like-btn">
														<input type="checkbox" />
														<span className="checkmark"></span>
													</label>
												</div>
											</li>
										))}
									</ul>
									<div className="pagination-bx m-t30">
										<ul className="pagination">
											<li className="previous"><Link to={'#'}><i className="ti-arrow-left" /> Prev</Link></li>
											<li className="active"><Link to={'#'}>1</Link></li>
											<li><Link to={'#'}>2</Link></li>
											<li><Link to={'#'}>3</Link></li>
											<li className="next"><Link to={'#'}>Next <i className="ti-arrow-right" /></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4">
									<div className="sticky-top browse-candidates">
										<div className="clearfix m-b30">
											<h5 className="widget-title font-weight-700 text-uppercase">Keywords</h5>
											<div>
												<input type="text" className="form-control" placeholder="Search" />
											</div>
										</div>
										<div className="clearfix m-b10">
											<h5 className="widget-title font-weight-700 m-t0 text-uppercase">Location</h5>
											<input type="text" className="form-control m-b30" placeholder="Location" />
											<div className="input-group m-b20">
												<input type="number" className="form-control" placeholder="120" />
												<div className='dz-dropdown'>
													<Form.Select className="custom-btn">
														<option value="Km">Km</option>
														<option value="miles">miles</option>
													</Form.Select>
												</div>
											</div>
										</div>
										<div className="clearfix m-b30">
											<h5 className="widget-title font-weight-700 text-uppercase">Job type</h5>
											<div className="row">
												<div className="col-lg-6 col-md-6 col-sm-6 col-6">
													<div className="product-brand">
														<div className="form-check m-b5">
															<input type="checkbox" className="form-check-input" id="check1" name="example1" />
															<label className="form-check-label" htmlFor="check1">Freelance</label>
														</div>
														<div className="form-check m-b5">
															<input type="checkbox" className="form-check-input" id="check2" name="example1" />
															<label className="form-check-label" htmlFor="check2">Full Time</label>
														</div>
														<div className="form-check m-b5">
															<input type="checkbox" className="form-check-input" id="check3" name="example1" />
															<label className="form-check-label" htmlFor="check3">Internship</label>
														</div>
														<div className="form-check m-b5">
															<input type="checkbox" className="form-check-input" id="check4" name="example1" />
															<label className="form-check-label" htmlFor="check4">Part Time</label>
														</div>
														<div className="form-check m-b5">
															<input type="checkbox" className="form-check-input" id="check5" name="example1" />
															<label className="form-check-label" htmlFor="check5">Temporary</label>
														</div>
													</div>
												</div>
												<div className="col-lg-6 col-md-6 col-sm-6 col-6">
													<div className="product-brand">
														<div className="form-check m-b5">
															<input type="checkbox" className="form-check-input" id="check8" name="example1" />
															<label className="form-check-label" htmlFor="check8">Internship</label>
														</div>
														<div className="form-check m-b5">
															<input type="checkbox" className="form-check-input" id="check9" name="example1" />
															<label className="form-check-label" htmlFor="check9">Part Time</label>
														</div>
														<div className="form-check m-b5">
															<input type="checkbox" className="form-check-input" id="check10" name="example1" />
															<label className="form-check-label" htmlFor="check10">Temporary</label>
														</div>
														<div className="form-check m-b5">
															<input type="checkbox" className="form-check-input" id="check6" name="example1" />
															<label className="form-check-label" htmlFor="check6">Freelance</label>
														</div>
														<div className="form-check m-b5">
															<input type="checkbox" className="form-check-input" id="check7" name="example1" />
															<label className="form-check-label" htmlFor="check7">Full Time</label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="clearfix .browse-job">
											<h5 className="widget-title font-weight-700 text-uppercase">Category</h5>
											<div className='dz-dropdown'>
												<Form.Select className="custom-btn border-0">
													<option>Any Category</option>
													<option>Automotive Jobs</option>
													<option>Construction Facilities</option>
													<option>Design, Art & Multimedia</option>
													<option>Food Services</option>
												</Form.Select>
											</div> 
										</div>
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
export default Browsecandidates;
