import MenuSidebar from "../components/MenuSidebar";
import '../App.css';
import Header from "../components/Header";
import UserActivity from "../components/UserActivity"; 
import TransactionHistory from "../components/TransactionHistory";
import RevenueChart from "../components/RevenueChart";
import ProductList from "../components/ProductList";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <MenuSidebar />
      <main className="dashboard-content">

        <section className="overall-revenue-section">
        </section>

        <div className="charts-and-activity">
        <section className="revenue-chart-section">
  <h6>Overall Revenue</h6>
  <h4 className="section-title">
    <strong>$48,574.21 </strong>
    <span style={{color: "#34d399", fontSize:"16px",}}>+4%</span>
  </h4>
  <RevenueChart />
</section>
          <section className="user-activity-section">
            <h6>User Activity</h6>
            <h4 className="section-title">
            <strong>10,320 </strong>
            <span style={{color: "#ed4f9d", fontSize:"16px",}}>-20%</span>
           </h4>
            <UserActivity />
          </section>
        </div>

        <div className="products-and-transactions">
          <section className="product-list-section">
            <h4 className="section-title">Product List</h4>
            <ProductList />
          </section>
          <section className="transaction-history-section">
            <h4 className="section-title">Transaction History</h4>
            <TransactionHistory />
          </section>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;