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

            div.innerHTML = `
                <p><strong>User ID :</strong> ${user.id}</p>
                <p><strong>Name :</strong> ${user.name}</p>
            `;

            button.textContent = `More info about this user`;

            div.appendChild(button);
            generalDiv.appendChild(div);

            button.onclick = function () {
                localStorage.setItem('user', JSON.stringify(user));
                document.location.href = 'user-details.html';
            };
        });

        blockOfUsers.appendChild(generalDiv);
    });

