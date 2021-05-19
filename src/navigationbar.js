import logo from "./Assets/logo.svg";
import NavItem from "./navigationItem";


const tabs = [
	"Prices",
	"Learn",
	"Individuals",
	"Businesses",
	"Developers",
	"Company",
];

const NavigationBar = () => {
	return (
		<nav className="w-full bg-white border-b border-gray-200">
			<div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="flex justify-between items-center py-3 xl:justify-start xl:space-x-10">
						<div className="flex justify-start xl:w-0 xl:flex-1">
							<span>
								<span className="sr-only">Workflow</span>
								<img className="w-28" src={logo} alt="logo" />
							</span>
						</div>
						
						<nav className="hidden xl:flex space-x-10 h-full">
							{tabs.map((_item, _i) => (
								<NavItem tabName={_item} />
							))}
						</nav>
						<div className="hidden xl:flex items-center justify-end md:flex-1 xl:w-0">
							<a
								href="#"
								className="whitespace-nowrap text-black hover:text-coinbase text-sm"
							>
								Sign in
							</a>
							<a
								href="#"
								style={{ borderRadius: "4px", backgroundColor: '#0066CC' }}
								className="ml-5 whitespace-nowrap inline-flex items-center justify-center text-sm px-4 py-2
                                border border-transparent shadow-sm text-white bg-coinbase hover:bg-indigo-700"
							>
								Get Started
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
