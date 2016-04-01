declare function is(value: any): IsThirteen.ICore;
declare module IsThirteen {
	interface ICore {
		thirteen(): boolean;
		roughly: IRoughly;
		returning: IReturning;
		not: INot;
		divisible: IDivisible;
		square: ISquare;
		greater: IGreater;
		less: ILess;
		within(value: number): IWithin;
		yearOfBirth(): boolean;
		plus(value: number): ICore;
		minus(value: number): ICore;
		times(value: number): ICore;
		dividedby(value: number): ICore;
		canSpell: ICanSpell;
		anagramOf: IAnagramOf;
		backwards: IBackwards;
		base(raxid: number): IBase;
	}

	interface IRoughly {
		thirteen(): boolean;
	}

	interface IReturning {
		thirteen(): boolean;
	}

	interface INot {
		thirteen(): boolean;
	}

	interface IDivisible {
		by: IDivisibleBy;
	}
	interface IDivisibleBy {
		thirteen(): boolean;
	}

	interface ISquare {
		of: ISquareOf;
	}
	interface ISquareOf {
		thirteen(): boolean;
	}

	interface IGreater {
		than: IGreaterThan;
	}
	interface IGreaterThan {
		thirteen(): boolean;
	}

	interface ILess {
		than: ILessThan;
	}
	interface ILessThan {
		thirteen(): boolean;
	}

	interface IWithin {
		of: IWithinOf;
	}
	interface IWithinOf {
		thirteen(): boolean;
	}

	interface ICanSpell {
		thirteen(): boolean;
	}

	interface IAnagramOf {
		thirteen(): boolean;
	}

	interface IBackwards {
		thirteen(): boolean;
	}

	interface IBase {
		thirteen(): boolean;
	}
}

export = is;
