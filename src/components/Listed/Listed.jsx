import { useEffect, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { getStoredBookData } from "../Utility/Book";
import ReadBook from "../ReadBook/ReadBook";
import { LiaAngleDownSolid } from "react-icons/lia";



const Listed = () => {
    const books = useLoaderData()
    const [tabIndex, setTabIndex] = useState()
    const [readBook, setReadBook] = useState([])
    const [displayBook ,setDisplayBook] = useState([])
 
    const handleBookFilter = filter =>{
        if(filter === 'all'){
            setDisplayBook(readBook)
        }else if(filter === 'rating' ){
            const ratingBook  =readBook.filter(book => book.types ==="Classic")
            setDisplayBook(ratingBook)
        }else if(filter === 'page'){
            const pageOfBook = readBook.filter(book => book.totalPages == 432)
            setDisplayBook(pageOfBook)
        }
    }

    useEffect(() => {
        const storedBookIds = getStoredBookData();
        if (books.length > 0) {
            const bookSaved = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.id == id)
                if (book) {
                    bookSaved.push(book)
                }
                // console.log(books,storedBookIds,bookSaved)
            }
            // console.log(bookSaved)
            setReadBook(bookSaved)
            setDisplayBook(bookSaved)

        }
    }, [books])
    // console.log(readBook)
    return (
        <div>

            <div className="lg:w-[1000px] px-6 mx-auto space-y-12">
                <div className="text-5xl font-bold justify-center text-center"><h1>Read Book</h1></div>

                <div className=" my-10 text-center">
                    <details className="dropdown ">
                        <summary className="m-1 btn flex bg-[#23BE0A]">Sort By <LiaAngleDownSolid/></summary>
                        <ul className="p-2 shadow menu dropdown-content text-start font-semibold z-[1] bg-base-100 rounded-box gap-4">
                            <Link onClick={() =>handleBookFilter('all')}><a>All</a></Link>
                            <Link onClick={() =>handleBookFilter('rating')}><a>Rating</a></Link>
                            <Link onClick={() =>handleBookFilter('page')}><a>Number of Pages</a></Link>
                            <Link ><a>Published Year</a></Link>
                        </ul>
                    </details>
                </div>
                <div className="space-y-6">
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
                        <NavLink 
                            onClick={() => setTabIndex(0)}

                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 ' : 'border-b'}rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                            <span>Read</span>
                        </NavLink>
                        <NavLink 
                        to='wish'
                            onClick={() => setTabIndex(1)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0 ' : 'border-b-0'}rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                            <span>WishList</span>
                        </NavLink>
                    </div>
                </div>
                {/* <Outlet />  */}
            </div>

            {
                displayBook.map(book => <ReadBook key={book.id} book={book}></ReadBook>)
            }
        </div>
    );
};

export default Listed;