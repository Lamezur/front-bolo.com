import { Link } from 'react-router-dom';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import PageTitle from '../../layout/PageTitle';
import Sidebar from '../../Element/Sidebar';
import { IMAGES } from '../../constant/theme';
import { blogmdGride } from '../../constant/alldata';

function Blogleftimg() {
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: `url(${IMAGES.bnr1})` }}>
					<PageTitle motherName="Home" activeName="Blog Left Images" />
				</div>
				<div className="content-area">
					<div className="container">
						<div className="row">
							<div className="col-xl-9 col-lg-8 col-md-7 m-b10">
								{blogmdGride.map((item, index) => (
									<div className="blog-post blog-md clearfix" key={index}>
										<div className="dez-post-media dez-img-effect zoom-slow radius-sm">
											<Link to={"/blog-details"}><img src={item.image} alt="" /></Link>
										</div>
										<div className="dez-post-info">
											<div className="dez-post-meta">
												<ul className="d-flex align-items-center">
													<li className="post-date"><i className="fa fa-calendar" />September 18, 2025</li>
													<li className="post-author"><i className="fa fa-user" />By <Link to={"#"}>demongo</Link> </li>
													<li className="post-comment"><i className="fa fa-comments-o" /><Link to={"#"}>5k</Link> </li>
												</ul>
											</div>
											<div className="dez-post-title ">
												<h4 className="post-title font-24"><Link to={"/blog-details"}>Do you have a job that the average person doesnӴ even know exists?</Link></h4>
											</div>
											<div className="dez-post-text">
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
													text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</div>
											<div className="dez-post-readmore blog-share">
												<Link to={"/blog-details"} title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></Link>
											</div>
										</div>
									</div>
								))}
								<div className="pagination-bx clearfix text-center">
									<ul className="pagination">
										<li className="previous"><Link to={"#"}><i className="ti-arrow-left" /> Prev</Link></li>
										<li className="active"><Link to={"#"}>1</Link></li>
										<li><Link to={"#"}>2</Link></li>
										<li><Link to={"#"}>3</Link></li>
										<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right" /></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-5 sticky-top">
								<Sidebar />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
export default Blogleftimg;