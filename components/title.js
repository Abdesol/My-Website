const Title = ({ title }) => {
  return (
    <div className="my-7">
      <h2 className="text-5xl font-quicksand font-bold">
        {title ?? "Title"}
      </h2>
    </div>
  );
};

export default Title;
