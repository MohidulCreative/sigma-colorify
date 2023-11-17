export class Log {
  static success(msg: string) {
    console.log(`%c ${msg}`, "color: green");
  }

  static danger(msg: string) {
    console.log(`%c ${msg}`, "color: yellow");
  }

  static info(msg: string) {
    console.log(`%c ${msg}`, "color: white; background: red");
  }
}
