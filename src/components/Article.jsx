import PropTypes from "prop-types";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const minutesToRead = () => {
    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      return `${"☕️".repeat(coffeeCups)} ${minutes} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return `${"🍱".repeat(bentoBoxes)} ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutes && <small> • {minutesToRead()}</small>}
      <p>{preview}</p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  preview: PropTypes.string.isRequired,
  minutes: PropTypes.number,
};


export default Article; 