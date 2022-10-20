import Head from "next/head";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home({}) {
  const [grossIncome, setGrossIncome] = useState(0);
  const [taxes, setTaxes] = useState(0);

  useEffect(() => {
    if (grossIncome <= 1200000) {
      setTaxes(0);
    } else if (grossIncome > 1200000 && grossIncome <= 1500000) {
      setTaxes((grossIncome - 100000) * 0.6);
    } else if (grossIncome > 1500000 && grossIncome <= 3000000) {
      setTaxes((grossIncome - 100000) * 0.12);
    }
    else{
      setTaxes((grossIncome - 100000) * 0.18);
    }
  }, [grossIncome]);

  const handleIncome = (e: ChangeEvent<HTMLInputElement>) => {
    setGrossIncome(Number(e.target.value));
  };

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
          <form>
            <div className="form-group">
              <label htmlFor="income">Monthly Income</label>
              <input
                type="number"
                defaultValue={50000}
                onChange={handleIncome}
                className="form-control"
                id="income"
              />
            </div>
            <div className="form-group">
              <label htmlFor="income-type">Income Type</label>
              <select
                id="income-type"
                className="form-control"
                title="Income Type"
              >
                <option value="annual">Annual</option>
                <option value="monthly" disabled>Monthly</option>
              </select>
            </div>
          </form>
        </div>
        <div className="mt-5 row">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Taxes to be paid</th>
                <td>LKR {taxes}</td>
              </tr>
              <tr>
                <th>Income after taxes</th>
                <td>LKR {grossIncome-taxes}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
