import { themeClass } from "@ds-pack/components"

export default function Layout({children}) {
  return (
    <html className={themeClass}>
      <head>
        <title>Testing Layouts</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
