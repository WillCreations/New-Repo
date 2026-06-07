import { addClient } from "@/app/(Engine)/actions/addClient";
import {connectToDb} from "@/app/(Engine)/mongodb/database";
import PortfolioPage from "@/app/components/PortfolioPage";
import Client from "@/app/(Engine)/models/clientSchema";
import * as styles from "@/app/Styles/index.module.css";
import projects  from "@/app/static/Projects";
import  pictures  from "@/app/static/Pictures";
import  Socials  from "@/app/static/Socials";
import  skills from "@/app/static/Skills";

export const metadata = {
  title: "Princewill Igwe Portfolio",
};

const portfolio = async () => {
  connectToDb();
  const inbox = await Client.find({ read: false }).count();

  console.log({ inbox });

  return (
    <div className="min-h-screen my-5 px-5 xxs:px-10 lg:px-28 text-white overflow-hidden">
      <PortfolioPage
        projects={projects}
        pictures={pictures}
        Socials={Socials}
        skills={skills}
        inbox={inbox}
        addClient={addClient}
        styles={styles}
      />
    </div>
  );
};

export default portfolio;
