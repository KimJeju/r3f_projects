import { Link, useNavigate, useParams } from "react-router-dom"


export default function ArtDetailView() {

    let { id } = useParams();

    const navigate_id: number | undefined = id as number | undefined;
    //뒤로가기
    const navigate = useNavigate();

    const OnBackToPage = () => {
        if (navigate_id < 1) {
            navigate("/");
        } else {
            navigate(-1);
        }
    }


    return (
        <>
            <button onClick={OnBackToPage}>back Page</button>
            {/* {title} */}
            <p>hello</p>
            <p>
                {id}
            </p>
        </>
    )
}