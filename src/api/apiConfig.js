const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'd1b428a16c0516f30aad5157a50d7830',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;