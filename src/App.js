import React from "react";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <article>
          <h1>บัญชีรายรับ - รายจ่าย</h1>
          <p>บันทึกข้อมูลบัญชีในแต่ล่ะวัน</p>
          <ul>
            <li>ค่าเดินทาง <span>-200</span></li>
            <li>เงินเดือน <span>+20,000</span></li>
            <li>ค่าอาหาร <span>-500</span></li>
          </ul>
        </article>
      </React.Fragment>
    </div>
  );
}

export default App;
