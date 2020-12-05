module.exports = function follow(api, rootPath, relArray) {
  const root = api({ method: "GET", url: rootPath });

  return relArray.reduce((root, arrayItem) => {
    const rel = typeof arrayItem === "string" ? arrayItem : arrayItem.rel;
    return traverseNext(root, rel, arrayItem);
  }, root);

  function traverseNext(root, rel, arrayItem) {
    return root.then((response) => {
      if (hasEmbeddedRel(response.data, rel)) {
        return response.data._embedded[rel];
      }
      if (!response.data._links) {
        return [];
      }
      if (typeof arrayItem === "string") {
        return api({
          method: "GET",
          url: getUrl(response.data._links[rel].href),
        });
      } else {
        return api({
          method: "GET",
          url: getUrl(response.data._links[rel].href),
          params: arrayItem.params,
        });
      }
    });
  }

  function hasEmbeddedRel(data, rel) {
    return data._embedded && data._embedded.hasOwnProperty(rel);
  }
  function getUrl(href) {
    let urlRegex = /(http:\/\/localhost(:\d+)?)(\/.*)/;
    let path = href.replace(urlRegex, "$3");

    let wrongPathTemplate = /(\/.*)({\?.*})/;
    let wrongRegex = new RegExp(wrongPathTemplate);
    if (wrongRegex.test(path)) {
      path = path.replace(wrongPathTemplate, "$1");
    }
    return path;
  }
};
