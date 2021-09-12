let flights = require('../repository/flightList');
// 항공편 예약 데이터를 저장합니다.
let booking = [];

module.exports = {
  // [GET] /book 요청을 수행합니다.
  // 전체 데이터 혹은 요청 된 flight_uuid, phone 값과 동일한 예약 데이터를 조회합니다.
  findById: async (req, res) => {
    let keys = Object.keys(req.query);

    const list = booking.filter((item) => {
      return req.query[keys[0]] === item[keys[0]];
    });

    filterBook = [...list];

    if (keys[0] === 'phone') {
      return res.status(200).json(filterBook[0]);
    }
    return res.status(200).json(filterBook);
  },

  // [POST] /book 요청을 수행합니다.
  // 요청 된 예약 데이터를 저장합니다.
  create: async (req, res) => {
    //TODO:
    booking.push({
      flight_uuid: req.body.flight_uuid,
      name: req.body.name,
      phone: req.body.phone,
    });

    console.log(booking);
    // booking.push(req.body)

    return res.status(201).json({ message: 'Create success!' });
  },

  // [DELETE] /book?phone={phone} 요청을 수행합니다.
  // 요청 된 phone 값과 동일한 예약 데이터를 삭제합니다.
  deleteById: async (req, res) => {
    //TODO:
    let keys = Object.keys(req.query);

    booking = booking.filter((item) => {
      return req.query[keys[0]] !== item[keys[0]];
    });

    return res.status(200).json(booking);
  },
};
