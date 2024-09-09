let buttonInfo = JSON.parse(localStorage.getItem('user'));

if (buttonInfo) {
    let blockOfUsersDetail = document.getElementById('blockOfUsersDetails');

    let userDiv = document.createElement('div');
    userDiv.classList.add('userInfo');

    userDiv.innerHTML = `
      <p><strong>ID:</strong> ${buttonInfo.id}</p>
      <p><strong>Name:</strong> ${buttonInfo.name}</p>
      <p><strong>Username:</strong> ${buttonInfo.username}</p>
      <p><strong>Email:</strong> ${buttonInfo.email}</p>
      <p><strong>Phone:</strong> ${buttonInfo.phone}</p>
      <p><strong>Website:</strong> ${buttonInfo.website}</p>
    `;


    let address = document.createElement("div");
    address.innerHTML = `
      <h4>Address:</h4>
      <p> - Street: ${buttonInfo.address.street}</p>
      <p> - Suite: ${buttonInfo.address.suite}</p>
      <p> - City: ${buttonInfo.address.city}</p>
      <p> - Zipcode: ${buttonInfo.address.zipcode}</p>
      <p> - Geo: lat ${buttonInfo.address.geo.lat}, lng ${buttonInfo.address.geo.lng}</p>
    `;

    let company = document.createElement("div");
    company.innerHTML = `
      <h4>Company:</h4>
      <p> - Name: ${buttonInfo.company.name}</p>
      <p> - CatchPhrase: ${buttonInfo.company.catchPhrase}</p>
      <p> - BS: ${buttonInfo.company.bs}</p>
    `;

    userDiv.appendChild(address);
    userDiv.appendChild(company);

    let buttonPosts = document.createElement("button");
    buttonPosts.textContent = `Posts of current user`;
    buttonPosts.classList.add('buttonInfoOpener');

    buttonPosts.onclick = async function () {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${buttonInfo.id}/posts`);
            const allInfoPosts = await response.json();
            console.log(allInfoPosts);

            blockOfUsersDetail.innerHTML = '';

            const postsDiv = document.createElement("div");
            postsDiv.classList.add('postsBox');

            for (const item of allInfoPosts) {
                let postDiv = document.createElement('div');
                postDiv.classList.add('singlePostInfo');

                let titles = document.createElement('div');
                titles.textContent = `${item.title}`;
                postDiv.appendChild(titles);

                let buttonTransfer = document.createElement("button");
                buttonTransfer.textContent = `More info about this post`;

                buttonTransfer.onclick = function () {
                    localStorage.setItem('selectedPost', JSON.stringify(item));
                    document.location.href = 'post-details.html';
                };

                postDiv.appendChild(buttonTransfer);
                postsDiv.appendChild(postDiv);
            }

            blockOfUsersDetail.append(userDiv, postsDiv);

        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    blockOfUsersDetail.append(userDiv, buttonPosts);
}







