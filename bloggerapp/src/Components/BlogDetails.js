function BlogDetails() {

    const blogs = [
        {
            id: 1,
            title: "Introduction to React",
            author: "Nikita"
        },
        {
            id: 2,
            title: "Understanding JSX",
            author: "John"
        },
        {
            id: 3,
            title: "React Components",
            author: "Alice"
        }
    ];

    return (
        <div>

            <h2>Blog Details</h2>

            <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        <strong>{blog.title}</strong> - {blog.author}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default BlogDetails;