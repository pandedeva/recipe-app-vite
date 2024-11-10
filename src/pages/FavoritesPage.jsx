import PageTitle from "../components/PageTitle";
import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../libs/utils";

const Favoritespage = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="background-homepage flex-1 min-h-screen">
      <div className="container px-10 py-6 md:p-10 mx-auto">
        <PageTitle
          title={"Menu Favorites"}
          titleDescription={"Menu favorit saya"}
        />

        {favorites.length === 0 ? (
          <div className="items-center justify-center flex">
            <img src="/404.svg" alt="" className="object-cover h-3/4" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {favorites.map((recipe) => (
              <RecipeCard
                key={recipe.label}
                recipe={recipe}
                {...getRandomColor()}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favoritespage;
