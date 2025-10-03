import { Link } from 'react-router-dom';
import Footer from '../../layout/Footer';
import EmployeeSidebar from '../../Element/empolysidebar';
import { postResume } from '../../constant/alldata';
import Header from '../../layout/Header';

function Companyresume() {
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
									<div className="job-bx clearfix">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Resume</h5>
											<Link to={"/company-manage-job"} className="site-button right-arrow button-sm float-end">Back</Link>
										</div>
										<ul className="post-job-bx browse-job-grid post-resume row">
											{postResume.map((item, index) => (
												<li className="col-lg-6 col-md-6" key={index}>
													<div className="post-bx">
														<div className="d-flex m-b20">
															<div className="job-post-info">
																<h5 className="m-b0"><Link to={"/jobs-profile"}>{item.title}</Link></h5>
																<p className="m-b5 font-13">
																	<Link to={"#"} className="text-primary">UX / UI Designer </Link>
																	at Atract Solutions</p>
																<ul>
																	<li><i className="fa fa-map-marker" />Sacramento, California</li>
																	<li><i className="fa fa-money" /> $ 2500</li>
																</ul>
															</div>
														</div>
														<div className="job-time m-t15 m-b10">
															<Link to={"#"} className="me-1"><span>PHP</span></Link>
															<Link to={"#"} className="me-1"><span>Angular</span></Link>
															<Link to={"#"} className="me-1"><span>Bootstrap</span></Link>
														</div>
														<Link to={"#"}  className="job-links">
															<i className="fa fa-download" />
														</Link>
													</div>
												</li>
											))}
										</ul>
										<div className="pagination-bx float-end">
											<ul className="pagination">
												<li className="previous"><Link to={"#"}><i className="ti-arrow-left" /> Prev</Link></li>
												<li className="active"><Link to={"#"}>1</Link></li>
												<li><Link to={"#"}>2</Link></li>
												<li><Link to={"#"}>3</Link></li>
												<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right" /></Link></li>
											</ul>
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
export default Companyresume;