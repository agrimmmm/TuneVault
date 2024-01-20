const addButtonList = document.querySelectorAll('#addtoplaylist');
addButtonList.forEach((addButton) => {
    addButton.addEventListener('click', () => {
        const image = document.querySelector('.imglink').textContent;
        const song = addButton.closest('.ncbox').querySelector('.song').textContent;
        const artist = document.querySelector('.artistName').textContent;
        const album = document.querySelector('.albumName').textContent;
        const duration = addButton.closest('.ncbox').querySelector('.time').textContent;

        const data = {image, song, artist, album, duration};
        fetch('/store-data', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'success') {
                if(data.message.includes('aldready in playlist')) {
                    alert(data.message);
                }
            }
            else {
                alert("Error adding song to playlist");
            }
        });
    });
});