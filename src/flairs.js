const opFlair = `<span style="border: 1px solid red;border-radius: 9999px;padding: 4px 8px;font-size: 10px;">OP</span>`

function makeFlair(text, color) {
	return `<span style="border: 1px solid ${color};border-radius: 9999px;padding: 4px 8px;font-size: 10px;">${text}</span>`
}

const flairs = {
	op: makeFlair("OP", "red"),
	newMember: makeFlair("NEW MEMBER", "pink"),
	pluginDev: makeFlair("PLUGIN DEV", "orange"),
}

function getChild(element, className) {
	for (let i = 0; i < element.childNodes.length; i++) {
		const child = element.childNodes[i]
		if (child.classList.contains(className)) {
			return child
		}
	}
}

export default {
	addFlair: (post, flair) => {
		const flairContents = flairs[flair]
		const row = getChild(post, "row")
		const body = getChild(row, "topic-body")
		const meta = getChild(body, "topic-meta-data")
		const names = getChild(meta, "names")
		names.innerHTML += flairContents
	},
}
