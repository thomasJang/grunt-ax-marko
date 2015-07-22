function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __loadTemplate = __helpers.l,
      ___layouts_basic_marko = __loadTemplate(require.resolve("../layouts/basic.marko")),
      __renderer = __helpers.r,
      ______node_modules_marko_node_modules_marko_layout_use_tag_js = __renderer(require("marko/node_modules/marko-layout/use-tag")),
      __tag = __helpers.t,
      ______node_modules_marko_node_modules_marko_layout_put_tag_js = __renderer(require("marko/node_modules/marko-layout/put-tag")),
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    __tag(out,
      ______node_modules_marko_node_modules_marko_layout_use_tag_js,
      {
        "template": ___layouts_basic_marko,
        "getContent": function(__layoutHelper) {
          __tag(out,
            ______node_modules_marko_node_modules_marko_layout_put_tag_js,
            {
              "into": "title",
              "layout": __layoutHelper
            },
            function(out) {
              out.w('My Page');
            });
          __tag(out,
            ______node_modules_marko_node_modules_marko_layout_put_tag_js,
            {
              "into": "body",
              "layout": __layoutHelper
            },
            function(out) {
              out.w('Hello ' +
                escapeXml(data.name) +
                '! ');

              if (notEmpty(data.colors)) {
                out.w('<ul>');

                forEach(data.colors, function(color) {
                  out.w('<li style="color: ' +
                    escapeXmlAttr(color) +
                    '">' +
                    escapeXml(color) +
                    '</li>');
                });

                out.w('</ul>');
              }
              else {
                out.w('<div>No colors!</div>');
              }
            });
        },
        "*": {
          "showHeader": true
        }
      });
  };
}
(module.exports = require("marko").c(__filename)).c(create);