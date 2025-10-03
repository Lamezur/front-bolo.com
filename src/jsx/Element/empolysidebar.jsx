import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";
import { employeeSidebarData } from "../constant/alldata";
import { useState } from "react";

function EmployeeSidebar() {
    const [active, setActive] = useState(() => {
        // Get saved active state from localStorage or default to 1
        return parseInt(localStorage.getItem('activeEmployeeTab')) || 1;
    });

    const handleMenuClick = (id) => {
        setActive(id);
        localStorage.setItem('activeEmployeeTab', id);
    };

    return (
        <div className="col-xl-3 col-lg-4 m-b30">
            <div className="sticky-top">
                <div className="candidate-info company-info">
                    <div className="candidate-detail text-center">
                        <div className="canditate-des">
                            <Link to={"#"}>
                                <img alt="" src={IMAGES.logoicon3} />
                            </Link>
                            <div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
                                <input type="file" className="update-flie" />
                                <i className="fa fa-pencil" />
                            </div>
                        </div>
                        <div className="candidate-title">
                            <h4 className="m-b5"><Link to={"#"}>@COMPANY</Link></h4>
                        </div>
                    </div>
                    <ul>
                        {employeeSidebarData.map((data, i) => (
                            <li key={i} onClick={() => handleMenuClick(data.id)} >
                                <Link to={data.link} className={data.id === active ? "active" : ""}>
                                    {data.icon} <span>{data.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default EmployeeSidebar;