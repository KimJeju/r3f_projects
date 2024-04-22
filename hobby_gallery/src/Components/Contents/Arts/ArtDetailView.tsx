import styled from "styled-components";
import {useNavigate, useParams } from "react-router-dom"
import ShoesHome from "./Shoes/ShoesHome";

//icons
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


const ContentWarpper = styled.div`
    width : 100%;
    height : 80vh;
`

const BackButton = styled.button`
    width : 100px;
    height : 30px;

    display : flex;
    justify-content : space-around;
    align-items : center;

    position: absolute;
    z-index : 1;
    top: 75px; 
    left: 20px;

    background-image: linear-gradient(to right, #3866F2, #1B0273);
    color : white;
    border : none;
    transition: all 0.5s ease-in;
    border-radius : 8px;

    &:hover {
        color : #0FC2C0;
    }

`

export default function ArtDetailView() {

    const { id } = useParams(); 

    //뒤로가기
    const navigate_id: number | undefined = id as number | undefined;
    const navigate = useNavigate();

    const OnBackToPage = () => {
        if (navigate_id != undefined && navigate_id < 1) {
            navigate("/");
        } else {
            navigate(-1);
        }
    }


    return (
        <ContentWarpper>
            <BackButton onClick={OnBackToPage}>
               <p>Go Back</p>
               <KeyboardDoubleArrowLeftIcon />
            </BackButton>
            <ShoesHome />
        </ContentWarpper>
    )
}