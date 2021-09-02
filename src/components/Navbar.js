import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Navbar.css';

const Navbar = () => {
	const [navToggle, setnavToggle] = useState(false);
	return (
		<>
			<section className='header-section'>
				<nav className='navbar navbar-expand-lg navbar-light'>
					<div className='container-fluid'>
						<Link className='navbar-brand' to='/'>
							BrightSols
						</Link>
						<button
							className='navbar-toggler'
							type='button'
							onClick={() => setnavToggle(!navToggle)}>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div className={`collapse navbar-collapse ${navToggle && 'show'}`}>
							<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
								<li className='nav-item'>
									<Link className='nav-link active' aria-current='page' to='#'>
										Home
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link' to='/services'>
										Services
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link' to='/aboutus'>
										About
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link' to='/contact-us'>
										Contact
									</Link>
								</li>
							</ul>
							<button className='btn-style btn-style-border' type='submit'>
								Login
							</button>
							<button className='btn-style btn-style-border' type='submit'>
								Singup
							</button>
						</div>
					</div>
				</nav>
			</section>
		</>
	);
};

export default Navbar;
