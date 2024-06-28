import { asideImages } from "./aside-elements.js"
import * as aside_actions from "./aside-actions.js"



export function registerAsideImages () {
    asideImages.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if (typeof aside_actions[action] != "function") {
            return
        }

        aside_actions[action]()
    })
}

