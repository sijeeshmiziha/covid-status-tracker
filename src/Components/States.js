import React from "react";
import "./state.css";

import { useState, useEffect } from "react";
function States() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://data.covid19india.org/state_district_wise.json")
      .then((response) => response.json())
      .then((datas) => setData(datas));
  }, []);
  //console.log(data);

  let keys = Object.keys(data);
  keys.shift();

  return (
    <div className="row">
      <div className="col-md-12">
        {keys.map((value, index) => {
          let districts = data[value].districtData;
          let districtKeys = Object.keys(districts);
          //console.log(districts);
          //console.log(districtKeys);

         /* let totalActive = 0;
          let totalConfirmed = 0;
          let totalDeaths = 0;
          let totalRecover = 0;

          let district_list = [];
          for (let x in districts) {
            totalActive += districts[x].active;
            totalConfirmed += districts[x].confirmed;
            totalDeaths += districts[x].deceased;
            totalRecover += districts[x].recovered;
            let ob = districts[x];
            ob["district_name"] = districts[x];
            district_list.push(ob);
          }
          //console.log(district_list);
          //console.log(district_list.totalActive);
          district_list.map((it, k) => {
            console.log(district_list.active);
            return <h1>kooi</h1>;
          }); */

          return (
            <details key={index}>
              <summary>
                <strong>{value}</strong>
              </summary>
              <div className="content">
                <table>
                  <thead>
                    <tr>
                      <th>Districts</th>
                      <th>Confirmed</th>
                      <th>Active</th>
                      <th>Recovered</th>
                      <th>Deaths</th>
                    </tr>
                  </thead>
                  <tbody>
                    {districtKeys.map((itm, ky) => {
                      // console.log(itm);
                      return (
                        <tr key={ky}>
                          <td>{itm}</td>
                          <td>NA</td>
                          <td>NA</td>
                          <td>NA</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}

export default States;
