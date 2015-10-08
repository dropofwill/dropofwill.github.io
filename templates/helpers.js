module.exports = function() {
  return ({
    'limit': limit,
    'to_json': to_json
  });
};

var limit = function (collection, limit, start) {
  return collection.slice(start, limit + 1);
};

var to_json = function (obj) {
  return JSON.stringify(obj, null, 4);
};
