import { useState } from 'react';
import { Link } from 'react-router-dom';
import { companyName } from '../constant/alldata';

function Companyname() {
	const [active, setActive] = useState(1);
	return (
		<div className="site-filters clearfix m-b30">
			<ul className="filters" data-toggle="buttons">
				{companyName.map((item, index) => (
					<li data-filter="data-a" className={item.id === active ? "btn active" : "btn"} key={index} onClick={() => setActive(item.id)}>
						<input type="radio" />
						<Link to={"#"} className="site-button-secondry radius-sm"><span>{item.title}</span></Link>
					</li>
				))}

			</ul>
		</div>
	)
}
export default Companyname;