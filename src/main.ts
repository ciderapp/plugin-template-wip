import { defineCustomElement } from "./CustomElement/apiCustomElement";
import { addImmersiveMenuEntry, addMainMenuEntry, addMediaItemContextMenuEntry } from "./api/MenuEntry";
import { goToPage } from "./api/Page";
import { PluginAPI } from "./api/PluginAPI";
import HelloWorld from "./components/HelloWorld.vue";
import MySettings from "./components/MySettings.vue";
import CustomPage from "./pages/CustomPage.vue";
import { customElementName } from "./utils";
import config from './plugin.config.ts'
import { addCustomButton } from "./api/CustomButton";

/**
 * Custom Elements that will be registered in the app
 */
export const CustomElements
    = {
    'hello-world':
        defineCustomElement(HelloWorld, {
            /**
             * Disabling the shadow root DOM so that we can inject styles from the DOM
             */
            shadowRoot: false,
        }),
    'settings': defineCustomElement(MySettings, {
        shadowRoot: false
    }),
    'page-helloworld': defineCustomElement(CustomPage, {
        shadowRoot: false
    })
}

export default {
    name: 'My Plugin',
    identifier: config.identifier,
    /**
     * Defining our custom settings panel element
     */
    SettingsElement: customElementName('settings'),
    /**
     * Initial setup function that is executed when the plugin is loaded
     */
    setup() {
        for (const [key, value] of Object.entries(CustomElements)) {
            const _key = key as keyof typeof CustomElements;
            customElements.define(customElementName(_key), value)
        }

        // Here we add a new entry to the main menu
        addMainMenuEntry({
            label: "Go to my page",
            onClick() {
                goToPage({
                    name: 'page-helloworld'
                });
            },
        })

        addImmersiveMenuEntry({
            label: "Go to my page",
            onClick() {
                goToPage({
                    name: 'page-helloworld'
                });
            },
        })

        // Here we add a custom button to the top right of the chrome
        addCustomButton({
            element: '🤯',
            location: 'chrome-top/right',
            title: 'Click me!',
            menuElement: customElementName('hello-world'),
        })


        addMediaItemContextMenuEntry({
            label: 'Send to plugin',
            onClick(item) {
                console.log('Got this item', item)
            },
        })
    },
} as PluginAPI
