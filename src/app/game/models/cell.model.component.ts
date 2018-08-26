import Coordinates from './coordinates.model.component';

class Cell {
    public state = 0;
    public isShip = false;
    public isAroundShip = false;
    public position: Coordinates;

    constructor (coordinates: Coordinates) {
        this.position = coordinates;
    }
}

export default Cell;
