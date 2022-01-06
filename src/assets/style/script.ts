const programmableStyle = document.createElement('style')
document.head.appendChild(programmableStyle)

export const insertCSS = (rule: string): void => {
  const sheet = programmableStyle.sheet
  if (sheet === null) return
  sheet.insertRule(rule, sheet.cssRules.length)
}

export const getEasyUID = (): string => {
  return new Date().getTime().toString(16) +
        Math.floor(1000 * Math.random()).toString(16)
}
