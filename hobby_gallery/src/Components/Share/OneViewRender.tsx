import styled from "styled-components";
import "../../App.css"
import test_img from './imgs/test.jpg'

//use library
import { Link, useParams } from "react-router-dom";


//use personal components
import { View } from "../../Models/IViewModel";



const ViewWrapper = styled.div`
    margin : 30px;
    width : 300px;
    height : 400px;
    background-color : blue;

    transition :0.5s;
    box-shadow: 3px 3px 3px 3px #555555;

    overflow : hidden;

    &:hover {
        width : 400px;
        height : 500px;

        box-shadow: 6px 6px 6px 6px #555555;
    }

    @media screen and (max-width: 800px) {
        width : 350px;

    }

    // img {
    //     width : 50px;
    //     height : 50px;
    // }
`

export default function OneViewRender({ view }: { view: View }) {
    return (
        <ViewWrapper >
            {
                //테스트용 삼항 분기
                view.imagePath === "" ?
                    <span>{view.imagePath}</span> :
                    <img src={view.imagePath} alt="" style={{ width: '400px', height: "500px" }} />
            }
            {/* <span>{view.title}</span> */}
        </ViewWrapper>
    )
}