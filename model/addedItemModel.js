export class AddedItemModel {

    constructor(code, name, price, qty, total) {
        this._code = code;
        this._name = name;
        this._price = price;
        this._qty = qty;
        this.total = total;
    }

}