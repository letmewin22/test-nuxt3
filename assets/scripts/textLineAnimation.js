import SplitType from 'split-type'
import gsap from 'gsap'

export const textLineAnimation = $el => {
  let $toAnimate

  const prepare = ($el, by = 'chars, lines') => {
    if ($el.classList.contains('splitted')) {
      return
    }
    const text = new SplitType($el, {
      types: by,
      tagName: 'span',
      lineClass: 'e-line',
    })

    text.lines.forEach((line, idx) => {
      line.innerHTML = `<span class="line-inner">${line.innerHTML}</span>`
      line.setAttribute('data-line', line.innerText)
      line.setAttribute('data-line-idx', idx)
    })

    $toAnimate = [...$el.querySelectorAll('.line-inner')]
    $el.style.opacity = 1
    $el.classList.add('splitted')
  }

  return {
    in: ($el, duration = 2, stagger = 0.2) => {
      prepare($el, 'lines')
      $el.style.opacity = 1

      if ($toAnimate?.length) {
        const to = $toAnimate.reverse()
        gsap.to(to, {
          duration,
          y: '0%',
          rotation: 0,
          stagger,
          ease: 'expo.out',
        })

        gsap.to(to, {
          duration: duration * 1.5,
          stagger,
          opacity: 1,
          ease: 'expo.out',
        })
      }
    },
  }
}
