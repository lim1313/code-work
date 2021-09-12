let flights = require('../repository/flightList');

module.exports = {
  // [GET] /flight
  // 요청 된 departure_times, arrival_times, destination, departure 값과 동일한 값을 가진 항공편 데이터를 조회합니다.
  findAll: async (req, res) => {
    if (Object.keys(req.query).length !== 0) {
      let keys = Object.keys(req.query);

      const list = flights.filter((item) => {
        let count = 0;
        for (let i = 0; i < keys.length; i++) {
          if (req.query[keys[i]] === item[keys[i]]) {
            count++;
          }
        }
        return count === keys.length;
      });
      return res.status(200).json(list);
    }
    return res.status(200).json(flights);
  },

  // [GET] /flight/{:id}
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 조회합니다.
  findById: async (req, res) => {
    let idx = req.params;
    let arr = flights.filter((v) => v.uuid === idx.id);

    return res.status(200).json(arr);
  },

  // [PUT] /flight/{:id} 요청을 수행합니다.
  // 요청 된 id 값과 동일한 uuid 값을 가진 항공편 데이터를 요청 된 Body 데이터로 수정합니다.
  update: async (req, res) => {
    let { ...update } = req.body;
    let data;

    data = flights.filter((v) => {
      return req.params.id === v.uuid;
    });

    data = Object.assign(data[0], update);
    return res.status(200).json(data);
  },
};

// let data;
// let key = Object.keys(req.body);

// if (req.params.id !== undefined) {
//   data = flights.filter((item) => {
//     return item.uuid.includes(req.params.id);
//   });

//   for (let i = 0; i < key.length; i++) {
//     data[key[i]] = req.body[key[i]];
//   }
// }
