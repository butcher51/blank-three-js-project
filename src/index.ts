import { Color, OrthographicCamera, Scene, WebGLRenderer } from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import Cow from './objects/cow';
import './style.css';
import getCameraSize from './utils/getCameraSize';


class Game {

  public static scene = Scene;
  public static camera: OrthographicCamera;
  public static instance: Game;

  private static stats: Stats;

  private cameraSize;
  private cameraFactor: number;
  private renderer: any;
  lastFrameTime: number;
  static delta: number;

  constructor() {
    this.resize = this.resize.bind(this);
    this.initWorld = this.initWorld.bind(this);
    Game.instance = this;
  }

  public async init() {
    this.cameraSize = getCameraSize();
    this.cameraFactor = 2;

    // create the scene
    Game.scene = new Scene();
    Game.scene.background = new Color(0x151515);
    const camera = new OrthographicCamera(
      this.cameraSize.width / -this.cameraFactor,
      this.cameraSize.width / this.cameraFactor,
      this.cameraSize.height / this.cameraFactor,
      this.cameraSize.height / -this.cameraFactor,
      -10,
      10
    );

    Game.camera = camera;

    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      stencil: true,
      premultipliedAlpha: true
    });

    this.renderer = renderer;
    this.resize();

    document.body.appendChild(renderer.domElement);

    // stats    
    Game.stats = new Stats();
    Game.stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom    
    Game.stats.dom.style.cssText = 'position:absolute;bottom:0px;left:0;';
    document.body.appendChild(Game.stats.dom);

    this.handleWindowEvents();

    setTimeout(this.initWorld, 100);

    this.animate(0);

  }


  private async initWorld() {

    const cow = new Cow(1,1);
    Game.scene.add(cow);

  }

  private handleWindowEvents() {
    window.addEventListener('resize', () => {
      this.resize();
    });

  }

  /**
   * Called by matter.js Runner
   */
  private animate(e): void {
    Game.delta = new Date().getTime() - this.lastFrameTime;
    Game.stats.begin();
   requestAnimationFrame(this.animate.bind(this));

    this.render();

    Game.stats.end();
    this.lastFrameTime = new Date().getTime();
  }

  private render(): void {

    for (var i = Game.scene.children.length - 1; i >= 0; i--) {
      const obj = Game.scene.children[i];
      if (obj.animate) {
        obj.animate();
      }
    }

    this.renderer.render(Game.scene, Game.camera);
  }

  private resize = function () {
    this.cameraSize = getCameraSize();
    this.cameraFactor = 2;
    this.renderer.setSize(this.cameraSize.width, this.cameraSize.height);
    Game.camera.left = -this.cameraSize.width / this.cameraFactor;
    Game.camera.right = this.cameraSize.width / this.cameraFactor;
    Game.camera.top = this.cameraSize.height / this.cameraFactor;
    Game.camera.bottom = -this.cameraSize.height / this.cameraFactor;
    Game.camera.aspect = this.cameraSize.width / this.cameraSize.height;
    Game.camera.updateProjectionMatrix();

  };

}

const game = new Game();
game.init();

global['game'] = game;

export default Game;