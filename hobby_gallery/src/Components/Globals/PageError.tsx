import styled from "styled-components";
import { useRouteError } from "react-router-dom";


const ErrorWrapper = styled.div`
    margin:0;
    padding:5px;
    width : 100%;
    height : 100vh;

    display : flex;
    flex-direction : column;
    align-items : center;

    i {
        font-size : 24px;
        font-weight : bold;
    }
 
`

export default function PageError() {
    const error = useRouteError();
    console.error(error);

    return (
        <ErrorWrapper>
            <h1>에러</h1>
            <p>페이지 랜더링에 오류가 발생하였습니다.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </ErrorWrapper>
    )
}