import { useState } from 'react';
import { Link } from 'react-router-dom';

function Accordsidebar() {
	const [sections, setSections] = useState({
		companies: true,
		experience: false,
		salary: false,
		jobFunction: false,
		industry: false
	}); 
	const toggleSection = (section) => {
		setSections(prevSections => ({
			...prevSections,
			[section]: !prevSections[section]
		}));
	};
	return (
		<div className="col-xl-3 col-lg-4 col-md-5 m-b30">
			<aside id="accordion1" className="sticky-top sidebar-filter">
				<h6 className="title"><i className="fa fa-sliders m-r5" /> Refined By <Link to={"#"} className="font-12 float-end">Reset All</Link></h6>
				<div className="acod-head">
					<h6 className="acod-title">
						<Link to="#" onClick={() => toggleSection('companies')} className={`${sections.companies ? '' : 'collapsed'}`}>Companies</Link>
					</h6>
				</div>
				{sections.companies && (
					<div className="acod-content">
						<div className="form-check">
							<input className="form-check-input" id="companies1" type="checkbox" name="checkbox-companies" />
							<label className="form-check-label" htmlFor="companies1">Job Mirror Consultancy <span>(50)</span> </label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="companies2" type="checkbox" name="checkbox-companies" />
							<label className="form-check-label" htmlFor="companies2">Engineering Group <span>(80)</span> </label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="companies3" type="checkbox" name="checkbox-companies" />
							<label className="form-check-label" htmlFor="companies3">Electric Co. <span>(235)</span> </label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="companies4" type="checkbox" name="checkbox-companies" />
							<label className="form-check-label" htmlFor="companies4">Telecom industry <span>(568)</span></label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="companies5" type="checkbox" name="checkbox-companies" />
							<label className="form-check-label" htmlFor="companies5">Safety/ Health <span>(798)</span></label>
						</div>
					</div>
				)}
				<div className="acod-head">
					<h6 className="acod-title">
						<Link to="#" onClick={() => toggleSection('experience')} className={`${sections.experience ? '' : 'collapsed'}`}>Experience</Link>
					</h6>
				</div>
				{sections.experience && (
					<div className="acod-content">
						<div className="form-check">
							<input className="form-check-input" id="one-years" type="radio" name="	radio-years" />
							<label className="form-check-label" htmlFor="one-years">0-1 Years <span>(120)</span> </label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="two-years" type="radio" name="radio-years" />
							<label className="form-check-label" htmlFor="two-years">1-2 Years <span>(300)</span> </label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="three-years" type="radio" name="radio-years" />
							<label className="form-check-label" htmlFor="three-years">2-3 Years <span>(235)</span> </label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="four-years" type="radio" name="radio-years" />
							<label className="form-check-label" htmlFor="four-years">3-4 Years <span>(568)</span></label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="five-years" type="radio" name="radio-years" />
							<label className="form-check-label" htmlFor="five-years">4-5 Years <span>(798)</span></label>
						</div>
					</div>
				)}
				<div className="acod-head">
					<h6 className="acod-title">
						<Link to="#" onClick={() => toggleSection('salary')} className={`${sections.salary ? '' : 'collapsed'}`}>Salary</Link>
					</h6>
				</div>
				{sections.salary && (
					<div className="acod-content">
						<div className="form-check">
							<input className="form-check-input" id="salary-op1" type="radio" name="radio-currency" />
							<label className="form-check-label" htmlFor="salary-op1">0-1 lacs <span>(120)</span> </label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="salary-op2" type="radio" name="radio-currency" />
							<label className="form-check-label" htmlFor="salary-op2">1-2 lacs <span>(300)</span> </label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="salary-op3" type="radio" name="radio-currency" />
							<label className="form-check-label" htmlFor="salary-op3">2-3 lacs <span>(235)</span> </label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="salary-op4" type="radio" name="radio-currency" />
							<label className="form-check-label" htmlFor="salary-op4">3-4 lacs <span>(568)</span></label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="salary-op5" type="radio" name="radio-currency" />
							<label className="form-check-label" htmlFor="salary-op5">4-5 lacs <span>(798)</span></label>
						</div>
					</div>
				)}
				<div className="acod-head">
					<h6 className="acod-title">
						<Link to="#" onClick={() => toggleSection('jobFunction')} className={`${sections.jobFunction ? '' : 'collapsed'}`}>Job Function</Link>
					</h6>
				</div>
				{sections.jobFunction && (
					<div className="acod-content">
						<div className="form-check">
							<input className="form-check-input" id="function-services-1" type="radio" name="radio-function" />
							<label className="form-check-label" htmlFor="function-services-1">Production Management <span>(120)</span> </label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="function-services-2" type="radio" name="radio-function" />
							<label className="form-check-label" htmlFor="function-services-2">Design Engineering <span>(300)</span> </label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="function-services-3" type="radio" name="radio-function" />
							<label className="form-check-label" htmlFor="function-services-3">Safety/ Health <span>(235)</span> </label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="function-services-4" type="radio" name="radio-function" />
							<label className="form-check-label" htmlFor="function-services-4">Engineering <span>(568)</span></label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="function-services-5" type="radio" name="radio-function" />
							<label className="form-check-label" htmlFor="function-services-5">Product Development <span>(798)</span></label>
						</div>
					</div>
				)}
				<div className="acod-head">
					<h6 className="acod-title">
						<Link to="#" onClick={() => toggleSection('industry')} className={`${sections.industry ? '' : 'collapsed'}`}>Industry</Link>
					</h6>
				</div>
				{sections.industry && (
					<div className="acod-content">
						<div className="form-check">
							<input className="form-check-input" id="industry1" type="radio" name="radio-industry" />
							<label className="form-check-label" htmlFor="industry1">Telecom <span>(5)</span> </label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="industry2" type="radio" name="radio-industry" />
							<label className="form-check-label" htmlFor="industry2">Consulting Services <span>(10)</span> </label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="industry3" type="radio" name="radio-industry" />
							<label className="form-check-label" htmlFor="industry3">Engineering/Projects <span>(15)</span> </label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="industry4" type="radio" name="radio-industry" />
							<label className="form-check-label" htmlFor="industry4">Manufacturing/Industrial <span>(12)</span></label>
						</div>
						<div className="form-check">
							<input className="form-check-input" id="industry5" type="radio" name="radio-industry" />
							<label className="form-check-label" htmlFor="industry5">Architecture/Interior Design <span>(8)</span></label>
						</div>
					</div>
				)}
			</aside>
		</div>
	)
}
export default Accordsidebar; 