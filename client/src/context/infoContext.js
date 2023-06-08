import {createContext, useState} from 'react';
import { getImages, deleteImg, search} from '../api/requests';

const InfoContext = createContext();

export const InfoContextProvider = ({children}) => {

    const [password, setPassword] = useState([]);
    const [blockDelete, setBlockDelete] = useState(false);
    const [images, setImages] = useState([]);
    const [deleting, setDeleting] = useState([]);
    const [uploads, setUploads] = useState([]);

    const getImagesContext = async (password) => {
       const res = await getImages({password});
       setImages(res.data);
    }

    const deleteImgContext = async (id, passw) => {
        await deleteImg(id, passw);
        setImages(images.filter((img) => img._id !== id));
     }

    const searchImgContext = async (searchLabel) => {
        const res = await search({searchLabel});
        if(res){
            setImages(res.data);
        }
    }
 

    return(
        <InfoContext.Provider value={{password, 
        setPassword, 
        getImagesContext, 
        deleteImgContext, 
        searchImgContext, 
        images,
        deleting,
        uploads,
        blockDelete,
        setUploads,
        setDeleting,
        setBlockDelete}}>{children}</InfoContext.Provider>
    )
}

export default InfoContext;