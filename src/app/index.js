import controller from './controller'
import model from './model'

import '../styles/reset.scss'
import '../styles/app.scss'

controller.addListenerToUnfoundEl(model.submitForm, '.button_submit')
model.componentDidMount()
