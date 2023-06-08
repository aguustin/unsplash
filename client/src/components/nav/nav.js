import "./nav.css";
import {useContext, useState} from "react";
import { PasswordForm, AddPhotoForm} from "../../utils/forms/forms";
import user from "../../imgs/user.png";
import InfoContext from "../../context/infoContext";


const Nav = () => {


    const {searchImgContext, setBlockDelete} = useContext(InfoContext);
    const [showPassForm, setShowPassForm] = useState(false);
    const [showPhotoForm, setShowPhotoForm] = useState(false);
    const [searchLabel, setSearchLabel] = useState([]);
    
    const setPass = () => {
        setShowPassForm(!showPassForm);
        setShowPhotoForm(false);
    }

    const addPhoto = () => {
        setShowPhotoForm(!showPhotoForm);
        setShowPassForm(false);
    }

    const searching = async (e) => {
        e.preventDefault();
        setBlockDelete(true);
        await searchImgContext(searchLabel);
    }
   
  
    return(
        <div className="nav w-screen flex p-5 ">
        {showPhotoForm ? <AddPhotoForm/> : null}
        {showPassForm ? <PasswordForm/> : null}
            <button className="myunsplash text-left underline mt-2 flex text-black font-semibold" onClick={() => setPass()}><img className="w-5" src={user} alt=""></img>MyUnsplash</button>
            <form className="search-form" onSubmit={searching}>
                <input className="text-left ml-3 p-1 rounded-xl pl-4 outline-0" type="text" placeholder="search other people imgs" onChange={(e) => setSearchLabel(e.target.value)}></input>
            </form>
            {showPhotoForm ?  <button className="addPhoto text-rigth rounded-xl bg-orange-700 p-2 text-white font-semibold" onClick={() => setShowPhotoForm(!showPhotoForm)}>Close Uploads</button> : <button className="addPhoto text-rigth rounded-xl bg-lime-500 p-2 text-white font-semibold" onClick={() => addPhoto()}>Add photo</button>}
        </div>
    )
}

export default Nav;