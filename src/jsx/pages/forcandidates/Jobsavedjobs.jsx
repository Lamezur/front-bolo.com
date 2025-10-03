import Footer from '../../layout/Footer';
import SavedJobs from '../../Element/SavedJobs';
import Profilesidebar from '../../Element/Profilesidebar';
import Header from '../../layout/Header';

function Jobsavedjobs() {
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white p-t50 p-b20">
						<div className="container">
							<div className="row">
								<Profilesidebar />
								<div className="col-xl-9 col-lg-8 m-b30">
									<SavedJobs />
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
export default Jobsavedjobs;