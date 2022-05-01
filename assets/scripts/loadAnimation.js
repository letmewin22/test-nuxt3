import gsap from 'gsap'
import { animations } from './animations'

const noop = () => {}

export const loadAnimation = cb => {
  const $sc = document.querySelector('#scroll-container')
  const $el = document.querySelector('[data-route]')

  const callback = cb || noop

  if (!$el) return

  callback()

  if ($sc && !$sc.classList.contains('sc-loaded')) {
    gsap.to($sc, {
      duration: 0.5,
      opacity: 1,
      onComplete: () => {
        $sc.classList.add('sc-loaded')
      },
    })
  }

  animations($el, 2)
}
