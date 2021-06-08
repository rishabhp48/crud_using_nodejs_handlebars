const connection = require("../conn");
const chalk = require("chalk");
const router = require("../routes/routes.user");
const { response } = require("../routes/routes.user");
exports.post_data = (req, res) => {
  const {
    order_id,
    client_name,
    client_io_number,
    order_name,
    start_delivery_date,
    end_delivery_date,
    qty,
    qa_approval_date,
  } = req.body;
  connection.query(
    "INSERT INTO order_list SET order_id=?,client_name=?,client_io_number=?,order_name=?,start_delivery_date=?,end_delivery_date=?,qty=?,qa_approval_date=?",
    [
      order_id,
      client_name,
      client_io_number,
      order_name,
      start_delivery_date,
      end_delivery_date,
      qty,
      qa_approval_date,
    ],
    (err, rows) => {
      if (!err) {
        console.log(rows);
        res.json(rows);
      } else {
        console.log(chalk.bgRedBright.black(err));
      }
    }
  );
};

exports.get_Data = (req, res) => {
  connection.query("Select * from order_list", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
};

//get a data by id

exports.get_data_by_id = (req, res) => {
  connection.query(
    "Select * from order_list where order_id = ?;",
    [req.params.id],
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    }
  );
};

//Update a data
exports.update_data = (req, res) => {
  // const { order_id } = req.params;
  // const {
  //   client_name,
  //   client_io_number,
  //   order_name,
  //   start_delivery_date,
  //   end_delivery_date,
  //   qty,
  //   qa_approval_date,
  // } = req.body;

  // connection.query(
  //   "UPDATE order_list SET client_name = ?, client_io_number = ?,order_name= ?,start_delivery_date=?,end_delivery_date=?,qty=?,qa_approval_date=? WHERE order_id =?",
  //   [
  //     order_id,
  //     client_name,
  //     client_io_number,
  //     order_name,
  //     start_delivery_date,
  //     end_delivery_date,
  //     qty,
  //     qa_approval_date,
  //   ],
  //
  const update = req.body;
  const params = req.params;
  connection.query(
    "UPDATE order_list SET order_id=?,client_name = ?, client_io_number = ?,order_name= ?,start_delivery_date=?,end_delivery_date=?,qty=?,qa_approval_date=? WHERE order_id =?",
    [
      update.order_id,
      update.client_name,
      update.client_io_number,
      update.order_name,
      update.start_delivery_date,
      update.end_delivery_date,
      update.qty,
      update.qa_approval_date,
      params.id,
    ],
    // connection.query(
    //   "UPDATE order_list SET client_name = 'Mohan', client_io_number = 4234234,order_name= 'ffsasf',start_delivery_date=01-01-2012,end_delivery_date=01-01-2012,qty=42,qa_approval_date=01-01-2012 WHERE order_id =123456",
    //   [
    //     update.order_id,
    //     update.client_name,
    //     update.client_io_number,
    //     update.order_name,
    //     update.start_delivery_date,
    //     update.end_delivery_date,
    //     update.qty,
    //     update.qa_approval_date,
    //   ],
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Updated");
        console.log(data);
      }
    }
  );
};

//delete the records
exports.delete_data_by_id = (req, res) => {
  connection.query(
    "Delete from order_list where order_id = ?",
    [req.params.id],
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ message: "Successfullly delete" });
      }
    }
  );
};
