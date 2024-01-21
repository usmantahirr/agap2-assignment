import DOMPurify from "dompurify"
import { ReactNode } from "react"

const textToHtml = (htmlString: string): ReactNode => (
  <div
    className="paragraph"
    dangerouslySetInnerHTML={{
      __html: DOMPurify.sanitize(htmlString),
    }}
  />
)

export default textToHtml
