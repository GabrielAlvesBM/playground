import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className='flex justify-center gap-6 p-2 text-yellow-300'>
      <Link to='/' className='transition-all hover:px-1 hover:scale-110'>
        Home
      </Link>
      <Link to='/page-1' className='transition-all hover:px-1 hover:scale-110'>
        Page 1
      </Link>
      <Link to='/page-2' className='transition-all hover:px-1 hover:scale-110'>
        Page 2
      </Link>
    </nav>
  );
};
