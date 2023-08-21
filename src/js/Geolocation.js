import LocationDefine from './LocationDefine';
import creatTimeline from './creatTimeline';

export default class Geolocation {
  constructor() {
    this.container = document.querySelector('.container');
    this.form = this.container.querySelector('.form');
    this.formInput = this.form.querySelector('.form__input');
    this.popup = document.querySelector('.popup');
  }

  init() {
    this.locationDefine = new LocationDefine();
    this.form.addEventListener('submit', (e) => this.onSubmit(e));
  }

  onSubmit(e) {
    e.preventDefault();
    const inputValue = this.formInput.value.trim();
    if (inputValue) {
      this.locationDefine.locate();
      if (this.locationDefine.latitude && this.locationDefine.longitude) {
        creatTimeline(inputValue, this.locationDefine.latitude, this.locationDefine.longitude);
        this.formInput.value = '';
      } else if (this.popup.classList.contains('d__none') && this.locationDefine.geo) {
        this.popup.classList.remove('d__none');
      }
    }
  }
}
