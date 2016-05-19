module.exports = {
  options: {
    separator: '\n\n',
    stripBanners: false,
    banner: '<%= banner %>',
  },
  combine: {
    src: [
      'src/partials/intro.js',
      'src/partials/construct.js',
      'src/partials/functions/each.js',
      'src/partials/functions/extend.js',
      'src/partials/functions/trim.js',
      'src/partials/functions/type.js',
      'src/partials/functions/array.js',
      'src/partials/functions/inarray.js',
      'src/partials/functions/isarray.js',
      'src/partials/functions/toarray.js',
      'src/partials/functions/todash.js',
      'src/partials/functions/tocamel.js',
      'src/partials/functions/ishtml.js',
      'src/partials/functions/tohtml.js',
      'src/partials/functions/bytes.js',
      'src/partials/functions/uuid.js',
      'src/partials/functions/rid.js',
      'src/partials/functions/prfx.js',
      'src/partials/functions/stop.js',
      'src/partials/functions/param.js',
      'src/partials/functions/parse.js',
      'src/partials/functions/tpl.js',
      'src/partials/functions/ajax.js',
      'src/partials/functions/getscript.js',
      'src/partials/functions/defer.js',
      'src/partials/setup.js',
      'src/partials/methods/intro.js',
      'src/partials/methods/each.js',
      'src/partials/methods/on.js',
      'src/partials/methods/one.js',
      'src/partials/methods/off.js',
      'src/partials/methods/trigger.js',
      'src/partials/methods/hasClass.js',
      'src/partials/methods/position.js',
      'src/partials/methods/offset.js',
      'src/partials/methods/scrollTop.js',
      'src/partials/methods/scrollTo.js',
      'src/partials/methods/width.js',
      'src/partials/methods/outerwidth.js',
      'src/partials/methods/height.js',
      'src/partials/methods/outerheight.js',
      'src/partials/methods/hide.js',
      'src/partials/methods/show.js',
      'src/partials/methods/attr.js',
      'src/partials/methods/removeattr.js',
      'src/partials/methods/hasattr.js',
      'src/partials/methods/prop.js',
      'src/partials/methods/data.js',
      'src/partials/methods/css.js',
      'src/partials/methods/append.js',
      'src/partials/methods/prepend.js',
      'src/partials/methods/before.js',
      'src/partials/methods/after.js',
      'src/partials/methods/first.js',
      'src/partials/methods/last.js',
      'src/partials/methods/eq.js',
      'src/partials/methods/get.js',
      'src/partials/methods/clone.js',
      'src/partials/methods/contains.js',
      'src/partials/methods/find.js',
      'src/partials/methods/filter.js',
      'src/partials/methods/is.js',
      'src/partials/methods/children.js',
      'src/partials/methods/index.js',
      'src/partials/methods/prev.js',
      'src/partials/methods/prevall.js',
      'src/partials/methods/next.js',
      'src/partials/methods/nextall.js',
      'src/partials/methods/siblings.js',
      'src/partials/methods/parent.js',
      'src/partials/methods/parents.js',
      'src/partials/methods/text.js',
      'src/partials/methods/html.js',
      'src/partials/methods/outerhtml.js',
      'src/partials/methods/val.js',
      'src/partials/methods/empty.js',
      'src/partials/methods/remove.js',
      'src/partials/methods/bytes.js',
      'src/partials/methods/toarray.js',
      'src/partials/methods/focus.js',
      'src/partials/methods/blur.js',
      'src/partials/methods/extend.js',
      'src/partials/methods/outro.js',
      'src/partials/methods/class.js',
      'src/partials/domready.js',
      'src/partials/outro.js'
    ],
    dest: 'src/u.js'
  },
  dist: {
    options: {
      banner: ''
    },
    src: ['src/u.js'],
    dest: 'dist/u.js'
  },
  ie9: {
    options: {
      banner: '<%= bannerIE %>'
    },
    src: ['src/u.ie9.js'],
    dest: 'dist/u.ie9.js'
  },
  packed: {
    options: {
      banner: ''
    },
    src: ['dist/u.js', 'dist/u.ie9.js'],
    dest: 'dist/u.packed.js'
  }
};
