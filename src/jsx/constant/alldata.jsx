import { IMAGES, SVGICONS } from "./theme"

// header 
export const menudata = [
	{
		title: 'Home',
		submenu: [
			{ title2: 'Home 1', link: 'index-1' },
			{ title2: 'Home 2', link: 'index-2' },
			{ title2: 'Home 3', link: 'index-3' }
		]
	},
	{
		title: 'For Candidates',
		submenu: [
			{ title2: 'My Profile', link: 'jobs-profile' },
			{ title2: 'My Resume', link: 'jobs-my-resume' },
			{ title2: 'Applied Job', link: 'jobs-applied-job' },
			{ title2: 'Jobs Alerts', link: 'jobs-alerts' },
			{ title2: 'Saved Job', link: 'jobs-saved-jobs' },
			{ title2: 'CV Manager', link: 'jobs-cv-manager' },
			{ title2: 'Change Password', link: 'jobs-change-password' }
		]
	},
	{
		title: 'For Employers',
		submenu: [
			{ title2: 'Company Profile', link: 'company-profile' },
			{ title2: 'Employer Resume', link: 'company-resume' },
			{ title2: 'Post A Jobs', link: 'company-post-jobs' },
			{ title2: 'Manage jobs', link: 'company-manage-job' },
			{ title2: 'Transactions', link: 'company-transactions' },
			{ title2: 'Browse Candidates', link: 'browse-candidates' },
			{
				title2: 'Register', icon: true, columnstand: 'open',
				submenu2: [
					{ title3: 'Employers Register', link: 'create-account' },
					{ title3: 'Register Fresher', link: 'account-fresher' },
					{ title3: 'Register Professional', link: 'account-professional' }
				]
			},
		]
	},
	{
		title: 'Pages',
		submenu: [
			{ title2: 'About Us', link: 'about-us' },
			{ title2: 'Job Detail', link: 'job-detail' },
			{ title2: 'companies', link: 'companies' },
			{ title2: 'free job alerts', link: 'free-job-alerts' },
			{
				title2: 'Browse Job',  icon: true, columnstand: 'open',
				submenu2: [
					{ title3: 'Browse Job List', link: 'browse-job-list' },
					{ title3: 'Browse Job Grid', link: 'browse-job-grid' },
					{ title3: 'Browse Filter List', link: 'browse-job-filter-list' },
					{ title3: 'Browse Filter Grid', link: 'browse-job-filter-grid' }
				]
			},
			{
				title2: 'Jobs',  icon: true, columnstand: 'open',
				submenu2: [
					{ title3: 'All Jobs', link: 'category-all-jobs' },
					{ title3: 'Company Jobs', link: 'category-company-jobs' },
					{ title3: 'Designations-jobs', link: 'category-designations-jobs' },
					{ title3: 'Category Jobs', link: 'category-jobs' },
					{ title3: 'Location Jobs', link: 'category-location-jobs' },
					{ title3: 'Skill Jobs', link: 'category-skill-jobs' },
				]
			},
			{
				title2: 'Portfolio',  icon: true, columnstand: 'open',
				submenu2: [
					{ title3: 'Portfolio Grid 2', link: 'portfolio-grid-2' },
					{ title3: 'Portfolio Grid 3', link: 'portfolio-grid-3' },
					{ title3: 'Portfolio Grid 4', link: 'portfolio-grid-4' }
				]
			},
			{
				title2: 'Login',  icon: true, columnstand: 'open',
				submenu2: [
					{ title3: 'Login 1', link: 'login' },
					{ title3: 'Login 2', link: 'login-2' },
					{ title3: 'Login 3', link: 'login-3' }
				]
			},
			{
				title2: 'Register',  icon: true, columnstand: 'open',
				submenu2: [
					{ title3: 'Register 1', link: 'register' },
					{ title3: 'Register 2', link: 'register-2' }
				]
			},
			{ title2: 'Error 404', link: 'error-404' },
			{ title2: 'Coming Soon', link: 'coming-soon' },
			{ title2: 'Contact Us', link: 'contact-us' }
		]
	},
	{
		title: 'Blog',
		columnstand: "dzsubheader",
		submenu: [
			{ title2: 'Classic', link: 'blog-classic' },
			{ title2: 'Classic Sidebar', link: 'blog-classic-sidebar' },
			{ title2: 'Detailed Grid', link: 'blog-detailed-grid' },
			{ title2: 'Detailed Grid Sidebar', link: 'blog-detailed-grid-sidebar' },
			{ title2: 'Left Image Sidebar', link: 'blog-left-img' },
			{ title2: 'Blog Details', link: 'blog-details' }
		]
	}
]
// footer 
export const footerdata = [
	{
		title: 'Frequently Asked Questions',
		class: 'col-xl-5 col-lg-5 col-md-8 col-sm-8 col-12',
		data: [
			{ title: 'Privacy & Seurty', link: '#' },
			{ title: 'Terms of Serice', link: '#' },
			{ title: 'Communications', link: '#' },
			{ title: 'Referral Terms', link: '#' },
			{ title: 'Lending Licnses', link: '#' },
			{ title: 'Support', link: '#' },
			{ title: 'How It Works', link: '#' },
			{ title: 'For Employers', link: '#' },
			{ title: 'Underwriting', link: '#' },
			{ title: 'Contact Us', link: '#' },
			{ title: 'Lending Licnses', link: '#' },
			{ title: 'Support', link: '#' },
		]
	},
	{
		title: 'Find Jobs',
		class: 'col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12',
		columnstand: 'w10',
		data: [
			{ title: 'US Jobs', link: '#' },
			{ title: 'Canada Jobs', link: '#' },
			{ title: 'UK Jobs', link: '#' },
			{ title: 'Emplois en Fnce', link: '#' },
			{ title: 'Jobs in Deuts', link: '#' },
			{ title: 'Vacatures China', link: '#' },
		]
	}
]
export const footer2data = [
	{
		title: "Useful Links",
		columnstand: "widget-links",
		data: [
			{ title: "Find a Job", link: "#" },
			{ title: "Companies", link: "#" },
			{ title: "About Us", link: "#" },
			{ title: "Post a Job", link: "#" },
			{ title: "Testimonial", link: "#" },
		]
	},
	{
		title: "Category",
		columnstand: "widget-categories",
		data: [
			{ title: "UI Designer", link: "#" },
			{ title: "UX Designer", link: "#" },
			{ title: "Grapic Designer", link: "#" },
			{ title: "Web Developers", link: "#" },
			{ title: "More", link: "#" },
		]
	},
	{
		title: "Follow Us",
		columnstand: "widget-social",
		columnstand2: "m-a0",
		data: [
			{ title: "Linked In", link: "https://www.linkedin.com/showcase/dexignzone/posts/?feedView=all" },
			{ title: "facebook", link: "https://www.facebook.com/dexignzone" },
			{ title: "Instagram", link: "https://www.instagram.com/dexignzone/" },
			{ title: "Dribbble", link: "https://dribbble.com/dexignzone" },
			{ title: "Behance", link: "https://www.behance.net/dexignzone" },
		]
	}
]
// blog 
export const widgetPost = [
	{ image: IMAGES.recentblog1, title: '11 Tips to Help You Get New Clients Through Cold Calling', },
	{ image: IMAGES.recentblog2, title: 'Do you have a job that the average person doesn’t even know exists?', },
	{ image: IMAGES.recentblog3, title: 'Using Banner Stands To Increase Trade Show Traffic', },
]
export const dzPost = [
	{ image: IMAGES.gallerymiddle1, },
	{ image: IMAGES.gallerymiddle2, },
	{ image: IMAGES.gallerymiddle3, },
	{ image: IMAGES.gallerymiddle4, },
	{ image: IMAGES.gallerymiddle5, },
	{ image: IMAGES.gallerymiddle6, },
	
]
export const blogPost = [
	{ image: IMAGES.bloggrid1, },
	{ image: IMAGES.bloggrid2, },
	{ image: IMAGES.bloggrid3, },
	{ image: IMAGES.bloggrid4, },
	{ image: IMAGES.bloggrid1, },
	{ image: IMAGES.bloggrid2, },
]
export const blogGride = [
	{ image: IMAGES.bloggrid4, },
	{ image: IMAGES.bloggrid3, },
	{ image: IMAGES.bloggrid2, },
	{ image: IMAGES.bloggrid1, },
	{ image: IMAGES.bloggrid4, },
	{ image: IMAGES.bloggrid3, },
	{ image: IMAGES.bloggrid2, },
	{ image: IMAGES.bloggrid1, },
	{ image: IMAGES.bloggrid4, },
	{ image: IMAGES.bloggrid3, },
	{ image: IMAGES.bloggrid2, },
	{ image: IMAGES.bloggrid1, },
]
export const blogmdGride = [
	{ image: IMAGES.bloggrid4, },
	{ image: IMAGES.bloggrid3, },
	{ image: IMAGES.bloggrid2, },
	{ image: IMAGES.bloggrid1, },
	{ image: IMAGES.bloggrid4, },
	{ image: IMAGES.bloggrid3, },
	{ image: IMAGES.bloggrid2, },
	{ image: IMAGES.bloggrid1, },
]
export const profilesidebardata = [
	{ id: 1, title: "Profile", link: "/jobs-profile", icon: <i className="fa fa-user-o" />, },
	{ id: 2, title: "My Resume", link: "/jobs-my-resume", icon: <i className="fa fa-file-text-o" /> },
	{ id: 3, title: "Saved Jobs", link: "/jobs-saved-jobs", icon: <i className="fa fa-heart-o" /> },
	{ id: 4, title: "Applied Jobs", link: "/jobs-applied-job", icon: <i className="fa fa-briefcase" /> },
	{ id: 5, title: "Job Alerts", link: "/jobs-alerts", icon: <i className="fa fa-bell-o" /> },
	{ id: 6, title: "CV Manager", link: "/jobs-cv-manager", icon: <i className="fa fa-id-card-o" /> },
	{ id: 7, title: "Change Password", link: "/jobs-change-password", icon: <i className="fa fa-key" /> },
	{ id: 8, title: "Log Out", link: "/", icon: <i className="fa fa-sign-out" /> },
]
export const managerBlog = [
	{ id: 1, image: IMAGES.testimonial1, title: 'Alexander Weir', },
	{ id: 2, image: IMAGES.testimonial2, title: 'Jennifer Wood', },
	{ id: 3, image: IMAGES.testimonial3, title: 'Melissa Hassib', },
	{ id: 4, image: IMAGES.testimonial1, title: 'Joseph Macfarlan', },
	{ id: 5, image: IMAGES.testimonial2, title: 'Henry Crooks', },
	{ id: 6, image: IMAGES.testimonial3, title: 'James Rogers', },
]
export const listingsiderbardata = [
	{ title: "Resume Headline", to: "resume_headline_bx" },
	{ title: "Key Skills", to: "key_skills_bx" },
	{ title: "Employment", to: "employment_bx" },
	{ title: "Education", to: "education_bx" },
	{ title: "IT Skills", to: "it_skills_bx" },
	{ title: "Projects", to: "projects_bx" },
	{ title: "Profile Summary", to: "profile_summary_bx" },
	{ title: "Accomplishments", to: "accomplishments_bx" },
	{ title: "Desired Career Profile", to: "desired_career_profile_bx" },
	{ title: "Personal Details", to: "personal_details_bx" },
	{ title: "Attach Resume", to: "attach_resume_bx" }
]
export const jobsappliedjob = [
	{ title: 'PHP Web Developer', },
	{ title: 'Software Developer', },
	{ title: 'Branch Credit Manager', },
]
export const postBox = [
	{ image: IMAGES.testimonial1, },
	{ image: IMAGES.testimonial2, },
	{ image: IMAGES.testimonial3, },
	{ image: IMAGES.testimonial1, },
	{ image: IMAGES.testimonial2, },
	{ image: IMAGES.testimonial3, },
]
export const postResume = [
	{ title: 'Tammy Dixon', },
	{ title: 'John Doe', },
	{ title: 'Ali Tufan', },
	{ title: 'David kamal', },
	{ title: 'Tammy Dixon', },
	{ title: 'John Doe', },
	{ title: 'David kamal', },
	{ title: 'Ali Tufan', },
]
export const blogGrid = [
	{ image: IMAGES.bloggrid1, },
	{ image: IMAGES.bloggrid2, },
	{ image: IMAGES.bloggrid3, },
	{ image: IMAGES.bloggrid4, },
]
export const jobPost = [
	{ image: IMAGES.logoicon1 },
	{ image: IMAGES.logoicon1 },
	{ image: IMAGES.logoicon1 },
	{ image: IMAGES.logoicon1 },
	{ image: IMAGES.logoicon1 },
	{ image: IMAGES.logoicon1 },
]
export const brandLogo = [
	{ image: IMAGES.logo1jpg },
	{ image: IMAGES.logo2jpg },
	{ image: IMAGES.logo3jpg },
	{ image: IMAGES.logo4jpg },
	{ image: IMAGES.logo5jpg },
	{ image: IMAGES.logo6jpg },
	{ image: IMAGES.logo7jpg },
	{ image: IMAGES.logo8jpg },
	{ image: IMAGES.logo9jpg },
]
export const cityBox = [
	{ image: IMAGES.citypic1, title: 'Iraq', },
	{ image: IMAGES.citypic2, title: 'Argentina', },
	{ image: IMAGES.citypic3, title: 'Indonesia', },
	{ image: IMAGES.citypic4, title: 'Gambia', },
	{ image: IMAGES.citypic5, title: 'India', },
	{ image: IMAGES.citypic6, title: 'Thailand', },
	{ image: IMAGES.citypic7, title: 'Banjul', },
	{ image: IMAGES.citypic8, title: 'Spain', },
]
export const companyLogo = [
	{ image: IMAGES.logo1jpg, },
	{ image: IMAGES.logo2jpg, },
	{ image: IMAGES.logo3jpg, },
	{ image: IMAGES.logo4jpg, },
	{ image: IMAGES.logo5jpg, },
	{ image: IMAGES.logo6jpg, },
	{ image: IMAGES.logo7jpg, },
	{ image: IMAGES.logo8jpg, },
	{ image: IMAGES.logo9jpg, },
	{ image: IMAGES.logo10jpg, },
]
export const jobCategorieslistdata = [
	{
		title: "Browse Jobs by Industries",
		title2: "Browse Jobs by Designations",
		data1: [
			{ title: "Android Jobs" },
			{ title: "WordPress Jobs" },
			{ title: "eCommerce Jobs" },
			{ title: "Design Jobs" },
			{ title: "Mobile Jobs" },
			{ title: "MySQL Jobs" },
			{ title: "SEO Jobs" },
		],
		data2: [
			{ title: "Website Design" },
			{ title: "Web Development" },
			{ title: "Web Design" },
			{ title: "Programming Jobs" },
			{ title: "JavaScript Jobs" },
			{ title: "Developer Jobs" },
			{ title: "Software Jobs" },
		]
	},
	{
		title: "Browse Jobs by Functional Areas",
		title2: "Browse Jobs by Skills",
		data1: [
			{ title: "Email Marketing" },
			{ title: "Lead Generation" },
			{ title: "Public Relations" },
			{ title: "Telemarketing Jobs" },
			{ title: "Display Advertising" },
			{ title: "Marketing Strategy" },
			{ title: "Search Engine Marketing" },
		],
		data2: [
			{ title: "Other - Sales & Marketing" },
			{ title: "Display Advertising" },
			{ title: "Market & Customer" },
			{ title: "Search Engine Optimization" },
			{ title: "Social Media Marketing" },
			{ title: "Search Engine Marketing" },
			{ title: "Marketing Strategy" },
		]
	}
];
export const listBox1 = [
	{ image: IMAGES.logo17png, title: 'Email Marketing', },
	{ image: IMAGES.logo18png, title: '24/7 Customer Jobs', },
	{ image: IMAGES.logo19png, title: 'African Commodities DMCC Jobs', },
	{ image: IMAGES.logo20png, title: 'Foton Motors Jobs', },
	{ image: IMAGES.logo21png, title: 'Religare Technologies Jobs', },
	{ image: IMAGES.logo17png, title: 'Bank Job', },
	{ image: IMAGES.logo18png, title: 'Philips Software Centre Jobs', },
	{ image: IMAGES.logo19png, title: 'Samsung Software Jobs', },
	{ image: IMAGES.logo20png, title: 'Directi Jobs', },
	{ image: IMAGES.logo21png, title: 'Data Entry Jobs', },
]
export const listBox2 = [
	{ image: IMAGES.logo21png, title: 'Philips Software Centre Jobs', },
	{ image: IMAGES.logo20png, title: 'Bank Jobs', },
	{ image: IMAGES.logo19png, title: 'Samsung Software Jobs', },
	{ image: IMAGES.logo20png, title: 'Directi Jobs', },
	{ image: IMAGES.logo21png, title: 'Data Entry Jobs', },
	{ image: IMAGES.logo17png, title: 'Bank Job', },
	{ image: IMAGES.logo20png, title: 'Email Marketing', },
	{ image: IMAGES.logo19png, title: '24/7 Customer Jobs', },
	{ image: IMAGES.logo18png, title: 'African Commodities DMCC Jobs', },
	{ image: IMAGES.logo17png, title: 'Foton Motors Jobs', },
]
export const listBox3 = [
	{ image: IMAGES.logo18png, title: 'Directi Jobs', },
	{ image: IMAGES.logo17png, title: 'Data Entry Jobs', },
	{ image: IMAGES.logo20png, title: 'Philips Software Centre Jobs', },
	{ image: IMAGES.logo21png, title: '24/7 Customer Jobs', },
	{ image: IMAGES.logo19png, title: 'Bank Job', },
	{ image: IMAGES.logo17png, title: 'Samsung Software Jobs', },
	{ image: IMAGES.logo18png, title: 'Directi Jobs', },
	{ image: IMAGES.logo20png, title: 'Foton Motors Jobs', },
	{ image: IMAGES.logo21png, title: 'Email Marketing', },
	{ image: IMAGES.logo19png, title: 'African Commodities DMCC Jobs', },
]
export const listBox11 = [
	{ image: IMAGES.logo17png, title: 'Directi Jobs', },
	{ image: IMAGES.logo18png, title: 'Data Entry Jobs', },
	{ image: IMAGES.logo19png, title: 'Philips Software Centre Jobs', },
	{ image: IMAGES.logo20png, title: 'Foton Motors Jobs', },
	{ image: IMAGES.logo21png, title: 'Bank Jobs', },
]
export const listBox22 = [
	{ image: IMAGES.logo21png, title: 'Samsung Software Jobs', },
	{ image: IMAGES.logo20png, title: '24/7 Customer Jobs', },
	{ image: IMAGES.logo19png, title: 'Samsung Software Jobs', },
	{ image: IMAGES.logo18png, title: 'Directi Jobs', },
	{ image: IMAGES.logo17png, title: 'Foton Motors Jobs', },
]
export const listBox33 = [
	{ image: IMAGES.logo18png, title: 'Directi Jobs', },
	{ image: IMAGES.logo17png, title: 'Data Entry Jobs', },
	{ image: IMAGES.logo20png, title: 'Philips Software Centre Jobs', },
	{ image: IMAGES.logo21png, title: '24/7 Customer Jobs', },
	{ image: IMAGES.logo19png, title: 'Bank Job', },
]
export const designationListdata1 = [
	'Email Marketing',
	'Lead Generation',
	'Public Relations',
	'Telemarketing Jobs',
	'Display Advertising',
	'Marketing Strategy',
	'Search Engine Marketing',
	'Other - Sales & Marketing',
	'Display Advertising',
	'Market & Customer',
	'Search Engine Optimization',
	'Social Media Marketing',
	'Search Engine Marketing',
	'Marketing Strategy',
	'Email Marketing',
	'Lead Generation',
	'Public Relations',
	'Telemarketing Jobs',
	'Display Advertising',
	'Marketing Strategy',
	'Search Engine Marketing',
	'Other - Sales & Marketing',
	'Display Advertising',
	'Market & Customer',
	'Search Engine Optimization',
	'Social Media Marketing',
	'Search Engine Marketing',
	'Marketing Strategy',
]
export const designationListdata2 = [
	"Jobs by Company",
	"Jobs by Category",
	"Jobs by Location",
	"Jobs by Designation",
	"Jobs by Skill",
	"Jobs by Company",
	"Jobs by Category",
	"Jobs by Company",
	"Jobs by Category",
	"Jobs by Location",
	"Jobs by Designation",
	"Jobs by Skill",
	"Jobs by Location",
	"Jobs by Designation",
	"Jobs by Designation",
	"Jobs by Skill",
	"Jobs by Company",
	"Jobs by Category",
	"Jobs by Company",
	"Jobs by Category",
	"Jobs by Location",
	"Jobs by Designation",
	"Jobs by Location",
	"Jobs by Designation",
	"Jobs by Skill",
	"Jobs by Location",
	"Jobs by Designation",
	"Jobs by Skill",
]
export const designationListdata3 = [
	"Android Jobs",
	"WordPress Jobs",
	"eCommerce Jobs",
	"Design Jobs",
	"Mobile Jobs",
	"MySQL Jobs",
	"SEO Jobs",
	"Website Design",
	"Web Development",
	"Web Design",
	"Programming Jobs",
	"JavaScript Jobs",
	"Developer Jobs",
	"Software Jobs",
	"Android Jobs",
	"WordPress Jobs",
	"eCommerce Jobs",
	"Design Jobs",
	"Mobile Jobs",
	"MySQL Jobs",
	"SEO Jobs",
	"Website Design",
	"Web Development",
	"Web Design",
	"Programming Jobs",
	"JavaScript Jobs",
	"Developer Jobs",
	"Software Jobs",
]
export const categoriesskilldata = ["Jobs By Company", "Jobs by Category", "Jobs by Location", "Jobs by Designation", "Jobs by Skill", "Jobs By Company", "Jobs by Category",]
export const categoriesskilldata2 = ["Jobs By Company", "Jobs by Category", "Jobs by Location", "Jobs by Designation", "Jobs by Skill", "Jobs By Location", "Jobs by Designation",]

