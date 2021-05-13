// Fetch comment to show on post

const urlFormComment =
	"https://krabistaycation.thaifolkinnorway.com/wp-json/wp/v2/comments?post=" +
	id;

const commentForm = document.querySelector(".comments-show");

async function showCommentonPost() {
	try {
		const res = await fetch(urlFormComment);
		const commentData = await res.json();
		console.log(commentData);
	} catch (error) {
		console.log("Error");
	}
}
showCommentonPost();

// Send data when guess submit Comment form

//action=" action="https://krabistaycation.thaifolkinnorway.com/wp-json/contact-form-7/v1/contact-forms/517/feedback" +id
