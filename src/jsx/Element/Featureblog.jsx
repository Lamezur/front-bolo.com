import { Link } from 'react-router-dom';
import { featureCityData } from '../constant/alldata';

function Featureblog() {
	return (
		<div className="section-full content-inner bg-gray">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 section-head text-center">
						<h2 className="m-b5">Featured Cities</h2>
						<h6 className="fw4 m-b0">20+ Featured Cities Added Jobs</h6>
					</div>
				</div>
				<div className="row">
					{featureCityData.map((data, i) => (
						<div className="col-lg-3 col-sm-6 col-md-6 m-b30" key={i}>
							<Link to={''}>
								<div className="city-bx align-items-end d-flex" style={{ backgroundImage: `url(${data.image})` }}>
									<div className="city-info">
										<h5>{data.title}</h5>
										<span>{data.jobs} Jobs</span>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
export default Featureblog;