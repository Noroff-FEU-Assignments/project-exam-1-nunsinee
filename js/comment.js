//Get the id from the query string
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

//if the id is null, redirect to the homepage
if (id === null) {
	location.href = "/";
}

const commentForm = document.querySelector("#commentForm");

commentForm.addEventListener("submit", function (e) {
	e.preventDefault();
	const commentData = new commentData(this);
	fetch(
		"https://krabistaycation.thaifolkinnorway.com/wp-json/contact-form-7/v1/contact-forms/517/feedback" +
			id,
		{
			medthod: "post",
			body: commentData,
		}
	)
		.then(function (resComment) {
			return resComment.text();
		})
		.then(function (text) {
			console.log(text);
		})
		.catch(function (error) {
			console.error(error);
		});
});
