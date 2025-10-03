import { Link } from 'react-router-dom';
import { IMAGES } from '../../constant/theme';
import { brandLogo, jobPost } from '../../constant/alldata';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import PageTitle from '../../layout/PageTitle';
import Jobfindbox from '../../Element/Jobfindbox';
import DropdownBtn from '../../Element/dropdown-btn';

function Browsejoblist() {
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: `url(${IMAGES.bnr1})` }}>
					<PageTitle motherName="Home" activeName="Browse Job List" />
				</div>
				<Jobfindbox />
				<div className="content-block">
					<div className="section-full browse-job p-b50">
						<div className="container">
							<div className="row">
								<div className="col-xl-9 col-lg-8 col-md-7">
									<div className="job-bx-title clearfix">
										<h5 className="font-weight-700 float-start text-uppercase">2269 Jobs Found</h5>
										<div className="float-end d-flex">
											<div>
												<span className="select-title">Sort by freshness</span>
											</div>
											<div>
												<DropdownBtn />
											</div>
										</div>
									</div>
									<ul className="post-job-bx">
										{jobPost.map((item, index) => (
											<li key={index}>
												<div className="post-bx">
													<div className="d-flex m-b30">
														<div className="job-post-company">
															<Link to={"#"}><span>
																<img alt="" src={item.image} />
															</span></Link>
														</div>
														<div className="job-post-info">
															<h4><Link to={"/job-detail"}>Digital Marketing Executive</Link></h4>
															<ul>
																<li><i className="fa fa-map-marker" />  Sacramento, California</li>
																<li><i className="fa fa-bookmark-o" />  Full Time</li>
																<li><i className="fa fa-clock-o" />  Published 11 months ago</li>
															</ul>
														</div>
													</div>
													<div className="d-flex">
														<div className="job-time me-auto">
															<Link to={"#"}><span>Full Time</span></Link>
														</div>
														<div className="salary-bx">
															<span>$1200 - $ 2500</span>
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
											<li className="previous"><Link to={"#"}><i className="ti-arrow-left" />  Prev</Link></li>
											<li className="active"><Link to={"#"}>1</Link></li>
											<li><Link to={"#"}>2</Link></li>
											<li><Link to={"#"}>3</Link></li>
											<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right" /> </Link></li>
										</ul>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-md-5">
									<div className="sticky-top">
										<div className="candidates-are-sys m-b30">
											<div className="candidates-bx">
												<div className="testimonial-pic radius"><img src={IMAGES.testimonial3} alt="" width="100" height="100" /></div>
												<div className="testimonial-text">
													<p>I just got a job that I applied for via careerfy! I used the site all the time during my job hunt.</p>
												</div>
												<div className="testimonial-detail"> <strong className="testimonial-name">Richard Anderson</strong> <span className="testimonial-position">Nevada, USA</span> </div>
											</div>
										</div>
										<ul className="company-logo-wg sidebar bg-white job-bx m-b30 clearfix">
											{brandLogo.map((item, index) => (
												<li className="brand-logo" key={index}>
													<Link to={"#"}><img src={item.image} alt="" /></Link>
												</li>
											))}
										</ul>
										<div className="quote-bx">
											<div className="quote-info">
												<h4>Make a Difference with Your Online Resume!</h4>
												<p>Your resume in minutes with JobBoard resume assistant is ready!</p>
												<Link to={"/register"} className="site-button">Create an Account</Link>
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
export default Browsejoblist;