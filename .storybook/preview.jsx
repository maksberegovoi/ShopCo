import '../src/main.scss'
import { StorybookProviders } from './StoryBookProviders.jsx'

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
    parameters: {
        layout: 'centered',

        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },

        chromatic: {
            pauseAnimationAtEnd: true
        },

        viewport: {
            defaultViewport: 'desktop'
        },

        a11y: {
            test: 'todo'
        }
    }
}
export const decorators = [
    (Story) => (
        <StorybookProviders>
            <Story />
        </StorybookProviders>
    )
]
export default preview
