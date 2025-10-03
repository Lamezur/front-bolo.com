import { Link } from 'react-router-dom';
import { IMAGES } from '../../constant/theme';
import { listBox1, listBox2, listBox3 } from '../../constant/alldata';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Jobsearchform from '../../Element/Jobsearchform';
import Companyname from '../../Element/Companyname';

function Categorycompanyjob() {
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
										<li className="active"><Link to={"/category-company-jobs"}>Jobs by Company</Link></li>
										<li><Link to={"/category-jobs"}>Jobs by Category</Link></li>
										<li><Link to={"/category-location-jobs"}>Jobs by Location</Link></li>
										<li ><Link to={"/category-designations-jobs"}>Jobs by Designation</Link></li>
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
											<h6 className="font-weight-700 pull-left text-uppercase">Browse Jobs by Companies</h6>
										</div>
										<Companyname />
										<div className="row">
											<div className="col-lg-4 col-sm-12">
												<ul className="category-list category-bx">
													{listBox1.map((item, index) => (
														<li key={index}>
															<Link to={"#"}>
																<div className="logo"><img src={item.image} alt="" /></div>
																<span>{item.title}</span>
															</Link>
														</li>
													))}

												</ul>
											</div>
											<div className="col-lg-4 col-sm-12">
												<ul className="category-list category-bx">
													{listBox2.map((item, index) => (
														<li key={index}>
															<Link to={"#"}>
																<div className="logo"><img src={item.image} alt="" /></div>
																<span>{item.title}</span>
															</Link>
														</li>
													))}

												</ul>
											</div>
											<div className="col-lg-4 col-sm-12">
												<ul className="category-list category-bx">
													{listBox3.map((item, index) => (
														<li key={index}>
															<Link to={"#"}>
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
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
export default Categorycompanyjob;