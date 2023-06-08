import { useContext, useState } from "react";
import InfoContext from "../../context/infoContext";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Unsplash = () => {

    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const {images, password , deleteImgContext, blockDelete} = useContext(InfoContext);
    const [data, setData] = useState();
   
    const DeletePhotoForm = (id) => {

        const [passw, setPassw] = useState([]);
        const ids = id.value.data;

        const d = async (e, ids, passw) => {
            e.preventDefault();
            await deleteImgContext(ids, passw);
            setShowDeleteForm(!showDeleteForm)
        }
        return(
            <div className="forms-div absolute z-10 w-screen h-90 bg-slate-500">
                <div classname="mx-auto">
                <form className="forms text-left p-4 rounded-xl mt-20 mx-auto bg-slate-100">
                    <h1 className='text-left text-xl mb-5 mt-2'>Are you sure?</h1>
                    <label htmlFor="password" className='input-label'></label>
                    <input type="password" className='input-form p-3 rounded-xl' name="password" placeholder="enter password" onChange={(e) => setPassw(e.target.value)}></input>
                    <button id="delete" onClick={(e) => d(e, ids, passw)}>Delete</button>
                    <button id="cancel" onClick={() => setShowDeleteForm(!showDeleteForm)}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }

    const deleting = (id) => {
        setData(id);
        setShowDeleteForm(!showDeleteForm);
    }

    return(
        <div className="unsplash container mx-auto mt-6 mb-6 flex flex-wrap gap-2">
        {showDeleteForm ? <DeletePhotoForm value={{data}}/> : null}
           {images.map(i => <div className="mx-auto" key={i._id}>
           <LazyLoadImage
            key={i._id}
            src={i.image?.url}
            width={420}
           />
                
                { blockDelete ? '' : <button className="deleteB relative" onClick={() => deleting(i._id, password)}>Delete</button>}
            </div>)} 
        </div>
    )

}

export default Unsplash;