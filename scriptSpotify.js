

const artistsData = [
    { name: 'Michael Jackson', image: 'https://mjbeats.com.br/wp-content/uploads/2023/06/Bart-Simpson-e-Michael-Jackson-thriller-MJ-Beats.jpg' },
    { name: 'Elvis Presley', image: 'https://static.casapino.com.br/casapino/2017/08/201708/elvis-f758ffb0.jpg' },
    { name: 'Whitney Houston', image: 'https://musicnonstop.uol.com.br/wp-content/uploads/2021/02/WHITNEY_HOUSTON_PORTRAIT-scaled-e1613021492603.jpg' },
    { name: 'Aretha Franklin', image: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-74271305.jpg?resize=1200:*' },
    { name: 'Freddie Mercury', image: 'https://m.media-amazon.com/images/I/61F9OD1HGyL._AC_SL1000_.jpg' },
    { name: 'Stevie Wonder', image: 'https://i.scdn.co/image/37c7875911b1d8195b05d40061a86bd01908a0d9' },
    { name: 'Bob Marley', image: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/bob-marley.jpg' },
    { name: 'The Beatles', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/The_Beatles_members_at_New_York_City_in_1964.jpg/640px-The_Beatles_members_at_New_York_City_in_1964.jpg' }
    ];

const openLateralMenu = (artist) => {
    document.getElementById('info-content').classList.add('activeInfo');
    document.getElementById('player-content').classList.add('activePlayer');
    document.getElementById('info-content').innerHTML = `
    <div id="upper">
            <p>${artist.name}</p>
        <div>
            <button class="ellipsis">...</button>    
            <button onclick="closeInfo()">x</button>
        </div>

    </div>
    <div>
        <img src="${artist.image}" alt="img-info-artist" class="img-info-artist" />
    </div>
    <div id="info-actions">
    <a href = "#">${artist.name}</a>
    <img src="https://img.icons8.com/?size=100&id=84991&format=png&color=FFFFFF" alt="share" id="info-share"/>
    </div>
    <br>
    <div id = "info-geral">
        <div id = "info1">
            <p>INFOS GERAIS 1</p>
        </div>
        
        <div id = "info2">
            <p>INFOS GERAIS 2</p>
        </div>
    </div>
    `;
}

const getCard = (artist) => {
    const artistCard = document.createElement('div');
    artistCard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name} class="artist-image" id="data-artist">
            <h3>${artist.name}</h3>
            <p>Artista</p>
        `

    artistCard.onclick = () => openLateralMenu(artist);


    return artistCard;
}

const addToArtistGrid = (artistsList) => {
    const artistGrid = document.getElementById('popular-content');
    const artistCards = artistsList.map(artist => getCard(artist));
    artistGrid.replaceChildren(...artistCards);
}

document.getElementById('search').addEventListener('change', () => {
    const nome = document.getElementById('search').value;
    const filteredData = artistsData.filter(artist => {
        return artist.name.toUpperCase().includes(nome.toUpperCase())}
    );

    addToArtistGrid(filteredData);
})

document.addEventListener('DOMContentLoaded', () => {
    addToArtistGrid(artistsData);
});

function closeInfo(){
    document.getElementById('info-content').classList.remove('activeInfo');
}