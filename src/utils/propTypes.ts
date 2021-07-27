import VueTypes, { toValidableType } from 'vue-types'

export default class PropTypes extends VueTypes {
  static get date() {
    return toValidableType<Date>('date', {
      type: Date,
      validator(value: any) {
        return (
          Object.prototype.toString.call(value) === '[object Date]' &&
          isFinite(value)
        )
      }
    })
  }
}
