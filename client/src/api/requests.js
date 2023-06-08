import axios from "axios";

export const getImages = async (password) => axios.post("/getImages", password);

export const search = async ({searchLabel}) => axios.post("/search", {searchLabel});

export const upload = async (up) => {

    const form = new FormData();
    
    for(let key in up){
        form.append(key, up[key])
    }
    console.log(up);
    return await axios.post("/upload", form, {
        headers: { "Content-Type" : "multipart/form-data",},
    });
}

export const deleteImg = async (id, passw) => axios.delete(`/deleteImage/${id}/${passw}`);

export const deleteAll = async () => axios.delete("/all");
