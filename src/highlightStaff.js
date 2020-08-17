function handlePost(post) {
	if (post.parentElement.classList.contains("group-Roblox_Staff")) {
		if (post.parentElement.classList.contains("moderator")) return

		post.parentElement.className += " moderator"
	}
}

export default function highlightStaff() {
	setInterval(() => {
		for (let post of document.getElementsByTagName("article")) {
			handlePost(post)
		}
	}, 10)
}
