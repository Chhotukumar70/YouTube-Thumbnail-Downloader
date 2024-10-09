document.getElementById('fetchThumbnail').addEventListener('click', function() {
    const videoUrl = document.getElementById('videoUrl').value;
    const videoId = extractVideoId(videoUrl);

    if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        displayThumbnail(thumbnailUrl);
    } else {
        alert('Please enter a valid YouTube URL.');
    }
});

function extractVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function displayThumbnail(thumbnailUrl) {
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = `<img src="${thumbnailUrl}" alt="YouTube Thumbnail" />`;
    
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = thumbnailUrl;
    downloadLink.style.display = 'block';
}
