const Title = ({ title }) => {
  return (
    <div>
      <h2 className="text-5xl font-quicksand font-bold">
        {title ?? "Title"}
      </h2>
    </div>
  );
};

export default Title;
