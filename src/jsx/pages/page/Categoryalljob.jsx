import { Link } from 'react-router-dom';
import { IMAGES } from '../../constant/theme';
import { cityBox, companyLogo, jobCategorieslistdata } from '../../constant/alldata';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Jobsearchform from '../../Element/Jobsearchform';

function Categoryalljob() {
	return (
		<>
			<Header />
			<div className="page-content">
				<div className="dez-bnr-inr jobs-category overlay-black-middle" style={{ backgroundImage: `url(${IMAGES.bnr1})` }}>
					<div className="container">
						<div className="dez-bnr-inr-entry">
							<Jobsearchform />
							<div className="category-jobs-info">
								<div className="nav">
									<ul>
										<li className="active"><Link to={"/category-all-jobs"}>All Jobs</Link></li>
										<li><Link to={"/category-company-jobs"}>Jobs by Company</Link></li>
										<li><Link to={"/category-jobs"}>Jobs by Category</Link></li>
										<li><Link to={"/category-location-jobs"}>Jobs by Location</Link></li>
										<li><Link to={"/category-designations-jobs"}>Jobs by Designation</Link></li>
										<li><Link to={"/category-skill-jobs"}>Jobs by Skill</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="content-block">
					<div className="section-full content-inner jobs-category-bx">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 m-b30">
									<div className="job-bx">
										<div className="job-bx-title clearfix">
											<h6 className="text-uppercase">Browse Jobs by Locations
												<Link to={"#"} className="float-end font-12 text-primary">View All</Link></h6>
										</div>
										<div className="row">
											{cityBox.map((item, index) => (
												<div className="col-lg-3 col-sm-6 col-md-6 m-b30" key={index}>
													<Link to={"#"}>
														<div className="city-bx align-items-end d-flex" style={{ backgroundImage: `url(${item.image})` }}>
															<div className="city-info">
																<h5>{item.title}</h5>
															</div>
														</div>
													</Link>
												</div>
											))}
										</div>
									</div>
								</div>
								{jobCategorieslistdata.map((item, index) => (
									<div className="col-lg-6 m-b30" key={index}>
										<div className="job-bx">
											<div className="job-bx-title clearfix">
												<h6 className="text-uppercase">{item.title}
													<Link to={"#"} className="float-end font-12 text-primary">View All</Link></h6>
											</div>
											<div className="row">
												<div className="col-lg-6 col-sm-6">
													<ul className="category-list">
														{item.data1.map((data, index) => (
															<li key={index}><Link to={"#"}>{data.title}</Link></li>
														))}
													</ul>
												</div>
												<div className="col-lg-6 col-sm-6">
													<ul className="category-list">
														{item.data2.map((data, index) => (
															<li key={index}><Link to={"#"}>{data.title}</Link></li>
														))}
													</ul>
												</div>
											</div>
										</div>
									</div>
								))}
								<div className="col-lg-12 m-b30">
									<div className="job-bx clearfix">
										<div className="job-bx-title clearfix">
											<h6 className="text-uppercase">Browse Jobs by Companies
												<Link to={"#"} className="float-end font-12 text-primary">View All</Link></h6>
										</div>
										<ul className="company-logo-wg clearfix">
											{companyLogo.map((item, index) => (
												<li className="brand-logo" key={index}>
													<Link to={"#"}><img src={item.image} alt="" /></Link>
												</li>
											))}
										</ul>
									</div>
								</div>
								{jobCategorieslistdata.map((item, index) => (
									<div className="col-lg-6 m-b30" key={index}>
										<div className="job-bx">
											<div className="job-bx-title clearfix">
												<h6 className="text-uppercase">{item.title2}
													<Link to={"#"} className="float-end font-12 text-primary">View All</Link></h6>
											</div>
											<div className="row">
												<div className="col-lg-6 col-sm-6">
													<ul className="category-list">
														{item.data1.map((data, index) => (
															<li key={index}><Link to={"#"}>{data.title}</Link></li>
														))}
													</ul>
												</div>
												<div className="col-lg-6 col-sm-6">
													<ul className="category-list">
														{item.data2.map((data, index) => (
															<li key={index}><Link to={"#"}>{data.title}</Link></li>
														))}
													</ul>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
export default Categoryalljob;