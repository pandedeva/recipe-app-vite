const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

export const recipeAPI = async (searchQuery) => {
  try {
    const request = await fetch(
      `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`
    );
    const response = await request.json();

    return response.hits;
  } catch (error) {
    console.log(error);
  }
};
