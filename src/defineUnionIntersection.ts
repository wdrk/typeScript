// union 선언
let y: string | number;

// intersection 선언
interface Cat { leg: number; };
interface Bird { wing: number;};
let birdCat: Cat & Bird = {leg: 4, wing: 2 };