export const companyName = [
	{ id: 0, title: 'Top 100', },
	{ id: 1, title: 'A', },
	{ id: 2, title: 'B', },
	{ id: 3, title: 'C', },
	{ id: 4, title: 'D', },
	{ id: 5, title: 'E', },
	{ id: 6, title: 'F', },
	{ id: 7, title: 'G', },
	{ id: 8, title: 'H', },
	{ id: 9, title: 'I', },
	{ id: 10, title: 'J', },
	{ id: 11, title: 'K', },
	{ id: 12, title: 'L', },
	{ id: 13, title: 'M', },
	{ id: 14, title: 'N', },
	{ id: 15, title: 'O', },
	{ id: 16, title: 'P', },
	{ id: 17, title: 'Q', },
	{ id: 18, title: 'R', },
	{ id: 19, title: 'S', },
	{ id: 20, title: 'T', },
	{ id: 21, title: 'U', },
	{ id: 22, title: 'V', },
	{ id: 23, title: 'W', },
	{ id: 24, title: 'X', },
	{ id: 25, title: 'Y', },
	{ id: 26, title: 'Z', },
	{ id: 27, title: '0-99', },
]
export const employeeSidebarData = [
	{ id: 1, title: "Company Profile", link: "/company-profile", icon: <i className="fa fa-user-o" /> },
	{ id: 2, title: "Post A Job", link: "/company-post-jobs", icon: <i className="fa fa-file-text-o" /> },
	{ id: 3, title: "Transactions", link: "/company-transactions", icon: <i className="fa fa-random" /> },
	{ id: 4, title: "Manage jobs", link: "/company-manage-job", icon: <i className="fa fa-briefcase" /> },
	{ id: 5, title: "Resume", link: "/company-resume", icon: <i className="fa fa-id-card-o" /> },
	{ id: 6, title: "Change Password", link: "/jobs-change-password", icon: <i className="fa fa-key" /> },
	{ id: 7, title: "Log Out", link: "/", icon: <i className="fa fa-sign-out" /> },
];

