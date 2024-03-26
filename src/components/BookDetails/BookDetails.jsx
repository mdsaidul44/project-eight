import { useLoaderData, useParams } from "react-router-dom";

  
const BookDetails = () => {
    const booksData = useLoaderData() 
    const {id} =useParams()
    const IdInt = parseInt(id)
    const data = booksData.find(book => book.id === IdInt)
    console.log(data)
    return (
        <div>
            <h1>hay ami book details</h1>
        </div>
    );
};

export default BookDetails;