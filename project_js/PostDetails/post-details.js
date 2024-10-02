let selectedPost = JSON.parse(localStorage.getItem('selectedPost'));
console.log(selectedPost);
let mainInfo = document.getElementById('postInfo');
let generalPostDetails = document.createElement("div");
generalPostDetails.classList.add('postDetails');

let postDetails = document.createElement('div');
postDetails.innerHTML = `
    <strong>Post Details:</strong><br>
    <strong>ID:</strong> ${selectedPost.id}<br>
    <strong>Title:</strong> ${selectedPost.title}<br>
    <strong>Body:</strong> ${selectedPost.body}
`;

fetch(`https://jsonplaceholder.typicode.com/posts/${selectedPost.id}/comments`).then(value => value.json())
    .then(comments => {
        console.log(comments);
        let divText = document.createElement('div');
        divText.innerHTML = `<strong>Comments:</strong>`;
        divText.classList.add('CommentsText');


        let commentContainer = document.createElement('div');
        commentContainer.classList.add('commentBox');

        for (const comment of comments) {
            let commentsInfo = document.createElement("div");
            commentsInfo.classList.add('comment');
            commentsInfo.innerHTML = `
                <strong>Post Id:</strong> ${comment.postId}<br>
                <strong>Comment Id:</strong> ${comment.id}<br>
                <strong>Name:</strong> ${comment.name}<br>
                <strong>Email:</strong> ${comment.email}<br>
                <strong>Body:</strong> ${comment.body}
            `;

            commentContainer.append(commentsInfo);
        }

        generalPostDetails.append(postDetails);
        mainInfo.append(generalPostDetails, divText, commentContainer);
    });

