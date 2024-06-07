import {http} from './easyhttp';
import {ui} from './ui';

const url = 'http://localhost:3000/posts';

document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
    http.get(url)
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err))
}




ui.postSubmit.addEventListener('click', submitPost);

function submitPost() {
    const title = ui.titleInput.value;
    const body = ui.bodyInput.value;
    const id = ui.idInput.value;
    if(title === '' || body === '') {
        ui.showAlert('please fill all fields', 'alert warning');
        return false;
    }
    const data = {
        title,
        body
    }
    if(id === '') {

        http.post(url, data).
        then(data => {
            getPosts();
            ui.showAlert('post added', 'alert success');
            ui.clearFields();
        })
        .catch(err => console.log(err));
    } else {
        http.put(url+`/${id}`, data).
        then(data => {
            getPosts();
            ui.showAlert('post Updated', 'alert success');
            ui.clearFields();
        })
        .catch(err => console.log(err));
    }
}

ui.posts.addEventListener('click', editState);

function editState(e) {
    if(e.target.classList.contains('edit')) {
        const id = e.target.dataset.id;
        const body = e.target.parentElement.previousElementSibling.textContent;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const data = {
            id,
            title,
            body
        };
        ui.fillForm(data);
    }
    e.preventDefault();

}