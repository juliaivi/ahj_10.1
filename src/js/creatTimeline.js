import creatsDate from './creatDate';

export default function creatTimeline(text, latitude, longitude) {
  const timeline = document.querySelector('.timeline');
  const boxText = `
                    <div class="timeline__item">
                      <div class="timeline__item__data">${creatsDate()}</div>
                      <div class="timeline__item__content">${text}</div>
                      <div class="timeline__item__geo">
                          <span class="geo_data">[${latitude}, ${longitude}]</span>
                          <span class="geo_icon"> 
                              <img class="icon">
                          </span>
                    </div>
    `;

  timeline.insertAdjacentHTML('beforeend', boxText);
}
