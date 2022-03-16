class UI {
	constructor() {
		this.post_title = document.getElementById('post_title');
		this.post_body = document.getElementById('post_body');
		this.post_author = document.getElementById('post_author');

		this.edit_post_title = document.getElementById('edit_post_title');
		this.edit_post_body = document.getElementById('edit_post_body');
		this.edit_post_author = document.getElementById('edit_post_author');
		this.edit_post_id = document.getElementById('edit_post_id');

		this.add_post_btn = document.getElementById('add_post_btn');
		this.post_container = document.querySelector('.posts-container');
		this.posts_wrapper = document.getElementById("posts");

	}

	showPosts(posts) {
		let output = "";
		posts.forEach(post => {
			output += `
				<div class="card mb-3">
					<div class = "card-body">
						<h5 class = "card-title">${post.title}</h5>
						<p classs ="card-text">${post.body}</p>
						<a href="#" class="card-link">${post.author}</a>
		<a href="#" class="edit btn btn-primary pull-right mr-3" data-id="${post.id}" data-toggle="modal" data-target="#editPostModal">Edit</a>
		<a href="#" class="delete btn btn-danger pull-right mr-3" data-id="${post.id}">Delete</a>
		</div>
	</div>
			`;
		});
		this.posts_wrapper.innerHTML = output;
	}
	
	fillEditModalData(post){
		this.edit_post_author.value = post.author;
		this.edit_post_body.value = post.body;
		this.edit_post_id.value = post.id;
		this.edit_post_title.value = post.title;
	}
    showAlert(message,classList){
        const div =document.createElement('div');
        div.className = classList;
        div.appendChild(document.createTextNode(message));
        this.post_container.insertBefore(div,this.posts_wrapper);
        
        setTimeout(() =>this.clearAlert(),3000);
    }
    
    claerAlert(){
        const currentAlertBox = document.querySelector('.alert');
        if(currentAlertBox){
            currentAlertBox.remove();
        }
    }
    claerAllFields(){
        this.post_title.value="";
        this.post_body.value="";
        this.post_author.value="";
    }
	
}

const ui = new UI();
export default ui;