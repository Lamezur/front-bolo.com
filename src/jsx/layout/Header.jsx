import { Fragment, useContext, useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { IMAGES } from '../constant/theme';
import { menudata } from '../constant/alldata';
import { Context } from '../../context/contextapi';


// scroll fix class end
const reducer = (previousState, updatedState) => ({
	...previousState,
	...updatedState,
});

const initialState = {
	active: "",
	activeSubmenu: "",
};

function Header() {
	const { mode, setMode } = useContext(Context);
	const toggleTheme = () => {
		setMode(mode === "light" ? "dark" : "light");
	};
	// login modal
	const [showModal, setShowModal] = useState(false);
	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);
	// menu open
	const [show, setShow] = useState(false);
	const handleclick = () => {
		setShow(!show);
	};
	// scroll fix class start
	const [fix, setFix] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [])
	const handleScroll = () => {
		if (window.scrollY >= 90) {
			setFix(true);
		} else {
			setFix(false);
		}
	};
	
	
	const [state, setState] = useReducer(reducer, initialState);
	const handleMenuActive = (status) => {
		setState({ active: status });
		if (state.active === status) {
			setState({ active: "" });
		}
	};

	const handleSubmenuActive = (status) => {
		setState({ activeSubmenu: status })
		if (state.activeSubmenu === status) {
		  setState({ activeSubmenu: "" })
		}
	}

	
	/// Path
	let path = window.location.pathname;
	path = path.split("/");
	path = path[path.length - 1];
	useEffect(() => {
		menudata.forEach((data) => {
			data.submenu?.forEach((item) => {
				if (path === item.link) {
					setState({ activeSubmenu: item.title2, active: data.title })
				}
				item.submenu2?.forEach(ele => {
					if (path === ele.link) {
						setState({ activeSubmenu: ele.title3, active: data.title })
					}
				})
			})
		})
	}, [path]);
	return (
		<>
			<header className="site-header mo-left header fullwidth">
				<div className={`sticky-header main-bar-wraper navbar-expand-lg ${fix ? 'is-fixed' : ''}`}>
					<div className="main-bar clearfix">
						<div className="container clearfix">
							<div className="logo-header mostion logo-dark">
								<Link to={"/"}><img src={IMAGES.logo} alt=" " className="align-middle" style={{ height: '90px', width: 'auto', verticalAlign: 'middle' }}/></Link>
							</div>
							<div className="logo-header mostion logo-white">
								<Link to={"/"}><img src={IMAGES.logowhite} alt=" " className="w-12 h-auto"/></Link>
							</div>
							<button onClick={handleclick} className={`navbar-toggler navicon justify-content-end ${show ? 'open' : ''}`} type="button">
								<span></span>
								<span></span>
								<span></span>
							</button>
							<div className="extra-nav">
								<div className="extra-cell">
									<label className={`layout-btn mb-0 ${mode === "dark" ? "active" : ""}`} onClick={toggleTheme} >
										<input type="checkbox" />
										<span className="mode-label"></span>
									</label>
									<Link to={"/register-2"} className="site-button"><i className="fa fa-user" /> Sign Up</Link>
									<Link to={'#'} title="READ MORE" className="site-button" onClick={handleShow}><i className="fa fa-lock" /> login </Link>
								</div>
							</div>
							<div className={`header-nav navbar-collapse collapse justify-content-start ${show ? 'show' : ''}`} id="navbarNavDropdown">
								<div className="logo-header logo-dark">
									<Link to={'/'} className="dez-page"><img src={IMAGES.logo} alt="" /></Link>
								</div>
								<div className="logo-header logo-white">
									<Link to={'/'} className="dez-page"><img src={IMAGES.logowhite} alt="" /></Link>
								</div>
								<ul className="nav navbar-nav dzheader2">
									{menudata.map((item, index) => (
										<li className={`${state.active === item.title ? "open active" : ""} ${item.link === path ? 'active' : ''}`} key={index}
											 >
											<Link to={"#"} onClick={() => { handleMenuActive(item.title); }} >{item.title}
												<i className="fa fa-chevron-down" />
											</Link>
											<ul className={`sub-menu ${item.columnstand}`}>
												{item.submenu && item.submenu.map((subItem, subIndex) => (
													<Fragment key={subIndex}>	
														{
															subItem.icon ? (																		
																<li className={`${state.activeSubmenu === subItem.title2 ? "open" : ""}`} 
																	>															
																	<Link to={"#"} className="dez-page"
																		onClick={() => { handleSubmenuActive(subItem.title2); }}
																	> 
																		{subItem.title2}  <i className="fa fa-angle-right" />
																	</Link>
																	{subItem.submenu2 && (
																		<ul className="sub-menu" >
																			{subItem.submenu2.map((sub2Item, sub2Index) => (
																				<li key={sub2Index}><Link to={`/${sub2Item.link}`} className="dez-page">{sub2Item.title3}</Link></li>
																			))}
																		</ul>
																	)}
																	
																</li>
															)	:
															(
																<li>		
																	<Link to={`/${subItem.link}`} className="dez-page"> {subItem.title2} </Link>																														
																</li>
															)
														}
													</Fragment>
												))}
											</ul>
											
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
			<Modal show={showModal} className="lead-form-modal" centered onHide={handleClose} >
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<button type="button" className="close" onClick={handleClose}>
							<span aria-hidden="true">&times;</span>
						</button>
						<div className="modal-body row m-a0 clearfix">
							<div className="col-lg-6 col-md-6 d-flex p-a0" style={{ backgroundImage: `url(${IMAGES.bg3})`, backgroundPosition: "center", backgroundSize: "cover" }}></div>
							<div className="col-lg-6 col-md-6 p-a0">
								<div className="lead-form browse-job text-left">
									<form>
										<h3 className="m-t0">Personal Details</h3>
										<div className="form-group">
											<input className="form-control" placeholder="Name" />
										</div>
										<div className="form-group">
											<input className="form-control" placeholder="Mobile Number" />
										</div>
										<div className="clearfix">
											<button type="button" className="btn-primary site-button btn-block">Submit </button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	)
}
export default Header;

