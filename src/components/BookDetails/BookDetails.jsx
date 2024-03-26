 
import { NavLink, useLoaderData, useParams } from "react-router-dom";  
import { saveBookData } from "../Utility/Book";
import { toast } from "react-toastify";

const BookDetails = () => {
    const booksData = useLoaderData()
    const { id } = useParams()
    const IdInt = parseInt(id)
    const data = booksData.find(book => book.id == IdInt)
    const { bookName, author, bookReview, image, publisher, tags, totalPages, yearOfPublishing, rating,types } = data

    const handleReadBook = (id) =>{
         saveBookData(id)
    }

    const handleWishListBook= () =>{ 
        
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                <img src={image} className="max-w-sm w-[1000px] h-[450px] rounded-lg shadow-2xl" />
                </div>
                <div className="p-10">
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="font-bold my-5">By :  {author}</p>
                    <hr />
                    <h1 className="my-3 font-bold">{types}</h1>
                    <hr />
                    <p className="py-6"><span className="font-bold"> Review :</span> {bookReview}</p>
                    <div className="flex gap-4 text-[#23BE0A]">
                        <p className="text-black font-bold">tag</p>
                        {
                            tags.map(tag =>
                                <div key={tag.id}>
                                    <p className="w-28 h-8 bg-slate-300 rounded-full p-1 px-2"> {tag}</p>
                                </div>)
                        }
                    </div>
                    <div className="flex gap-8">
                        <div>
                            <p className="mt-2">Number of pages :</p>
                            <p className="mt-2">Publisher :</p>
                            <p className="mt-2">Publisher :</p>
                            <p className="mt-2">Rating :</p>
                        </div>
                        <div className="font-semibold">
                        <p className="mt-2">{totalPages}</p>
                        <p className="mt-2">{publisher}</p>
                        <p className="mt-2">{yearOfPublishing}</p>
                        <p className="my-2">{rating}</p>
                        </div>
                    </div>
 
                   <NavLink> <button onClick={() => handleReadBook(id)} className="btn mr-6">Read</button></NavLink>
                   <NavLink><button onClick={() => handleWishListBook()} className="btn  text-white bg-[#59C6D2]">WishList</button></NavLink>
                   
                </div>
            </div>  
        </div>
        
    );
};

export default BookDetails;