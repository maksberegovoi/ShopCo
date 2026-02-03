import { MemoryRouter } from 'react-router-dom'
import Breadcrumbs from './Breadcrumbs'

export default {
    title: 'Navigation/Breadcrumbs',
    component: Breadcrumbs
}

export const Default = {
    args: {
        items: [
            { path: '/', url: '/', name: 'Home' },
            { path: '/catalog', url: '/catalog', name: 'Catalog' },
            {
                path: '/catalog/men/black-t-shirt',
                url: '/catalog/men/black-t-shirt',
                name: 'Black T Shirt'
            }
        ]
    }
}
