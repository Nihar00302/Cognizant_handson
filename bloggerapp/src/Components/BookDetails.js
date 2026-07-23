function BookDetails() {

    const books = [
        {
            id: 1,
            title: "React Basics",
            author: "Jordan Walke"
        },
        {
            id: 2,
            title: "Learning JavaScript",
            author: "Ethan Brown"
        },
        {
            id: 3,
            title: "Spring Boot in Action",
            author: "Craig Walls"
        }
    ];

    return (
        <div>

            <h2>Book Details</h2>

            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> - {book.author}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default BookDetails;