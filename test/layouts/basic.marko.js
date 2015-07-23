function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ______node_modules_marko_node_modules_marko_layout_placeholder_tag_js = __renderer(require("marko/node_modules/marko-layout/placeholder-tag")),
      __tag = __helpers.t;

  return function render(data, out) {
    out.w('<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<title></title>\n</head>\n<body>\n\n\t');

    if (data.showHeader !== false) {
      out.w('<h1>\n        ');
      __tag(out,
        ______node_modules_marko_node_modules_marko_layout_placeholder_tag_js,
        {
          "name": "title",
          "content": data.layoutContent
        });

      out.w('\n    </h1>');
    }

    out.w('\n\n\t');
    __tag(out,
      ______node_modules_marko_node_modules_marko_layout_placeholder_tag_js,
      {
        "name": "body",
        "content": data.layoutContent
      });

    out.w('\n\n</body>\n</html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);