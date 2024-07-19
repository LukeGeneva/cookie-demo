const rootCookie = new UniversalCookie(null, {path: '/'})
const cookie = new UniversalCookie()
rootCookie.set('root-test', 'Set on Page B')
cookie.set('test', 'Set on Page B')

console.log('"test" cookie: ', cookie.get('test'))
