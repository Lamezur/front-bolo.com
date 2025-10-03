import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Footer from '../../layout/Footer';
import { IMAGES } from '../../constant/theme';
import Profilesidebar from '../../Element/Profilesidebar';
import { jobAlert } from '../../constant/alldata';
import Header from '../../layout/Header';
import DropdownBtn from '../../Element/dropdown-btn';

function Jobsalert() {
	const [company, setCompany] = useState(false);
	const [contacts, setContacts] = useState(jobAlert);
	// delete data  
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
									<div className="job-bx table-job-bx browse-job clearfix">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 float-start text-uppercase">Job Alerts</h5>
											<div className="float-end d-flex">
												<div>
													<span className="select-title">Sort by freshness</span>
												</div>
												<div>
													<DropdownBtn />
												</div>
											</div>
										</div>
										<table>
											<thead>
												<tr>
													<th>Premium jobs</th>
													<th>Criterias</th>
													<th>Date</th>
													<th>Action</th>
												</tr>
											</thead>
											<tbody>
												{contacts.map((contact, index) => (
													<tr key={index}>
														<td className="job-name"><Link to={"/job-detail"}>{contact.title}</Link></td>
														<td className="criterias">Lorem Ipsum is simply dummy text.</td>
														<td className="date">{contact.date}</td>
														<td className="job-links">
															<Link to={'#'} onClick={() => setCompany(true)}><i className="fa fa-eye" /></Link>
															<Link to={"#"} onClick={() => handleDeleteClick(contact.id)}><i className="ti-trash" /></Link>
														</td>
													</tr>
												))}
											</tbody>
										</table>
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
									<Modal show={company} onHide={setCompany} className=" fade modal-bx-info">
										<div role="document">
											<div className="modal-content">
												<div className="modal-header">
													<div className="logo-img">
														<img alt="" src={IMAGES.logoicon2} />
													</div>
													<h5 className="modal-title">Company Name</h5>
													<button type="button" className="close" onClick={() => setCompany(false)}>
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div className="modal-body">
													<ul>
														<li><strong>Job Title :</strong><p> Web Developer – PHP, HTML, CSS </p></li>
														<li><strong>Experience :</strong><p>5 Year 3 Months</p></li>
														<li><strong>Deseription :</strong>
															<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since.</p>
														</li>
													</ul>
												</div>
												<div className="modal-footer">
													<button type="button" className="btn btn-secondary" onClick={() => setCompany(false)}>Close</button>
												</div>
											</div>
										</div>
									</Modal>
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
export default Jobsalert;