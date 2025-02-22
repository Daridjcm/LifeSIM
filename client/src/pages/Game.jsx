import Navbar from "../components/Navbar";
import CardList from "../components/CardList";
import NeedsPanel from "../components/NeedsPanel";
import activitiesUser from "../utils/List"
import { TimeProvider } from "../context/TimeContext";

export default function Game() {
  return (
    <>
      <TimeProvider>


        <Navbar />
        <CardList
          statusCard={"activitiesUser"}
          itemsToDisplay={activitiesUser}
          iconShow={true}
        />
        <NeedsPanel />
      </TimeProvider>
    </>
  );
}
