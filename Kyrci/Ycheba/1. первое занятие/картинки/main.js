const mainImg = document.querySelector('.gallery_main_img img');
const previews = document.querySelectorAll('.gallery_item');

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        previews.forEach(item => {
            item.classList.remove('active');
        });
        preview.classList.add('active');
        const previewImg = preview.querySelector('img');
        const previewImgSrc = previewImg.dataset.src;
        mainImg.setAttribute('src', previewImgSrc);
    });
});