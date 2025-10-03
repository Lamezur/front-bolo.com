import { Link } from 'react-router-dom';
import { IMAGES } from '../../constant/theme';
import { jobBlog } from '../../constant/alldata';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import PageTitle from '../../layout/PageTitle';
import Jobfindbox from '../../Element/Jobfindbox';
import Accordsidebar from '../../Element/Accordsidebar';
import DropdownBtn from '../../Element/dropdown-btn';

function Browsejobfiltergrid() {
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: `url(${IMAGES.bnr1})` }}>
					<PageTitle motherName="Home" activeName="Browse Job Filter Grid" />
				</div>
				<Jobfindbox />
				<div className="content-block">
					<div className="section-full browse-job p-b50">
						<div className="container">
							<div className="row">
								<Accordsidebar />
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
											<div className="float-end p-tb5 p-r10">
												<Link to={"/browse-job-filter-list"} className="p-lr5"><i className="fa fa-th-list text-black" /></Link>
												<Link to={"/browse-job-filter-grid"} className="p-lr5"><i className="fa fa-th" /></Link>
											</div>
										</div>
									</div>
									<ul className="post-job-bx browse-job-grid row">
										{jobBlog.map((item, index) => (
											<li className="col-lg-6 col-md-12" key={index} >
												<div className="post-bx">
													<div className="d-flex m-b30">
														<div className="job-post-info">
															<h5><Link to={"/job-detail"}>{item.title}</Link></h5>
															<ul>
																<li><i className="fa fa-map-marker" /> Sacramento, California</li>
																<li><i className="fa fa-bookmark-o" /> Full Time</li>
																<li><i className="fa fa-clock-o" /> Published 11 months ago</li>
															</ul>
														</div>
													</div>
													<div className="d-flex">
														<div className="job-time me-auto">
															<Link to={''}><span>Full Time</span></Link>
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
									<div className="pagination-bx float-end m-t30">
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
			<Footer />
		</>
	)
}
export default Browsejobfiltergrid;