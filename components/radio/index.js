/**
 * Created by echaoo on 17/10/5.
 */
import './style/index.js'

import Radio from './radio.vue'
import Group from './group.vue'
import RadioButton from './radio-button'

Radio.group = Group
Radio.radioButton = RadioButton
export default Radio
