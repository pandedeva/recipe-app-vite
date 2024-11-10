import { Search } from "lucide-react";
import PageTitle from "../components/PageTitle";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import { recipeAPI } from "../api/recipeApi";
import { getRandomColor } from "../libs/utils";

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setRecipes([]);

    recipeAPI().then((result) => {
      setRecipes(result);
      setLoading(false);
    });
  }, []);

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    setLoading(true);
    setRecipes([]);

    recipeAPI(e.target[0].value).then((result) => {
      setRecipes(result);
      setLoading(false);
    });
  };

  //! still cannot kalo diklik
  // const handleSearchClick = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setRecipes([]);

  //   if (e.key === "Enter" || e.type === "click") {
  //     recipeAPI(e.target[0].value).then((result) => {
  //       setRecipes(result);
  //       setLoading(false);
  //     });
  //   }
  // };

  return (
    <div className="background-homepage flex-1 min-h-screen">
      <div className="container px-10 py-6 md:p-10 mx-auto">
        <form onSubmit={handleSearchRecipe}>
          <label className="input w-full flex shadow-md items-center gap-2">
            <div>
              <Search size={24} />
            </div>
            <input
              type="text"
              className="w-full text-sm md:text-base grow"
              placeholder="Mau masak apa hari ini?"
            />
          </label>
        </form>

        <PageTitle
          title={"Rekomendasi Masakan"}
          titleDescription={"Pilihan Terpopuler"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {loading
            ? [...Array(9)].map((_, index) => (
                <div className="flex w-52 flex-col gap-4" key={index}>
                  <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                      <div className="skeleton h-4 w-20"></div>
                      <div className="skeleton h-4 w-28"></div>
                    </div>
                  </div>
                  <div className="skeleton h-32 w-full"></div>
                </div>
              ))
            : recipes.map(({ recipe }, index) => (
                <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
