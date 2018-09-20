import Coordinates from './coordinates.model';

class Cell {
    public state = 0;
    public isShip = false;
    public isAroundShip = false;
    public position: Coordinates;
    public squadronOrder: undefined | Coordinates = undefined;

    constructor (coordinates: Coordinates) {
        this.position = coordinates;
    }
}

export default Cell;
