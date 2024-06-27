import {PlaneBufferGeometry} from 'three';
import { height, width } from '../constants';

const tileGeometry = new PlaneBufferGeometry(width, height);

export default tileGeometry;