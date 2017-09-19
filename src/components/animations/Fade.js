import React from "react";
import CSSTransition from 'react-transition-group/CSSTransition';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={650}
    unmountOnExit={true}
    classNames="fade"
  >
   {children}
  </CSSTransition>
 );

 export default Fade;