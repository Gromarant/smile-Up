import PropTypes from 'prop-types';

const Avatar = ({
  src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXIlMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60', 
  alt='user avatar'
}) => {
  return (
    <img className='userAvatar' src={src} alt={alt} />
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
}

export default Avatar;