export const featureCityData = [
	{ title: "Iraq", jobs: 765, image: IMAGES.citypic1 },
	{ title: "Argentina", jobs: 352, image: IMAGES.citypic2 },
	{ title: "Indonesia", jobs: 893, image: IMAGES.citypic3 },
	{ title: "Gambia", jobs: 502, image: IMAGES.citypic4 },
	{ title: "India", jobs: 765, image: IMAGES.citypic5 },
	{ title: "Thailand", jobs: 352, image: IMAGES.citypic6 },
	{ title: "Banjul", jobs: 893, image: IMAGES.citypic7 },
	{ title: "Spain", jobs: 502, image: IMAGES.citypic8 },
];
export const jobcategoriesData = [
	{ title: "Design, Art & Multimedia", icon: <i className="ti-location-pin" />, },
	{ title: "Education Training", icon: <i className="ti-wand" />, },
	{ title: "Accounting / Finance", icon: <i className="ti-wallet" />, },
	{ title: "Human Resource", icon: <i className="ti-cloud-up" />, },
	{ title: "Telecommunications", icon: <i className="ti-bar-chart" />, },
	{ title: "Restaurant / Food Service", icon: <i className="ti-tablet" />, },
	{ title: "Construction / Facilities", icon: <i className="ti-camera" />, },
	{ title: "Health", icon: <i className="ti-panel" />, },
]
export const postBlog = [
	{ image: IMAGES.logo1svg, title: "Digital Marketing Executive", },
	{ image: IMAGES.logo2svg, title: "Principal UX Designer", },
	{ image: IMAGES.logo3svg, title:"Junior UX Designer"},
	{ image: IMAGES.logo4svg, title:"Senior UX Designer", },
	{ image: IMAGES.logo5svg, title:"Digital Marketing Executive",},
	{ image: IMAGES.logoicon1, title:"Freelance UI Designer",},
]
export const owlblog = [
	{ image: IMAGES.testimonial1, },
	{ image: IMAGES.testimonial2, },
	{ image: IMAGES.testimonial3, },
	{ image: IMAGES.testimonial2, },
]
export const owlblog2 = [
	{ image: IMAGES.bloggrid4, },
	{ image: IMAGES.bloggrid3, },
	{ image: IMAGES.bloggrid2, },
	{ image: IMAGES.bloggrid1, },
]
export const jobAlert = [
	{ id: 1, title: 'Social Media Expert', company: "@company-name", date: 'December 15,2018', },
	{ id: 2, title: 'Web Designer', company: "@company-name", date: 'November 10,2018', },
	{ id: 3, title: 'Finance Accountant', company: "@company-name", date: 'October 5,2018', },
	{ id: 4, title: 'Social Media Expert', company: "@company-name", date: 'December 15,2018', },
	{ id: 5, title: 'Web Designer', company: "@company-name", date: 'November 10,2018', },
	{ id: 6, title: 'Finance Accountant', company: "@company-name", date: 'October 5,2018', },
	{ id: 7, title: 'Social Media Expert', company: "@company-name", date: 'December 15,2018', },
	{ id: 8, title: 'Web Designer', company: "@company-name", date: 'November 10,2018', },
	{ id: 9, title: 'Finance Accountant', company: "@company-name", date: 'October 5,2018', },
	{ id: 10, title: 'Social Media Expert', company: "@company-name", date: 'December 15,2018', },
]
export const blogPost2 = [
	{ image: IMAGES.blogthum2, },
	{ image: IMAGES.blogthum1, },
	{ image: IMAGES.blogthum4, },
	{ image: IMAGES.blogthum3, },
	{ image: IMAGES.blogthum2, },
	{ image: IMAGES.blogthum1, },
]
export const jobBlog = [
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
]
export const categories = [
	{ id: 1, image: IMAGES.gallerymiddle1, image2: IMAGES.gallerymasnory1, category: 'web design' },
	{ id: 2, image: IMAGES.gallerymiddle2, image2: IMAGES.gallerymasnory2, category: 'advertising branding photography' },
	{ id: 3, image: IMAGES.gallerymiddle3, image2: IMAGES.gallerymasnory3, category: 'branding design photography' },
	{ id: 4, image: IMAGES.gallerymiddle4, image2: IMAGES.gallerymasnory4, category: 'web design' },
	{ id: 5, image: IMAGES.gallerymiddle5, image2: IMAGES.gallerymasnory5, category: 'web branding' },
	{ id: 6, image: IMAGES.gallerymiddle6, image2: IMAGES.gallerymasnory6, category: 'advertising design photography' },
	{ id: 7, image: IMAGES.gallerymiddle7, image2: IMAGES.gallerymasnory3, category: 'web branding' },
	{ id: 8, image: IMAGES.gallerymiddle8, image2: IMAGES.gallerymasnory2, category: 'advertising design photography' },
	{ id: 9, image: IMAGES.gallerymiddle9, image2: IMAGES.gallerymasnory1, category: 'web photography' },
	{ id: 10, image: IMAGES.gallerymiddle1, category: 'advertising branding' },
	{ id: 11, image: IMAGES.gallerymiddle2, category: 'web design' },
	{ id: 12, image: IMAGES.gallerymiddle3, category: 'advertising branding photography' },
];
export const filtertabdata = [
	{ id: 0, filter: '*', title: 'All' },
	{ id: 1, filter: '.web', title: 'Designing' },
	{ id: 2, filter: '.advertising', title: 'Construct' },
	{ id: 3, filter: '.branding', title: 'Finance' },
	{ id: 4, filter: '.design', title: 'Development' },
	{ id: 5, filter: '.photography', title: 'Archeology' }
]
export const aboutusdata = [
	{ icon: 'ti-desktop', title: 'Elegant / Unique design', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.' },
	{ icon: 'ti-image', title: 'Make it Simple', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.' },
	{ icon: 'ti-cup', title: 'Different Layout Type', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.' },
]
export const browsejobfilterlistdata = [
	{ image: IMAGES.logoicon1 },
	{ image: IMAGES.logoicon1 },
	{ image: IMAGES.logoicon1 },
	{ image: IMAGES.logoicon1 },
	{ image: IMAGES.logoicon1 },
	{ image: IMAGES.logoicon1 },
]
export const browsejobgriddata = [
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
	{ title: 'Digital Marketing Executive', },
]
export const categoriesjobdata = ["Email Marketing", "Lead Generation", "Public Relations", "Telemarketing Jobs", "Display Advertising", "Marketing Strategy", "Search Engine Marketing", "Other - Sales & Marketing", "Display Advertising", "Market & Customer"]

export const categoriesjobdata2 = ["Marketing Strategy", "Email Marketing", "Lead Generation", "Public Relations", "Telemarketing Jobs", "Display Advertising", "Marketing Strategy", "Search Engine Marketing", "Other - Sales & Marketing", "Display Advertising",]

export const categoriesjobdata3 = ["Search Engine Marketing", "Marketing Strategy", "Email Marketing", "Lead Generation", "Public Relations", "Telemarketing Jobs", "Display Advertising", "Marketing Strategy", "Search Engine Marketing", "Other - Sales & Marketing"]

export const membershipplan = [
	{ title: "Basic", price: "Free", },
	{ title: "Professional", price: "$ 29 / Per Installation", columnstand1: "bg-primary text-white active", columnstand2: "white", columnstand3: "text-primary", },
	{ title: "Extended", price: "$ 29 / Per Installation", }
]
export const partnerdata = [
	{ Image: IMAGES.partner1 },
	{ Image: IMAGES.partner2 },
	{ Image: IMAGES.partner3 },
	{ Image: IMAGES.partner4 },
	{ Image: IMAGES.partner5 },
	{ Image: IMAGES.partner6 },
	{ Image: IMAGES.partner3 },
]
export const workdata = [
	{ svg: SVGICONS.search2, title: "Search Jobs" },
	{ svg: SVGICONS.resume, title: "Cv/Resume" },
	{ svg: SVGICONS.account, title: "Create Account" },
	{ svg: SVGICONS.apply, title: "Apply Them" },
]

export const Desirecategorydata = [
	{ title: "UI/Ux Design", count: "100+Posted New Jobs" },
	{ title: "Illustration", count: "200+Posted New Jobs" },
	{ title: "Cool Art", count: "150+Posted New Jobs" },
	{ title: "Web Design", count: "100+Posted New Jobs" },
	{ title: "Produt Design", count: "110+Posted New Jobs" },
	{ title: "Developer", count: "250+Posted New Jobs" },
	{ title: "Animation", count: "150+Posted New Jobs" },
]

export const jobofferdata = [
	{ title: "Google , New York", image: IMAGES.google, position: "Sr. Product Designer", days: "2 days ago", },
	{ title: "Microsoft , California", image: IMAGES.microsoft, position: "Web Designer", days: "1 days ago", },
	{ title: "Amazon , Southfield", image: IMAGES.amazon, position: "IT Management", days: "2 days ago", },
	{ title: "Github , Southfield", image: IMAGES.github, position: "Sr. Product Designer", days: "2 days ago", },
	{ title: "Dropbox , New York", image: IMAGES.dropbox, position: "Web Designer", days: "1 days ago", },
	{ title: "Adobe , California", image: IMAGES.adobe, position: "IT Management", days: "2 days ago", },
]

export const testimonialdata = [
	{ title: "Andnew Smith", image: IMAGES.testimonial4, },
	{ title: "Max Makina", image: IMAGES.testimonial5, },
	{ title: "Makima Smith", image: IMAGES.testimonial3, },
	{ title: "Max Makina", image: IMAGES.testimonial5, },
]
export const createAccountData = [
	{ title: "I am a Professional", link: "/account-professional", image: IMAGES.schoolbag, description: "I have at least 1 month of work experience" },
	{ title: "I am a Fresher", link: "/account-fresher", image: IMAGES.backpack, description: "I have just graduated/I haven't worked after graduation" }
]
export const companiesNavdata = [
	{ id: 0, filter: '', title: 'A' },
	{ id: 1, filter: '.web', title: 'B' },
	{ id: 2, filter: '.advertising', title: 'C' },
	{ id: 3, filter: '.branding', title: 'D' },
	{ id: 4, filter: '.design', title: 'E' },
	{ id: 5, filter: '.photography', title: 'F' },
	{ id: 6, filter: '', title: 'G' },
	{ id: 7, filter: '.web', title: 'H' },
	{ id: 8, filter: '.advertising', title: 'I' },
	{ id: 9, filter: '.branding', title: 'J' },
	{ id: 10, filter: '.design', title: 'K' },
	{ id: 11, filter: '.photography', title: 'L' },
	{ id: 12, filter: '', title: 'M' },
	{ id: 13, filter: '.web', title: 'N' },
	{ id: 14, filter: '.advertising', title: 'O' },
	{ id: 15, filter: '.branding', title: 'P' },
	{ id: 16, filter: '.design', title: 'Q' },
	{ id: 17, filter: '.photography', title: 'R' },
	{ id: 18, filter: '', title: 'S' },
	{ id: 19, filter: '.web', title: 'T' },
	{ id: 20, filter: '.advertising', title: 'U' },
	{ id: 21, filter: '.branding', title: 'V' },
	{ id: 22, filter: '.design', title: 'W' },
	{ id: 23, filter: '.photography', title: 'X' },
	{ id: 24, filter: '', title: 'Y' },
	{ id: 25, filter: '.web', title: 'Z' },
]
export const companiesdata = [
	{ id: 1, image: IMAGES.gallerymiddle1, image2: IMAGES.logologo1, catagory: "web", },
	{ id: 2, image: IMAGES.gallerymiddle2, image2: IMAGES.logologo2, catagory: "advertising", },
	{ id: 3, image: IMAGES.gallerymiddle3, image2: IMAGES.logologo3, catagory: "branding", },
	{ id: 4, image: IMAGES.gallerymiddle4, image2: IMAGES.logologo4, catagory: "design", },
	{ id: 5, image: IMAGES.gallerymiddle5, image2: IMAGES.logologo1, catagory: "photography", },
	{ id: 6, image: IMAGES.gallerymiddle6, image2: IMAGES.logologo2, catagory: "web", },
	{ id: 7, image: IMAGES.gallerymiddle7, image2: IMAGES.logologo3, catagory: "advertising", },
	{ id: 8, image: IMAGES.gallerymiddle8, image2: IMAGES.logologo1, catagory: "web", },
	{ id: 9, image: IMAGES.gallerymiddle9, image2: IMAGES.logologo2, catagory: "branding", },
	{ id: 10, image: IMAGES.gallerymiddle1, image2: IMAGES.logologo3, catagory: "design", },
	{ id: 11, image: IMAGES.gallerymiddle2, image2: IMAGES.logologo4, catagory: "web", },
	{ id: 12, image: IMAGES.gallerymiddle3, image2: IMAGES.logologo1, catagory: "photography", },
]