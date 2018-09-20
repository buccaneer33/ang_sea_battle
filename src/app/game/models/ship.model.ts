import Coordinates from './coordinates.model';

export class Ship {
    public  class: string;
    public health: number;
    public size: number;
    public deckPosition: Coordinates[];

    constructor(type: number) {
        this.class = mediumFieldShips[type];
        switch (this.class) {

            case 'fourdeck':
                this.health = 4;
                this.size = 4;
                break;
            case 'freedeck':
                this.health = 3;
                this.size = 3;
                break;
             case 'twodeck':
                this.health = 2;
                this.size = 2;
                break;
             case 'onedeck':
                this.health = 1;
                this.size = 1;
                break;
        }
    }

    getDamage () {
        if (this.health === 0) {
            // и удаляем корабль из эскадры
            return false;
        } else {
            // и выводим сообщение о повреждении корабля
            return true;
        }
    }
}
export enum mediumFieldShips {
    fourdeck = 1,
    freedeck = 2,
    twodeck = 3,
    onedeck = 4
}

