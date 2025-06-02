import icon from '../utils/icon.png';

function Logo() {
  return (
    <img
      src={icon}
      alt="Website Logo"
      style={{ height: '50px', width: 'auto' }} // Adjust size as needed
    />
  );
}

export default Logo;