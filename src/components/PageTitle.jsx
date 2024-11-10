const PageTitle = ({ title, titleDescription }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
        {title}
      </h1>
      <p className="mt-2 text-slate-600 text-sm md:text-base lg:text-lg tracking-tight">
        {titleDescription}
      </p>
    </div>
  );
};

export default PageTitle;
