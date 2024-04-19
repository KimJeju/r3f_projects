import './App.css';
import styled from 'styled-components';

import Appbar from "./Components/Appbar";
import Footer from "./Components/Footer";
import ContentContainer from './Components/Share/ContentContainer';
import { Outlet, useParams } from 'react-router-dom';


const WrapContainer = styled.div`
  height : auto;
  min-height : 95vh;
  padding-bottom : 60px;
`


export default function App() {

  const { id } = useParams();

  console.log(id === undefined);


  return (
    <>
      <WrapContainer >
      <Appbar />

      {id === undefined ?  <ContentContainer /> : <></>}

      </WrapContainer>
      <Footer />
    </>
  )
}