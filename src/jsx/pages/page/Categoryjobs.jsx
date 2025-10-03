import { Link } from 'react-router-dom';
import { IMAGES } from '../../constant/theme';
import { categoriesjobdata, categoriesjobdata2, categoriesjobdata3, listBox11, listBox22, listBox33 } from '../../constant/alldata';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Jobsearchform from '../../Element/Jobsearchform';

function Categoryjobs() {
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
										<li ><Link to={"/category-all-jobs"}>All Jobs</Link></li>
										<li><Link to={"/category-company-jobs"}>Jobs by Company</Link></li>
										<li className="active"><Link to={"/category-jobs"}>Jobs by Category</Link></li>
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
											<h6 className="text-uppercase">Browse Jobs by Functional Area / Department
												<Link to={""} className="float-end font-12 text-primary">View All</Link></h6>
										</div>
										<div className="row">
											<div className="col-lg-4 col-sm-12">
												<ul className="category-list category-bx">
													{listBox11.map((item, index) => (
														<li key={index}>
															<Link to={""}>
																<div className="logo"><img src={item.image} alt="" /></div>
																<span>{item.title}</span>
															</Link>
														</li>
													))}

												</ul>
											</div>
											<div className="col-lg-4 col-sm-12">
												<ul className="category-list category-bx">
													{listBox22.map((item, index) => (
														<li key={index}>
															<Link to={""}>
																<div className="logo"><img src={item.image} alt="" /></div>
																<span>{item.title}</span>
															</Link>
														</li>
													))}

												</ul>
											</div>
											<div className="col-lg-4 col-sm-12">
												<ul className="category-list category-bx">
													{listBox33.map((item, index) => (
														<li key={index}>
															<Link to={""}>
																<div className="logo"><img src={item.image} alt="" /></div>
																<span>{item.title}</span>
															</Link>
														</li>
													))}

												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12 m-b30">
									<div className="job-bx">
										<div className="job-bx-title clearfix">
											<h6 className="text-uppercase">Browse Jobs by Industry / Sector
												<Link to={""} className="float-end font-12 text-primary">View All</Link></h6>
										</div>
										<div className="row">
											<div className="col-lg-3 col-sm-6">
												<ul className="category-list">
													{categoriesjobdata.map((item, index) => (
														<li key={index}><Link to={""}>{item}</Link></li>
													))}
												</ul>
											</div>
											<div className="col-lg-3 col-sm-6">
												<ul className="category-list">
													{categoriesjobdata2.map((item, index) => (
														<li key={index}><Link to={""}>{item}</Link></li>
													))}
												</ul>
											</div>
											<div className="col-lg-3 col-sm-6">
												<ul className="category-list">
													{categoriesjobdata.map((item, index) => (
														<li key={index}><Link to={""}>{item}</Link></li>
													))}
												</ul>
											</div>
											<div className="col-lg-3 col-sm-6">
												<ul className="category-list">
													{categoriesjobdata3.map((item, index) => (
														<li key={index}><Link to={""}>{item}</Link></li>
													))}
												</ul>
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
export default Categoryjobs;