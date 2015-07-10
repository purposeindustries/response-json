'use strict';
module.exports = function (xhr) {
  if (!xhr) {
    return null;
  }
  if (xhr.responseJSON) {
    return xhr.responseJSON;
  }
  try {
    return JSON.parse(xhr.responseText);
  } catch (x) {
    return null;
  }
};
