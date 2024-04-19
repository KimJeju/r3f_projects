import { useParams } from "react-router-dom"


export default function ArtDetailView(){

    let { id } = useParams();



    return(
        <>
            {/* {title} */}
            <p>hello</p>
            <p>
                { id }
            </p>
        </>
    )
}