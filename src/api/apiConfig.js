const apiConfig = {
    baseUrl:'http://api.themoviedb.org/3/',
    apiKey:'6a3460502432bc714f21b729de24c6a2',
    originalImage:(imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image:(imgPath)=>`https://image.tmdb.org/t/p/w500/${imgPath}`,
}
export default apiConfig;