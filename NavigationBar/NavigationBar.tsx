import React from 'react'
import DisplayProfile from "../displayProfile/displayProfile"

export default function NavigationBar() {
	const desplayMainProfiles = desplayMainProfile()

	function desplayMainProfile() {
		return (
			<DisplayProfile />
		)
	}
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<a className="btn btn-ghost text-xl"> <img className="w-10" src="https://image.shutterstock.com/image-photo/image-260nw-2168363313.jpg"></img></a>

				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<details className="w-36">
								<summary>Projects</summary>
								<ul className="p-2 w-36">
									<li><a href="https://stackblitz-starters-8b7baz.stackblitz.io/" target="_blank">Google Tab</a></li>
									<li><a href="https://stackblitz-starters-8b7baz.stackblitz.io/" target="_blank">Project-2</a></li>
								</ul>
							</details>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					<a className="btn">Sign in</a>
					<label className="flex cursor-pointer gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
						<input type="checkbox" value="synthwave" className="toggle theme-controller" />
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
					</label>
				</div>
				<div className="dropdown dropdown-end pl-3">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img alt="Tailwind CSS Navbar component" src="data:image/jpeg;base64,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" />
						</div>
					</div>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li><a>Settings</a></li>
					</ul>
				</div>
			</div>
			<div></div>
		</div>

	)
}

