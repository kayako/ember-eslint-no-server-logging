"use strict";

module.exports = function(context) {

  return {
    "AssignmentExpression": function(node) {
      var left = node.left;
      var right = node.right;

      if (left.object && left.object.name === "server" && left.property && left.property.name === "logging" && right.value === true)  {
        context.report(node, "Unexpected server.logging = true");
      }
    }
  };
};

module.exports.schema = [];
