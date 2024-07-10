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
import { useCiderAudio } from "./api/CiderAudio.ts";
import { createModal } from "./api/Modal.ts";
import ModalExample from "./components/ModalExample.vue";
import { addImmersiveLayout } from "./api/ImmersiveLayout.ts";
import CustomImmersiveLayout from "./components/CustomImmersiveLayout.vue";


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
    'modal-example': defineCustomElement(ModalExample, {
        shadowRoot: false
    }),
    'page-helloworld': defineCustomElement(CustomPage, {
        shadowRoot: false
    }),
    'immersive-layout': defineCustomElement(CustomImmersiveLayout, {
        shadowRoot: false,
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
        // Temp workaround
        // @ts-ignore
        window.__VUE_OPTIONS_API__ = true
        for (const [key, value] of Object.entries(CustomElements)) {
            const _key = key as keyof typeof CustomElements;
            customElements.define(customElementName(_key), value)
        }

        addImmersiveLayout({
            name: "My layout",
            identifier: "my-layout",
            component: customElementName('immersive-layout'),
            type: 'normal',
        })

        // Here we add a new entry to the main menu
        addMainMenuEntry({
            label: "Go to my page",
            onClick() {
                goToPage({
                    name: 'page-helloworld'
                });
            },
        })

        addMainMenuEntry({
            label: "Modal example",
            onClick() {
                const { closeDialog, openDialog, dialogElement } = createModal({
                    escClose: true,
                })
                const content = document.createElement(customElementName('modal-example'));
                // @ts-ignore
                content._props.closeFn = closeDialog;
                dialogElement.appendChild(content);
                openDialog();
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

        const audio = useCiderAudio();
        audio.subscribe('ready', () => {
            console.log("CiderAudio is ready!", audio.context)
        })


        addMediaItemContextMenuEntry({
            label: 'Send to plugin',
            onClick(item) {
                console.log('Got this item', item)
            },
        })
    },
} as PluginAPI
