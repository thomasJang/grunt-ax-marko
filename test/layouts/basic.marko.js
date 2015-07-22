function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ______node_modules_marko_node_modules_marko_layout_placeholder_tag_js = __renderer(require("marko/node_modules/marko-layout/placeholder-tag")),
      __tag = __helpers.t;

  return function render(data, out) {
    out.w('<!DOCTYPE html> <html lang="en"><head><meta charset="UTF-8"><title></title></head><body>');

    if (data.showHeader !== false) {
      out.w('<h1>');
      __tag(out,
        ______node_modules_marko_node_modules_marko_layout_placeholder_tag_js,
        {
          "name": "title",
          "content": data.layoutContent
        });

      out.w('</h1>');
    }
    __tag(out,
      ______node_modules_marko_node_modules_marko_layout_placeholder_tag_js,
      {
        "name": "body",
        "content": data.layoutContent
      });

    out.w('</body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);