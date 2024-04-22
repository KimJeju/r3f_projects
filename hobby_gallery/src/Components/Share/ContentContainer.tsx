import styled from "styled-components"
import { View, ViewList } from "../../Models/IViewModel"
import OneViewRender from "./OneViewRender"
import { Link } from "react-router-dom"

const Wrapper = styled.div`
    display : flex;
    align-items : center;
`
const SlideWrapper = styled.div`
    width : 100%;
    height : 95vh;

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