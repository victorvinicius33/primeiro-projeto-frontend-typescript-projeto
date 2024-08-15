import './styles.css';
import Logo from '../../assets/logo.svg';
import ArrowBack from '../../assets/arrow-back.svg';
import { useNavigate } from 'react-router-dom';

type Props = {
  showBackArrow?: boolean
}

function Header({showBackArrow}: Props) {
  const navigate = useNavigate();

  return (
    <header>
      {
        showBackArrow &&
        <img 
          src={ArrowBack} 
          alt='arrow back' 
          className='arrow-back'
          onClick={() => navigate(-1)} 
        />
      }

      <img src={Logo} alt='logo' />
    </header>
  )
}

export default Header;