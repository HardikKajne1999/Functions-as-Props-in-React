import { useState } from "react"
export default function CommentForm({addNewComment}){
    let [formData,setFormData] = useState({username:'',remarks:'',rating:5});
    function handleSubmit(event){
        event.preventDefault();
        console.log(formData);
        addNewComment(formData);
        setFormData({username:'',remarks:'',rating:5})
    }
    function handleInput(event){
        setFormData(currentData => {
            return {...currentData,[event.target.name] : event.target.value};
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input  onChange={handleInput} value={formData.username} className="border-2 border-black px-2 " type="text" name="username" placeholder="Enter username"/>
                <br />          <br />
                <textarea onChange={handleInput} value={formData.remarks} className="border-2 border-black px-2 text-black" name="remarks" id="remarks" placeholder="Remarks"></textarea>
                <br />                <br />
                <input onChange={handleInput} value={formData.rating}  className="border-2 border-black px-2 " type="number" placeholder="rating(1-5)" min={1} max={5} name="rating"/>
                <br />                <br />
                <button className="border-2 border-black px-2 rounded-lg bg-amber-300">Add comment</button>
            </form>
        </>
    )
}