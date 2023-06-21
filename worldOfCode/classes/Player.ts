export default class Player {
    private _life: number;
    private _strength: number;
    private _experience: number;
    private _level: number;
    private _name: string;
    private _initialLife: number;

    constructor(name: string, life: number, strength: number) {
        this._name = name;
        this._life = life;
        this._initialLife = life;
        this._strength = strength;
        this._experience = 0;
        this._level = 1;
    }

    attack(player: Player) {
        let damage = this._strength + Math.floor(Math.random() * 11);
        player.takeDamage(damage);
        if (player.isDead()) {
            this._experience += 80;
            if (this._experience >= 100) {
                this.levelUp();
            }
        }
    }

    takeDamage(damage: number) {
        this._life -= damage;
    }

    heal() {
        let recovery = 5 + Math.floor(Math.random() * 11);
        this._life = Math.min(this._initialLife, this._life + recovery);
    }

    isDead(): boolean {
        return this._life <= 0;
    }

    levelUp() {
        this._level++;
        this._experience = this._experience - 100;
    }

    status() {
       return(`Name: ${this._name}\nLife: ${this._life}\nStrength: ${this._strength}\nExperience: ${this._experience}\nLevel: ${this._level}`);
    }
}