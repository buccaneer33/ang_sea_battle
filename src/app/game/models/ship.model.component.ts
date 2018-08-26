/* описание кораблей */

export class Ship {
    class: string;
    health: number;
    size: number;

    constructor(type: number) {
        this.class = shipTypes[type];
        switch (this.class) {
            case 'fivedeck':
                this.health = 5;
                this.size = 5;
            break;
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

    getFired () {
        if (this.health === 0) {
            // удаляем корабль из эскадры
            // выводим сообщение о потере корабля
        } else {
            // выводим сообщение о повреждении корабля
        }
    }
}
enum shipTypes {
}
enum bigFieldShipTypes {
    fivedeck = 1,
    fourdeck = 2,
    freedeck = 3,
    twodeck = 4,
    onedeck = 5
}

enum middleFieldShipTypes {
    fourdeck = 1,
    freedeck = 2,
    twodeck = 3,
    onedeck = 4
}

enum smallFieldShipTypes {
    freedeck = 1,
    twodeck = 2,
    onedeck = 3
}


