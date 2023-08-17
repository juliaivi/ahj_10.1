import dataPopup from './dataPopup';
import checkValue from './checkValue';
import creatTimeline from './creatTimeline';

export default class LocationDefine {
  constructor() {
    this.latitude = undefined;
    this.longitude = undefined;
    this.formInputValue = null;
    this.popup = document.querySelector('.popup');
    this.popupInput = document.querySelector('.popup__input');
    this.popupTitle = document.querySelector('.popup__title');
    this.popupDiscrition = document.querySelector('.popup__discrition');
    this.popupBtns = document.querySelector('.popup__btns');
    this.formInput = document.querySelector('.form__input');
  }

  locate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((data) => {
        this.latitude = data.coords.latitude;
        this.longitude = data.coords.longitude;
      }, (err) => {
        if (this.popup.classList.contains('d__none')) {
          this.popup.classList.remove('d__none');
        }
        this.popupBtns.addEventListener('click', (e) => this.onClick(e));
        console.log(err);
      });
    }
  }

  onClick(e) {
    e.preventDefault();
    this.formInputValue = this.formInput.value.trim();
    const inputValue = this.popupInput.value;
    const checkInputValue = checkValue(inputValue);
    if (e.target.classList.contains('btn__ok')) {
      this.checkOk(checkInputValue);
    }

    if (e.target.classList.contains('btn__cansel')) {
      this.popup.classList.add('d__none');
      this.popupTitle.textContent = dataPopup.errorCoords.text;
      this.popupDiscrition.textContent = dataPopup.errorCoords.discrition;
    }

    this.popupInput.value = '';
  }

  getCoords(value) {
    const arr = value
      .replace(/^\[/, '')
      .replace(/\]$/, '')
      .split(',');
    this.latitude = arr[0];
    this.longitude = arr[1];
  }

  checkOk(value) {
    if (value) {
      this.getCoords(this.popupInput.value);
      this.popup.classList.add('d__none');
      if (this.formInputValue) {
        creatTimeline(this.formInputValue, this.latitude, this.longitude);
        this.formInput.value = '';
      }
    } else {
      this.popupTitle.textContent = dataPopup.error.text;
      this.popupDiscrition.textContent = dataPopup.error.discrition;
    }
  }
}