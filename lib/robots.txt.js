import fs from 'fs'

export async function generateRobotsTxt(props) {
  const content = `
User-agent: *
Disallow: /registerStep1?*
Disallow: /login?*
Disallow: /es
Disallow: /https:
Disallow: /undefined
Disallow: /tag
Disallow: /cdn-cgi
Disallow: /archive
Disallow: /company
Disallow: /support
Disallow: /safety
Disallow: /[prefix]

Sitemap: https://www.sugarélite.com/sitemap.xml
    `
  try {
    fs.mkdirSync('./public', { recursive: true })
    fs.writeFileSync('./public/robots.txt', content)
  } catch (error) {
    // 在vercel运行环境是只读的，这里会报错；
    // 但在vercel编译阶段、或VPS等其他平台这行代码会成功执行
  }
}
