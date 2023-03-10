var InfiniteScroller = InfiniteScroller || {};

//loading the game assets
InfiniteScroller.Preload = function(){};

InfiniteScroller.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(3);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.spritesheet('dog', 'assets/images/gato.png', 80,108, 8);
    this.load.spritesheet('playerScratch', 'assets/images/dog_scratch.png', 120, 108, 10);
    this.load.spritesheet('playerDig', 'assets/images/dog_dig.png', 116, 108, 8);
    this.load.image('ground', 'assets/images/ground.jpg');
    this.load.image('pared', 'assets/images/pared.png');
    this.load.image('grass', 'assets/images/grass.png');
    this.load.image('preloadbar2', 'assets/images/preloader-bar.jpg');

    this.load.audio('whine', ['assets/audio/whine.ogg', 'assets/audio/whine.mp3']);
    this.load.audio('bark', ['assets/audio/bark.ogg', 'assets/audio/bark.mp3']);

    
    //from http://www.gamedevacademy.org/html5-phaser-tutorial-spacehipster-a-space-exploration-game/
    this.load.image('mound', 'assets/images/rock.png');
    
    //Adapted from https://openclipart.org/detail/6570/flea:
    this.load.image('flea', 'assets/images/caja.png');
    
    //https://openclipart.org/detail/188266/bone:
    this.load.image('bone', 'assets/images/toys/bone.png');
    
    //https://openclipart.org/detail/139615/tennis-ball:
    this.load.image('ball', 'assets/images/toys/tennisball.png');
  },
  create: function() {
    this.state.start('Game');
  }
};