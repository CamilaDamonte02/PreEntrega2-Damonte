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
  