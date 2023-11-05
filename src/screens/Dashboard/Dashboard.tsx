import Center from "../../components/utils/Center";
// import CustomMonth from "./CustomMonth";
import DashboardCalendar from "./DashboardCalendar";

export default function Dashboard() {
  return (
    <Center>
      <h1>DashBoard</h1>
      <h3>Total Aproximado 300.000¥</h3>
      <DashboardCalendar/>
      {/* <CustomMonth/> */}
    </Center>

  )
}