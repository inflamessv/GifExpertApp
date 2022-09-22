
export const getGift = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZCxZlcG0H2fsoqD2AHjESyLHuYKsIbZW&q=${category}&limit=10&offset=0&rating=g&lang=en`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gift = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    console.log(gift);
    return gift;
}
