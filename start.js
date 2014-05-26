module.exports = function(game, opts) {
  return new StartPlugin(game, opts);
};

function StartPlugin(game, opts) {
  if (!game.isClient) return;

  this.game = game;

  this.icon = document.createElement('div');
  this.icon.textContent = '\u25ba'; // U+25BA BLACK RIGHT-POINTING POINTER
  this.icon.setAttribute('id', 'playbutton');
  this.icon.setAttribute('style', [
      'font-size: 200pt;',
      'position: absolute;',
      'top: 40%;', // TODO: fix centering, not 50% since font is so big
      'text-align: center;',
      'width: 100%;',
      'pointer-events: none;', // click 'through' this element to activate game
      ].join('\n'));

  document.body.appendChild(this.icon);

  this.enable();
};

StartPlugin.prototype.enable = function() {
  var self = this;

  this.game.interact.once('attain', function() {
    if (self.game.plugins)
      self.game.plugins.disable('voxel-start');
    else
      self.disable();
  });
};

StartPlugin.prototype.disable = function() {
  this.icon.parentElement.removeChild(this.icon);
  delete self.icon;
};
