function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __loadTemplate = __helpers.l,
      __renderer = __helpers.r,
      ______node_modules_marko_node_modules_marko_layout_use_tag_js = __renderer(require("marko/node_modules/marko-layout/use-tag")),
      __tag = __helpers.t,
      ______node_modules_marko_node_modules_marko_layout_put_tag_js = __renderer(require("marko/node_modules/marko-layout/put-tag")),
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      escapeXmlAttr = __helpers.xa,
      ___components_my_hello_renderer_js = __renderer(require("../components/my-hello/renderer"));

  return function render(data, out) {
    __tag(out,
      ______node_modules_marko_node_modules_marko_layout_use_tag_js,
      {
        "template": __loadTemplate(data.template_url, require),
        "getContent": function(__layoutHelper) {
          out.w('\n\t');
          __tag(out,
            ______node_modules_marko_node_modules_marko_layout_put_tag_js,
            {
              "into": "title",
              "layout": __layoutHelper
            },
            function(out) {
              out.w('My Page');
            });

          out.w('\n\t');
          __tag(out,
            ______node_modules_marko_node_modules_marko_layout_put_tag_js,
            {
              "into": "body",
              "layout": __layoutHelper
            },
            function(out) {
              out.w('\n\n\t\tHello ' +
                escapeXml(data.name) +
                '!\n\n\t\t');

              if (notEmpty(data.colors)) {
                out.w('<ul>\n\t\t\t');

                forEach(data.colors, function(color) {
                  out.w('<li style="color: ' +
                    escapeXmlAttr(color) +
                    '">\n\t\t\t\t' +
                    escapeXml(color) +
                    '\n\t\t\t</li>');
                });

                out.w('\n\t\t</ul>');
              }
              else {
                out.w('<div>\n\t\t\tNo colors!\n\t\t</div>');
              }

              out.w('\n\n\t\t');
              __tag(out,
                ___components_my_hello_renderer_js,
                {
                  "name": "World"
                });

              out.w('\n\n\t');
            });

          out.w('\n\n');
        },
        "*": {
          "showHeader": true
        }
      });
  };
}
(module.exports = require("marko").c(__filename)).c(create);