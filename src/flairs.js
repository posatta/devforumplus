function makeFlair(text, color) {
	return `<span style="border: 1px solid ${color};border-radius: 9999px;padding: 4px 8px;font-size: 10px;">${text}</span>`
}

const flairs = {
	op: makeFlair("OP", "red"),
	newMember: makeFlair("NEW MEMBER", "pink"),
	pluginDev: makeFlair("PLUGIN DEV", "orange"),
	oldmember: makeFlair("OLD MEMBER", "black"),
	robloxMan: makeFlair("ROBLOX MAN", "#00A2FF"),
	AHHHHHHHH: makeFlair("VERY FUNNY TOMATO MAN", "red"),
	carrot: makeFlair("CARROT", "orange"),
	exploiter: makeFlair("SHADY EXPLOITER", "purple"),
	janet: makeFlair("ANTI- OPEN SOURC E", "brown"),

	suspended: `<span title="Suspended"><svg class="fa d-icon d-icon-ban svg-icon svg-string" xmlns="http://www.w3.org/2000/svg" style="color:#e45735 !important"><use xlink:href="#ban"></use></svg></span>`,
	verified: `<span title="Verified"><svg class="fa d-icon d-icon-check-circle svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#check-circle"></use></svg></span>`,
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
		
		for (let row of post.getElementsByClassName("row")) {
			var body = getChild(row, "topic-body")
			if (body) {
				break
			}
		}
		
		const meta = getChild(body, "topic-meta-data")
		const names = getChild(meta, "names")
		names.innerHTML += flairContents
	},
}