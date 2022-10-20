import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import DataTable from "react-data-table-component";

export default function Home({}) {
  const calculate = () => {};
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>PAYE Calculator</title>
        <meta name="description" content="Sri Lanka Tax Calculator" />
        <meta
          name="keywords"
          content="PAYE, Sri Lanka, Taxes, Taxation, Sri, Lanka, Tax, Sri Lankan Tax, Sri Lankan Taxes"
        />
        <meta name="author" content="Muiz Uvais" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="row">
          <h1>PAYE Calculator</h1>
        </div>
        <div className="row">
          <form onSubmit={calculate}>
            <div className="form-group">
              <label htmlFor="income">Monthly Income</label>
              <input type="number" className="form-control" id="income" />
            </div>
            <div className="form-group">
              <label htmlFor="income-type">Income Type</label>
              <select
                id="income-type"
                className="form-control"
                title="Income Type"
              >
                <option value="annual">Annual</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </form>
        </div>
        <div className="mt-5 row">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Taxes to be paid</th>
                <td>LKR 100,000</td>
              </tr>
              <tr>
                <th>Income after taxes</th>
                <td>LKR 10,000,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
