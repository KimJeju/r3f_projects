import styled from "styled-components"
import  {View } from "../Models/IViewModel"
import OneViewRender from "./Contents/OneViewRender"

const Wrapper = styled.div`
    height : 70vh;

    display : flex;
    align-items : center;
    // padding : 1%;
    // box-shadow : 1 1 1 1;
`
const SlideWrapper = styled.div`
    // background-color : red;
    width : 100%;
    height : 70vh;

    display : flex;
    align-items : center;
    // justify-content : space-around;
    overflow : hidden;
    overflow : scroll;
    transition : 0.5s;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        height : 70vh;
    }
`


const ViewList : View[] = [
    new View("hello","world"),
    new View("mock1","data1"),
    new View("mock2","data2"),
    new View("mock3","data3"),
    new View("mock4","data4"),
    new View("mock5","data5"),
    new View("mock6","data6"),
    new View("mock7","data7"),
    new View("mock8","data8"),
]

export default function ContentContainer() {
    
    return (
        <Wrapper>
            <SlideWrapper id="disable_scroll">
                {ViewList &&
                    ViewList.map((view, index) => {
                        return (
                            <div key={`view-${index}`}>
                                <OneViewRender view={view}/>
                            </div>
                        )
                    })}
            </SlideWrapper>
        </Wrapper>
    )
}