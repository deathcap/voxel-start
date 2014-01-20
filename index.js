module.exports = function(game, opts) {
  return new PlayButtonPlugin(game, opts);
};

function PlayButtonPlugin(game, opts) {
  this.icon = document.createElement('div');
  this.icon.textContent = '\u25ba';
  this.icon.setAttribute('id', 'playbutton');
  this.icon.setAttribute('style', [
      'font-size: 200pt;',
      'position: absolute;',
      'top: 40%;', // TODO: fix centering, not 50% since font is so big
      'left: 50%;',
      'pointer-events: none;', // click 'through' this element to activate game
      ].join('\n'));

  document.body.appendChild(this.icon);

  this.enable();
};

PlayButtonPlugin.prototype.enable = function() {
  this.icon.style.visibility = '';
};

PlayButtonPlugin.prototype.disable = function() {
  this.icon.style.visibility = 'hidden'
};
