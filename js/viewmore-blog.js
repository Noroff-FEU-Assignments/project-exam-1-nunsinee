const urlMoreBlogs =
	"https://krabistaycation.thaifolkinnorway.com/wp-json/wp/v2/posts/?per_page=12";

const viewMorePost = document.querySelector("#viewMorePost");

viewMorePost.addEventListener("click", () => {
	async function getPostItems() {
		try {
			// get first 6 blogs
			const responseTenBlogs = await fetch(urlMoreBlogs);
			const getMoreBlogs = await responseTenBlogs.json();
			console.log(getMoreBlogs);

			//get Author
			const responseAuthor = await fetch(urlAuthor);
			const getAuthor = await responseAuthor.json();

			//slide-content
			showPostItems.innerHTML = "";
			createMorePostItems(getMoreBlogs, getAuthor);
		} catch (error) {
			console.log("An error occurred");
			showPostItems.innerHTML += `<div class="api-error"><h1>An error occurred when calling the API</h1></div>`;
		}
	}
	getPostItems();

	function createMorePostItems(getMoreBlogs, authorName) {
		for (let i = 0; i < getMoreBlogs.length; i++) {
			showPostItems.innerHTML += `
		<div class="post-item">
		<div class="p-pic"><img src="${getMoreBlogs[i].fimg_url}" alt="${getMoreBlogs[i].title.rendered}" data-original="${getMoreBlogs[i].fimg_url}"></div>
		<div class="p-name">${getMoreBlogs[i].title.rendered}</div>
		<div class="p-by"><span>By ${authorName.name}-${getMoreBlogs[i].formatted_date}</span></div>
		<div class="p-view"><a href="blog_detail.html?id=${getMoreBlogs[i].id}">Read</a></div>
		</div>`;
		}
	}
	viewMorePost.textContent = "View Less";
});
