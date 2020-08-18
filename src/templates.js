const shortcuts = {
	"!!30": "<the thirty character limit />",
}

function handleTextArea(textarea) {
	if (textarea.classList.contains("-!--templates-added")) return false

	textarea.addEventListener("input", () => {
		if (shortcuts[textarea.value]) {
			textarea.value = shortcuts[textarea.value]
		}
	})

	textarea.className += " -!--templates-added"
}

// d-editor-input
export default function pmTemplates() {
	setInterval(() => {
		for (let message of document.getElementsByClassName("flag-message")) {
			handleTextArea(message)
		}

		for (let editor of document.getElementsByClassName("d-editor-input")) {
			handleTextArea(editor)
		}
	}, 100)
}
