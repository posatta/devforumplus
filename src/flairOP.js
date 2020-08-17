const flair = `<span style="border: 1px solid red;border-radius: 9999px;padding: 4px 8px;font-size: 10px;">OP</span>`

function handlePost(post) {
	if (post.parentElement.classList.contains("topic-owner")) {
		if (post.classList.contains("-!-has-op-flair")) return

		const row = getChild(post, "row")
		const body = getChild(row, "topic-body")
		const meta = getChild(body, "topic-meta-data")
		const names = getChild(meta, "names")
		names.innerHTML += flair

		post.className += " -!-has-op-flair"
	}
}

function getChild(element, className) {
	for (let i = 0; i < element.childNodes.length; i++) {
		const child = element.childNodes[i]
		if (child.classList.contains(className)) {
			return child
		}
	}
}

export default function flairOP() {
	setInterval(() => {
		for (let post of document.getElementsByTagName("article")) {
			handlePost(post)
		}
	}, 10)
}
