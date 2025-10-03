import { IMAGES } from '../../constant/theme';
import { Link } from 'react-router-dom';
import { aboutusdata } from '../../constant/alldata';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Latestblogowl from '../../Element/Owlblog2';
import PageTitle from '../../layout/PageTitle';

function Aboutus() {
	return (
		<div className="page-wraper">
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: `url(${IMAGES.bnr1})` }}>
					<PageTitle motherName="Home" activeName="About Us" />
				</div>
				<div className="content-block">
					<div className="section-full content-inner">
						<div className="container">
							<div className="row align-items-center m-b50">
								<div className="col-md-12 col-lg-6 m-b20">
									<h2 className="m-b5">About Us</h2>
									<h3 className="fw4">We create unique experiences</h3>
									<p className="m-b15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p>
									<p className="m-b15">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p>
									<Link to={"#"} className="site-button">Read More</Link>
								</div>
								<div className="col-md-12 col-lg-6">
									<img src={IMAGES.ourwork1} alt="" />
								</div>
							</div>
							<div className="row">
								{aboutusdata.map((item, index) => (
									<div className="col-lg-4 col-md-4 col-sm-12 m-b30" key={index}>
										<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
											<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><i className={item.icon} /></Link> </div>
											<div className="icon-content">
												<h5 className="dlab-tilte text-uppercase">{item.title}</h5>
												<p>{item.description}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="section-full content-inner-2 call-to-action overlay-black-dark text-white text-center bg-img-fix" style={{ backgroundImage: `url( ${IMAGES.bg4} )` }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<h2 className="m-b10">Make a Difference with Your Online Resume!</h2>
									<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
									<Link to={"/register-2"} className="site-button m-t20 outline outline-2 radius-xl">Create an Account</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="section-full content-inner-2">
						<div className="container">
							<div className="section-head text-black text-center">
								<h2 className="text-uppercase m-b0">Our Latest Blog</h2>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
							</div>
							<Latestblogowl />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
export default Aboutus;