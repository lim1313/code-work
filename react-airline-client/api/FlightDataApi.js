import flightList from '../resource/flightList';
import fetch from 'node-fetch';
import { useEffect } from 'react';

if (typeof window !== 'undefined') {
  localStorage.setItem('flight', JSON.stringify(flightList));
}

export function getFlight(filterBy = {}) {
  // HINT: 가장 마지막 테스트를 통과하기 위해, fetch를 이용합니다. 아래 구현은 완전히 삭제되어도 상관없습니다.
  // TODO: 아래 구현을 REST API 호출로 대체하세요.
  let depart = filterBy.departure;
  let dest = filterBy.destination;
  let param = '';

  if (dest === undefined) {
    param = `departure=${depart}`;
  } else {
    param = `departure=${depart}&destination=${dest}`;
  }

  return fetch(
    `http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight?${param}`
  )
    .then((res) => {
      return res.json();
    })
    .then((datas) => {
      // let filtered = datas.filter((flight) => {
      //   let condition = true;
      //   if (filterBy.departure) {
      //     condition = condition && flight.departure === filterBy.departure;
      //   }
      //   if (filterBy.destination) {
      //     condition = condition && flight.destination === filterBy.destination;
      //   }
      //   return condition;
      // });

      return datas;
    });
}
