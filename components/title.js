const Title = ({ title }) => {
  return (
    <div className="my-5">
      <h2 className="text-3xl md:text-5xl font-quicksand font-bold">
        {title ?? "Title"}
      </h2>
    </div>
  );
};

export default Title;
