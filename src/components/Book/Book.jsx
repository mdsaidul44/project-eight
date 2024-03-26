import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { id, image, bookName, mature, identity, tags,author ,rating} = book
    return (
        <Link
           to={`/books/${id}`}
        className="card   bg-base-100 shadow-xl border-2 p-4">
            <figure className=" p-6"><img className="w-44 h-52" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex gap-4 text-[#23BE0A]">
                    {
                        tags.map(tag =>
                            <div key={tag.id}>
                                <p className="w-28 h-8 bg-slate-300 rounded-full p-1 px-2">{tag}</p>
                            </div>)
                    }
                </div>
                <h2 className="card-title">{bookName}</h2>
                <p className="font-semibold">By : {author}</p>
                <div className="flex gap-48"> 
                <p>fiction</p>
                 <p>{rating}</p>
                </div>
            </div>
        </Link>
    );
};

export default Book;