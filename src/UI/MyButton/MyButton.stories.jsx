import MyButton from './MyButton'
import { MemoryRouter } from 'react-router-dom'

export default {
    title: 'UI/MyButton',
    component: MyButton
}

export const BlackButton = {
    args: {
        color: 'black',
        children: 'Button'
    }
}

export const WhiteButton = {
    args: {
        color: 'white',
        children: 'Button'
    }
}
