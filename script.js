const mainDiv = document.querySelector('.list');

async function getData() {
    return await fetch('dbHeroes.json')
        .then(response => response.json())
        .then((result) => {
            console.log(1);
            result.forEach((el) => {
                const div = document.createElement('div');
                const img = document.createElement('img');
                const name = document.createElement('p');
                const realName = document.createElement('p');
                const movies = document.createElement('p');
                const status = document.createElement('p');
                div.classList.add('character');
                mainDiv.append(div);
                img.classList.add('img');
                img.setAttribute('src', el.photo);
                div.append(img);
                name.classList.add('text');
                name.textContent = el.name;
                div.append(name);
                realName.classList.add('text');
                realName.textContent = el.realName;
                div.append(realName);
                movies.classList.add('text');
                movies.textContent = el.movies;
                div.append(movies);
                status.classList.add('text');
                status.textContent = el.status;
                div.append(status);
            });
        })
        .catch(error => console.log('error', error));
    
}
getData();