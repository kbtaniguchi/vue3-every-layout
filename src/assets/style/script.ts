const programmableStyle = document.createElement('style')
document.head.appendChild(programmableStyle)

export const insertCSS = (rule: string): void => {
  const sheet = programmableStyle.sheet
  if (sheet === null) return
  sheet.insertRule(rule, sheet.cssRules.length)
}
