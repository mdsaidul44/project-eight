import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa"; 
import PropTypes from 'prop-types';


const Book = ({ book }) => {
    const { id, image, bookName, tags,author ,rating ,types} = book
    return (
        <Link
           to={`/books/${id}`}
        className="card   bg-base-100 shadow-xl border-2 lg:p-4">
            <figure className=" lg:p-6"><img className="lg:w-44 h-52" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex gap-4 text-[#23BE0A]">
                    {
                        tags.map(tag =>
                            <div key={tag.id}>
                                <p className="lg:w-28 h-8 bg-slate-300 rounded-full p-1 px-2">{tag}</p>
                            </div>)
                    }
                </div>
                <h2 className="card-title">{bookName}</h2>
                <p className="font-semibold">By : {author}</p>
                <div className="flex lg:gap-48"> 
                <p>{types}</p>
                 <p className="flex gap-2">{rating} <FaRegStar className="mt-1"/></p>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes ={
    book: PropTypes.func
}
export default Book;