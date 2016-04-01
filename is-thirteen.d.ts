declare function is(value: any): IsThirteen.ICore;
declare namespace IsThirteen {
	interface ICore {
		thirteen(): boolean;
		roughly: IThirteen;
		returning: IThirteen;
		not: IThirteen;
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
		canSpell: IThirteen;
		anagramOf: IThirteen;
		backwards: IThirteen;
		base(raxid: number): IThirteen;
	}

	interface IThirteen {
		thirteen(): boolean;
	}

	interface IDivisible {
		by: IThirteen;
	}

	interface ISquare {
		of: IThirteen;
	}

	interface IGreater {
		than: IThirteen;
	}

	interface ILess {
		than: IThirteen;
	}

	interface IWithin {
		of: IThirteen;
	}
}

export = is;
