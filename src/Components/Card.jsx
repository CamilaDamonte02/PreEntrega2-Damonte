import PropTypes from 'prop-types';

function Card({ width, height, backgroundColor, borderColor, borderRadius,border, children }) {
    return (
      <div 
        style={{ 
          width: width, 
          height: height, 
          backgroundColor: backgroundColor, 
          borderColor: borderColor, 
          borderRadius: borderRadius,
          margin: '0px', 
          padding: '1vw',
          border: border
        }}
      >
        {children}
      </div>
    );
  }
  
export default Card;
  
Card.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  border: PropTypes.string,
  children: PropTypes.node
};