import { Link } from 'react-router-dom';
import { IMAGES } from '../constant/theme';
import { postBlog } from '../constant/alldata';

function Jobsection() {
	return (
		<div className="section-full bg-white content-inner-2">
			<div className="container">
				<div className="d-flex job-title-bx section-head">
					<div className="me-auto">
						<h2 className="m-b5">Recent Jobs</h2>
						<h6 className="fw4 m-b0">20+ Recently Added Jobs</h6>
					</div>
					<div className="align-self-end">
						<Link to={"/browse-job-list"} className="site-button button-sm ms-1">Browse All Jobs <i className="fa fa-long-arrow-right" /></Link>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-9">
						<ul className="post-job-bx browse-job">
							{postBlog.map((item, index) => (
								<li key={index}>
									<div className="post-bx" >
										<div className="d-flex m-b30">
											<div className="job-post-company">
												<span><img alt="" src={item.image} /></span>
											</div>
											<div className="job-post-info">
												<h4><Link to={"/job-detail"}>{item.title}</Link></h4>
												<ul>
													<li><i className="fa fa-map-marker" /> Sacramento, California</li>
													<li><i className="fa fa-bookmark-o" /> Full Time</li>
													<li><i className="fa fa-clock-o" /> Published 11 months ago</li>
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
						<div className="m-t30">
							<div className="d-flex">
								<Link className="site-button button-sm me-auto" to={""}><i className="ti-arrow-left" /> Prev</Link>
								<Link className="site-button button-sm" to={""}>Next <i className="ti-arrow-right" /></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
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
	)
}
export default Jobsection;