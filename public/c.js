const rootCookie = new UniversalCookie(null, {path: '/'})
const cookie = new UniversalCookie()
rootCookie.set('root-test', 'Set on Page C')
cookie.set('test', 'Set on Page C')

console.log('"test" cookie: ', cookie.get('test'))
