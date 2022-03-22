let a: number = 1
let b = "ewe"
const note: [string, number, {}] = ["12", 12, { a: 123, b: 345 }]


function sayHello(message: string): void {
	console.log(message)

}

sayHello("Hello")

const throwError = (message: string) => {
	throw new Error(message)
}
throwError("Hello")

type Login = string

const login: Login = "admin"

// ==========================

interface Rect {
	readonly id?: number
	color?: string
	size: {
		width: number
		height: number
	}

}
const rect: Rect = {
	id: 12,
	size: {
		width: 12,
		height: 12,

	}
}

rect.size.width = 10

//===============================
interface RectWithArea extends Rect {
	getArea: () => number
}

const rect1: RectWithArea = {
	id: 123,
	size: {
		width: 43,
		height: 56,
	},
	getArea(): number {
		return this.size.height + this.size.width
	}

}

type Type = Rect & { a: 3 }
type R = 3 | 4
function funct1<T extends string | number>(a: T): T {
	return a
}

interface Styles {
	[key: string]: string
}

const css: Styles = {
	border: ""
}

//==================================
enum Prod {
	Sim,
	Standart,
	NoStandart
}

interface Iv { x: number, z: number }
interface Iz { v: string }
type Vz = Iv | Iz;
const Primer: Vz = {
	z: 12,
	x: 12,
	v: "12",



}
let git1 = 12
