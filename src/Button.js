//import './Button.css';
import styled from "styled-components";

export default function Button ({ onClick, children }) {
  return <AppButton onClick={onClick} className='Button'>{children}</AppButton>;
}

const AppButton = styled.button`
  padding: 12px;
  background-color: #134f1a;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 900;
  font-size: larger;
  width: 100%;
  background-color: ${({onClick}) => "onClick" ? "red" : "#134f1a"}
`
