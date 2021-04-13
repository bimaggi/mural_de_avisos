document.addEventListener('DOMContentLoaded',()=>{
    updatePosts();
})

const btn = document.querySelector('#btn')
btn.addEventListener('click',newPost,false)

function updatePosts(){

    fetch("http://192.168.0.6:5000/api/all").then(res => {
       return res.json()
    }).then(json => {

        let postElements = '';
        let posts = JSON.parse(json);

        posts.forEach((post) => {
            let postElement =`<div id=${post.id} class="card mb-4">
                                    <div class="card-header" >
                                        <h5 class="card-title">${post.title}</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-text">${post.description}</div>
                                    </div>
                                </div>`

            postElements += postElement;
        })

        document.querySelector('#posts').innerHTML = postElements;
       
    })
}

function newPost(){
    
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#desc').value;
    let post ={title:title, description:description};

    const options = { 
        method:"POST",
        headers: new Headers({'content-type':'application/json'}),
        body: JSON.stringify(post)
    }

    fetch("http://192.168.0.6:5000/api/new", options).then(res =>{
        updatePosts();
       
    })
    document.querySelector('#title').value = '';
    document.querySelector('#desc').value = '';
}

