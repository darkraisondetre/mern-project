import { useState } from "react"
import { useHttp } from "../hooks/http.hook"

export const AuthPage = () => {
  const {loading, error, request} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      console.log('Data', data)
    } catch (e) { }
  }
  return(
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Сократи ссылку</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <div>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Введите Email"
                  id="email"
                  name="email"
                  type="text"
                  onChange={changeHandler}
                />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  placeholder="Введите пароль"
                  id="password"
                  name="password"
                  type="password"
                  onChange={changeHandler}
                />
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              style={{marginRight: 10}}
              disabled={loading}
            >
              Войти
            </button>
            <button
              className="btn green lighten-1"
              onClick={registerHandler}
              disabled={loading}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}