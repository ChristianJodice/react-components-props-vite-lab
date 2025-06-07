
import Article from "./Article";
import PropTypes from "prop-types";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

ArticleList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default ArticleList; 