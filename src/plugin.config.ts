import { createId } from "@paralleldrive/cuid2"

export default {
    ce_prefix: createId(),
    identifier: 'sh.cider.plugin-template-wip',
    name: 'Cider Plugin Template (WIP)',
    description: 'A template for creating a Cider plugin.',
    version: '0.0.1',
    author: 'ciderapp',
    repo: 'https://github.com/ciderapp/plugin-template-wip',
    entry: {
        'plugin.js': {
            type: 'main',
        }
    }
}