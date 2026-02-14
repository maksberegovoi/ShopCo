import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import MyButton from '../../UI/MyButton/MyButton.jsx'
import { MyInput } from '../../UI/MyInput/MyInput.jsx'
import styles from './AuthPage.module.scss'
import sprite from '../../../assets/icons/sprite.svg'
import {
    useLazyCheckAuthQuery,
    useLoginMutation,
    useSignUpMutation
} from '../../api/user/userAPI.js'
import Loader from '../../UI/Loader/Loader.jsx'
import toast from 'react-hot-toast'
import { loginSchema, signUpSchema } from './validateSchemas.js'
import { LOGIN_ROUTE } from '../../utils/consts.js'

export default function AuthPage() {
    const location = useLocation()
    const navigate = useNavigate()
    const { mode } = useParams()

    const from = location.state?.from?.pathname || '/'
    const [passVisible, setPassVisible] = useState(false)

    const isLogin = mode === 'login'

    const [login, { isLoading: isLoginLoading }] = useLoginMutation()
    const [signUp, { isLoading: isSignUpLoading }] = useSignUpMutation()
    const [triggerCheckAuth] = useLazyCheckAuthQuery()

    const isLoading = isLoginLoading || isSignUpLoading

    const switchMode = () => {
        navigate(`/auth/${isLogin ? 'signup' : 'login'}`)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())

        const schema = isLogin ? loginSchema : signUpSchema
        const validation = schema.safeParse(data)

        if (!validation.success) {
            const firstError = validation.error.issues[0]
            toast.error(firstError.message)
            return
        }

        try {
            if (isLogin) {
                await login(data).unwrap()
                await triggerCheckAuth().unwrap()
                toast.success('Logged in successfully!')
                navigate(from, { replace: true })
            } else {
                await signUp(data).unwrap()
                toast.success('Account created successfully!')
                navigate(LOGIN_ROUTE, { replace: true })
            }

            e.target.reset()
        } catch (error) {
            const errorMessage = error?.data?.message || 'Something went wrong'
            toast.error(errorMessage)
        }
    }

    return (
        <section className={`container ${styles.authContainer}`}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>
                    {isLogin ? 'Login' : 'Sign Up'}
                </h2>

                <form onSubmit={handleSubmit} className={styles.form}>
                    {!isLogin && (
                        <MyInput
                            name="name"
                            type="text"
                            placeholder="Name"
                            required
                            autoComplete="name"
                        />
                    )}

                    <MyInput
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        autoComplete="email"
                    />

                    <div className={styles.passContainer}>
                        <MyInput
                            name="password"
                            type={passVisible ? 'text' : 'password'}
                            placeholder="Password"
                            required
                            autoComplete={
                                isLogin ? 'current-password' : 'new-password'
                            }
                        />

                        <button
                            type="button"
                            className={styles.eyeBtn}
                            aria-label="Toggle password visibility"
                            onClick={() => setPassVisible((prev) => !prev)}
                        >
                            <svg
                                className={
                                    passVisible
                                        ? styles.iconEye
                                        : styles.iconEyeBlocked
                                }
                            >
                                <use
                                    href={`${sprite}#${
                                        passVisible
                                            ? 'icon-eye'
                                            : 'icon-eye-blocked'
                                    }`}
                                />
                            </svg>
                        </button>
                    </div>

                    <MyButton
                        classname={styles.switchBtn}
                        type="button"
                        onClick={switchMode}
                    >
                        {isLogin
                            ? 'Not registered? → Sign Up'
                            : 'Have an account? → Login'}
                    </MyButton>

                    <MyButton type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <Loader classname={styles.loader} />
                        ) : isLogin ? (
                            'Login'
                        ) : (
                            'Sign Up'
                        )}
                    </MyButton>
                </form>
            </div>
        </section>
    )
}
