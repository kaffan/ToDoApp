//jshint: esversion6

module.exports.getDate = function()
{
  var today = new Date()
  options = {
    weekday:"long",
    day:"numeric",
    month:"long",
  }
  return today.toLocaleDateString("en-US",options)
}
module.exports.getDay = function()
{
  var today = new Date()
  options = {
    day:"numeric"
  }
  return today.toLocaleDateString("en-US",options)
}
