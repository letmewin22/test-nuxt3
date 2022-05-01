import gsap from 'gsap'
import { delayPromise } from '@emotionagency/utils'
import { textLineAnimation } from './textLineAnimation'

const ease = 'expo.out'

export const animations = (elem, h1dur = 2) => {
  const $lines = elem.querySelectorAll('[data-a-l]')
  const $t = elem.querySelectorAll('[data-a-t]')
  const $o = elem.querySelectorAll('[data-a-o]')

  const $h = elem.querySelectorAll('[data-a-h]')
  const $p = elem.querySelectorAll('[data-a-p]')

  $lines.length &&
    gsap.to($lines, {
      duration: 2.5,
      scaleX: 1,
      delay: 0.5,
      ease,
      stagger: 0.2,
    })

  $t.length &&
    gsap.to($t, {
      duration: 2,
      delay: 0.5,
      opacity: 1,
      y: 0,
      ease,
      stagger: 0.2,
    })

  $o.length &&
    gsap.to($o, {
      duration: 2,
      delay: 0.5,
      opacity: 1,
      ease,
      stagger: 0.2,
    })

  $h.length &&
    $h.forEach(async (el, i) => {
      await delayPromise(i * 300)
      textLineAnimation().in(el, h1dur)
    })

  $p.length &&
    $p.forEach(async (el, i) => {
      await delayPromise((i + 1) * 300)
      textLineAnimation().in(el, h1dur)
    })
}
