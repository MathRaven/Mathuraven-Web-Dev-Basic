console.log("Script is running...")

// The DOM is the document Object Model and represents the HTML document
// as a JavaScript Object that we can then modify
// The DOMContentLoaded event will fire when 
document.addEventListener("DOMContentLoaded", () => {
    new Blog();
})

class BlogPost {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    render() {
        return `
                <div class="post">
                    <h2>${this.title}</h2>
                    <p>${this.content}</p>
                </div>
        `;
    }
}

class Blog {
    constructor() {
        // Will store all the blog posts, will be used to display as well
        this.posts = [];
        this.initialize();
        this.render();
    }
        
    addPost(title, content) {
        //Create a new post
        const newPost = new BlogPost(title, content)
    }
    render() {
        const blogPostContainer = document.getElementById("blog-posts")
        blogPostContainer.innerHTML = "";
        this.posts.forEach(function(post, index) {
            blogPostContainer.innerHTML += post.render();
        }) 
    }
    initialize() {
        const addButton = document.getElementById("addPostBtn");
        addButton.addEventListener("click", () => {
            const title = document.getElementById("titleInput").value;
            const content = document.getElementById("contentInput").value;
            console.log(title, content);
            
            if (title && content) {
                this.addPost(title, content);
                document.getElementById("titleInput").value = "";
                document.getElementById("contentInput").value = "";
            }

        })
    }

}
