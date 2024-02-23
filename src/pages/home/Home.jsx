
import "./Home.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/Widget/Widget';
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import Table from "../../components/Table/Table";

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            
          </div>
          <div className="charts">
            <Featured/>
            <Chart title="Doanh thu 12 tháng" aspect={2 / 1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Giao dịch</div>
            <Table/>
          </div>
        </div>
    </div>
  );
};

export default Home;