import BookCard from "./BookCard";
function BookList(){
    return(
        <ul>
            <BookCard title="book1" author="author1" pages="67" />
            <BookCard title="book2" author="author2" pages="48" />
            <BookCard title="book3" author="author3" pages="86" />
        </ul>
        
    );
}
export default BookList;