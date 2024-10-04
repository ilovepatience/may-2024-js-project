let buttonInfo = JSON.parse(localStorage.getItem('user'));

if (buttonInfo) {
    let blockOfUsersDetail = document.getElementById('blockOfUsersDetails');

    let userDiv = document.createElement('div');
    userDiv.classList.add('userInfo');

    let idParagraph = document.createElement('p');
    idParagraph.appendChild(document.createElement('strong')).textContent = 'ID:';
    idParagraph.appendChild(document.createTextNode(` ${buttonInfo.id}`));

    let nameParagraph = document.createElement('p');
    nameParagraph.appendChild(document.createElement('strong')).textContent = 'Name:';
    nameParagraph.appendChild(document.createTextNode(` ${buttonInfo.name}`));

    let usernameParagraph = document.createElement('p');
    usernameParagraph.appendChild(document.createElement('strong')).textContent = 'Username:';
    usernameParagraph.appendChild(document.createTextNode(` ${buttonInfo.username}`));

    let emailParagraph = document.createElement('p');
    emailParagraph.appendChild(document.createElement('strong')).textContent = 'Email:';
    emailParagraph.appendChild(document.createTextNode(` ${buttonInfo.email}`));

    let phoneParagraph = document.createElement('p');
    phoneParagraph.appendChild(document.createElement('strong')).textContent = 'Phone:';
    phoneParagraph.appendChild(document.createTextNode(` ${buttonInfo.phone}`));

    let websiteParagraph = document.createElement('p');
    websiteParagraph.appendChild(document.createElement('strong')).textContent = 'Website:';
    websiteParagraph.appendChild(document.createTextNode(` ${buttonInfo.website}`));

    userDiv.appendChild(idParagraph);
    userDiv.appendChild(nameParagraph);
    userDiv.appendChild(usernameParagraph);
    userDiv.appendChild(emailParagraph);
    userDiv.appendChild(phoneParagraph);
    userDiv.appendChild(websiteParagraph);

    let addressDiv = document.createElement("div");
    let addressHeader = document.createElement("h4");
    addressHeader.textContent = 'Address:';
    addressDiv.appendChild(addressHeader);

    let streetParagraph = document.createElement('p');
    streetParagraph.textContent = ` - Street: ${buttonInfo.address.street}`;
    let suiteParagraph = document.createElement('p');
    suiteParagraph.textContent = ` - Suite: ${buttonInfo.address.suite}`;
    let cityParagraph = document.createElement('p');
    cityParagraph.textContent = ` - City: ${buttonInfo.address.city}`;
    let zipcodeParagraph = document.createElement('p');
    zipcodeParagraph.textContent = ` - Zipcode: ${buttonInfo.address.zipcode}`;
    let geoParagraph = document.createElement('p');
    geoParagraph.textContent = ` - Geo: lat ${buttonInfo.address.geo.lat}, lng ${buttonInfo.address.geo.lng}`;

    addressDiv.appendChild(streetParagraph);
    addressDiv.appendChild(suiteParagraph);
    addressDiv.appendChild(cityParagraph);
    addressDiv.appendChild(zipcodeParagraph);
    addressDiv.appendChild(geoParagraph);

    userDiv.appendChild(addressDiv);

    let companyDiv = document.createElement("div");
    let companyHeader = document.createElement("h4");
    companyHeader.textContent = 'Company:';
    companyDiv.appendChild(companyHeader);

    let companyNameParagraph = document.createElement('p');
    companyNameParagraph.textContent = ` - Name: ${buttonInfo.company.name}`;
    let catchPhraseParagraph = document.createElement('p');
    catchPhraseParagraph.textContent = ` - CatchPhrase: ${buttonInfo.company.catchPhrase}`;
    let bsParagraph = document.createElement('p');
    bsParagraph.textContent = ` - BS: ${buttonInfo.company.bs}`;

    companyDiv.appendChild(companyNameParagraph);
    companyDiv.appendChild(catchPhraseParagraph);
    companyDiv.appendChild(bsParagraph);

    userDiv.appendChild(companyDiv);

    let buttonPosts = document.createElement("button");
    buttonPosts.textContent = 'Posts of current user';
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
                titles.textContent = item.title;
                postDiv.appendChild(titles);

                let buttonTransfer = document.createElement("button");
                buttonTransfer.textContent = 'More info about this post';

                buttonTransfer.onclick = function () {
                    localStorage.setItem('selectedPost', JSON.stringify(item));
                    document.location.href = '/may-2024-js-project/project_js/PostDetails/post-details.html';
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







