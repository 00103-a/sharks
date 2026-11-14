import { useEffect, useState, type FormEvent } from 'react'
import { AsciiBackground } from './AsciiBackground'

function Eye({ visible }: { visible: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" />{!visible && <path d="m4 4 16 16" />}</svg>
}

export function App() {
  const [register, setRegister] = useState(false)
  useEffect(() => { document.title = `sharks｜${register ? '注册' : '登录'}` }, [register])
  return <main className="auth-page">
    <AsciiBackground />
    <div className="visual-panel" aria-hidden="true" />
    <section className="form-panel">
      <header className="panel-header"><span className="brand">sharks</span><span className="location"><span aria-hidden="true">◉</span> sharks</span></header>
      <div className="form-content"><AuthForm key={String(register)} register={register} switchMode={() => setRegister(!register)} /></div>
      <footer className="panel-footer"><span>© {new Date().getFullYear()} sharks</span><span>为每一次相遇用心</span></footer>
    </section>
  </main>
}

function AuthForm({ register, switchMode }: { register: boolean; switchMode: () => void }) {
  const [showPassword, setShowPassword] = useState(false)
  const [notice, setNotice] = useState('')
  const [nameError, setNameError] = useState('')

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (register && !String(new FormData(form).get('name') ?? '').trim()) {
      setNameError('请填写你的姓名。')
      form.querySelector<HTMLInputElement>('#name')?.focus()
      return
    }
    setNotice(register ? '注册演示完成。此页面未连接账户服务，不会创建账户或保存输入。' : '登录演示完成。此页面未连接账户服务，不会发送或保存输入。')
    form.reset()
    setShowPassword(false)
  }

  return <>
    <div className="form-intro"><span className="form-kicker">sharks</span><h1 id="form-title">{register ? '开启你的 sharks 日常' : '欢迎回来'}</h1><p>{register ? '加入 sharks，开启新的相遇。' : '登录 sharks，继续你的探索。'}</p></div>
    <form onSubmit={submit} aria-labelledby="form-title" onInput={() => setNotice('')}>
      {register && <div className="field"><label htmlFor="name">怎么称呼你</label><input id="name" name="name" autoComplete="name" placeholder="你的名字" required maxLength={80} aria-invalid={!!nameError} aria-describedby={nameError ? 'name-error' : undefined} onChange={() => setNameError('')} />{nameError && <p id="name-error" className="field-error" role="alert">{nameError}</p>}</div>}
      <div className="field"><label htmlFor="email">电子邮箱</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></div>
      <div className="field"><label htmlFor="password">密码</label><div className="password-field"><input id="password" name="password" type={showPassword ? 'text' : 'password'} autoComplete={register ? 'new-password' : 'current-password'} placeholder={register ? '至少 8 位字符' : '输入你的密码'} minLength={register ? 8 : undefined} maxLength={128} required aria-describedby={register ? 'password-hint' : undefined} /><button type="button" className="eye-button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? '隐藏密码' : '显示密码'} aria-pressed={showPassword}><Eye visible={showPassword} /></button></div>{register && <small id="password-hint">使用 8–128 位字符，建议组合字母、数字与符号。</small>}</div>
      <p className="service-note">仅供页面体验，请使用虚构信息。</p>
      <button type="submit" className="submit-button"><span>{register ? '创建账户' : '登录'}</span><span aria-hidden="true">↗</span></button>
      <p className="notice" role="status">{notice}</p>
    </form>
    <div className="switch-mode"><span>{register ? '已经有账户了？' : '还没有账户？'}</span><button type="button" onClick={switchMode}>{register ? '登录 →' : '创建账户 →'}</button></div>
  </>
}
