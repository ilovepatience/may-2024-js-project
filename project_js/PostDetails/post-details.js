let selectedPost = JSON.parse(localStorage.getItem('selectedPost'));
console.log(selectedPost);

let mainInfo = document.getElementById('postInfo');
let generalPostDetails = document.createElement("div");
generalPostDetails.classList.add('postDetails');

let postDetails = document.createElement('div');
let postDetailsStrong = document.createElement('strong');
postDetailsStrong.textContent = 'Post Details:';
postDetails.appendChild(postDetailsStrong);
postDetails.appendChild(document.createElement('br'));

let idParagraph = document.createElement('p');
idParagraph.appendChild(document.createElement('strong')).textContent = 'ID:';
idParagraph.appendChild(document.createTextNode(` ${selectedPost.id}`));
postDetails.appendChild(idParagraph);

let titleParagraph = document.createElement('p');
titleParagraph.appendChild(document.createElement('strong')).textContent = 'Title:';
titleParagraph.appendChild(document.createTextNode(` ${selectedPost.title}`));
postDetails.appendChild(titleParagraph);

let bodyParagraph = document.createElement('p');
bodyParagraph.appendChild(document.createElement('strong')).textContent = 'Body:';
bodyParagraph.appendChild(document.createTextNode(` ${selectedPost.body}`));
postDetails.appendChild(bodyParagraph);

fetch(`https://jsonplaceholder.typicode.com/posts/${selectedPost.id}/comments`)
    .then(response => response.json())
    .then(comments => {
        console.log(comments);

        let divText = document.createElement('div');
        let commentsStrong = document.createElement('strong');
        commentsStrong.textContent = 'Comments:';
        divText.appendChild(commentsStrong);
        divText.classList.add('CommentsText');

        let commentContainer = document.createElement('div');
        commentContainer.classList.add('commentBox');

        for (const comment of comments) {
            let commentsInfo = document.createElement("div");
            commentsInfo.classList.add('comment');

            let postIdParagraph = document.createElement('p');
            postIdParagraph.appendChild(document.createElement('strong')).textContent = 'Post Id:';
            postIdParagraph.appendChild(document.createTextNode(` ${comment.postId}`));

            let commentIdParagraph = document.createElement('p');
            commentIdParagraph.appendChild(document.createElement('strong')).textContent = 'Comment Id:';
            commentIdParagraph.appendChild(document.createTextNode(` ${comment.id}`));

            let nameParagraph = document.createElement('p');
            nameParagraph.appendChild(document.createElement('strong')).textContent = 'Name:';
            nameParagraph.appendChild(document.createTextNode(` ${comment.name}`));

            let emailParagraph = document.createElement('p');
            emailParagraph.appendChild(document.createElement('strong')).textContent = 'Email:';
            emailParagraph.appendChild(document.createTextNode(` ${comment.email}`));

            let bodyParagraph = document.createElement('p');
            bodyParagraph.appendChild(document.createElement('strong')).textContent = 'Body:';
            bodyParagraph.appendChild(document.createTextNode(` ${comment.body}`));

            commentsInfo.append(postIdParagraph, commentIdParagraph, nameParagraph, emailParagraph, bodyParagraph);

            commentContainer.appendChild(commentsInfo);
        }

        generalPostDetails.appendChild(postDetails);
        mainInfo.appendChild(generalPostDetails);
        mainInfo.appendChild(divText);
        mainInfo.appendChild(commentContainer);
    });
