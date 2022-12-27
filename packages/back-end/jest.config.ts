import { jestNodePreset } from '../../presets'

export default {
    ...jestNodePreset,
    displayName: 'back-end',
    coverageDirectory: '../../coverage/packages/back-end'
}
