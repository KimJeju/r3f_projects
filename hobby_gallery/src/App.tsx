import './App.css';
import styled from 'styled-components';

import Appbar from "./Components/Appbar";
import Footer from "./Components/Footer";


const WrapContainer = styled.div`
  height : auto;
  min-height : 95vh;
  padding-bottom : 60px;
`


export default function App() {

  return (
    <>
      <WrapContainer >
      <Appbar />

      </WrapContainer>
      <Footer />
    </>
  )
}