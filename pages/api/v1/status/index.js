import database from "../../../../infra/database";

async function status(req, res) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  res.status(200).json({
    Status_da_API: "200",
  });
}

export default status;
