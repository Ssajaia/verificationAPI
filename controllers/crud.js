import pool from "../database/db.js";

export const READALLUSERS = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM userData");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
  }
};

export const READUSER = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * from userData WHERE userId=$1", [
      id,
    ]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

export const DELETEUSER = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await pool.query(
      "DELETE FROM userData WHERE userId=$1",
      [id]
    );
    res.json("User got Deleted!!");
  } catch (err) {
    console.error(err.message);
  }
};

export const CREATEUSER = async (req, res) => {
  try {
    const { name, Lname, age, password, email } = req.body;
    const CreatedUser = await pool.query(
      "INSERT INTO userData(name,Lname,age,password,email) VALUES ($1,$2,$3,$4,$5)",
      [name, Lname, age, password, email]
    );
    res.json("USER created successfully!!");
  } catch (err) {
    console.error(err.message);
  }
};

export const UPDATEUSER = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, Lname, age, password, email } = req.body;

    const updatedUser = await pool.query(
      "UPDATE userData SET name = $1, Lname = $2, age = $3, password = $4, email = $5 WHERE userId = $6 RETURNING *",
      [name, Lname, age, password, email, id]
    );
    res.json(updatedUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};
