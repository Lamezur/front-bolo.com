import { useEffect } from 'react';

function Jobsearchform() {
	useEffect(() => {
		const inputSelector = document.querySelectorAll('input, textarea');
		const handleFocus = function () {
			this.parentElement.parentElement.classList.add("focused");
		};
		const handleBlur = function () {
			const inputValue = this.value;
			if (inputValue === '') {
				this.parentElement.parentElement.classList.remove('filled');
				this.parentElement.parentElement.classList.remove('focused');
			} else {
				this.parentElement.parentElement.classList.add('filled');
			}
		};
		inputSelector.forEach(input => {
			input.addEventListener('focus', handleFocus);
			input.addEventListener('blur', handleBlur);
		});
		return () => {
			inputSelector.forEach(input => {
				input.removeEventListener('focus', handleFocus);
				input.removeEventListener('blur', handleBlur);
			});
		};
	}, []);
	return (
		<div className="job-search-form">
			<form>
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Job Title, Keywords Or Company Name" />
					<input type="text" className="form-control" placeholder="City, Province Or Region" />
					<div className="input-group-prepend">
						<button className="site-button">Search</button>
					</div>
				</div>
			</form>
		</div>
	)
}
export default Jobsearchform;