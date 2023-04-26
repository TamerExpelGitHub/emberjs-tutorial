import Helper from '@ember/component/helper';

export default class currency extends Helper {
  compute(positional, hash = {}) {
    // helper's layout {{currency 25}}
    // {{currency <- name of this helper  25 <- the value (positional)  sign="$" <- the hash}}
    const [number] = positional;
    const { sign = '$' } = hash; // <- hard-coding '$'
    const dollars = Math.floor(number);
    let cents = Math.floor((number * 100) % 100);

    if (cents.toString().length === 1) {
      cents = '0' + cents;
    }

    return `${sign}${dollars}.${cents}`;
  }
}
