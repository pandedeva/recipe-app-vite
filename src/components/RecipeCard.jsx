import { Heart, HeartPulse, Soup } from "lucide-react";
import { useState } from "react";

const RecipeCard = ({ recipe, bg, badge }) => {
  const [isFavorites, setIsFavorites] = useState(
    localStorage.getItem("favorites")?.includes(recipe.label)
  );

  const addRecipeToFav = () => {
    // buat local storage 'favorites'
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    // masukan kedalam local storage 'favorites'
    const isRecipeAlreadyInFavorites = favorites.some(
      (fav) => fav.label === recipe.label
    );

    if (isRecipeAlreadyInFavorites) {
      // jika sudah ada di local storage 'favorites'
      favorites = favorites.filter((fav) => fav.label !== recipe.label);
      setIsFavorites(false);
      alert("Berhasil di hapus dari favorit");
    } else {
      favorites.push(recipe);
      setIsFavorites(true);
      alert("berhasil di tambahkan ke favorit");
    }

    // update ke local storage
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const getTwoValueArr = (arr) => {
    return [arr[0], arr[1]];
  };

  const healthBadge = getTwoValueArr(recipe.healthLabels);

  return (
    <div className={`p-4 flex flex-col rounded-md ${bg} overflow-hidden`}>
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
        target="_blank"
        className="relative h-32"
      >
        <div className="skeleton absolute inset-0" />
        <img
          src={recipe.image}
          className="w-full h-full object-cover rounded-md cursor-pointer opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousSibling.style.display = "none";
          }}
        />

        <div
          className={`absolute tracking-tight flex gap-1 bottom-0 left-0 p-1 ${badge} rounded-tr-md`}
        >
          <Soup />
          {recipe.yield} Servings
        </div>

        <div
          className="absolute top-1 right-2 p-1 bg-slate-100 rounded-full cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            addRecipeToFav();
          }}
        >
          {!isFavorites ? (
            <Heart
              size={16}
              className="hover:fill-red-500 hover:text-red-500"
            />
          ) : (
            <Heart size={16} className="fill-red-500 text-red-500" />
          )}
        </div>
      </a>

      <div className="mt-2">
        <h4 className="font-bold md:text-lg text-sm">{recipe.label}</h4>
        <p className="text-xs md:text-sm text-slate-600 mt-1">
          {recipe.cuisineType[0].charAt(0).toUpperCase() +
            recipe.cuisineType[0].slice(1)}{" "}
          {/* jadikan karakter pertama menjadi huruf besar lalu + ambil karakter selanjutnya dengan slice */}
          Kitchen
        </p>
      </div>

      <div className="flex gap-3">
        {healthBadge.map((label, index) => (
          <div
            key={index}
            className={`py-1 px-2 text-xs ${badge} mt-2 rounded-md font-semibold flex gap-1 items-center`}
          >
            <HeartPulse />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
