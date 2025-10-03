import { Route, Routes } from 'react-router-dom';

import Homepage from '../pages/home/Homepage1';
import Homepage2 from '../pages/home/Homepage2';
import Homepage3 from '../pages/home/Homepage3';

import Jobprofile from '../pages/forcandidates/Jobprofile';
import Jobmyresume from '../pages/forcandidates/Jobmyresume';
import Jobsappliedjob from '../pages/forcandidates/Jobsappliedjob';
import Jobsalert from '../pages/forcandidates/Jobsalert';
import Jobsavedjobs from '../pages/forcandidates/Jobsavedjobs';
import Jobcvmanager from '../pages/forcandidates/Jobcvmanager';
import Changepasswordpage from '../pages/forcandidates/Changepasswordpage';

import Companyprofile from '../pages/foremployers/Companyprofile';
import Companyresume from '../pages/foremployers/Companyresume';
import Componypostjobs from '../pages/foremployers/Componypostjobs';
import Companymanage from '../pages/foremployers/Companymanage';
import Companytransactions from '../pages/foremployers/Companytransactions';
import Browsecandidates from '../pages/foremployers/Browsecandidates';
import CreateAccount from '../pages/foremployers/create-account';
import AccountFresher from '../pages/foremployers/account-fresher';
import AccountProfessional from '../pages/foremployers/account-professional';

import Aboutus from '../pages/page/Aboutus';
import Jobdetail from '../pages/page/Jobdetail';
import Companies from '../pages/page/Companies';
import Freejobalerts from '../pages/page/Freejobalerts';
import Browsejoblist from '../pages/page/Browsejoblist';
import Browsejobgrid from '../pages/page/Browsejobgrid';
import Browsejobfilterlist from '../pages/page/Browsejobfilterlist';
import Browsejobfiltergrid from '../pages/page/Browsejobfiltergrid';

import Categoryalljob from '../pages/page/Categoryalljob';
import Categorycompanyjob from '../pages/page/Categorycompanyjob';
import Categorydesignationsjob from '../pages/page/Categorydesignationsjob';
import Categoryjobs from '../pages/page/Categoryjobs';
import Categorylocationjobs from '../pages/page/Categorylocationjobs';
import Categoryskilljobs from '../pages/page/Categoryskilljobs';
import Portfoliogrid2 from '../pages/page/Portfoliogrid2';
import Portfoliogrid3 from '../pages/page/portfoliogrid3';
import Portfoliogrid4 from '../pages/page/portfoliogrid4';
import Register1 from '../pages/page/Register1';
import Register2 from '../pages/page/Register2';
import Error404 from '../pages/page/Error404';
import Contact from '../pages/page/Contact';

import Blogclassic from '../pages/blog/Blogclassic';
import Blogclassicsidebar from '../pages/blog/Blogclassicsidebar';
import Blogdetailgrid from '../pages/blog/Blogdetailgrid';
import Blogdetailgridsidebar from '../pages/blog/Blogdetailgridsidebar';
import Blogleftimg from '../pages/blog/Blogleftimg';
import Blogdetail from '../pages/blog/Blogdetail';
import ScrollToTop from '../Element/ScrollToTop';
import ComingSoon from '../pages/page/coming-soon';
import Loginpage1 from '../pages/authentication/Loginpage1';
import Loginpage2 from '../pages/authentication/Loginpage2 - Copy';
import Loginpage3 from '../pages/authentication/Loginpage3';
import ScrollTopButton from '../Element/scrolltopbutton';

const routedata = [
	{ path: '/', element: <Homepage /> },
	{ path: 'index-1', element: <Homepage /> },
	{ path: 'index-2', element: <Homepage2 /> },
	{ path: 'index-3', element: <Homepage3 /> },
	{ path: 'jobs-profile', element: <Jobprofile /> },
	{ path: 'jobs-my-resume', element: <Jobmyresume /> },
	{ path: 'jobs-applied-job', element: <Jobsappliedjob /> },
	{ path: 'jobs-alerts', element: <Jobsalert /> },
	{ path: 'jobs-saved-jobs', element: <Jobsavedjobs /> },
	{ path: 'jobs-cv-manager', element: <Jobcvmanager /> },
	{ path: 'jobs-change-password', element: <Changepasswordpage /> },
	{ path: 'company-profile', element: <Companyprofile /> },
	{ path: 'company-resume', element: <Companyresume /> },
	{ path: 'company-post-jobs', element: <Componypostjobs /> },
	{ path: 'company-manage-job', element: <Companymanage /> },
	{ path: 'company-transactions', element: <Companytransactions /> },
	{ path: 'browse-candidates', element: <Browsecandidates /> },
	{ path: 'create-account', element: <CreateAccount /> },
	{ path: 'account-fresher', element: <AccountFresher /> },
	{ path: 'account-professional', element: <AccountProfessional /> },
	{ path: 'about-us', element: <Aboutus /> },
	{ path: 'job-detail', element: <Jobdetail /> },
	{ path: 'companies', element: <Companies /> },
	{ path: 'free-job-alerts', element: <Freejobalerts /> },
	{ path: 'browse-job-list', element: <Browsejoblist /> },
	{ path: 'browse-job-grid', element: <Browsejobgrid /> },
	{ path: 'browse-job-filter-list', element: <Browsejobfilterlist /> },
	{ path: 'browse-job-filter-grid', element: <Browsejobfiltergrid /> },
	{ path: 'category-all-jobs', element: <Categoryalljob /> },
	{ path: 'category-company-jobs', element: <Categorycompanyjob /> },
	{ path: 'category-designations-jobs', element: <Categorydesignationsjob /> },
	{ path: 'category-jobs', element: <Categoryjobs /> },
	{ path: 'category-location-jobs', element: <Categorylocationjobs /> },
	{ path: 'category-skill-jobs', element: <Categoryskilljobs /> },
	{ path: 'portfolio-grid-2', element: <Portfoliogrid2 /> },
	{ path: 'portfolio-grid-3', element: <Portfoliogrid3 /> },
	{ path: 'portfolio-grid-4', element: <Portfoliogrid4 /> },
	{ path: 'register', element: <Register1 /> },
	{ path: 'register-2', element: <Register2 /> },
	{ path: 'error-404', element: <Error404 /> },
	{ path: 'contact-us', element: <Contact /> },
	{ path: 'coming-soon', element: <ComingSoon /> },
	{ path: 'blog-classic', element: <Blogclassic /> },
	{ path: 'blog-classic-sidebar', element: <Blogclassicsidebar /> },
	{ path: 'blog-detailed-grid', element: <Blogdetailgrid /> },
	{ path: 'blog-detailed-grid-sidebar', element: <Blogdetailgridsidebar /> },
	{ path: 'blog-left-img', element: <Blogleftimg /> },
	{ path: 'blog-details', element: <Blogdetail /> },
	{ path: 'login', element: <Loginpage1 /> },
	{ path: 'login-2', element: <Loginpage2 /> },
	{ path: 'login-3', element: <Loginpage3 /> },
]

function Root() {
	return (
		<>
			<div className="page-wraper">
				<ScrollToTop />
				<Routes>
					{routedata.map((data, i) => (
						<Route key={i} path={data.path} element={data.element} />
					))}
				</Routes>
				<ScrollTopButton />
			</div>
		</>
	)
}
export default Root;