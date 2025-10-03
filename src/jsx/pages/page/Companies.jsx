import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import PageTitle from '../../layout/PageTitle';
import Tab2 from '../../Element/Tab2';
import { IMAGES } from '../../constant/theme'; 

function Companies() {
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: `url(${IMAGES.bnr1})` }}>
					<PageTitle motherName="Home" activeName="Companies" />
				</div>
				<div className="content-block">
					<div className="section-full bg-white content-inner">
						<div className="container">
							<Tab2 />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
export default Companies;
