document.addEventListener("DOMContentLoaded", () => {
    const posts = JSON.parse(localStorage.getItem("products")) || [];

    if (document.querySelector("#products")) {
      const adminPostsContainer = document.querySelector("#products");
      adminPostsContainer.innerHTML = posts
        .map(
          (post, index) => `
              <div class="card">
              <img src="shopping (1).webp" style="width:100%" class="image">
              <h1>${post.title}</h1>
              <p class="price">$${post.price}</p>
              <p>${post.content}</p>
              <p><button>Add to Cart</button></p>
          </div>
          `
        )
        .join("");
    }
  
  });