import { Link } from 'react-router-dom';
import { IMAGES } from '../constant/theme';
import { profilesidebardata } from '../constant/alldata';
import { useState } from 'react';

function Profilesidebar() {
    const [active, setActive] = useState(() => {
        return parseInt(localStorage.getItem('activeProfileTab')) || 1;
    });

    const handleMenuClick = (id) => {
        setActive(id);
        localStorage.setItem('activeProfileTab', id);
    };

    return (
        <div className="col-xl-3 col-lg-4 m-b30">
            <div className="sticky-top">
                <div className="candidate-info">
                    <div className="candidate-detail text-center">
                        <div className="canditate-des">
                            <Link to={''}>
                                <img alt="" src={IMAGES.team1} />
                            </Link>
                            <div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
                                <input type="file" className="update-flie" />
                                <i className="fa fa-camera" />
                            </div>
                        </div>
                        <div className="candidate-title">
                            <div className="">
                                <h4 className="m-b5"><Link to={"#"}>David Matin</Link></h4>
                                <p className="m-b0"><Link to={"#"}>Web developer</Link></p>
                            </div>
                        </div>
                    </div>
                    <ul>
                        {profilesidebardata.map((data, i) => (
                            <li key={i} onClick={() => handleMenuClick(data.id)} >
                                <Link to={data.link} className={data.id === active ? "active" : ""}>
                                    {data.icon}
                                    <span>{data.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Profilesidebar;