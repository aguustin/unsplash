import './forms.css';
import { upload } from '../../api/requests';
import { useContext} from 'react';
import InfoContext from '../../context/infoContext';
import {Toaster, toast} from 'react-hot-toast';

export const PasswordForm = () => {

    const {getImagesContext, setPassword, setBlockDelete} = useContext(InfoContext);

    const handlePass = async (e) => {
        e.preventDefault();
        const pass = e.target.elements.password.value;
        setPassword(pass);
        await getImagesContext(pass);
        setBlockDelete(false);
    }

    return(
        <div className="forms-div absolute z-10 w-screen h-screen">
            <div className="mx-auto">
            <form className="forms text-left p-4 rounded-xl mt-20 mx-auto bg-slate-100" onSubmit={handlePass}>
                <h1 className='text-left text-xl mb-5 mt-2'>Set Unsplash password</h1>
                <label htmlFor="password" className='input-label'>password</label>
                <input type="text" className='input-form p-3 rounded-xl' name="password" placeholder="password"></input>
                <button className="w-full mt-3 bg-lime-500 p-2 rounded-xl text-white font-semibold" type="submit">getUnsplash</button>
            </form>
            </div>
        </div>
    )
}

export const AddPhotoForm = () => {

    const {getImagesContext, uploads, setUploads} = useContext(InfoContext);

    const handleUpload = async (e) => {
        e.preventDefault();

        const label = e.target.elements.label.value;
        const password = e.target.elements.password.value;

        const up = {
            label: label,
            password: password,
            uploads
        }

       await upload(up);

       await getImagesContext(password);

       toast.success("Uploaded sucessfully");
    }

    return(
        <div className="forms-div absolute z-10 w-screen h-screen">
            <div className="mx-auto">
            <form className="forms text-left p-4 rounded-xl mt-20 mx-auto bg-slate-100" onSubmit={handleUpload}>
                <h1 className='text-left text-xl mb-5 mt-2'>add a now photo</h1>
                <label htmlFor="label" className='input-label'>label for image</label>
                <input type="text" className='input-form p-3 rounded-xl' name="label" placeholder="label image"></input>
                <label htmlFor="password" className='input-label'>password for image</label>
                <input type="password" className='input-form p-3 rounded-xl' name="password" placeholder="password"></input>
                <label htmlFor="image" className='input-label'>image</label>
                <input type="file" className='input-form p-3 rounded-xl' name="images" onChange={(e) => setUploads(e.target.files[0])}></input>
                <button className="w-full mt-3 bg-lime-500 p-2 rounded-xl text-white font-semibold" type="submit">Upload</button>
                </form>
            </div>
            <Toaster/>
        </div>
    )
}
