import { NavLink, useLoaderData } from "react-router-dom";
import Book from "../Book/Book";


const Home = () => {
    const books = useLoaderData()
    // console.log(books)
    return (
        <div>
            <div className="lg:flex justify-between lg:p-12 rounded-2xl  bg-slate-100 lg:m-14 lg:h-96">
                <div className="lg:p-12 lg:ml-8">
                    <h1 className="text-6xl font-bold">Books to freshen up your bookshelf</h1>
                    <NavLink
                    to='/listed'> 
                        <button className="  h-11 lg:w-40 border-2 bg-[#23BE0A] mt-4 rounded-md text-white">View The List </button>
                    </NavLink>
                </div>
                <img className="h-72 w-60 mr-32 " src="https://i.ibb.co/s6LMzmm/494-4945926-jeffrey-archer-books-hd-png-download.jpg" alt="" />
            </div> 
            <div className="text-5xl font-bold justify-center text-center">
                <h1>Books</h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-20 lg:m-14 ">
            {
                books.map(book => <Book ook key={book.id} book={book} />)
            }
            </div>
        </div>
    );
};

export default Home;