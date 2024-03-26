import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredBookData } from "../Utility/Book";

 

const Listed = () => {
    const books = useLoaderData()
    useEffect(()=>{
        const storedBookIds = getStoredBookData();
        if(books.length > 0){
             const bookSaved = [];
             for(const id of storedBookIds){
                const book =book.find(book => book.id === id)
                if(book){
                    bookSaved.push(book)
                }
             } 
             console.log(books,storedBookIds,bookSaved)
        }
    },[books])
    const [tabIndex ,setTabIndex] = useState()
    return ( 
        <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
            <div className="text-5xl font-bold justify-center text-center"><h1>Read Books</h1></div>
            <article className="space-y-8 ">
                <div className="space-y-6"> 
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
                        <Link 
                            onClick={() => setTabIndex(0)}

                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 ' : 'border-b'}rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                             
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Read</span>
                        </Link>
                        <Link 
                            onClick={() => setTabIndex(1)}
                                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${ tabIndex === 1 ? 'border border-b-0 ' : 'border-b-0'}rounded-t-lg dark:border-gray-600 dark:text-gray-900`}> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>WishList</span>
                        </Link> 
                    </div>
                </div>
                {/* <Outlet /> */}
            </article>
        </div>
    );
};

export default Listed;