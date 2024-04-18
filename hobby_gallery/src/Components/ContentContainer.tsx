import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import  {IViewModel, View } from "../Models/IViewModel"
import OneViewRender from "./Contents/OneViewRender"

const Wrapper = styled.div`
    height : 70vh;

    display : flex;
    align-items : center;
    // padding : 1%;
    // box-shadow : 1 1 1 1;
`
const SlideWrapper = styled.div`
    background-color : red;
    width : 100%;
    height : 50vh;

    display : flex;
    align-items : center;
    // justify-content : space-around;
    overflow : hidden;
`


const ViewList : IViewModel[] = [
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

    console.log(ViewList);
    
    return (
        <Wrapper>
            <SlideWrapper>
                {ViewList &&
                    ViewList.map((view, index) => {
                        return (
                            <SwiperSlide key={`view-${index}`}>
                                <OneViewRender view={view}/>
                            </SwiperSlide>
                        )
                    })}
            </SlideWrapper>
        </Wrapper>
    )
}