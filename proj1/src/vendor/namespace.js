/*global _, window */

function Namespace(path) {
  if (_.isUndefined(path) || path===null || _.isEmpty(path)) { return;}

  var parent= window;
  _.each(path.split('.'), function(part) {
    part= part.trim();
    parent[part]= parent[part] || {};
    parent= parent[part];
  });

}
