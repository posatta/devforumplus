const flair = `<span style="border: 1px solid pink;border-radius: 9999px;padding: 4px 8px;font-size: 10px;">NEW MEMBER</span>`

let newMembers = []
let notNewMembers = []

const FETCH_CONFIG = {
	method: "GET",
}

const CLASS_NAME = "-!--checked-newmember-flair"

async function handlePost(post) {
	if (!post) return false

	if (!post.classList.contains(CLASS_NAME)) {
		const amNewMember = await isNewMember(
			post.getAttribute("data-user-id"),
			post.getAttribute("data-post-id")
		)

		if (amNewMember) {
			const row = getChild(post, "row")
			const body = getChild(row, "topic-body")
			const meta = getChild(body, "topic-meta-data")
			const names = getChild(meta, "names")
			names.innerHTML += flair
		}

		post.className += ` ${CLASS_NAME}`
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

async function isNewMember(userId, postId) {
	if (newMembers.indexOf(userId) != -1) return true
	if (notNewMembers.indexOf(userId) != -1) return false

	const res = await fetch(`https://devforum.roblox.com/posts/${postId}.json`, FETCH_CONFIG)

	if (!res.ok) {
		return false // throw new Error(`HTTP error! Status: ${res.status}`)
	}

	const blob = await res.blob()
	const post = JSON.parse(await blob.text())

	if (post.trust_level == 1) {
		newMembers.push(userId)
		return true
	} else {
		notNewMembers.push(userId)
		return false
	}
}

export default function flairNewMember() {
	setInterval(() => {
		for (let post of document.getElementsByTagName("article")) {
			handlePost(post).catch(console.error)
		}
	}, 1000)
}
