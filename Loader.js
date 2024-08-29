document.addEventListener('DOMContentLoaded', () => {
    const loadPhotosButton = document.getElementById('loadPhotos');
    const galleryDiv = document.getElementById('gallery');
    const loaderDiv = document.getElementById('loader');

    loadPhotosButton.addEventListener('click', async (event) => {
        event.preventDefault();
        
        loaderDiv.style.display = 'block';
        galleryDiv.innerHTML = ''; 

        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
            if (!response.ok) {
                throw new Error('Сетевой ответ не в порядке');
            }
            const photos = await response.json();

            photos.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.url;
                img.alt = 'Фото кота';
                galleryDiv.appendChild(img);
            });
            
        } catch (error) {
            console.error('Ошибка при загрузке фотографий:', error);
        } finally {
            loaderDiv.style.display = 'none';
        }
    });
});
