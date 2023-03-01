export const zoom = 2;
export const width = 16 * zoom;
export const height = 16 * zoom;


export const MATTER_MASK_WALL = 0x0001;
export const MATTER_MASK_PLAYER = 0x0002;
export const MATTER_MASK_BOMB = 0x0004;
export const MATTER_MASK_ENEMY = 0x0008;

export const TEXTURE_SIZE = 32;

export const TILED_OBJECT_RATIO = 4;
export const CURRENT_LEVEL_KEY = 'currentLevel';

export const LEVELS = [
    { name: 'First', url: 'assets/map01.json' },
    { name: 'Second', url: 'assets/map02.json' },
    { name: 'Third', url: 'assets/map03.json' },
    { name: 'Forth', url: 'assets/map04.json' },
];