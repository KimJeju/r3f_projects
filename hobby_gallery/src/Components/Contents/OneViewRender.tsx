import { View } from "../../Models/IViewModel";
import styled from "styled-components";
import "../../App.css"


const ViewWrapper = styled.div`
    margin : 30px;
    width : 300px;
    height : 400px;
    background-color : blue;

    transition :0.5s;
    box-shadow: 3px 3px 3px 3px #555555;

    &:hover {
        width : 400px;
        height : 500px;

        box-shadow: 6px 6px 6px 6px #555555;
    }

    @media screen and (max-width: 800px) {
        width : 350px;

    }
`

export default function OneViewRender({ view }: { view: View }) {

    return (
        <ViewWrapper >
            <span>{view.imagePath}</span>
            <span>{view.title}</span>

        </ViewWrapper>
    )
}