import _prototype from './_prototype'

const walk_1 = [
  '   o', //
  ' ,/v',
  ' />',
]

const walk_2 = [
  '    o', //
  '  </.',
  '  /\\',
]

const walk_3 = [
  '     o', //
  '   ,/V',
  '   />',
]

const walk_4 = [
  '      o', //
  '    </\\',
  '    /\\',
]

const animations = [walk_1, walk_2, walk_3, walk_4]
export default _prototype(animations, 4, 0)
