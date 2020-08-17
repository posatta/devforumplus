# devforumplus

A browser extension designed to makes the Roblox DevForum that bit nicer.

Available for both Chrome nad Firefox. Feel free to port to other browesrs if you want, the main part is just `devforumplus.js`.

## Features

- Completely hide users' posts (WIP, may break some things)
- Flairs the OP
- Flairs new members (as network efficient as it can be; one request per user, caches for tab life)
- Highlights posts by Roblox staff members (useful for skimming announcements)
- Highlights excessive bumps (it gets redder the more of a bump it is)

## Features coming soon

- PM templates (stuff like 'it's Roblox not ROBLOX' but explained well)
- Customization thingy-magicky (so you can add custom settings, custom flairs, custom highlights, etc)
- Improvements to the flair code (so i can add more flairs!!)

## Contributions

PRs welcome. Please respect the style guide in the editorconfig and prettierrc.

### Development

Webpack is used to build the final `devforumplus.js` file because I hate browser js.

The actual code is in the `src` file, with `src/index.js` being the entry point.

See the `webpack.config.js` for more information.
