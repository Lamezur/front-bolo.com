import { Link } from 'react-router-dom';
import { IMAGES } from '../../constant/theme';
import { designationListdata1, designationListdata2, designationListdata3 } from '../../constant/alldata';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Jobsearchform from '../../Element/Jobsearchform';
import Companyname from '../../Element/Companyname';

function Categorydesignationsjob() {
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
										<li><Link to={"/category-jobs"}>Jobs by Category</Link></li>
										<li><Link to={"/category-location-jobs"}>Jobs by Location</Link></li>
										<li className="active"><Link to={"/category-designations-jobs"}>Jobs by Designation</Link></li>
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
											<h6 className="font-weight-700 pull-left text-uppercase">Browse Jobs by Designation</h6>
										</div>
										<Companyname />
										<div className="row">
											<div className="col-lg-3 col-sm-6">
												<ul className="category-list">
													{designationListdata1.map((item, index) => (
														<li key={index}>
															<Link to={""}>{item}</Link>
														</li>
													))}
												</ul>
											</div>
											<div className="col-lg-3 col-sm-6">
												<ul className="category-list">
													{designationListdata1.map((item, index) => (
														<li key={index}>
															<Link to={""}>{item}</Link>
														</li>
													))}
												</ul>
											</div>
											<div className="col-lg-3 col-sm-6">
												<ul className="category-list">
													{designationListdata2.map((item, index) => (
														<li key={index}>
															<Link to={""}>{item}</Link>
														</li>
													))}
												</ul>
											</div>
											<div className="col-lg-3 col-sm-6">
												<ul className="category-list">
													{designationListdata3.map((item, index) => (
														<li key={index}>
															<Link to={""}>{item}</Link>
														</li>
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
export default Categorydesignationsjob;