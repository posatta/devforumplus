const shortcuts = {
	"!!DUPE": `Many topics have been made regarding this; in the future please try to search before posting.

`, // the new lines are so you can link the search query
	"!!SPOON": `While you are helping people on the forum, please try not to give code-only replies. You aren’t explaining what any of your code does, and as a result of this the person asking for help isn’t actually learning anything.`,
	"!!ROBLOX": `Hi,

Just to let you know, the correct capitalization of 'ROBLOX' is Roblox. This is because Roblox is a proper noun, not an acronym.

ROBLOX was previously used, however this has changed; there are still some older sources which may use ROBLOX, however newer sources, including the [Roblox Name and Logo usage guidelines](https://en.help.roblox.com/hc/en-us/articles/115001708126-Roblox-Name-and-Logo-Community-Usage-Guidelines) use the newer 'Roblox' capitalization.

To answer the inevitable question, yes, the logo is written 'ROBLOX', however the wordmark does not equate to the capitalization in text; e.g. Discord's logo is written as 'DISCORD'. You can find similar things with a number of brands.

Feel free to ask me any further questions you may have about this.`,
	
	"!!MOD": `Hey there,
	
While it may be frustrating when people don't put topics in the correct categories, please do not reply to the topic, and flag it instead. By replying, you are being a [mini-mod](https://devforum.roblox.com/t/reduce-mini-modding-on-the-devforums/497180).

Mini-modding is [against the rules](https://devforum.roblox.com/t/official-rules-of-the-roblox-developer-forum/46429/55?u=fxllencode), and can lead to a suspension. Please refrain from doing so, as staff can take care of the post if you flag it.

If you have any other questions let me know. `,

	"!!CALLOUT": `Hello,

Even though it is upsetting that you had a bad experience with this person, [calling other users out is against the Official Rules of the Roblox Developer Forum.](https://devforum.roblox.com/t/official-rules-of-the-roblox-developer-forum/46429/9)

Calling out others is not allowed publicly, if you need to solve a dispute, please send them a DM. If they are claiming others work as their own, flag the post instead of replying. Failing to do so could result in strikes being issues against your account.

Feel free to ask me any follow up questions if you have any.`,
        
	"!!LUA": `Hi!

It looks like you've written "LUA". Lua is not an acronym (or an initialism) - it is the Portuguese word for 'moon'. 

Fun fact: Lua was created in 1993 by Roberto Ierusalimschy, Luiz Henrique de Figueiredo and Waldemar Celes, members of the Computer Graphics Technology Group (Tecgraf) at the Pontifical Catholic University of Rio de Janeiro, in Brazil. See here for more info: https://www.lua.org/about.html`
}

function handleTextArea(textarea) {
	if (textarea.classList.contains("-!--templates-added")) return false

	textarea.addEventListener("input", () => {
		textarea.value = textarea.value.replace(/\!\!\S*/, (match) => {
			// now you don't have to clear the composer to use a shortcut
			return shortcuts[match] || match
		})
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
