import Image from "next/image";
import { BsSearch } from "react-icons/bs";

import { fems_logo } from "@/images";
import { styles } from "../../styles";

const Header = () => {
	return (
		<header className="w-full flex flex-col overflow-hidden">
			<section className="bg-black py-2 px-7 flex items-center justify-between">
				<div className="flex items-center gap-4">
					<span className="bg-white h-6 w-6 flex items-center justify-center rounded-full">
						<Image 
							src={fems_logo}
							alt="FEMS"
							className="w-11/12 h-11/12"
						/>
					</span>
					<span className="text-quaternery font-bold">Maha Kisan</span>
				</div>
			</section>

			<section className="flex p-4 justify-between items-center text-xs">
				<div className="flex items-center gap-3">
					<span className="flex items-center gap-2 border py-1 px-2 rounded-lg">
						<BsSearch className="text-gray-500"/>
						<input 
							placeholder="Search..."
							className="outline-none w-20 md:w-64"
						/>
						<Image 
							src={fems_logo}
							alt="FEMS-SEARCH"
							className="w-5 h-5"
						/>
					</span>
					<select className={`${styles.headerBtn} bg-gray-200 w-20 md:w-40`}>
						<option selected disabled>Region</option>
						<option>Kokan - Maharashtra</option>
						<option>Vidarbha - Maharashtra</option>
						<option>Kunnur - Kerala</option>
					</select>
					<select className={`${styles.headerBtn} bg-gray-200 w-20 md:w-40`}>
						<option selected disabled>Language</option>
						<option>English</option>
						<option>Hindi</option>
						<option>Marathi</option>
					</select>
				</div>
				<div className="flex gap-3 items-center">
					<button className={`${styles.headerBtn} bg-gray-200 hover:bg-gray-300`}>Settings</button>
					<button className={`${styles.headerBtn} bg-tertiary hover:opacity-80 text-white hidden md:block`}>Share</button>
					{/* Link to Profile here */}
				</div>
			</section>
		</header>
	)
};

export default Header;