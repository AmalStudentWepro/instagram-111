export function Post(item) {
        const post = document.createElement('div');
        const postHeader = document.createElement('div');
        const headerImg = document.createElement('img');
        const info = document.createElement('div');
        const nickname = document.createElement('div');
        const headerLocation = document.createElement('div');
        const postContent = document.createElement('div');
        const postFooter = document.createElement('div');
        const footerActions = document.createElement('div');
        const footerLikes = document.createElement('div');
        const footerComments = document.createElement('div');
        const comment1 = document.createElement('div');
        const viewAll = document.createElement('div');
        const comment2 = document.createElement('div');
        const comment3 = document.createElement('div');
        const time = document.createElement('div');
        const addComment = document.createElement('div');
        const reacts = document.createElement('div');
        const nav = document.createElement('div');
        const commentInput = document.createElement('input');
        const postButton = document.createElement('button');
        const img = document.createElement('img');
        const like = document.createElement('img');
        const coment = document.createElement('img');
        const send = document.createElement('img');
        const favourites = document.createElement('img');

        post.classList.add('post');
        postHeader.classList.add('post-header');
        info.classList.add('info');
        nickname.classList.add('nickname');
        headerLocation.classList.add('location');
        postContent.classList.add('post-content');
        postFooter.classList.add('post-footer');
        footerActions.classList.add('actions');
        footerLikes.classList.add('likes');
        footerComments.classList.add('comments');
        comment1.classList.add('comment');
        comment2.classList.add('comment');
        comment3.classList.add('comment');
        time.classList.add('time');
        addComment.classList.add('add-comment');
        reacts.classList.add(`reacts`)

        nickname.innerHTML = 'nickname';
        headerLocation.innerHTML = 'City, Country';
        comment1.innerHTML = item.title;
        viewAll.innerHTML = 'View all 33 comments';
        comment2.innerHTML = 'nickname Lorem ipsum dolor sit amet';
        comment3.innerHTML = 'nickname Lorem ipsum dolor sit amet';
        time.innerHTML = '1 HOUR AGO';
        postButton.innerHTML = 'Post';
        footerLikes.innerHTML = '8,888 likes';

        viewAll.style.color = 'grey';
        commentInput.type = 'text';
        commentInput.placeholder = 'Add a comment...';
        img.src = item.url;
        like.src = "./img/heart.svg"
        coment.src = "./img/coment.svg"
        send.src = "./img/send.svg"
        favourites.src = "./img/favourites.svg"
       



        info.append(nickname, headerLocation);
        postHeader.append(headerImg, info);
        footerComments.append(comment1, viewAll, comment2, comment3, time);
        addComment.append(commentInput, postButton);
        footerActions.append(footerLikes, footerComments);
        postFooter.append(footerActions);
        postContent.append(img);
        nav.append(like, coment, send)
        reacts.append(nav, favourites)
        post.append(postHeader, postContent,reacts, postFooter, addComment);


        return post
    }


