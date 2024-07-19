const rootCookie = new UniversalCookie(null, {path: '/'})
const cookie = new UniversalCookie()
rootCookie.set('root-test', 'Set on Page A')
cookie.set('test', 'Set on Page A')

console.log('"test" cookie: ', cookie.get('test'))
