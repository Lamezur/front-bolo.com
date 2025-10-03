import { Form, Nav, Tab } from "react-bootstrap";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { Link } from "react-router-dom";

function AccountFresher() {
    return (
        <>
            <Header />
            <div className="page-content">
                <div className="section-full content-inner-2 browse-job bg-white">
                    <div className="container">
                        <Tab.Container defaultActiveKey="personal">
                            <Nav as="ul" className="nav nav-tabs nav-tabs-1" >
                                <Nav.Item as="li">
                                    <Nav.Link to={"#"} eventKey="personal" className="site-button"><span>Personal</span></Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link to={"#"} eventKey="education" className="site-button"><span>Education</span></Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="personal" >
                                    <div className="job-bx">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <form className="job-alert-bx">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label>Name</label>
                                                                <input className="form-control" placeholder="Enter Full Name" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label>Email ID*</label>
                                                                <input className="form-control" placeholder="Enter Your Email" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label>Create Password</label>
                                                                <input className="form-control" placeholder="Minimum 6 characters" type="password" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label>Mobile number</label>
                                                                <input className="form-control" placeholder="+91 123 456 7890" type="number" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label>Current City</label>
                                                                <input className="form-control" placeholder="Tell us about your current city" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label>Upload Resume</label>
                                                                <div className="custom-file">
                                                                    <p className="m-a0">
                                                                        <i className="fa fa-upload" />
                                                                        Upload File
                                                                    </p>
                                                                    <input type="file" className="site-button form-control" id="customFile" />
                                                                </div>
                                                                <small>If you do not have a resume document, you may write your brief professional profile <Link className="site-button-link" to={"#"}>here</Link>.</small>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="job-alert-check" name="job-alert-check" />
                                                                    <label className="form-check-label" htmlFor="job-alert-check">I agree to the Terms and Conditions and Privacy Policy</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 text-center">
                                                            <button className="site-button">Register Now</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-lg-4 bg-gray">
                                                <div className="p-a25">
                                                    <h6>Why should you create a job alert</h6>
                                                    <ul className="list-check primary">
                                                        <li>Get relevant jobs directly in your inbox</li>
                                                        <li>Stay updated with latest opportunities</li>
                                                        <li>Be the first one to apply</li>
                                                        <li>Create up to 5 personalized job alerts</li>
                                                    </ul>
                                                    <div className="dez-divider bg-gray-dark"></div>
                                                    <h6 className="font-14">Why info@example.com</h6>
                                                    <p className="m-b10"><strong className="text-black m-r10">800,000+ </strong> Jobs</p>
                                                    <p className="m-b10"><strong className="text-black m-r10">100,000+</strong> CV searches daily</p>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="education">
                                    <div className="job-bx">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <form className="job-alert-bx">
                                                    <div className="row repeater">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label>Highest Qualification</label>
                                                                <input className="form-control" placeholder="Your highest Qualification" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label>Course</label>
                                                                <input className="form-control" placeholder="Your Course" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label>Specialization</label>
                                                                <input className="form-control" placeholder="Specialization" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label>University/College</label>
                                                                <input className="form-control" placeholder="Institute Name" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label>Course Type</label>
                                                                <div className="row">
                                                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                                                        <div className="form-check">
                                                                            <input type="radio" className="form-check-input" id="fullTime" name="example1" />
                                                                            <label className="form-check-label" htmlFor="fullTime">Full Time</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                                                        <div className="form-check">
                                                                            <input type="radio" className="form-check-input" id="partTime" name="example1" />
                                                                            <label className="form-check-label" htmlFor="partTime">Part Time</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                                                        <div className="form-check">
                                                                            <input type="radio" className="form-check-input" id="Correspondence" name="example1" />
                                                                            <label className="form-check-label" htmlFor="Correspondence">Correspondence</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group dz-dropdown">
                                                                <label>Passing Year</label>
                                                                <Form.Select>
                                                                    <option>Select</option>
                                                                    <option value="1">2021</option>
                                                                    <option value="2">2022</option>
                                                                    <option value="3">2023</option>
                                                                    <option value="4">2024</option>
                                                                    <option value="5">2025</option>
                                                                </Form.Select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12" data-repeater-list="outer-list">
                                                            <div data-repeater-item className="form-group">
                                                                <label>Education</label>
                                                                <input className="form-control" placeholder="Education" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <input data-repeater-create type="button" className="form-check-label site-button-link" value="+ Add More Education" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 text-center">
                                                            <button className="site-button">Continue</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-lg-4 bg-gray">
                                                <div className="p-a25">
                                                    <h6>Why should you create a job alert</h6>
                                                    <ul className="list-check primary">
                                                        <li>Get relevant jobs directly in your inbox</li>
                                                        <li>Stay updated with latest opportunities</li>
                                                        <li>Be the first one to apply</li>
                                                        <li>Create up to 5 personalized job alerts</li>
                                                    </ul>
                                                    <div className="dez-divider bg-gray-dark"></div>
                                                    <h6 className="font-14">Why info@example.com</h6>
                                                    <p className="m-b10"><strong className="text-black m-r10">800,000+ </strong> Jobs</p>
                                                    <p className="m-b10"><strong className="text-black m-r10">100,000+</strong> CV searches daily</p>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default AccountFresher;