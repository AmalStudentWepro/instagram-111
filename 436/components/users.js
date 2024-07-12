export function user(item) {
    const profile = document.createElement('div');
    const profileImg = document.createElement('img');
    const info = document.createElement('div');
    const nickname = document.createElement('a');
    const suggestions = document.createElement('div');
    const followButton = document.createElement('div');
    let item_name = item.name
    

    profile.classList.add('profile');
    info.classList.add('info');
    nickname.classList.add('name');
    suggestions.classList.add('suggestions');
    followButton.classList.add('follow');


    profileImg.src = 'https://via.placeholder.com/40';
    profileImg.alt = 'Profile Picture';
    nickname.href = "./html/user.html?userId=" + item.id;
    nickname.innerHTML = item_name; 

    suggestions.innerHTML = 'Suggestions For You';
    followButton.innerHTML = 'Follow';

    profile.append(profileImg);
    info.append(nickname, suggestions);
    profile.append(info, followButton);

    return profile;
}
