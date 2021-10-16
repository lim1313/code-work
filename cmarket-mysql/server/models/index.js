const db = require('../db');

module.exports = {
  items: {
    get: (callback) => {
      // TODO: Cmarket의 모든 상품을 가져오는 함수를 작성하세요
      const queryString = `SELECT * FROM items`;

      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
  },
  orders: {
    get: (userId, callback) => {
      // TODO: 해당 유저가 작성한 모든 주문을 가져오는 함수를 작성하세요

      let sql = `SELECT orders.id, image, name, order_quantity, price, total_price FROM orders
                      left JOIN order_items as ori ON ori.order_id=orders.id
                      left JOIN items ON ori.item_id=items.id
                      WHERE orders.user_id = ${userId}
                      `;
      // left JOIN users ON orders.user_id=users.id

      db.query(sql, (err, result) => {
        callback(err, result);
      });
    },

    post: (userId, orders, totalPrice, callback) => {
      db.beginTransaction((err) => {
        if (err) return callback(err, result);
        let sql = `INSERT INTO orders VALUES (default, ${userId}, ${totalPrice}, default)`;

        db.query(sql, (err, result) => {
          if (err) {
            db.rollback();
            return callback(err, result);
          }

          let insertId = result.insertId;
          let sql2 = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?`;

          let orderArr = orders.map((v) => {
            return [insertId, v.itemId, v.quantity];
          });

          db.query(sql2, [orderArr], (err, result) => {
            if (err) {
              db.rollback();
              return callback(err, result);
            }
            db.commit();
            return callback(err, result);
          });
        });
      });
    },

    //!------
    //! 결론
    // ? 1. js 에러 발생시 서버 down
    // ? 2. 뒤의 코드는 더이상 실행 X
    // ? 결론 // 에러처리를 잘하자!
    //!------
  },
};

//! Transaction 처리 X//
//  post: (userId, orders, totalPrice, callback) => {
//       let sql = `INSERT INTO orders VALUES (default, ${userId}, ${totalPrice}, default)`;

//       db.query(sql, (err, result) => {
//         let insertId = result.insertId;
//         let sql2 = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?`;

//         let orderArr = orders.map((v) => {
//           return [insertId, v.itemId, v.quantity];
//         });

//         db.query(sql2, [orderArr], (err, result) => {
//           callback(err, result);
//         });
//       });
//     },

//! Transaction !//
//  post: (userId, orders, totalPrice, callback) => {
//       db.beginTransaction((err) => {
//         if (err) return callback(err, result);
//         let sql = `INSERT INTO orders VALUES (default, ${userId}, ${totalPrice}, default)`;

//         db.query(sql, (err, result) => {
//           if (err) {
//             db.rollback();
//             return callback(err, result);
//           }

//           let insertId = result.insertId;
//           let sql2 = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?`;

//           let orderArr = orders.map((v) => {
//             return [insertId, v.itemId, v.quantity];
//           });

//           db.query(sql2, [orderArr], (err, result) => {
//             if (err) {
//               db.rollback();
//               return callback(err, result);
//             }
//             db.commit();
//             return callback(err, result);
//           });
//         });
//       });
//     },
