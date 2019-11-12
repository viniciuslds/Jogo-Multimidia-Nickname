var nicknameScene = new Phaser.Scene('nickname');

nicknameScene.init = function () {
};

nicknameScene.preload = function () {
    this.load.html('nameform', 'assets/html/nameform.html');
};

nicknameScene.create = function () {

    var element = this.add.dom(400, 0).createFromCache('nameform');
    element.addListener('click');
    element.on('click', function (event) {
        if (event.target.name === 'playButton'){
            var valorentrada = this.getChildByName('valor');
            nick=valorentrada.value;
            if (valorentrada.value !== ''){
        //  Desativar os eventos de clique
                this.removeListener('click');
        //  Ocultar o elemento de login
                this.setVisible(false);
                iniciar = true;
            }else{
                // Pisca o prompt
                this.scene.tweens.add({
                targets: text,
                alpha: 0.2,
                duration: 250,
                ease: 'Power3',
                yoyo: true
                });
            }
        }
    });

    this.tweens.add({
        targets: element,
        y: 300,
        duration: 0,
        ease: 'Power3'
        });
};
function rank_jogador(){
    // pega valores do localStorage e armazena em variavel rank
    var rank = [];
    if(localStorage.length>0){
        rank.push(localStorage.getItem("lives")) }
};
nicknameScene.update = function () {
    if (this.spacebar.isDown) {
        this.bgWinSong.pause()
        this.time.delayedCall(250, function () {
            this.cameras.main.fade(250);
        }, [], this);
        this.scene.start('map1');
    }
};
