import styled from "styled-components"
import { View, ViewList } from "../../Models/IViewModel"
import OneViewRender from "../Contents/OneViewRender"
import { Link } from "react-router-dom"

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

export default function ContentContainer() {

    return (
        <Wrapper>
            <SlideWrapper id="disable_scroll">
                {ViewList &&
                    ViewList.map((view, index) => {
                        return (
                            <div key={`view-${index}`}>
                                <Link to={`/arts/${view.id}`}>
                                    <OneViewRender view={view} />
                                </Link>
                            </div>
                        )
                    })}
            </SlideWrapper>
        </Wrapper>
    )
}