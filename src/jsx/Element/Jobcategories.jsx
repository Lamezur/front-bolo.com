import { Link } from 'react-router-dom';
import { jobcategoriesData } from '../constant/alldata';

function Jobcategories() {
	return (
		<div className="row sp20">
			{jobcategoriesData.map((data, i) => (
				<div className="col-lg-3 col-md-6 col-sm-6" key={i}>
					<div className="icon-bx-wraper">
						<div className="icon-content">
							<div className="icon-md text-primary m-b20">{data.icon}</div>
							<Link to={"/company-manage-job"} className="dez-tilte">{data.title}</Link>
							<p className="m-a0">198 Open Positions</p>
							<div className="rotate-icon">{data.icon}</div>
						</div>
					</div>
				</div>
			))}
			<div className="col-lg-12 text-center m-t30">
				<button className="site-button radius-xl">All Categories</button>
			</div>
		</div>
	)
}
export default Jobcategories;