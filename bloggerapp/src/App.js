import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  // Change this flag to see different outputs
  const flag = true;

  // Method 1: if-else
  if (flag) {
    return (
      <div>
        <h1>Blogger App</h1>
        <BookDetails />
      </div>
    );
  }

  // Method 2: Ternary Operator
  return (
    <div>

      <h1>Blogger App</h1>

      {flag ? <BlogDetails /> : <CourseDetails />}

      {/* Method 3: Logical AND */}
      {flag && <CourseDetails />}

    </div>
  );
}

export default App;