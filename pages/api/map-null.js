const mssql = require("mssql");
const dbserver = require("../../dbConfig.js");

const projectInfo = (req, res) => {
  const { method, body } = req;
  return new Promise(resolve => {
    switch (method) {
      case "GET":
        mssql.connect(dbserver.dbConfig, err => {
          if (err) {
            console.error(err);
            return resolve();
          }
          const request = new mssql.Request();
          const employeeID = req.query.EmployeeID;
          const selectedDate = req.query.selectedDate;

          const query = `EXEC [Hammer].[dbo].[Map_AddressNullCheck]`;

          request.query(query, (err, recordset) => {
            if (err) {
              console.error(err);
              return resolve();
            }
            const response = recordset;
            res.status(200).json(response);
            return resolve();
          });
        });
        break;

      case "POST":
        mssql.connect(dbserver.dbConfig, err => {
          if (err) {
            console.error(err);
            return resolve();
          }
          const request = new mssql.Request();

          const query = `EXEC [Hammer].[dbo].[Map_UpdateAddressNull]
          ${req.query.recordID}, ${req.query.lat}, ${req.query.lng}, ${req.query.distance}`;

          request.query(query, (err, recordset) => {
            if (err) {
              console.error(err);
              return resolve();
            }
            const response = recordset;
            res.status(200).json(response);
            return resolve();
          });
        });
        break;

      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        res.status(404).end(`Failed`);
        resolve();
    }
  });
};

export default projectInfo;
