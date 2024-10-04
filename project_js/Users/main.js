fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);

        let blockOfUsers = document.getElementById('blockOfUsers');
        let generalDiv = document.createElement('div');
        generalDiv.classList.add('allUsers');

        users.forEach(user => {
            let button = document.createElement('button');
            let div = document.createElement('div');
            div.classList.add('blockOfUser');

            let userIdParagraph = document.createElement('p');
            userIdParagraph.innerHTML = `<strong>User ID :</strong> ${user.id}`;

            let userNameParagraph = document.createElement('p');
            userNameParagraph.innerHTML = `<strong>Name :</strong> ${user.name}`;

            div.appendChild(userIdParagraph);
            div.appendChild(userNameParagraph);

            button.textContent = `More info about this user`;
            div.appendChild(button);
            generalDiv.appendChild(div);

            button.onclick = function () {
                localStorage.setItem('user', JSON.stringify(user));
                document.location.href = '/may-2024-js-project/project_js/UserDetails/user-details.html';
            };
        });

        blockOfUsers.appendChild(generalDiv);
    });


