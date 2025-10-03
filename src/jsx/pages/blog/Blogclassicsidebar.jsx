import { Link } from 'react-router-dom';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Sidebar from '../../Element/Sidebar';
import Sibarpost from '../../Element/Sibarpost';
import { IMAGES } from '../../constant/theme';
import PageTitle from '../../layout/PageTitle';

function Blogclassicsidebar() {
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: `url(${IMAGES.bnr1})` }}>
					<PageTitle motherName="Home" activeName="Blog Classic Sidebar" />
				</div>
				<div className="content-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-7 col-sm-12">
								<Sibarpost />
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
							<div className="col-lg-4 col-md-5 col-sm-12 sticky-top">
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
export default Blogclassicsidebar;