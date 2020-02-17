/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    let ulElement = document.createElement('ul');
    let html = "";

    for(let friend of friends) {
        html +=`<li>${friend.firstName} ${friend.lastName}</li>`;
    }
    ulElement.innerHTML = html;
    return ulElement;

}
