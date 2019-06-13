import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "numSuffix",
  pure: true,
})
export class NumSuffixPipe implements PipeTransform {

  public transform(value: number, ...args: any[]): any {
    let suffix = "";

    const tensDigit = Math.floor(value % 10);

    switch (tensDigit) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        suffix = "th";
    }

    return value + suffix;
  }

}
