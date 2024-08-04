# Cider + Vue 3 + TypeScript + Vite

**(Requires Cider 2.5 or later)**

This is a work in progress template/boilerplate for creating Cider plugins using Vue 3, TypeScript, and Vite.

## Available Commands
- `npm run dev` - Start development server, Cider can then listen to this server when you select "Enable Vite" from the main menu
- `npm run build` - Build the plugin to `dist/{plugin.config.ts:identifier}`
- `npm run prepare-marketplace` - Prepare a ZIP package in the correct format for the Cider Marketplace

## How to install after build
- Copy `dist/{plugin.config.ts:identifier}` to the `/plugins` directory of your Cider app data directory
    - On Windows, this is `%APPDATA%\C2Windows\plugins`
    - On macOS, this is `~/Library/Application Support/sh.cider.electron/plugins`
    - On Linux, this is `~/.config/sh.cider.electron/plugins`

## Preparing a ZIP package for the Cider Marketplace
Run `npm run prepare-marketplace`

Running this script will create a ZIP file in the `publish` directory that is ready to be uploaded to the Cider Marketplace.

To configure this plugin edit `src/plugin.config.ts`
