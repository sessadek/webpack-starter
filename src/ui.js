class UI {
    constructor() {
        this.posts = document.querySelector('#posts');
        this.idInput = document.getElementById('id');
        this.titleInput = document.getElementById('title');
        this.bodyInput = document.getElementById('body');
        this.postSubmit = document.querySelector('.post-submit');
    }
    showPosts(posts) {
        let output = '';
        posts.forEach((post) => {
            output += `<div>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <div>
                    <a href="#" class="edit" data-id="${post.id}">Edit</a>
                    <a href="#" class="delete" data-id="${post.id}">Delete</a>
                </div>
            </div>`
        });
        this.posts.innerHTML = output;
    }

    clearFields() {
        this.titleInput.value = '';
        this.idInput.value = '';
        this.bodyInput.value = '';
    }
    showAlert(message, className) {
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.append(document.createTextNode(message));
        document.body.insertBefore(div, this.posts);
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }


    fillForm(data) {
        this.idInput.value = data.id;
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
    }
}

export const ui = new UI;