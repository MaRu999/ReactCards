
export default class card {
    value: number;
    numberLiteral: string;
    suite: string;
    color: string;

    constructor(value: number, suiteString: string) {
        this.value = value;
        this.numberLiteral = card.getLiteral(value);
        this.suite = suiteString;
        if (this.suite === "♥" || this.suite === "♦") {
            this.color = "red";
        } else {
            this.color = "black";
        }
    }

    private static getLiteral(value: number): string {
        if (value >= 2 && value <= 10) {
            return value.toString();
        } else if (value === 11) {
            return "B";
        } else if (value === 12) {
            return "D";
        } else if (value === 13) {
            return "K";
        } else if (value === 14) {
            return "A";
        } else {
            throw new RangeError("Value is not in valid range (between 2 and 14)!");
        }
    }
}