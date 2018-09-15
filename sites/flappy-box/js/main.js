'use strict';

const mainState = {
    preload: function() {
        game.load.image('bird', 'assets/images/bird.png');
        game.load.image('pipe', 'assets/images/pipe.png');
        game.load.audio('jump', 'assets/jump.wav');
    },

    create: function() {
        game.stage.backgroundColor = '#71c5cf';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.bird = game.add.sprite(100, 245, 'bird');
        this.bird.scale.setTo(.7, .7);
        this.pipes = game.add.group();
        game.physics.arcade.enable(this.bird);
        this.bird.body.gravity.y = 1000;

        const spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);
        game.input.onTap.add(this.jump, this);

        this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
        this.score = 0;
        this.labelScore = game.add.text(20, 20, "0", {
            font: "30px Arial", fill: "#ffffff"
        });

        // Move the anchor to the lest and downward
        this.bird.anchor.setTo(-.2, .5);

        this.jumpSound = game.add.audio('jump');
        this.game.canvas.id = 'myCanvas';
    },

    update: function() {
        if (this.bird.y < 0 || this.bird.y > 490) {
            this.restartGame();
        }
        game.physics.arcade.overlap(this.bird, this.pipes, this.hitPipe, null, this);
        if (this.bird.angle < 20)
            this.bird.angle += 1;
    },

    jump: function() {
        if (this.bird.alive === false)
            return;

        this.bird.body.velocity.y = - 350;
        this.jumpSound.play();

        // Create an animation on the bird
        const animation = game.add.tween(this.bird);

        // Change the angle of the bird to -20 degree in 100 millisecond
        animation.to({angle: -20}, 100);

        // And start the animation
        animation.start();
    },

    hitPipe: function() {
        if (this.bird.alive === false) {
            return;
        }

        this.bird.alive = false;

        game.time.events.remove(this.timer);

        this.pipes.forEach(function(pipe) {
            pipe.body.velocity.x = 0;
        }, this);

    },

    restartGame: function() {
        alert('Score: ' + this.score + '\nTry again!');
        game.state.start('main');
    },

    addOnePipe: function(x, y) {
        const pipe = game.add.sprite(x, y, 'pipe');
        this.pipes.add(pipe);
        game.physics.arcade.enable(pipe);
        pipe.body.velocity.x = -200;
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },

    addRowOfPipes: function() {
        // Randomely pick a number between 1 and 5
        // This will be the hole position
        const hole = Math.floor(Math.random() * 5) + 1;

        // Add the 6 pipes
        // With one big hole at position 'hole' and 'hole + 1';
        for (let i = 0; i < 8; i++) {
            if (i !== hole && i !== hole + 1)
                this.addOnePipe(400, i * 60 + 10)
        }

        this.score += 1;
        this.labelScore.text = this.score;
    }
};

const game = new Phaser.Game(400, 490);

game.state.add('main', mainState);

game.state.start('main');