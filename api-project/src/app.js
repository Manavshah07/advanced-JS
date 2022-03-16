import http from './slhttp';
import ui from './ui';

//EVENT HANDLING
document.addEventListener('DOMContentLoaded', fetchPosts);
document.getElementById('add_post_btn').addEventListener('click',addPost);
document.getElementById('posts').addEventListener('click',deletePost);
document.getElementById('posts').addEventListener('click',editPost);
document.getElementById('edit_post_btn').addEventListener('click',updatePostData);


function fetchPosts(){
    http.get("http://localhost:3000/posts")
    .then(data => ui.showPosts(data))
    .catch(err => console.error(err));
}

function addPost(){
    const title = document.getElementById('post_title').value;
    const body = document.getElementById('post_body').value;
    const author = document.getElementById('post_author').value;
    
//    const data ={
//        title:title,
//        body:body,
//        author:author
//    }  
   
//allowed in es6    
    const data ={
        title,
        body,
        author
    }; 
    
    http.post("http://localhost:3000/posts",data)
    .then(data=>{
        fetchPosts();
        ui.showAlert("Post Created Successfully!","alert alert-success");
        ui.clearAllFields();
    })
    .catch(err => console.log(err));
    
}

function deletePost(e){
    e.preventDefault();
//    console.log(e.target);
    if(e.target.classList.contains('delete')){
        const id = e.target.dataset.id;
        //console.log(id);
        if(confirm("Are you sure you want to delete?")){
            http.delete(`http://localhost:3000/posts/${id}`)
            .then(data => {
                ui.showAlert("Post Deleted Successfully!","alert alert-success");
                fetchPosts();
            })
            .catch(err=> ui.showAlert("Something went wrong!","alert alert-danger"));
        }
    }
}
                   
function editPost(e){
       e.preventDefault();  
       if(e.target.classList.contains('edit')){
           const id = e.target.dataset.id;
           http.get(`http://localhost:3000/posts/${id}`)
            .then(data => ui.fillEditModalData(data))
            .catch(err => console.log(err));
        }
}

function updatePostData(){
    const title = document.getElementById('edit_post_title').value;
    const body = document.getElementById('edit_post_body').value;
    const author = document.getElementById('edit_post_author').value;
    const id = document.getElementById('edit_post_id').value;
    
    const data ={
        title,
        body,
        author
    }; 
    
    http.put(`http://localhost:3000/posts/${id}`,data)
    .then(data=>{
        fetchPosts();
        ui.showAlert("Post Edited Successfully!","alert alert-success");
        $('#editPostModal').modal('hide');
    })
    .catch(err => console.log(err));
}