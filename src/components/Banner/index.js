import "./Banner.scss";

const Banner = ({ title, backgroundUrl }) => {
  const bgUrl = backgroundUrl
    ? { backgroundImage: `url(${backgroundUrl})` }
    : {};
  return (
    <section className="banner" style={bgUrl}>
      <h1 className="banner-title">{title}</h1>
    </section>
  );
};

export default Banner;
