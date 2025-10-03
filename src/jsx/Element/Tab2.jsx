import { Link } from "react-router-dom";
import imagesLoaded from "imagesloaded";
import Isotope from 'isotope-layout';
import { useEffect, useRef, useState } from "react";
import { companiesdata, companiesNavdata } from "../constant/alldata";

function Tab2() {
    const [active, setActive] = useState(0);
    const [filter, setFilter] = useState('');
    const gridRef = useRef(null);
    useEffect(() => {
        const iso = new Isotope(gridRef.current, {
            itemSelector: '.card-container',
            layoutMode: 'masonry',
        });
        imagesLoaded(gridRef.current).on("progress", () => {
            iso.layout();
        });
        iso.arrange({ filter });
        return () => {
            iso.destroy();
        };
    }, [filter]);
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setActive(companiesNavdata.findIndex((item) => item.filter === newFilter));
    };
    return (
        <>
            <div className="site-filters clearfix center  m-b40">
                <ul className="filters" data-bs-toggle="buttons">
                    {companiesNavdata.map((item, i) => (
                        <li key={i} onClick={() => handleFilterChange(item.filter)} className={active === item.id ? 'active btn' : 'btn'} >
                            <Link to={'#'} className="site-button-secondry radius-sm"><span>{item.title}</span></Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="clearfix" ref={gridRef}>
                <ul id="masonry" className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row">
                    {companiesdata.map((item) => (
                        <li key={item.id} className={`card-container col-lg-3 col-md-4 col-sm-4 ${item.catagory}`}>
                            <div className="dez-gallery-box">
                                <div className="dez-media overlay-black-light">
                                    <Link to={'#'}> <img src={item.image} alt="" /> </Link>
                                    <div className="overlay-icon overlay-logo">
                                        <img src={item.image2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default Tab2;
