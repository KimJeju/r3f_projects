import { Link, useNavigate, useParams } from "react-router-dom"
import ShoesHome from "./Shoes/ShoesHome";


export default function ArtDetailView() {

    let { id } = useParams();

    //뒤로가기
    const navigate_id: number | undefined = id as number | undefined;
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
            {/* <button onClick={OnBackToPage}>back Page</button> */}
            <ShoesHome />
        </>
    )
}