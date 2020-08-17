function handleGap(elem) {
	if (!elem.classList.contains("-!-processed-timegap")) {
		const child = elem.childNodes[1]
		const text = child.innerText.toLowerCase()
		const components = text.split(" ")
		const number = components[0]
		const medium = components[1]

		let baseSeconds = 1

		switch (medium) {
			case "days":
				baseSeconds = 86400
				break
			case "months":
				baseSeconds = 2629800
				break
			case "years":
				baseSeconds = 31557600
				break
		}

		let time = baseSeconds * number
		console.log(number, medium, baseSeconds, time)

		if (time >= 63115200) {
			// 2 years
			child.style["font-weight"] = "bold"
			child.style.color = "red"
		} else if (time >= 31557600) {
			// 1 year
			child.style.color = "red"
		} else if (time >= 2629800) {
			// 1 month
			child.style.color = "orange"
		} else if (time >= 1209600) {
			// 2 weeks
			child.style.color = "lightblue"
		} else if (time >= 604800) {
			// 1 week
			child.style.color = "pink"
		}

		elem.className += " -!-processed-timegap"
	}
}

export default function highlightBumps() {
	setInterval(() => {
		for (let elem of document.getElementsByClassName("time-gap")) {
			handleGap(elem)
		}
	}, 10)
}
