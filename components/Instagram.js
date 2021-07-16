import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

function Instagram() {
  const instaToken = process.env.instaToken;

  return (
    <div className="z-0">
      <InstagramFeed token={instaToken} counter="6" />
    </div>
  );
}

export default Instagram;
