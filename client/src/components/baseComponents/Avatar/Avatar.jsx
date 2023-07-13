import PropTypes from 'prop-types';

const Avatar = ({
  src='https://media.istockphoto.com/id/1150698661/es/foto/hombre-afroamericano-en-gafas-vr-jugando-videojuegos-con-cascos-de-realidad-virtual-tratando.jpg?s=612x612&w=0&k=20&c=D0al4YaFQ5J1VSL-S6MK4-EeMhG4pPi1dj_PFGKIUw4=', 
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