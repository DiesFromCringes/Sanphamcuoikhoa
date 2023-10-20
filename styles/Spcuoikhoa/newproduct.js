const cart = []
  document.addEventListener("DOMContentLoaded", () => {
    const posts = JSON.parse(localStorage.getItem("products")) || [];
  
    if (document.querySelector("#login-form")) {
      document.querySelector("#login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const price = e.target.price.value;
        const content = e.target.content.value;
        
        posts.push({ title, content, price });
        localStorage.setItem("products", JSON.stringify(posts));
        alert("Bài đăng đã được thêm");
        window.location.href = "newproduct.html";
      });
    }
  
    if (document.querySelector("#admin-posts")) {
      const adminPostsContainer = document.querySelector("#admin-posts");
      adminPostsContainer.innerHTML = posts
        .map(
          (post, index) => `
              <div>
                  <h2>${post.title}</h2>
                  <p>${post.content}</p>
                  <p>${post.price}</p>
                  <button onclick="updatePost(${index})">Cập nhật</button>
                  <button onclick="deletePost(${index})">Xóa</button>
              </div>
          `
        )
        .join("");
    }
  
    window.updatePost = (index) => {
      const title = prompt("Nhập tiêu đề mới:", posts[index].title);
      const content = prompt("Nhập nội dung mới:", posts[index].content);
      const price = prompt("Nhập giá mới:", posts[index].price);
      if (title && content) {
        posts[index] = { title, content, price };
        localStorage.setItem("products", JSON.stringify(posts));
        window.location.reload();
      }
    };
  
    window.deletePost = (index) => {
      if (confirm("Bạn có chắc chắn muốn xóa bài đăng này?")) {
        posts.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(posts));
        window.location.reload();
      }
    };
  });

