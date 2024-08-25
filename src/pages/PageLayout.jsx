import { Outlet } from "react-router-dom";
import SideNave from "../Components/Common/SideNave";
import styles from './PageLayout.module.css'
import AppContextProvider from "../app-context";
export const PageLayout = () => {
  return (
    <AppContextProvider>
      <div className={styles.layout}>
          <SideNave />
          <div className={styles['content-wraper']}>
              <Outlet />
          </div>
      </div>
    </AppContextProvider>
  )
};