import { CiLocationOn } from "react-icons/ci";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";  
import { PropTypes } from 'prop-types';




const ReadBook = ({ book }) => {
    const { bookName, image, author, rating, tags, types, publisher, totalPages, yearOfPublishing } = book;
    // console.log(book)

    return (
        <div 
        className="border lg:mx-10">
            <div className="hero-content flex-col lg:gap-x-24 lg:m-10 lg:flex-row">
                <img src={image} className=" lg:w-[200px] h-[200px] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl font-bold">{bookName}</h1>
                    <h1 className="font-semibold mt-3">By : {author}</h1> 
                    <div className="lg:flex gap-4 text-[#23BE0A] mt-3 mb-3">
                        <p className="text-black font-bold">tag</p>
                        {
                            tags.map(tag =>
                                <div key={tag.id}>
                                    <p className="w-28 h-8 bg-slate-300 rounded-full p-1 px-2"> {tag}</p>
                                </div>)
                        }
                        <div >
                            <p className="flex text-black"><CiLocationOn className=" mr-2 mt-1 text-xl"/> Year of publishing : {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className=" lg:flex gap-8 mb-3">
                        <p className="flex "> <AiOutlineUsergroupAdd className="mr-2 mt-1 text-xl"/> Publisher : {publisher}</p>
                        <p className="flex"><MdOutlineContactPage className="mr-2 mt-1 text-xl"/> Page : {totalPages}</p>
                    </div>
                    <hr />
                    <div className="lg:flex gap-8 mt-3">
                        <p className="w-36 h-8 bg-slate-300 rounded-full p-1 px-2">Category : {types}</p>
                        <p className="w-28 h-8 bg-slate-300 text-red-500 rounded-full p-1 px-2">Rating : {rating}</p> 
                        <button className="w-28 h-8 text-white bg-[#23BE0A] rounded-full p-1 px-2">View Details</button>
                    </div> 
                </div>
            </div>
        </div>
    );
};
ReadBook.propTypes ={
    book:PropTypes.object
}
export default ReadBook;