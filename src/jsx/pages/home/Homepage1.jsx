import { Link } from 'react-router-dom';
import { IMAGES } from '../../constant/theme';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import CountUp from 'react-countup';
import IndexBanner from '../../Element/IndexBanner';
import Jobcategories from '../../Element/Jobcategories';
import Featureblog from '../../Element/Featureblog';
import Jobsection from '../../Element/Jobsection';
import Owltestimonial from '../../Element/Owlblog1';
import { membershipplan } from '../../constant/alldata';

function Homepage() {
	return (
		<>
			<Header />
			<div className="page-content">
				<IndexBanner />
				<div className="section-full job-categories content-inner-2 bg-white">
					<div className="container">
						<div className="section-head d-flex head-counter clearfix">
							<div className="me-auto">
								<h2 className="m-b5">Popular Categories</h2>
								<h6 className="fw3">20+ Catetories work wating for you</h6>
							</div>
							<div className="head-counter-bx">
								<h2 className="m-b5 counter"><CountUp end={1800} duration={5} /></h2>
								<h6 className="fw3">Jobs Posted</h6>
							</div>
							<div className="head-counter-bx">
								<h2 className="m-b5 counter"><CountUp end={4500} duration={5} /></h2>
								<h6 className="fw3">Tasks Posted</h6>
							</div>
							<div className="head-counter-bx">
								<h2 className="m-b5 counter"><CountUp end={1500} duration={5} /></h2>
								<h6 className="fw3">Freelancers</h6>
							</div>
						</div>
						<Jobcategories />
					</div>
				</div>
				<Featureblog />
				<Jobsection />
				<div className="section-full p-tb70 overlay-black-dark text-white text-center bg-img-fix" style={{ backgroundImage: `url( ${IMAGES.bg4} )` }}>
					<div className="container">
						<div className="section-head text-center text-white">
							<h2 className="m-b5">Testimonials</h2>
							<h5 className="fw4">Few words from candidates</h5>
						</div>
						<Owltestimonial />
					</div>
				</div>
				<div className="section-full content-inner-2 bg-white" style={{ backgroundImage: `url( ${IMAGES.lines} )`, backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize: "100%" }}>
					<div className="container">
						<div className="section-head text-black text-center">
							<h2 className="m-b0">Membership Plans</h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
						</div>
						<div className="section-content box-sort-in button-example m-t80">
							<div className="pricingtable-row">
								<div className="row max-w1000 m-auto">
									{membershipplan.map((item, index) => (
										<div className="col-sm-12 col-md-4 col-lg-4 p-lr0" key={index}>
											<div className={`pricingtable-wrapper style2 ${item.columnstand1}`}>
												<div className="pricingtable-inner">
													<div className="pricingtable-price">
														<h4 className="font-weight-300 m-t10 m-b0">{item.title}</h4>
														<div className="pricingtable-bx"> {item.price} </div>
													</div>
													<p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
													<div className="m-t20">
														<Link to={"/register"} className={`site-button radius-xl ${item.columnstand2}`}><span className={`p-lr30 ${item.columnstand3}`}>Sign Up</span></Link>
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
			</div>
			<Footer />
		</>
	)
}
export default Homepage;