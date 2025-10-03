import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { createAccountData } from "../../constant/alldata";

function CreateAccount() {
    return (
        <>
            <Header />
            <div className="page-content">
                <div className="section-full content-inner-2 browse-job bg-white">
                    <div className="container">
                        <div className="text-center emp-res">
                            <h1>Employers Register</h1>
                            <p>Complete Your Steps</p>
                        </div>
                        <div className="job-bx max-w800 m-auto">
                            <div className="row">
                                {createAccountData.map((item, index) => (
                                    <div key={index} className="col-lg-6 m-tb10">
                                        <div className="create-box bg-gray">
                                            <div className="m-b30">
                                                <img src={item.image} width="80" alt="" />
                                            </div>
                                            <div className="clearifx">
                                                <h6 className="m-b10">{item.title}</h6>
                                                <p className="m-b20">{item.description}</p>
                                                <Link to={item.link} className="site-button">Register</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default CreateAccount;