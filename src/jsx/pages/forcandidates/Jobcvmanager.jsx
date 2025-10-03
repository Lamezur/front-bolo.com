import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../layout/Footer';
import Profilesidebar from '../../Element/Profilesidebar';
import { managerBlog } from '../../constant/alldata';
import Header from '../../layout/Header';
import DropdownBtn from '../../Element/dropdown-btn';

function Jobcvmanager() {
	const [contacts, setContacts] = useState(managerBlog);
	const handleDeleteClick = (contactId) => {
		const newContacts = [...contacts];
		const index = contacts.findIndex((contact) => contact.id === contactId);
		newContacts.splice(index, 1);
		setContacts(newContacts);
	}
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
									<div className="job-bx browse-job clearfix">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 float-start text-uppercase">CV Manager</h5>
											<div className="float-end d-flex">
												<div>
													<span className="select-title">Sort by freshness</span>
												</div>
												<div>
													<DropdownBtn />
												</div>
											</div>
										</div>
										<ul className="cv-manager">
											{contacts.map((contact, index) => (
												<li key={index}>
													<div className="d-flex float-left">
														<div className="job-post-company">
															<Link to={"#"}><span>
																<img alt="" src={contact.image} />
															</span></Link>
														</div>
														<div className="job-post-info">
															<h6><Link to={"#"}>{contact.title}</Link></h6>
															<ul>
																<li><i className="fa fa-map-marker" /> Sacramento, California</li>
																<li><i className="fa fa-bookmark-o" /> Full Time</li>
																<li><i className="fa fa-clock-o" /> 11 days ago</li>
															</ul>
														</div>
													</div>
													<div className="job-links action-bx">
														<Link to={"#"} target="blank"><i className="fa fa-download" /></Link>
														<Link to={"#"} onClick={() => handleDeleteClick(contact.id)}>
															<i className="ti-trash" />
														</Link>
													</div>
												</li>
											))}

										</ul>
										<div className="pagination-bx float-end">
											<ul className="pagination">
												<li className="previous"><Link to={"#"}><i className="ti-arrow-left" /> Prev</Link></li>
												<li className="active"><Link to={"#"}>1</Link></li>
												<li><Link to={"#"}>2</Link></li>
												<li><Link to={"#"}>3</Link></li>
												<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right" /></Link></li>
											</ul>
										</div>
									</div>
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
export default Jobcvmanager;