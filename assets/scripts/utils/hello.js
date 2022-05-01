export const hello = () => {
  const text = '⚒ by Emotion Agency'
  if (navigator.userAgent.toLowerCase().includes('chrome')) {
    const args = [
      `\n %c ${text} \n`,
      'color: #fff; background: #9047ff; padding:5px 0;',
    ]
    window.console.log.apply(console, args)
    return
  }

  if (window.console) {
    window.console.log(`${text}: https://emotion-agency.com/en`)
  }
}
