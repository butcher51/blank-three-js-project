import { Mesh, MeshBasicMaterial, PlaneBufferGeometry, Object3D } from 'three';
import { width } from '../constants';

class Cow extends Object3D {

  public position: any;
  constructor(x: number, y: number) {
    super();

    const mesh = new Mesh(
      new PlaneBufferGeometry(2,2),
      new MeshBasicMaterial({ color: 0xffffff })
    );

    this.position.y = Math.floor(-y * 0.5) + width/2;
    this.position.x = Math.floor(x * 0.5) + width/2;
    this.position.z = 0;
    
    mesh.position.z = 0;

    super.add(mesh);
  }

  public animate(): void {

    this.position.x += 0.1;

  }

}

export default Cow;
