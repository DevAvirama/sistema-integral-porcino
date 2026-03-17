import { useNavigate } from 'react-router-dom'
import AuthSplitLayout from '../../components/layout/AuthSplitLayout.jsx'
import useFormFields from '../../hooks/useFormFields.js'
import { signIn } from '../../services/auth/authService.js'
import LoginForm from './components/LoginForm.jsx'
import LoginShowcase from './components/LoginShowcase.jsx'

function LoginView() {
  const navigate = useNavigate()
  const { fields, handleChange } = useFormFields({
    email: 'operador@porcitech.co',
    password: 'Sena2026*',
  })

  async function handleSubmit(event) {
    event.preventDefault()
    await signIn(fields)
    navigate('/dashboard')
  }

  return (
    <AuthSplitLayout aside={<LoginShowcase />}>
      <LoginForm fields={fields} onChange={handleChange} onSubmit={handleSubmit} />
    </AuthSplitLayout>
  )
}

export default LoginView
