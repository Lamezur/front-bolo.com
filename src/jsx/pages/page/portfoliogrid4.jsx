import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../constant/theme';
import { categories, filtertabdata } from '../../constant/alldata';
import imagesLoaded from "imagesloaded";
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import PageTitle from '../../layout/PageTitle';
import Isotope from 'isotope-layout';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';

function Portfoliogrid4() {
	const [active, setActive] = useState(0);
	const [filter, setFilter] = useState('*');
	const gridRef = useRef(null);
	const [items, setItems] = useState(categories); 
	useEffect(() => {
		const iso = new Isotope(gridRef.current, {
			itemSelector: '.card-container',
			layoutMode: 'fitRows',
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
		setActive(filtertabdata.findIndex((item) => item.filter === newFilter));
	};
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: `url( ${IMAGES.bnr2} )` }}>
					<PageTitle motherName="Home" activeName="Portfolio Grid 4" />
				</div>
				<div className="content-block">
					<div className="section-full content-inner-2 portfolio-box">
						<div className="container">
							<div className="section-head text-black text-center m-b20">
								<h2 className="m-b10">Our Portfolio</h2>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
							</div> 
							<div className="site-filters style1 clearfix center">
								<ul className="filters" data-bs-toggle="buttons">
									{filtertabdata.map((item, index) => (
										<li key={index} onClick={() => handleFilterChange(item.filter)} className={active === item.id ? 'active btn' : 'btn'} ><Link to={'#'}><span>{item.title}</span></Link></li>
									))}
								</ul>
							</div>
							<div ref={gridRef} className='clearfix'>
								<ul className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery sp10">
									<LightGallery
										speed={500}
										zoom={true}
										thumbnail={true}
										autoplay={true}
										autoplayDelay={3000}
										plugins={[lgThumbnail, lgZoom, lgAutoplay]}
										selector='.lightimg'
									> 
										{items.map(item => (
											<li className={`card-container col-lg-3 col-md-4 col-sm-6 col-6 ${item.category}`} key={item.id} >
												<div className="dez-box dez-gallery-box">
													<div className="dez-media dez-img-overlay1 dez-img-effect">
														<Link to={"#"} > <img src={item.image} alt="" /> </Link>
														<div className="overlay-bx">
															<div className="overlay-icon">
																<Link className="mfp-link lightimg" title="Designing" to={item.image}> <i className="ti-fullscreen" /> <img src={item.image} alt="" className='d-none' /></Link>
															</div>
														</div>
													</div>
												</div>
											</li>
										))}
									</LightGallery>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
export default Portfoliogrid4;