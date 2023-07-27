import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logoB, menu, close } from '../assets';


const Navbar = () => {

	const [active, setActive] = useState("")
	const [toggle, setToggle] = useState(false);

	const NavUl = ({ ulClass, liClass, changeToggle }) => {
		return (
			<ul className={ulClass}>
				{navLinks.map((link) => (
					<li
						key={link.id}
						className={`${active === link.title
							? "text-white"
							: "text-secondary"
							} ${liClass}`}
						onClick={() => {
							changeToggle ? setToggle(!toggle) : null
							setActive(link.title)
						}}
					>
						<a href={`#${link.id}`}>{link.title}</a>
					</li>
				))}
			</ul>
		)
	}

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className="w-full flex justify-between items-center max-w-7x1 mx-auto">

				<Link
					to="/"
					className='flex items-center gap-2'
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={logoB} alt="logo" className="w-9 h-9 object-contain" />
					<p className='text-white text-[18px] font-bold cursor-pointer flex'>
						Benjamin &nbsp;
						<span className='sm:block hidden'>|&nbsp; Morgiewicz</span>
						{/* convert "Morgiewicz" into @ityped job titles */}
					</p>
				</Link>

				<NavUl
					ulClass="list-none hidden sm:flex flex-row gap-10"
					liClass="hover:text-white text-[18px] font-medium cursor-pointer"
					changeToggle={false}
				/>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>

					<div className={
						`${!toggle ? 'hidden' : 'flex'} 
						p-6 black-gradient absolute top-20 right-0 
						mx-4 my-2 min-w-[140px] z-10 rounded-xl`
					}>
						<NavUl
							ulClass="list-none flex justify-end items-start flex-col gap-4"
							liClass="font-poppins font-medium cursor-pointer text-[16px]"
							changeToggle={true}
						/>
					</div>

				</div>

			</div>
		</nav>
	)
}

export default Navbar;