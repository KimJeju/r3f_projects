import { View } from "../../Models/IViewModel";

export default function OneViewRender({view} : {view : View}){

    return (
        <>
            <span>{view.imagePath}</span>
            <span>{view.title}</span>

        </>
    )
}