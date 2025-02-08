import { Link } from 'react-router-dom';
import '../buttonLink/ButtonLink.css';

interface ButtonLinkProps {
  buttontext: string;
  to: string;
  id?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ buttontext, to, id }) => {
  return (
    <Link to={to} id={id} className="Link" aria-label={buttontext}>
      {buttontext}
    </Link>
  );
};

export default ButtonLink;
