import post from "../posts.json"
import Article from "../component/Articel"
function Homepage() {
    return (
        <>
        <h1>Simple blog</h1>
        {post.map((blog) =>(
                <Article title={blog.title} tags={blog.tags} date={blog.date} />
            ))}
        </>
    )
}

export default Homepage;