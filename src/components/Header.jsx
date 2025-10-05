import './Header.css';


const Header = ({ title }) => {
	return (
		<header className='page-header'>
			<div className='title-container-section'>
				<h1 className='page-title'>{title}</h1>
			</div>
		</header>
	);
};
export default Header;