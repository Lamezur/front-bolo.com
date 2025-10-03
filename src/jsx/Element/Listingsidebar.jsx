import { Link } from "react-scroll";
import { listingsiderbardata } from '../constant/alldata';

function Listingsidebar(){
	return(
		<div className="sticky-top bg-white">
			<div className="candidate-info onepage">
				<ul>
					{listingsiderbardata.map((item)=>(
						<li key={item.title}>
							<Link activeClass="active"  className="scroll-bar nav-link" to={item.to} smooth={true} offset={-70} duration={500}>
								<span>{item.title}</span> 
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}	
export default Listingsidebar;