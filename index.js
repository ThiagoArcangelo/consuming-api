async function getContent() {
    const url = 'http://localhost:3333';

    try {
        const response = await fetch(url);

        const data = await response.json();

        list(data);

    } catch (error) {
        console.error(error);
    }
}

getContent();

function list(users) {

    let output = '';

    for(let user of users){
        output += `<li>${user.name}</li>`
    }

    document.querySelector('main').innerHTML = output;
}


