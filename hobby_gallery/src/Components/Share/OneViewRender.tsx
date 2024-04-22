import styled from "styled-components";
import "../../App.css"

//use library


//use personal components
import { View } from "../../Models/IViewModel";



const ViewWrapper = styled.div`
    margin : 30px;
    width : 300px;
    height : 400px;

    border-radius : 5px;
    transition :0.5s;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    overflow : hidden;

    &:hover {
        width : 400px;
        height : 450px;

        box-shadow: rgba(100, 100, 111, 0.2) 0px 10px 36px 0px;
    }

    @media screen and (max-width: 800px) {
        width : 350px;

    }

    // img {
    //     width : 50px;
    //     height : 50px;
    // }
`

const Img = styled.img`
    position: relative;
`

export default function OneViewRender({ view }: { view: View }) {
    return (
        <ViewWrapper >
            {
                //테스트용 삼항 분기
                view.imagePath === "" ?
                    <span>{view.imagePath}</span> :
                    <Img src={view.imagePath} alt="" style={{ width: '600px', height: "500px", top : -30, left : -130}} />
            }
            {/* <span>{view.title}</span> */}
        </ViewWrapper>
    )
}